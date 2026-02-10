import mongoose from 'mongoose';

const characterSchema = mongoose.Schema(
  {
    name: { type: String, required: true }, // Himu
    name_bn: { type: String, required: true }, // হিমু
    description: { type: String, required: true },
    
    // বিশেষ বৈশিষ্ট্য (ফ্রন্টএন্ড এ কাজে লাগবে)
    personality: { type: String }, // e.g., 'Mysterious', 'Bohemian', 'Logical'
    
    // চরিত্রের থিম কালার (হিমু = #FFD700, শুভ্র = #FFFFFF)
    theme_color: { type: String, default: '#ffffff' },
    
    // চরিত্রের আইকনিক ডায়ালগ বা উক্তি
    famous_quotes: [
      {
        text: String,
        source_book: String
      }
    ],
    
    image: { type: String }, // ক্যারেক্টার ইলাস্ট্রেশন
  },
  {
    timestamps: true,
  }
);

const Character = mongoose.model('Character', characterSchema);
export default Character;