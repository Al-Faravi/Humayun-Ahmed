import Character from '../models/Character.js';

// @desc    সব চরিত্র দেখাও
// @route   GET /api/characters
// @access  Public
const getCharacters = async (req, res) => {
  try {
    const characters = await Character.find({});
    res.json(characters);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export { getCharacters };