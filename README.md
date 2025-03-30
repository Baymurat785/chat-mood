
# Chat Mood Application


## Technologies Used

- Frontend: React, TypeScript, Vite
- Backend: Express.js, Node.js
- AI: Claude API (Anthropic)
- Deployment: Vercel

## Approach

I developed the project in three main stages: 
- UI Development: 
I started with the frontend, building the user interface using React and TypeScript. 

- Backend Implementation:
Next, I set up the backend with Express.js (which felt readable and intuitive) and added some simulation logic to test interactions.

- AI Integration:
Finally, I connected the backend to the Claude API using a third-party library like Langchain.js.

## Learning
- Learning part,
    - While building the UI, I leaned on my familiarity with Swift. I translated
    concepts from the web stack into Swift-like patterns to better grasp the
    logic.

    -Still, I have a lot more to explore and improve!

## Challenges Overcome

- API Key Setup: 
    The first hurdle was configuring the API key. I tried commands like $echo in 
    the VSCode terminal, and even followed Bek Agha’s guide—but it didn’t work 
    for me. Eventually, I found a smoother solution using the RooCode VS 
    extension, where I just pasted the key directly.

- Tailwind CSS Issues:
    I initially chose Tailwind CSS for its readability over plain CSS. However, 
    I ran into package issues—possibly related to Claude Code’s auto- 
    installation. Instead of digging into the problem, I opted to switch to 
    regular CSS, which worked fine.

- Multiple Requests to Claude:
    At first, I planned to send two separate API requests to get an Emoji and an 
    Advice, thinking in terms of transactional atomicity. But Claude Code 
    introduced me to a smarter approach: send one request and receive a 
    structured JSON response with everything I needed. (Honestly, not sure why I 
    didn’t think of that first 😄)

- There were a few other minor hiccups, but nothing worth diving into here.