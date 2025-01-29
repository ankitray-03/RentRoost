import express from "express";
import {
  bookingCreateOrder,
  bookingSuccess,
} from "../controllers/booking.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create-order", verifyToken, bookingCreateOrder);
router.post("/booking-success", verifyToken, bookingSuccess);

export default router;
