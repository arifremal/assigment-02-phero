import express, { Application } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.routes';

const app: Application = express();

app.use(express.json());
app.use(cors());
// application routes
app.use('/api/products', ProductRoutes);

app.get('/', (req, res) => {
  res.send('Server is running succesfully!');
});
app.get('/');
app.use('/api/orders', OrderRoutes);

export default app;
