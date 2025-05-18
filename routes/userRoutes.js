import express from "express";
import { checkout, couponVerification, paymentVerification } from "../controllers/payment-controller.js";

const router = express.Router();

router.get("/coupon-verification/:couponCode",couponVerification)
router.post("/payment-verification",paymentVerification);
router.post("/checkout",checkout);
// router.get("/getPaymentStatus/:paymentId",getPaymentId);


export default router;

