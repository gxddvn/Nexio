import models from '../models/models.js';
import ApiError from '../error/ApiError.js';

const PublicationsTable = models.PublicationsTable;

class PublicationsController {
    async create(req, res, next) {
        try {
            const {id_profile, img} = req.body;
            const publication_tab = await PublicationsTable.create({id_profile, img})
            return res.json(publication_tab);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let publication_tab = await PublicationsTable.findAndCountAll({limit, offset});
        return res.json(publication_tab);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const publication_tab = await PublicationsTable.findOne(
            {where: {id}}
        )
        return res.json(publication_tab);
    }
}

export default new PublicationsController();