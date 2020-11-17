import { InitializePayment } from '../models/payment';
import { Request, Response } from 'express';


export class PaymentController{

    public initializePayment (req: Request, res: Response) {                
        //let newPayment = new InitializePayment(req.body);
     let newPayment = new InitializePayment(req.body.environment,req.body.merchantId,req.body.privateKey,req.body.publicKey)
     console.log(req.body.environment,req.body.merchantId,req.body.privateKey,req.body.publicKey);
    }

       
}