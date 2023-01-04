import mongoose from 'mongoose';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import Blog from './model/Blog.js';
import User from './model/User.js';

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL);


const userData = [
    { name: 'Michael Wallace', email: 'mwallace@thedoor.gov' },
    { name: 'Sarah Michelle Gellar', email: 'vamp_slayer@buffy.com' }
];

const blogData= [];


( async () => {

    await User.insertMany(userData).then(docs => {
        console.log('User data imported successfully');
        console.log(docs);
    }).catch((err) => {
        console.error(err);
    });
    
    await Blog.insertMany(blogData).then(docs => {
        console.log('Blog data imported successfully');
        console.log(docs);
    }).catch((err) => {
            console.error(err);
    });

    mongoose.connection.close();
})();
