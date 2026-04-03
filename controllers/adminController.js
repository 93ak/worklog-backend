const User = require('../models/User');
const Log = require('../models/Log');

// GET /api/admin/overview — all employees + today's submission status
exports.getOverview = async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    // All employees
    const employees = await User.find({ role: 'employee' })
      .select('_id username displayName createdAt')
      .lean();

    // Today's logs
    const todayLogs = await Log.find({ date: today })
      .select('userId')
      .lean();

    const submittedIds = new Set(todayLogs.map((l) => l.userId.toString()));

    const overview = employees.map((emp) => ({
      ...emp,
      submittedToday: submittedIds.has(emp._id.toString()),
    }));

    res.json({ date: today, employees: overview });
  } catch (err) {
    console.error('getOverview error:', err);
    res.status(500).json({ message: 'Failed to fetch overview' });
  }
};

// GET /api/admin/user/:id/logs — all logs for a specific employee
exports.getUserLogs = async (req, res) => {
  try {
    const employee = await User.findOne({ _id: req.params.id, role: 'employee' })
      .select('-password')
      .lean();

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    const logs = await Log.find({ userId: req.params.id })
      .sort({ date: -1 })
      .lean();

    res.json({ employee, logs });
  } catch (err) {
    console.error('getUserLogs error:', err);
    res.status(500).json({ message: 'Failed to fetch employee logs' });
  }
};
