"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const ResponseHelper_1 = require("./ResponseHelper");
const storage = multer_1.default.diskStorage({
    destination: path_1.default.resolve(__dirname, '../../public/uploads/'),
    filename(req, file, cb) {
        const time = Date.now();
        const extname = path_1.default.extname(file.originalname);
        cb(null, file.fieldname + '-' + time + extname);
    },
});
const allowedExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.jiff', '.webp'];
const upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 1,
    },
    fileFilter(req, file, cb) {
        const extname = path_1.default.extname(file.originalname);
        if (allowedExtensions.includes(`${extname}`)) {
            cb(null, true);
        }
        else {
            cb(new Error('文件格式不正确'), false);
        }
    },
}).single('file');
router.post('/', (req, res) => {
    upload(req, res, function (err) {
        var _a;
        if (err) {
            ResponseHelper_1.ResponseHelper.sendError(err.message, res);
        }
        else {
            const url = `/upload/${(_a = req.file) === null || _a === void 0 ? void 0 : _a.filename}`;
            ResponseHelper_1.ResponseHelper.sendData(url, res);
        }
    });
});
exports.default = router;
