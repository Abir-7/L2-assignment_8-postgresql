import { Router } from "express";
import { MemberRouter } from "../modules/member/member.route";
import { BookRouter } from "../modules/book/book.route";
import { BorrowRouter } from "../modules/Borrow & Return/borrow.route";
import { ReturnBookRouter } from "../modules/Borrow & Return/return.route";

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
  {
    path: "/borrow",
    route: BorrowRouter,
  },
  {
    path: "/return",
    route: ReturnBookRouter,
  },
];
routeModule.forEach((route) => {
  router.use(route.path, route.route);
});
export default router;
