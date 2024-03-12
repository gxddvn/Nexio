import models from '../models/models.js';
import ApiError from '../error/ApiError.js';

const SubscriptionsTable = models.SubscriptionsTable;

class SubscriptionsController {
    async create(req, res, next) {
        try {
            const {id_profile, id_profile_subscription} = req.body;
            const subs_tab = await SubscriptionsTable.create({id_profile, id_profile_subscription})
            return res.json(subs_tab);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let subs_tab = await SubscriptionsTable.findAndCountAll({limit, offset});
        return res.json(subs_tab);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const subs_tab = await SubscriptionsTable.findOne(
            {where: {id}}
        )
        return res.json(subs_tab);
    }
}

export default new SubscriptionsController();