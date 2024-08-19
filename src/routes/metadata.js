"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataRouter = void 0;
var express_1 = require("express");
var metadata_1 = require("../controllers/metadata");
exports.MetadataRouter = (0, express_1.Router)();
exports.MetadataRouter.get('/', metadata_1.MetadataController.getAll);
exports.MetadataRouter.get('/:id', metadata_1.MetadataController.getByID);
