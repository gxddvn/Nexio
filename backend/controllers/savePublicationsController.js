import models from '../models/models.js';
import ApiError from '../error/ApiError.js';

const SavePublicationsTable = models.SavePublicationsTable;

class SavePublicationsController {
    async create(req, res, next) {
        try {
            const {id_publication, id_profile} = req.body;
            const save_pub_tab = await SavePublicationsTable.create({id_publication, id_profile})
            return res.json(save_pub_tab);
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

    async getOne(req, res) {
        const {id} = req.params;
        const save_pub_tab = await SavePublicationsTable.findOne(
            {where: {id}}
        )
        return res.json(save_pub_tab);
    }
}

export default new SavePublicationsController();