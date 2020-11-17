import { Application, Request, Response } from 'express';
import { PaymentController } from '../controllers/paymentcontroller';

export class PaymentRoutes {

    private payment_controller: PaymentController = new PaymentController();

    public route(app: Application) {
        
        app.post('/initializePayment', (req: Request, res: Response) => {
            this.payment_controller.initializePayment(req, res);
        });
        
    }
}