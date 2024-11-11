import { Router } from "express";
import { MemberRouter } from "../modules/member/member.route";
import { BookRouter } from "../modules/book/book.route";

const router = Router();

const routeModule = [
  {
    path: "/members",
    route: MemberRouter,
  },
  {
    path: "/books",
    route: BookRouter,
  },
];
routeModule.forEach((route) => {
  router.use(route.path, route.route);
});
export default router;
