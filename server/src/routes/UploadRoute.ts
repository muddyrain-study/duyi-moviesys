import Express from 'express';

const router = Express.Router();
import multer from 'multer';
import path from 'path';
import { ResponseHelper } from './ResponseHelper';
const storage = multer.diskStorage({
  destination: path.resolve(__dirname, '../../public/uploads/'),
  filename(req, file, cb) {
    const time = Date.now();
    const extname = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + time + extname);
  },
});
const allowedExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.jiff', '.webp'];
const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 1,
  },
  fileFilter(req, file, cb) {
    const extname = path.extname(file.originalname);
    if (allowedExtensions.includes(`${extname}`)) {
      cb(null, true);
    } else {
      cb(new Error('文件格式不正确') as any, false);
    }
  },
}).single('file');
router.post('/', (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      ResponseHelper.sendError(err.message, res);
    } else {
      const url = `/upload/${req.file?.filename}`;
      ResponseHelper.sendData(url, res);
    }
  });
});

export default router;
