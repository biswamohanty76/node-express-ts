import { Application, Request, Response } from 'express';
import { PaymentController } from '../controllers/paymentcontroller';

export class PaymentRoutes {

    private payment_controller: PaymentController = new PaymentController();

    public route(app: Application) {
        
        app.post('/initializePayment', (req: Request, res: Response) => {
            this.payment_controller.initializePayment(req, res);
        });

        // app.get('/api/user/:id', (req: Request, res: Response) => {
        //     this.user_controller.get_user(req, res);
        // });

        // app.put('/api/user/:id', (req: Request, res: Response) => {
        //     this.user_controller.update_user(req, res);
        // });

        // app.delete('/api/user/:id', (req: Request, res: Response) => {
        //     this.user_controller.delete_user(req, res);
        // });

    }
}