import express = require('express');
import user from '../../modules/user/user.controller';
const router = express.Router();

router.use('/user', user);

export default router;
