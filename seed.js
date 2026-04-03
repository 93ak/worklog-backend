/**
 * seed.js — run once to populate initial users
 * Usage: node seed.js
 *
 * Requires: .env file with MONGO_URI set
 */
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const SEED_USERS = [
  {
    username: 'admin',
    password: 'admin123',
    role: 'admin',
    displayName: 'Admin User',
  },
  {
    username: 'alice',
    password: 'alice123',
    role: 'employee',
    displayName: 'Alice Johnson',
  },
  {
    username: 'bob',
    password: 'bob123',
    role: 'employee',
    displayName: 'Bob Smith',
  },
  {
    username: 'carol',
    password: 'carol123',
    role: 'employee',
    displayName: 'Carol Davis',
  },
  {
    username: 'dave',
    password: 'dave123',
    role: 'employee',
    displayName: 'Dave Wilson',
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅  Connected to MongoDB');

    // Remove existing users to avoid conflicts
    await User.deleteMany({});
    console.log('🗑️   Cleared existing users');

    // Create users (password hashing handled by pre-save hook in model)
    for (const userData of SEED_USERS) {
      const user = new User(userData);
      await user.save();
      console.log(`👤  Created user: ${userData.username} (${userData.role})`);
    }

    console.log('\n✅  Seed complete! Login credentials:');
    SEED_USERS.forEach((u) => {
      console.log(`   ${u.role.padEnd(8)} | ${u.username.padEnd(10)} | ${u.password}`);
    });

    process.exit(0);
  } catch (err) {
    console.error('❌  Seed failed:', err.message);
    process.exit(1);
  }
}

seed();
