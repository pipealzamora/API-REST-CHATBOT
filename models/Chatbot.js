const mongoose = require('../db');

//creación del schema
const chatbotSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  respuestas: [
    {
      pregunta: {
        type: String,
        required: true,
        trim: true,
      },
      respuesta: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],
});

const Chatbot = mongoose.model('chatbot', chatbotSchema);

module.exports = Chatbot;
