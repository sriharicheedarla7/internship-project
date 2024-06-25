import mongoose from "mongoose";
import {MongoMemoryServer} from 'mongodb-memory-server';


async function connect() {
    const mongodb = await MongoMemoryServer.create();
    const getUri = mongodb.getUri();

    const db = await mongoose.connect(getUri);
    console.log('Data Base Connected')

    return db;
}
export default connect;
 
