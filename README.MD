# Emotional AI Assistant

The Emotional AI Assistant is a React.js application that interacts with AI models to provide empathetic and emotional responses based on user input. It allows users to input their emotions and messages, and the AI generates a response that is emotionally intelligent and supportive.

## Features

- **Emotion Input**: Users can enter their emotions.
- **Message Input**: Users can provide a message they wish to express.
- **AI Responses**: The app interacts with an AI model to generate emotionally intelligent responses.
- **Rich UI**: Built with Material-UI, React-Bootstrap, and Tailwind CSS for a polished and responsive design.
- **Interactive Design**: Smooth and dynamic UI elements that enhance user experience.

## Technologies Used

- **Frontend**:
    - React.js
    - Material-UI (MUI)
    - React-Bootstrap
    - Tailwind CSS
    - Axios (for API requests)
    - Framer Motion (for animations)
    - React Icons

- **Backend** (Optional):
    - Node.js (express server)
    - OpenAI or DeepSeek API (for AI interaction)

## Setup Instructions

Follow these steps to set up the project locally:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14 or later)
- [npm](https://www.npmjs.com/get-npm)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/emotional-ai-assistant.git

```

### Folder Structure
```
/emotional-ai-assistant
├── /client                  # Frontend React app
│   ├── /public              # Public static files
│   │   └── index.html       # Main HTML file
│   ├── /src                 # React components and source code
│   │   ├── /components      # React components for UI
│   │   ├── /assets          # Images, icons, and other assets
│   │   ├── /services        # API interaction services (e.g., Axios requests)
│   │   ├── /styles          # CSS, SCSS, or Tailwind configurations
│   │   └── App.js           # Main React App component
│   └── package.json         # Frontend dependencies and scripts
├── /server                  # Backend API (Node.js, Express)
│   ├── /config              # Configuration and API keys
│   │   └── config.js        # Configuration file for environment variables
│   ├── server.js            # Main server file for API routes and logic
│   └── .env                 # Environment variables (e.g., API keys)
├── .gitignore               # Git ignore file
├── LICENSE                  # License file (MIT)
├── package.json             # Frontend package manager dependencies
├── /package-lock.json       # Package lock file for frontend dependencies
└── README.md                # Project documentation (this file)

```

### Environment Setup
```aiignore
HUGGINGFACE_API_KEY=your_HUGGINGFACE_API_KEY
Hu
```

#### MIT License

Copyright (c) [year] [Your Name or Organization]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRIGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
