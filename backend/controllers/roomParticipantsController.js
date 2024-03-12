import models from '../models/models.js';
import ApiError from '../error/ApiError.js';

const RoomParticipantsTable = models.RoomParticipantsTable;

class RoomParticipantsController {
    async create(req, res, next) {
        try {
            const {id_profile, rooms_id} = req.body;
            const room_part_tab = await RoomParticipantsTable.create({id_profile, rooms_id});
            return res.json(room_part_tab);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let room_part_tab = await RoomParticipantsTable.findAndCountAll({limit, offset});
        return res.json(room_part_tab);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const room_part_tab = await RoomParticipantsTable.findOne(
            {where: {id}}
        )
        return res.json(room_part_tab);
    }
}

export default new RoomParticipantsController();