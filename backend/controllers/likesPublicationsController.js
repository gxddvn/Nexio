import models from '../models/models.js';
import ApiError from '../error/ApiError.js';

const LikesPublicationsTable = models.LikesPublicationsTable;
const PublicationsTable = models.PublicationsTable;

class LikesPublicationsController {
    async create(req, res, next) {
        try {
            const {id_publication, id_profile} = req.body;
            if (!id_publication || !id_profile) {
                return res.json("Error 404: Publication or Profile not find!")
            }
            console.log(req.body);
            const find_like_pub = await LikesPublicationsTable.findOne({where: {profilesTableId: id_profile, publicationsTableId: id_publication}})
            if (!find_like_pub) {
                const likes_pub_table = await LikesPublicationsTable.create({profilesTableId: id_profile, publicationsTableId: id_publication});
                if (!likes_pub_table) {
                    return res.json("Error: Publication like not created!")
                }
                const publication = await PublicationsTable.findOne({ where: {id: id_publication} });
                const result = await publication.update({ num_likes: publication.num_likes + 1 });
                return res.json(result);
            }
            else {
                const destroy_like_pub = await LikesPublicationsTable.destroy({where: {id: find_like_pub.id}});
                if (!destroy_like_pub) {
                    return res.json("Error: Publication like not destroyed!")
                }
                const publication = await PublicationsTable.findOne({ where: {id: id_publication} });
                const result = await publication.update({ num_likes: publication.num_likes - 1 });
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
        let likes_pub_table = await LikesPublicationsTable.findAndCountAll({limit, offset});
        return res.json(likes_pub_table);
    }

    async getOne(req, res) {
        const {id_publication, id_profile} = req.params;
        const likes_pub_table = await LikesPublicationsTable.findOne({where: {profilesTableId: id_profile, publicationsTableId: id_publication}})
        return res.json(likes_pub_table);
    }

    async deleteLikePublication(req, res) {
        const {id_publication, id_profile} = req.params;
        // const publication = await LikesPublicationsTable.findOne({where: {profilesTableId: id_profile, publicationsTableId: id_publication}})
        if (!id_publication || !id_profile) {
            return res.json("Error 404: Publication not find!")
        }
        const result = await LikesPublicationsTable.destroy({where: {profilesTableId: id_profile, publicationsTableId: id_publication}})
        return res.json(result);
    }
}

export default new LikesPublicationsController();