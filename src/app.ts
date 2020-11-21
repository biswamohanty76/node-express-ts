import express from 'express';
import {helloRouter} from './routes/hello';
import {PaymentRoutes} from './routes/paymentRouter'
import * as bodyParser from 'body-parser';

const app:express.Application =express();

class App {

    public app: express.Application;
    public  paymentRouter: PaymentRoutes = new PaymentRoutes();



    constructor() {
        this.app = express();
        this.config();   
        this.paymentRouter.route(this.app);    
    }

    private config(): void{

        const paymentRouter = new PaymentRoutes();

        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
       this.app.use('/api',helloRouter);
      // this.app.use('/api',paymentRouter.route(this.app));
    }

}

export default new App().app;




 //app.listen(5000,()=> console.log('Server running on port 5000...'))