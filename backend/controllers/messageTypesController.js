import models from '../models/models.js';
import ApiError from '../error/ApiError.js';

const MessageTypesTable = models.MessageTypesTable;

class MessageTypesController {
    async create(req, res, next) {
        try {
            const {type_messages} = req.body;
            const message_types_tab = await MessageTypesTable.create({type_messages})
            return res.json(message_types_tab);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let message_types_tab = await MessageTypesTable.findAndCountAll({limit, offset});
        return res.json(message_types_tab);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const message_types_tab = await MessageTypesTable.findOne(
            {where: {id}}
        )
        return res.json(message_types_tab);
    }
}

export default new MessageTypesController();