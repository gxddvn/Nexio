import { DeleteObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3 = new S3Client({
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.ACCESS_SECRET_KEY
    },
    region: process.env.BUCKET_REGION
});


async function deleteFileFromS3(fileName) {
    const getObjectParams = {
        Bucket: process.env.BUCKET_NAME,
        Key: fileName
    }
    const command = new DeleteObjectCommand(getObjectParams);
    try {
        const url = await s3.send(command);
        return url;
    } catch (error) {
        console.error('Error signed file url:', error);
        throw error;
    }
}

export default deleteFileFromS3;