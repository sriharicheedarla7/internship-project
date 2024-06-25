import { Router } from "express";
const router = Router();

/**import all controllers */
import * as controller from '../controllers/appControllers.js'


/**POST Methode */
router.route('/register').post(controller.register);
router.route('/authentication').post((req,res)=>res.end());
router.route('/login').post(controller.login);

/**GET Methode */
router.route('/user/:username').get(controller.getUser);
router.route('/generateOTP').get(controller.generateOTP);
router.route('/verifyOTP').get(controller.verifyOTP);
router.route('/createResetSession').get(controller.createResetSession);

/**PUT Methode */
router.route('/updateuser').put(controller.updateUser);
router.route('/resetPassword').put(controller.resetPassword);

export default router;