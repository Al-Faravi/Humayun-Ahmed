import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Book from './models/Book.js';
import Character from './models/Character.js';

dotenv.config();
connectDB();

// --- SAMPLE DATA ---
const characters = [
  {
    name: 'Himu',
    name_bn: 'হিমু',
    description: 'A bohemian character who wears a yellow panjabi and walks barefoot.',
    personality: 'Bohemian',
    theme_color: '#FFD700', // Yellow
    famous_quotes: [
      { text: 'Ekti cheler jibone sobcheye boro tragedy holo meye', source_book: 'Himu' }
    ]
  },
  {
    name: 'Misir Ali',
    name_bn: 'মিসির আলি',
    description: 'A part-time professor of Psychology who solves mysteries using logic.',
    personality: 'Logical',
    theme_color: '#333333', // Dark Grey
    famous_quotes: [
      { text: 'Nature never allows vacuum.', source_book: 'Debi' }
    ]
  },
  {
    name: 'Shuvro',
    name_bn: 'শুভ্র',
    description: 'A pure soul, often depicted with glasses and a clean shave.',
    personality: 'Pure',
    theme_color: '#FFFFFF', // White
    famous_quotes: [
      { text: 'Earth is beautiful.', source_book: 'Daruchini Dip' }
    ]
  }
];

const books = [
  {
    title: 'Debi',
    title_bn: 'দেবী',
    author: 'Humayun Ahmed',
    genre: 'Mystery',
    synopsis: 'The first appearance of Misir Ali, dealing with paranormal activities.',
    published_year: 1985,
    mood: 'Thrilling',
    primary_character: 'Misir Ali',
    page_count: 180,
    rating: 4.8
  },
  {
    title: 'Moyurakkhi',
    title_bn: 'ময়ূরাক্ষী',
    author: 'Humayun Ahmed',
    genre: 'Fiction',
    synopsis: 'Introduction of Himu, the bohemian character.',
    published_year: 1990,
    mood: 'Happy',
    primary_character: 'Himu',
    page_count: 120,
    rating: 4.5
  },
  {
    title: 'Shonkhonil Karagar',
    title_bn: 'শঙ্খনীল কারাগার',
    author: 'Humayun Ahmed',
    genre: 'Fiction',
    synopsis: 'A heart-touching story of a middle-class family.',
    published_year: 1973,
    mood: 'Melancholic',
    primary_character: 'None',
    page_count: 200,
    rating: 4.9
  }
];

// --- IMPORT FUNCTION ---
const importData = async () => {
  try {
    // আগের সব ডাটা মুছে ফেলা (Clean Slate)
    await Book.deleteMany();
    await Character.deleteMany();

    // নতুন ডাটা ইনসার্ট করা
    await Character.insertMany(characters);
    await Book.insertMany(books);

    console.log('✅ Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

// --- DESTROY FUNCTION (Optional) ---
const destroyData = async () => {
  try {
    await Book.deleteMany();
    await Character.deleteMany();

    console.log('🔥 Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

// কমান্ড চেক করা (node seeder.js -d দিলে ডিলিট হবে, না হলে ইমপোর্ট)
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}