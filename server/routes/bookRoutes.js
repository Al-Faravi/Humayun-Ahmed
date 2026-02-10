import express from 'express';
import { getBooks, getBookById } from '../controllers/bookController.js';

const router = express.Router();

router.route('/').get(getBooks);       // GET /api/books
router.route('/:id').get(getBookById); // GET /api/books/123

export default router;