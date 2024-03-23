import models from '../models/models.js';
import ApiError from '../error/ApiError.js';
import getFileUrlFromS3 from './getFileUrlFromS3.js';

const SavePublicationsTable = models.SavePublicationsTable;
const PublicationsTable = models.PublicationsTable;

class SavePublicationsController {
    async create(req, res, next) {
        try {
            const {id_publication, id_profile} = req.body;
            if (!id_publication || !id_profile) {
                return res.json("Error 404: Publication or Profile not find!")
            }
            console.log(req.body);
            const find_save_pub_tab = await SavePublicationsTable.findOne({where: {profilesTableId: id_profile, publicationsTableId: id_publication}})
            if (!find_save_pub_tab) {
                const save_pub_tab = await  SavePublicationsTable.create({profilesTableId: id_profile, publicationsTableId: id_publication});
                if (!save_pub_tab) {
                    return res.json("Error: Publication like not created!")
                }
                return res.json(save_pub_tab);
            }
            else {
                const destroy_save_pub_tab = await SavePublicationsTable.destroy({where: {id: find_save_pub_tab.id}});
                if (!destroy_save_pub_tab) {
                    return res.json("Error: Publication like not destroyed!")
                }
                return res.json(destroy_save_pub_tab);
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
        let save_pub_tab = await SavePublicationsTable.findAndCountAll({limit, offset});
        return res.json(save_pub_tab);
    }

    async getProfilesAllSaves(req, res) {
        const {id} = req.params;
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let save_pub_tab = await SavePublicationsTable.findAndCountAll({limit, offset, order: [['createdAt', 'DESC']], where: {profilesTableId: id}});
        if (!save_pub_tab) {
            return res.json("Error: Save publications not find!")
        }
        const ids = save_pub_tab.rows.reduce((acc, curr) => {
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
        const save_pub_tab = await SavePublicationsTable.findOne(
            {where: {id}}
        )
        return res.json(save_pub_tab);
    }
}

export default new SavePublicationsController();