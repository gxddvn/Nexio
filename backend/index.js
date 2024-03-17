import express from "express";
import dotenv from 'dotenv';
import sequelize from './db.js';
import models from './models/models.js';
import cors from 'cors';
import router from './routes/index.js';
import errorHandler from './middleware/ErrorHadnlingMiddleware.js';
import AWS from 'aws-sdk';

const app = express();

// const s3 = AWS.S3();
// const bucket_name = process.end.BUCKET_NAME;

dotenv.config();

app.use(express.json());
app.use(cors());
app.use('/api', router);
app.use(express.static('fonts'));
app.use(errorHandler);

// app.get('/', (req, res) => {
//     res.status(200).json({message: "OK"});
//     res.send('Hello World!');
// })

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(process.env.PORT || 4444, (err) => {
            if (err) {
                return console.log(err);
            }
            console.log(`Server on http://localhost:${process.env.PORT}/`);
        });
    } catch (e) {
        console.log(e);
    }
}

start()