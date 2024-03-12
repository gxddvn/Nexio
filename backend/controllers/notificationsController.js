import models from '../models/models.js';
import ApiError from '../error/ApiError.js';

const NotificationsTable = models.NotificationsTable;

class NotificationsController {
    async create(req, res, next) {
        try {
            const {id_type_notif, id_profile, id_publication, id_profile_subs, notification} = req.body;
            const notif_tab = await NotificationsTable.create({id_type_notif, id_profile, id_publication, id_profile_subs, notification})
            return res.json(notif_tab);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let notif_tab = await NotificationsTable.findAndCountAll({limit, offset});
        return res.json(notif_tab);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const notif_tab = await NotificationsTable.findOne(
            {where: {id}}
        )
        return res.json(notif_tab);
    }
}

export default new NotificationsController();