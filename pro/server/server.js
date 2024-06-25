import express from 'express';
import cors from 'cors';
import connect from './database/connect.js';
import morgan from 'morgan';
import router from './routers/route.js';


const app = express();
/**Middle weare */
 
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

const port = 5000;

/**HTTP Get Request */
app.get('/', (req, res) => {
    res.status(201).json(" Get Request...!")
})

/**Api routers */
app.use('/api',router)

/**Start servaer only when we have valid connection */

connect().then(()=>{
    try {
        app.listen(port, () => {
            console.log(`server is connected to http://localhost:${port}`)
        })
    } catch (error) {
        console.log('can not connect server')
    }
}).catch(error=> {
    console.log('invalid data base connection....!')
})

