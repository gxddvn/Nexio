import models from '../models/models.js';
import ApiError from '../error/ApiError.js';

const StoriesTable = models.StoriesTable;

class StoriesController {
    async create(req, res, next) {
        try {
            const {img, id_profile} = req.body;
            const stories_tab = await StoriesTable.create({img, id_profile})
            return res.json(stories_tab);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let stories_tab = await StoriesTable.findAndCountAll({limit, offset});
        return res.json(stories_tab);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const stories_tab = await StoriesTable.findOne(
            {where: {id}}
        )
        return res.json(stories_tab);
    }
}

export default new StoriesController();