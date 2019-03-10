import bodyParser from 'body-parser';
import express = require('express');
const router = express.Router();

// Import controller
import { demoController } from '../controllers/demoController';

router.use(bodyParser.json());

router.post('/getAnswer', demoController.giveAnswer);


module.exports = router;
