import express = require('express');
const app = express();
import * as userController from './controllers/user.controller';

app.set('port', process.env.PORT || 8082);

app.get('/', userController.getUser);

export default app;
