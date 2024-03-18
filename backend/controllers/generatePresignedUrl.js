import AWS from 'aws-sdk';
import { S3RequestPresigner } from '@aws-sdk/s3-request-presigner';
import { Sha256 } from "@aws-crypto/sha256-browser";
import { Hash } from "@aws-sdk/hash-node";

const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.ACCESS_SECRET_KEY,
    sha256: Hash.bind(null, "sha256")
});

async function generatePresignedUrl(bucketName, fileUrl, expirationInSeconds) {
    const presigner = new S3RequestPresigner({ client: () => s3 });
    // Параметры для создания подписанного URL-адреса
    const params = {
        Bucket: bucketName,
        Key: fileUrl,
        Expires: expirationInSeconds // Время жизни подписанного URL в секундах
    };
    try {
        // Создаем подписанный URL-адрес
        const presignedUrl = await presigner.presign('GetObjectCommand', params);
        return presignedUrl;
    } catch (error) {
        console.error('Error generating presigned URL:', error);
        throw error;
    }
}

export default generatePresignedUrl;