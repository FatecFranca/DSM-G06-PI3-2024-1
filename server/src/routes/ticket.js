import { Router } from "express";
import controller from "../controllers/ticket.js";

const router = Router();

router.post("/", controller.create);
router.get("/", controller.retrieveAll);
router.get("/:id", controller.retrieveOneId);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);


export default router;