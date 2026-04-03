const router = require('express').Router();
const { getOverview, getUserLogs } = require('../controllers/adminController');
const { protect, adminOnly } = require('../middleware/auth');

router.use(protect, adminOnly); // all admin routes require admin role

router.get('/overview', getOverview);
router.get('/user/:id/logs', getUserLogs);

module.exports = router;
