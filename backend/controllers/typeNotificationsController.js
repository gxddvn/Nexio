import models from '../models/models.js';
import ApiError from '../error/ApiError.js';

const TypeNotificationsTable = models.TypeNotificationsTable;

class TypeNotificationsController {
    async create(req, res, next) {
        try {
            const {type} = req.body;
            const type_notif_tab = await TypeNotificationsTable.create({type})
            return res.json(type_notif_tab);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let type_notif_tab = await TypeNotificationsTable.findAndCountAll({limit, offset});
        return res.json(type_notif_tab);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const type_notif_tab = await TypeNotificationsTable.findOne(
            {where: {id}}
        )
        return res.json(type_notif_tab);
    }
}

export default new TypeNotificationsController();