import mongoose from 'mongoose';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import Blog from './model/Blog.js';
import User from './model/User.js';

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL);

// Main code stuff  
const foundArticle = await Blog.findById("63b4acf60d87b43e3b9b3d05").populate('author').exec();
foundArticle.title = "Updated Title";
await foundArticle.save();
console.log(foundArticle);
