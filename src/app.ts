import express = require('express');
const app = express();
import routes from './routes/v1';

app.use('/v1', routes);

export default app;
