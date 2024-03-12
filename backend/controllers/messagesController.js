import models from '../models/models.js';
import ApiError from '../error/ApiError.js';

const MessagesTable = models.MessagesTable;

class MessagesController {
    async create(req, res, next) {
        try {
            const {id_profile, rooms_id, message_type_id, message, media_url} = req.body;
            const messages_tab = await MessagesTable.create({id_profile, rooms_id, message_type_id, message, media_url})
            return res.json(messages_tab);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let messages_tab = await MessagesTable.findAndCountAll({limit, offset});
        return res.json(messages_tab);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const messages_tab = await MessagesTable.findOne(
            {where: {id}}
        )
        return res.json(messages_tab);
    }
}

export default new MessagesController();