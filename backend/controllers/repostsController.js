import models from '../models/models.js';
import ApiError from '../error/ApiError.js';
import getFileUrlFromS3 from './getFileUrlFromS3.js';

const RepostsTable = models.RepostsTable;
const PublicationsTable = models.PublicationsTable;

class RepostsController {
    async create(req, res, next) {
        try {
            const {id_publication, id_profile} = req.body;
            if (!id_publication || !id_profile) {
                return res.json("Error 404: Publication or Profile not find!")
            }
            console.log(req.body);
            const find_repost_tab = await RepostsTable.findOne({where: {profilesTableId: id_profile, publicationsTableId: id_publication}})
            if (!find_repost_tab) {
                const repost_tab = await RepostsTable.create({profilesTableId: id_profile, publicationsTableId: id_publication});
                if (!repost_tab) {
                    return res.json("Error: Publication repost not created!")
                }
                const publication = await PublicationsTable.findOne({ where: {id: id_publication} });
                const result = await publication.update({ num_reposts: publication.num_reposts + 1 });
                return res.json(result);
            }
            else {
                const destroy_repost_tab = await RepostsTable.destroy({where: {id: find_repost_tab.id}});
                if (!destroy_repost_tab) {
                    return res.json("Error: Publication repost not destroyed!")
                }
                const publication = await PublicationsTable.findOne({ where: {id: id_publication} });
                const result = await publication.update({ num_reposts: publication.num_reposts - 1 });
                return res.json(result);
            }
            
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let repost_tab = await RepostsTable.findAndCountAll({limit, offset});
        return res.json(repost_tab);
    }

    async getProfilesAllReposts(req, res) {
        const {id} = req.params;
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let repost_tab = await RepostsTable.findAndCountAll({limit, offset, order: [['createdAt', 'DESC']], where: {profilesTableId: id}});
        if (!repost_tab) {
            return res.json("Error: Repost publication not find!")
        }
        const ids = repost_tab.rows.reduce((acc, curr) => {
            acc.push(curr.dataValues.publicationsTableId);
            return acc;
        }, []);
        const publications = await PublicationsTable.findAll({where: {id: ids}});
        for(const post of publications) {
            const url = await getFileUrlFromS3(post.img);
            post.img = url;
        }
        if (!publications) {
            return res.json("Error: Repost publication not find!")
        }
        return res.json(publications);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const repost_tab = await RepostsTable.findOne(
            {where: {id}}
        )
        return res.json(repost_tab);
    }
}

export default new RepostsController();