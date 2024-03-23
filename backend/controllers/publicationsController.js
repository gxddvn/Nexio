import models from '../models/models.js';
import ApiError from '../error/ApiError.js';
import uploadFileToS3 from './uploadFileToS3.js';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import getFileUrlFromS3 from './getFileUrlFromS3.js';
import deleteFileFromS3 from './deleteFileFromS3.js';

const PublicationsTable = models.PublicationsTable;
const LikesPublicationsTable = models.LikesPublicationsTable;
const SavePublicationsTable = models.SavePublicationsTable;
const RepostsTable = models.RepostsTable;

const s3 = new S3Client({
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.ACCESS_SECRET_KEY
    },
    region: process.env.BUCKET_REGION
});

class PublicationsController {
    async create(req, res, next) {
        try {
            const {id_profile, caption} = req.body;
            if (!caption || !id_profile) {
                return res.json("Error 404: Profile or Caption undefined!")
            }
            const img = req.files[0];
            if (!img) {
                return res.json("Error 404: Image undefined!")
            }
            const bucket_name = process.env.BUCKET_NAME;
            const url = await uploadFileToS3(img, bucket_name);
            const publication_tab = await PublicationsTable.create({
                img: url,
                caption: caption,
                profilesTableId: id_profile
            });
            return res.json(publication_tab);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let publication_tab = await PublicationsTable.findAndCountAll({limit, offset, order: [['createdAt', 'DESC']]});
        for(const post of publication_tab.rows) {
            const url = await getFileUrlFromS3(post.img);
            post.img = url;
        }
        return res.json(publication_tab);
    }

    async getProfilesAllPublication(req, res) {
        const {id} = req.params;
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let publication_tab = await PublicationsTable.findAndCountAll({limit, offset, order: [['createdAt', 'DESC']], where: {profilesTableId: id}});
        for(const post of publication_tab.rows) {
            const url = await getFileUrlFromS3(post.img);
            post.img = url;
        }
        return res.json(publication_tab);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const publication_tab = await PublicationsTable.findOne({where: {id}})
        const url = await getFileUrlFromS3(publication_tab.img);
        publication_tab.img = url;
        return res.json(publication_tab);
    }

    async checkActions(req, res) {
        const {id_publication, id_profile} = req.params;
        if (!id_publication || !id_profile) {
            return res.json("Error 404: Publication or Profile undefined!")
        }
        console.log(id_profile, id_publication);
        const likes_pub_table = await LikesPublicationsTable.findOne({where: {profilesTableId: id_profile, publicationsTableId: id_publication}});
        const repost_tab = await RepostsTable.findOne({where: {profilesTableId: id_profile, publicationsTableId: id_publication}});
        const save_pub_tab = await SavePublicationsTable.findOne({where: {profilesTableId: id_profile, publicationsTableId: id_publication}});
        return res.json({likes: likes_pub_table, repost: repost_tab, save_pub: save_pub_tab});
    }

    // async getTest(req, res) {
    //     try {
    //         const {fileName} = req.body;
    //         const url = await getFileUrlFromS3(fileName);
    //         console.log(url);
    //         return res.json("All working")
    //     } catch (e) {
    //         next(ApiError.badRequest(e.message))
    //     }
    // }

    async updateLikesPublication(req, res) {
        try {
            const {id, num_likes} = req.body;
            const publication = await PublicationsTable.findOne({ where: {id} });
            if (!publication) {
                return res.json("Error 404: Publication not find!");
            }
            else if (publication.num_likes == 0 && num_likes < 1) {
                return res.json("Error 404: Publication not find!");
            }
            const result = await publication.update({ num_likes: publication.num_likes + num_likes });
            return res.json(result);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deletePublication(req, res) {
        const {id} = req.params;
        const publication = await PublicationsTable.findOne({where: {id}})
        if (!publication) {
            return res.json("Error 404: Publication not find!")
        }
        const s3del_result = await deleteFileFromS3(publication.img);
        const result = await PublicationsTable.destroy({where: {id}})
        return res.json(result);
    }
}

export default new PublicationsController();