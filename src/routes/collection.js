"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionRouter = void 0;
var express_1 = require("express");
var collection_1 = require("../controllers/collection");
exports.CollectionRouter = (0, express_1.Router)();
exports.CollectionRouter.get('/', collection_1.CollectionController.getAll);
exports.CollectionRouter.get('/:id', collection_1.CollectionController.getByID);
exports.CollectionRouter.post('/', collection_1.CollectionController.create);
exports.CollectionRouter.delete('/:id', collection_1.CollectionController.delete);
exports.CollectionRouter.put('/:id', collection_1.CollectionController.update);
