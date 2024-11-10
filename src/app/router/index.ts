import { Router } from "express";
import { MemberRouter } from "../modules/member/member.route";

const router = Router();

const routeModule = [
  {
    path: "member",
    route: MemberRouter,
  },
];
routeModule.forEach((route) => {
  router.use(route.path, route.route);
});
export default router;
