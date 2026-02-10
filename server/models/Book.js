import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    title_bn: { type: String, required: true }, // বাংলায় নাম (সার্চের জন্য)
    author: { type: String, default: 'Humayun Ahmed' },
    genre: { 
      type: String, 
      required: true,
      enum: ['Fiction', 'Sci-Fi', 'Horror', 'Romance', 'Comedy', 'Mystery', 'Auto-biography'] 
    },
    synopsis: { type: String, required: true }, // বইয়ের সারাংশ
    published_year: { type: Number },
    cover_image: { type: String }, // ইমেজের লিংক
    
    // মডার্ন ফিচার: এই বই পড়লে কেমন মুড হতে পারে?
    mood: { type: String, enum: ['Happy', 'Sad', 'Melancholic', 'Thrilling', 'Scary'] },
    
    // কোন চরিত্রের বই? (হিমু/মিসির আলি)
    primary_character: { type: String, default: 'None' }, 
    
    page_count: { type: Number },
    rating: { type: Number, default: 0 },
  },
  {
    timestamps: true, // অটোমেটিক createdAt এবং updatedAt তৈরি হবে
  }
);

const Book = mongoose.model('Book', bookSchema);
export default Book;