import express from "express";
import {
  addOrderItems,
  getAllOrders,
  getLoggedInUserOrders,
  getOrderById,
  updateOrderToDelivered,
  updateOrderToPaid,
  deleteOrderAdmin,
} from "../controllers/orderController.js";
import { admin, protectRoute } from "../middleware/authMiddleware.js";
const router = express.Router();

router
  .route("/")
  .post(protectRoute, addOrderItems)
  .get(protectRoute, admin, getAllOrders);
router.route("/myorders").get(protectRoute, getLoggedInUserOrders);
router.route("/:id").get(protectRoute, getOrderById);
router.route("/:id/pay").put(protectRoute, updateOrderToPaid);
router.route("/:id/deliver").put(protectRoute, updateOrderToDelivered);
router.route("/delete/:id").delete(protectRoute, admin, deleteOrderAdmin);



export default router;
