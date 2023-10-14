import MockControllers from '../controllers/mockControllers.js';
import express from 'express';
const router = express.Router();

router.get('/stories', MockControllers.getStories);
router.get('/feedPosts', MockControllers.getFeedPosts);

export default router;