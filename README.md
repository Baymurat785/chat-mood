# AI Mood Chat

A chat application that analyzes your mood and provides personalized advice using Claude AI.

## Features

- Real-time mood analysis with emoji representation
- Color-coded responses based on detected mood
- Personalized advice based on your messages
- Clean, responsive UI

## Local Development

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with your Claude API key:
   ```
   CLAUDE_API_KEY=your-api-key-here
   PORT=3001
   ```
4. Start the development server:
   ```
   npm run start
   ```
   This will start both the backend server and the frontend development server.

## Deploying to Vercel

1. Push your code to a GitHub repository

2. Connect your repository to Vercel:
   - Go to [Vercel](https://vercel.com) and sign in
   - Click "New Project"
   - Import your GitHub repository
   - Configure the project:
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

3. Add Environment Variables:
   - In the Vercel project settings, add the following environment variable:
     - `CLAUDE_API_KEY`: Your Claude API key

4. Deploy:
   - Click "Deploy"
   - Vercel will automatically build and deploy your application

## Project Structure

- `src/`: Frontend React application
- `server/`: Backend Express server
- `server/langchain.js`: Claude AI integration for mood analysis
- `vercel.json`: Vercel deployment configuration

## Technologies Used

- Frontend: React, TypeScript, Vite
- Backend: Express.js, Node.js
- AI: Claude API (Anthropic)
- Deployment: Vercel