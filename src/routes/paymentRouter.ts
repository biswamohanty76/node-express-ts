import { Application, Request, Response } from 'express';
import { PaymentController } from '../controllers/paymentcontroller';
import { BraintreeGateway, Environment } from 'braintree';
import { join } from 'path';

export class PaymentRoutes {

    private payment_controller: PaymentController = new PaymentController();
    private gateway: BraintreeGateway = new BraintreeGateway({
        environment: Environment.Sandbox,
        merchantId: "rkrz65z2vyrd3gzf",
        publicKey: "78g4z7m2tsd95nyp",
        privateKey: "b21c9a5fe3b825274cd23d58d8f8ff0d"
    });

    public route(app: Application) {

        app.get('/', (req: Request, res: Response) => {

            res.sendFile(join(__dirname, '../public/index.html'));

        });

        app.get('/checkout/success', (req: Request, res: Response) => {

            res.sendFile(join(__dirname, '../public/success.html'));

        });

        app.get('/client_token', (req: Request, res: Response) => {
            //console.log(req.body.environment,req.body.merchantId,req.body.privateKey,req.body.publicKey);
            //this.payment_controller.initializePayment(req, res);
            this.gateway.clientToken.generate({}).then(response => {
                res.send(response.clientToken);
            });

        });

        app.post("/checkout", (req: Request, res: Response) => {
            var nonceFromTheClient: string = req.body.nonce;
            console.log(req.body)
            //    this.gateway.transaction.sale({
            //     amount: "10.00",
            //     paymentMethodNonce: nonceFromTheClient,
            //     options: {
            //     submitForSettlement: true
            //     }
            //     }).then(brainTreeResponse=>{
            //     console.log(brainTreeResponse);
            //     console.log(brainTreeResponse.success==true);
            //     });
            res.send({redirect:'http://localhost:5000/checkout/success'});
        });
    }
}