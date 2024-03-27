const express = require('express');
const router = express.Router();
const Chatbot = require('../models/Chatbot');

// Crear chatbot
router.post('/chatbots', async (req, res) => {
  const { name, description, responses } = req.body;

  const chatbot = new Chatbot({
    name,
    description,
    responses,
  });
  //creado correctamente
  try {
    await chatbot.save();
    res.status(201).json({
      success: true,
      message: 'Chatbot creado correctamente',
      data: chatbot,
    });
  }
  //error al crear el bot
   catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error al crear chatbot',
      error: error.message,
    });
  }
});

// Listar chatbots
router.get('/chatbots', async (req, res) => {
 //listado correctamente
  try {
    const chatbots = await Chatbot.find();
    res.status(200).json({
      success: true,
      message: 'Chatbots listados correctamente',
      data: chatbots,
    });
  }
  // error al listar los bots
   catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al listar chatbots',
      error: error.message,
    });
  }
});

// Eliminar chatbot
router.delete('/chatbots/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Chatbot.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: 'Chatbot eliminado correctamente',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error al eliminar chatbot',
      error: error.message,
    });
  }
});

// Enviar pregunta y recibir respuesta
router.post('/chatbots/:id/ask', async (req, res) => {
  const { id } = req.params;
  const { question } = req.body;

  try {
    const chatbot = await Chatbot.findById(id);

    // Ensure chatbot exists and has responses array
    if (!chatbot || !chatbot.responses || !chatbot.responses.length) {
      return res.status(404).json({
        success: false,
        message: 'Chatbot not found or has no responses',
      });
    }

    // Utilize array methods for efficient searching and handling
    const matchingResponse = chatbot.responses.find(
      (response) => response.question.toLowerCase() === question.toLowerCase()
    );

    if (!matchingResponse) {
      return res.status(404).json({
        success: false,
        message: 'Pregunta no encontrada',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Respuesta encontrada ',
      data: matchingResponse.answer,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error al enviar pregunta',
      error: error.message,
    });
  }
});


module.exports = router;
