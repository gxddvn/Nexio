import models from '../models/models.js';
import ApiError from '../error/ApiError.js';

const ChatRoomsTable = models.ChatRoomsTable;

class ChatRoomsController {
    async create(req, res, next) {
        try {
            const {rooms_name} = req.body;
            const chat_rooms_tab = await ChatRoomsTable.create({rooms_name});
            return res.json(chat_rooms_tab);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let chat_rooms_tab = await ChatRoomsTable.findAndCountAll({limit, offset});
        return res.json(chat_rooms_tab);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const chat_rooms_tab = await ChatRoomsTable.findOne(
            {where: {id}}
        )
        return res.json(chat_rooms_tab);
    }
}

export default new ChatRoomsController();