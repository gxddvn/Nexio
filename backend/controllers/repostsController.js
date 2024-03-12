import models from '../models/models.js';
import ApiError from '../error/ApiError.js';

const RepostsTable = models.RepostsTable;

class RepostsController {
    async create(req, res, next) {
        try {
            const {id_publication, id_profile} = req.body;
            const repost_tab = await RepostsTable.create({id_publication, id_profile})
            return res.json(repost_tab);
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

    async getOne(req, res) {
        const {id} = req.params;
        const repost_tab = await RepostsTable.findOne(
            {where: {id}}
        )
        return res.json(repost_tab);
    }
}

export default new RepostsController();