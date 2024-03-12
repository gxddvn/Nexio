import models from '../models/models.js';
import ApiError from '../error/ApiError.js';

const ArchiveStoriesTable = models.ArchiveStoriesTable;

class ArchiveStoriesController {
    async create(req, res, next) {
        try {
            const {img, id_profile} = req.body;
            const archive_stories_tab = await ArchiveStoriesTable.create({img, id_profile})
            return res.json(archive_stories_tab);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let archive_stories_tab = await ArchiveStoriesTable.findAndCountAll({limit, offset});
        return res.json(archive_stories_tab);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const archive_stories_tab = await ArchiveStoriesTable.findOne(
            {where: {id}}
        )
        return res.json(archive_stories_tab);
    }
}

export default new ArchiveStoriesController();