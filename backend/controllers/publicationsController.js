import models from '../models/models.js';
import ApiError from '../error/ApiError.js';
import uploadFileToS3 from './uploadFileToS3.js';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const PublicationsTable = models.PublicationsTable;

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
            const img = req.files[0];
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
        let publication_tab = await PublicationsTable.findAndCountAll({limit, offset});
        return res.json(publication_tab);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const publication_tab = await PublicationsTable.findOne(
            {where: {id}}
        )
        return res.json(publication_tab);
    }

    async getTest(req, res) {
        try {
            const {fileUrl} = req.body;
            const getObjectParams = {
                Bucket: process.env.BUCKET_NAME,
                Key: fileUrl
            }
            
            const command = new GetObjectCommand(getObjectParams);
            const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
            console.log(url);
            return res.json("All working")
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

export default new PublicationsController();