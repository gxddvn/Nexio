import models from '../models/models.js';
import ApiError from '../error/ApiError.js';

const CommentsTable = models.CommentsTable;

class CommentsController {
    async create(req, res, next) {
        try {
            const {id_publication, id_profile, comment} = req.body;
            const comment_tab = await CommentsTable.create({id_publication, id_profile, comment})
            return res.json(comment_tab);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let comment_tab = await CommentsTable.findAndCountAll({limit, offset});
        return res.json(comment_tab);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const comment_tab = await CommentsTable.findOne(
            {where: {id}}
        )
        return res.json(comment_tab);
    }
}

export default new CommentsController();