// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Middleware
app.use(cors()); // Enable cross-origin requests from the frontend
app.use(bodyParser.json()); // Parse JSON body in POST requests

// Your Hugging Face API token
const HF_API_TOKEN = 'PRovide your key here ';

// System prompt to set the AI's behavior
/*const systemPrompt = `
You are an empathetic and emotionally intelligent AI designed to understand and respond to the emotional states of users. Your goal is to create a supportive, safe, and understanding environment where users feel heard and validated.

When responding, carefully consider the tone, emotions, and context of the user's message. Whether the user expresses happiness, sadness, frustration, or any other feeling, tailor your response accordingly to help them feel understood and supported.
`;*/

const systemPrompt = `Write a happy and encouraging response to someone feeling down`;

// Endpoint for generating AI response
app.post('/generate', async (req, res) => {
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({ message: 'Input text is required.' });
  }

  try {
    // Call Hugging Face's API to get the response
    const response = await getHuggingFaceResponse(data);

    // Send Hugging Face model's response to frontend
    res.json({ message: response });
  } catch (error) {
    console.error('Error generating AI response:', error);
    res.status(500).json({ message: 'Error generating response. Please try again later.' });
  }
});

// Function to call Hugging Face's API
async function getHuggingFaceResponse(inputText) {
  const model = 'gpt2'; // You can use any available model from Hugging Face
//  const model = 'facebook/blenderbot-400M-distill'; // You can use any available model from Hugging Face
//  const model = 'microsoft/DialoGPT-medium'; // You can use any available model from Hugging Face

  // Create a prompt using the system prompt and the user's input
  const prompt = `${systemPrompt}\nUser: ${inputText}\nAI:`;

  try {
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${model}`,
      {
        inputs: prompt,
        parameters: {
                  temperature: 0.9,  // Adjusts randomness (higher = more creative)
                  top_k: 2,         // Limits token selection to top-k probabilities
                  top_p: 0.9,        // Nucleus sampling for better diversity
                  max_length: 100,   // Limits response length
                  repetition_penalty: 1.2 // Discourages repetitive output
                }
      },
      {
        headers: {
          Authorization: `Bearer ${HF_API_TOKEN}`, // Authorization header with the API token
        },
      }
    );

    // Get the generated text from the response
    let generatedText = response.data[0]?.generated_text || 'Sorry, no response generated.';

    // Remove the system prompt and user input from the response
    let aiResponse = generatedText.replace(systemPrompt, '').replace(`User: ${inputText}\nAI:`, '').trim();

    // If the AI response is empty, set a fallback message
    aiResponse = aiResponse || "I'm here to listen, please share your feelings.";

    // Limit the response to the first 50 words for brevity
    const trimmedResponse = aiResponse.split(' ').slice(0, 50).join(' ');

    // Returning the trimmed response
    return trimmedResponse;
  } catch (error) {
    console.error('Error calling Hugging Face API:', error);
    throw new Error('Error generating AI response.');
  }
}

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
