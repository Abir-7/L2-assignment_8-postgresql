import { Router } from "express";
import { MemberController } from "./member.controller";

const router = Router();
router.post("/create", MemberController.createMember);
export const MemberRouter = router;
