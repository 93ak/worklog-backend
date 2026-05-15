
require('dotenv').config();

const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect(process.env.MONGO_URI);

const employees = [
  {
    username: 'alp.akshara@gmail.com',
    email: 'alp.akshara@gmail.com',
    password: 'capwd123',
    role: 'admin',
    displayName: 'Akshara',
  },

  {
    username: 'alice@gmail.com',
    email: 'alice@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Alice',
  },

  {
    username: 'bob@gmail.com',
    email: 'bob@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Bob',
  },

  {
    username: 'carol@gmail.com',
    email: 'carol@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Carol',
  },

  {
    username: 'dave@gmail.com',
    email: 'dave@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Dave',
  },

  {
    username: 'capwd.ilavenmal@gmail.com',
    email: 'capwd.ilavenmal@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Ilavenmal M',
  },

  {
    username: 'capwd.shobana@gmail.com',
    email: 'capwd.shobana@gmail.com',
    password: 'capwd123',
    role: 'admin',
    displayName: 'Shobana Meena C',
  },

  {
    username: 'capwd.umamaheswarirm@gmail.com',
    email: 'capwd.umamaheswarirm@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Uma Maheswari R M',
  },

  {
    username: 'capwd.srividya@gmail.com',
    email: 'capwd.srividya@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Srividya M',
  },

  {
    username: 'capwd.prithailangovan@gmail.com',
    email: 'capwd.prithailangovan@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Pritha I',
  },

  {
    username: 'capwd.santhosh@gmail.com',
    email: 'capwd.santhosh@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Santhosh Kumar B M',
  },

  {
    username: 'capwd.ramya@gmail.com',
    email: 'capwd.ramya@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Ramya M',
  },

  {
    username: 'capwd.praveen@gmail.com',
    email: 'capwd.praveen@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Praveen Kumar V',
  },

  {
    username: 'capwd.muthukrishnan@gmail.com',
    email: 'capwd.muthukrishnan@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Muthu Krishnan S',
  },

  {
    username: 'capwd.vijayaraghav@gmail.com',
    email: 'capwd.vijayaraghav@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Vijaya Raghav L',
  },

  {
    username: 'capwd.deepikaramalingam05@gmail.com',
    email: 'capwd.deepikaramalingam05@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Deepika R',
  },

  {
    username: 'capwd.benazirkhan@gmail.com',
    email: 'capwd.benazirkhan@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Jawahar Benazir S H R',
  },

  {
    username: 'capwd.veeramanidhanushkodi@gmail.com',
    email: 'capwd.veeramanidhanushkodi@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Veeramani D',
  },

  {
    username: 'capwd.deepika@gmail.com',
    email: 'capwd.deepika@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Deepika R',
  },

  {
    username: 'capwd.alagu@gmail.com',
    email: 'capwd.alagu@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Alagu A',
  },

  {
    username: 'capwd.vaishnavi@gmail.com',
    email: 'capwd.vaishnavi@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Vaishnavi K S',
  },

  {
    username: 'capwd.shanbagavalli@gmail.com',
    email: 'capwd.shanbagavalli@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Shanbagavalli N',
  },

  {
    username: 'capwd.satheeshs@gmail.com',
    email: 'capwd.satheeshs@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'Satheesh S',
  },

  {
    username: 'capwd.arunkrishna@gmail.com',
    email: 'capwd.arunkrishna@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'R Arunkrishna',
  },

  {
    username: 'capwd.satheesharumugam@gmail.com',
    email: 'capwd.satheesharumugam@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'A Satheesh',
  },

  {
    username: 'capwd.ponni@gmail.com',
    email: 'capwd.ponni@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'G Ponni',
  },

  {
    username: 'capwd.sakthipriya@gmail.com',
    email: 'capwd.sakthipriya@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'N Sakthi Priya',
  },

  {
    username: 'capwd.vigneshwar@gmail.com',
    email: 'capwd.vigneshwar@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'S Vigneshwar',
  },

  {
    username: 'capwd.kishorekumar@gmail.com',
    email: 'capwd.kishorekumar@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'S M Kishore Kumar',
  },

  {
    username: 'capwd.priyanka@gmail.com',
    email: 'capwd.priyanka@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'V Priyanka',
  },

  {
    username: 'capwd.sandeep@gmail.com',
    email: 'capwd.sandeep@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'S Sandeep',
  },

  {
    username: 'capwd.kayalvizhi@gmail.com',
    email: 'capwd.kayalvizhi@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'G Kayalvizhi',
  },

  {
    username: 'capwd.nithya@gmail.com',
    email: 'capwd.nithya@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'N Nithya',
  },

  {
    username: 'capwd.shanmathy@gmail.com',
    email: 'capwd.shanmathy@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'M Shanmathy',
  },

  {
    username: 'capwd.anudeepa@gmail.com',
    email: 'capwd.anudeepa@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'P Anudeepa',
  },

  {
    username: 'capwd.gangaprasad@gmail.com',
    email: 'capwd.gangaprasad@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'K L Ganga Prasad',
  },

  {
    username: 'capwd.suba@gmail.com',
    email: 'capwd.suba@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'R Suba',
  },

  {
    username: 'capwd.mehna@gmail.com',
    email: 'capwd.mehna@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'S Mehna',
  },

  {
    username: 'capwd.nishya@gmail.com',
    email: 'capwd.nishya@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'N Nishya',
  },

  {
    username: 'capwd.sharmilabanu@gmail.com',
    email: 'capwd.sharmilabanu@gmail.com',
    password: 'capwd123',
    role: 'employee',
    displayName: 'S I Sharmila Banu',
  },
];

async function seed() {
  try {
    for (const emp of employees) {
      const exists = await User.findOne({ email: emp.email });

      if (exists) {
        console.log(`${emp.email} already exists`);
        continue;
      }

      const user = new User(emp);

      await user.save();

      console.log(`Created ${emp.email}`);
    }

    console.log('Seeding complete');

    process.exit();
  } catch (err) {
    console.error(err);

    process.exit(1);
  }
}

seed();
