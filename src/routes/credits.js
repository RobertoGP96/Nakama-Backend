"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditsRouter = void 0;
var express_1 = require("express");
var credits_1 = require("../controllers/credits");
exports.CreditsRouter = (0, express_1.Router)();
exports.CreditsRouter.get('/', credits_1.CreditsController.getAll);
exports.CreditsRouter.get('/:id', credits_1.CreditsController.getByID);
