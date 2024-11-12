"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const member_route_1 = require("../modules/member/member.route");
const book_route_1 = require("../modules/book/book.route");
const borrow_route_1 = require("../modules/Borrow & Return/borrow.route");
const return_route_1 = require("../modules/Borrow & Return/return.route");
const router = (0, express_1.Router)();
const routeModule = [
    {
        path: "/members",
        route: member_route_1.MemberRouter,
    },
    {
        path: "/books",
        route: book_route_1.BookRouter,
    },
    {
        path: "/borrow",
        route: borrow_route_1.BorrowRouter,
    },
    {
        path: "/return",
        route: return_route_1.ReturnBookRouter,
    },
];
routeModule.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
