"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastRouter = void 0;
var express_1 = require("express");
var cast_1 = require("../controllers/cast");
exports.CastRouter = (0, express_1.Router)();
exports.CastRouter.get('/', cast_1.CastController.getAll);
exports.CastRouter.get('/:id', cast_1.CastController.getByID);
