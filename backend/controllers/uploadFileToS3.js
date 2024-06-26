import AWS from 'aws-sdk';
import fs from 'fs';

const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.ACCESS_SECRET_KEY
});

async function uploadFileToS3(fileContent, bucketName) {
    const file = fs.readFileSync(fileContent.path);
    console.log(fileContent);
    const fileName = `${Date.now()}_${fileContent.filename}`;
    const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: file,
        ContentType: fileContent.mimetype
    };
    try {
        const data = await s3.upload(params).promise();
        console.log('File uploaded successfully:', data.Location);
        fs.unlink(fileContent.path, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
            } else {
                console.log('File from folder deleted successfully');
            }
        });
        return data.Key;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
}

export default uploadFileToS3;