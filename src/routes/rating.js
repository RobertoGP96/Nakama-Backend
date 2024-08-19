"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingRouter = void 0;
var express_1 = require("express");
var rating_1 = require("../controllers/rating");
exports.RatingRouter = (0, express_1.Router)();
exports.RatingRouter.get('/', rating_1.RatingController.getAll);
exports.RatingRouter.get('/:id', rating_1.RatingController.getByID);
