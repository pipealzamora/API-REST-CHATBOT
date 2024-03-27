const mongoose = require('../db');

//creación del schema
const chatbotSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  responses: [
    {
      question: {
        type: String,
        required: true,
        trim: true,
      },
      answer: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],
});

const Chatbot = mongoose.model('chatbot', chatbotSchema);

module.exports = Chatbot;
