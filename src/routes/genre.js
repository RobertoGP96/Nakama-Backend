"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreRouter = void 0;
var express_1 = require("express");
var genre_1 = require("../controllers/genre");
exports.GenreRouter = (0, express_1.Router)();
exports.GenreRouter.get('/', genre_1.GenreController.getAll);
exports.GenreRouter.get('/:id', genre_1.GenreController.getByID);
