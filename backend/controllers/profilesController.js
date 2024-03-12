import ApiError from "../error/ApiError.js";
import bcrypt from 'bcrypt';
import models from "../models/models.js";
import jwt from "jsonwebtoken";

const ProfilesTable = models.ProfilesTable;

const generateJWT = (id, login, p_num, email, name, user_role, num_publications, num_subscribers, num_subscriptions, img_avatar) => {
    return jwt.sign({id, login, p_num, email, name, user_role, num_publications, num_subscribers, num_subscriptions, img_avatar}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

class ProfilesController {
    async registration(req, res, next) {
        const {login, p_num, email, password, name} = req.body;
        if (!login || !email || !p_num || !password || !name) {
            return next(ApiError.badRequest("Некорректные данные!"));
        }
        const candidate = await ProfilesTable.findOne({where:{email}});
        if (candidate) {
            return next(ApiError.badRequest("User уже существует!"));
        }
        const HashPassword = await bcrypt.hash(password, 5);
        const user = await ProfilesTable.create({login, p_num, email, password: HashPassword, name});
        const token = generateJWT(user.id, user.login, user.p_num, user.email, user.name);
        return res.json({token});
    }

    async login(req, res, next) {
        const {log_email, password} = req.body;
        if (!log_email || !password) {
            return next(ApiError.internal("Undefiend Data!"));
        }
        const user = await ProfilesTable.findOne({where: {email: log_email}});
        if (!user) {
            return next(ApiError.internal("User не найден!"));
        }
        let comparePass = bcrypt.compareSync(password, user.password);
        if (!comparePass) {
            return next(ApiError.internal("Указан не верный пароль!"));
        }
        const token = generateJWT(user.id, user.login, user.p_num, user.email, user.name, user.user_role, user.num_publications, user.num_subscribers, user.num_subscriptions, user.img_avatar);
        return res.json({token});
    }

    async checkAuth(req, res, next) {
        // res.json({message: "All working!!!"});
        const token = generateJWT(req.user.id, req.user.login, req.user.p_num, req.user.email, req.user.name, req.user.user_role, req.user.num_publications, req.user.num_subscribers, req.user.num_subscriptions, req.user.img_avatar);
        return res.json({token})
    }

    async getOne(req, res) {
        const {id} = req.params;
        const user = await ProfilesTable.findOne(
            {where: {id}}
        )
        return res.json(user);
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let users_tab = await ProfilesTable.findAndCountAll({limit, offset});
        return res.json(users_tab);
    }
}

export default new ProfilesController();