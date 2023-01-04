import mongoose from 'mongoose';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import Blog from './model/Blog.js';
import User from './model/User.js';

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL);


const userData = [];

const blogData= [];

User.insertMany(userData, (err) => {
    if (err) 
        console.error(err);
    else
        console.log('User data imported successfully')
});

Blog.insertMany(blogData, (err) => {
    if (err) 
        console.error(err);
    else
        console.log('Blog data imported successfully')
});

mongoose.connection.close();