const Anthropic = require('@anthropic-ai/sdk');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();
console.log("Loaded API Key:", process.env.CLAUDE_API_KEY);

// Initialize Claude client
const anthropic = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
});

/**
 * Analyzes the user's mood and generates advice in a single API call
 * @param {string} message - The user's message
 * @returns {Promise<Object>} - Object containing mood analysis and advice
 */
async function analyzeMoodAndGenerateAdvice(message) {
  try {
    const prompt = `
    Based on the following user message, please perform two tasks:
    
    1. Identify the user's mood with a single emoji and a single word.
    2. Give a color according to the mood
    2. Provide a short, helpful piece of advice (10-20 words) based on their message and mood.
    
    User message: "${message}"
    
    Format your response exactly like this JSON object:
    {
      "mood": {
        "emoji": "😊",
        "mood": "happy",
        "color": "green"
      },
      "advice": "Your short advice here."
    }
    
    Remember to respond with ONLY the JSON object.
    `;

    const response = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 150,
      messages: [{ role: 'user', content: prompt }],
    });

    // Extract the JSON response
    const content = response.content[0].text;
    const jsonMatch = content.match(/\{.*\}/s);
    
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    } else {
      console.error('Failed to parse response:', content);
      return {
        mood: { emoji: '❓', mood: 'unknown', color: '#808080' },
        advice: 'Take a deep breath and remember that every moment is an opportunity for positive change.'
      };
    }
  } catch (error) {
    console.error('Error in analyzeMoodAndGenerateAdvice:', error);
    return {
      mood: { emoji: '❓', mood: 'unknown', color: '#808080' },
      advice: 'Take a deep breath and remember that every moment is an opportunity for positive change.'
    };
  }
}

module.exports = {
  analyzeMoodAndGenerateAdvice
};