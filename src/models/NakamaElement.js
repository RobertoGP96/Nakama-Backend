"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NakamaElementModel = void 0;
var prisma_1 = require("../../prisma/prisma");
var NakamaElementModel = /** @class */ (function () {
    function NakamaElementModel() {
    }
    NakamaElementModel.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma_1.Nprisma.element.findMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NakamaElementModel.getByID = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var id = _b.id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, prisma_1.Nprisma.element.findUnique({
                            where: {
                                id: id,
                            },
                        })];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    NakamaElementModel.create = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var input = _b.input;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, prisma_1.Nprisma.element.create({
                            data: {
                                abstract: input.abstract,
                                plot: input.plot,
                                category: input.Category,
                                title: input.title,
                                title_original: input.original_title,
                                backdrop: input.backdrop_path,
                                poster: input.poster_path,
                                year: input.year,
                                popularity: input.popularity,
                                country: input.country,
                                //Generos
                                genres: {
                                    create: {
                                        genres: input.genres.genres
                                    },
                                },
                                //ExternalIDS
                                external_ids: {
                                    create: {
                                        imdb_id: input.externalids.imdb_id,
                                        tmdb_id: input.externalids.tmdb_id,
                                        omdb_id: input.externalids.omdb_id,
                                    },
                                },
                                //Metadata
                                metadata: {
                                    create: {
                                        audio: input.metadata.audio,
                                        codec: input.metadata.codec,
                                        duration: input.metadata.duration,
                                        fps: input.metadata.fps,
                                        resolution: input.metadata.resolution,
                                        storage: input.metadata.storage,
                                        subtitle: input.metadata.subtitle,
                                    },
                                },
                                //Ratings
                                ratings: {
                                    create: {
                                        imdb_rating: input.ratings.imdb_rating,
                                        imdb_votes: input.ratings.imdb_votes,
                                        mc_rating: input.ratings.mc_rating,
                                        mc_votes: input.ratings.mc_votes,
                                        rotten_rating: input.ratings.rotten_rating,
                                        rotten_votes: input.ratings.rotten_votes,
                                    }
                                },
                                //Credits
                                credits: {
                                    create: {
                                        cast_members: {
                                            create: input.credits.cast_members,
                                        },
                                    },
                                },
                            },
                        })];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    NakamaElementModel.delete = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var id = _b.id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, prisma_1.Nprisma.element.delete({
                            where: {
                                id: id,
                            },
                        })];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    NakamaElementModel.update = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var id = _b.id, input = _b.input;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, prisma_1.Nprisma.element.update({
                            where: {
                                id: id,
                            },
                            data: {
                                abstract: input.abstract,
                                plot: input.plot,
                                category: input.category,
                                title: input.title,
                                title_original: input.title_original,
                                backdrop: input.backdrop,
                                poster: input.poster,
                                year: input.year,
                                popularity: input.popularity,
                                country: input.country,
                            },
                        })];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    NakamaElementModel.findMany = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var IDs = _b.IDs;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, prisma_1.Nprisma.element.findMany({
                            where: {
                                id: IDs
                            }
                        })];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    return NakamaElementModel;
}());
exports.NakamaElementModel = NakamaElementModel;
