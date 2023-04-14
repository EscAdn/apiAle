import { Router } from "express";
import validateResults from "./../validators/users";
import { getUsers, getUser, postUser } from "./../controllers/users";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", validateResults, postUser);

export default router;
