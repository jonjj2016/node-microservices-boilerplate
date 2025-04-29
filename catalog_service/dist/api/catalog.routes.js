"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catalogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.catalogRoutes = router;
router.get('/', (request, response) => {
    response.send('catalog');
});
router.post('/', (request, response) => {
    console.log(request.body);
    response.send('catalog');
});
//# sourceMappingURL=catalog.routes.js.map