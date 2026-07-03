# 🤖 HelpDesk AI Assistant — Frontend

An intelligent, AI-powered helpdesk chat application built with **React** and **Spring AI**. This repository contains the frontend client, which provides a modern, real-time conversational interface where users can interact with an AI assistant to get support, ask questions, and resolve technical issues.

---

## 🔗 Backend Repository

This frontend application is designed to be paired with the following backend project:
* **Spring Boot & Spring AI Backend:** [Help-Desk-AI-Assistant-springAI](https://github.com/vijayypandit/Help-Desk-AI-Assistant-springAI)

> [!NOTE]
> Ensure the Spring Boot backend is running locally (typically on port `8081`) for the chat service to communicate with the HelpDesk AI Assistant successfully.

---

## 📸 Overview

The frontend features a clean, WhatsApp-style single-page-app chat user interface:
- **Landing page** that introduces the assistant and has a clear call to action to start a chat session.
- **Main Chat screen** containing:
  - A left sidebar (currently layout-ready) for list views.
  - A header showing assistant identity, avatar, and active status.
  - A scrollable conversation list area that automatically scrolls to the newest messages.
  - A composition bar with real-time text input and state-aware send button.

| Page | Route | Description |
|------|-------|-------------|
| **Home / Landing** | `/` | Welcome screen with branding and a "Start Getting Help" CTA |
| **Chat** | `/chat` | Full chat interface with sidebar, message bubble list, and message composer |

---

## 🛠️ Tech Stack & Key Libraries

| Layer | Technology | Description / Version |
|-------|-----------|-------------|
| **Framework** | React 19 + Vite 8 | Modern React runtime and fast bundle builder |
| **Routing** | React Router v8 | Single Page Application routing (home `/` and `/chat`) |
| **Styling** | Tailwind CSS v4 | Utility-first responsive stylesheets |
| **HTTP Client** | Axios | Communication layer for backend API requests |
| **UI Components** | shadcn/ui + Radix UI | Standardized premium visual primitives |
| **Icons** | Lucide React | High-quality clean SVG iconography |
| **Linting** | Oxlint | High-performance linter |

---

## 📁 Project Structure

Here is the current updated file and directory hierarchy of the application:

```
helpdesk-frontend-ai-assistant/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Image/SVG assets (React & Vite logos, hero images)
│   ├── components/
│   │   ├── ui/             # shadcn/ui components (fully styled base elements)
│   │   │   ├── avatar.jsx      # Avatar representations
│   │   │   ├── button.jsx      # Customizable triggers
│   │   │   ├── card.jsx        # Container components
│   │   │   ├── input.jsx       # Text entry control
│   │   │   ├── scroll-area.jsx # Scroll container with custom scrollbars
│   │   │   ├── separator.jsx   # Divider lines
│   │   │   └── spinner.jsx     # Loading spinning indicator
│   │   └── MessageBubble.jsx   # Individual chat messages UI (user vs bot styles)
│   ├── lib/
│   │   └── utils.js        # Helper utility functions (like `cn` for Tailwind class merges)
│   ├── pages/
│   │   ├── ChatHome.jsx    # The splash/welcome landing page
│   │   └── Chat.jsx        # The complete, interactive chat dashboard
│   ├── services/
│   │   └── chat.service.js # Axios services handling API requests to the Spring Boot backend
│   ├── App.css             # Main component styles
│   ├── App.jsx             # React component shell
│   ├── index.css           # Global custom stylesheet, Tailwind imports
│   └── main.jsx            # Main app entry configuring client-side routing
├── .gitignore
├── .oxlintrc.json          # Oxlint configuration
├── components.json         # shadcn/ui CLI configuration
├── index.html              # Main HTML entry point
├── jsconfig.json           # Path aliasing configuration
├── package.json            # Node project configuration & dependencies
├── vite.config.js          # Vite configuration with Tailwind CSS compiler
└── README.md
```

---

## ✅ Implemented Features

### 💻 Pages & Navigation
- **Home Screen (`ChatHome`):** Prompts the user with a greeting and navigates dynamically to `/chat`.
- **Chat Dashboard (`Chat`):** Manages local state for messages, input drafts, and interaction states.
- **Client-Side Routing:** Direct page rendering mapped using React Router Browser Router.

### 💬 Chat Layout & Flow
- **Message Bubbles (`MessageBubble`):** Distinguishes user messages (aligned to the right with primary coloring) and bot responses (aligned to the left with neutral styling).
- **Auto-Scrolling:** Automatically scrolls to the bottom of the message container whenever new messages arrive.
- **Composer Panel:** Input elements connected to React component states allowing quick submission.

### 🌐 Backend Integration
- **Service Layer (`chat.service`):** Configures Axios requests targeting the backend endpoint `http://localhost:8081/api/v1/helpdesk`.
- **Session Management:** Automatically assigns a new UUID `conversationId` per session to maintain context with Spring AI.

---

## 🚀 Running the App Locally

### Prerequisites

- **Node.js** (version 18 or higher recommended)
- **npm** (version 9 or higher)

### Setup & Run

1. **Clone the repository:**
   ```bash
   git clone <frontend-repository-url>
   cd helpdesk-frontend-ai-assistant
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The application will be accessible at: **http://localhost:5173**

4. **Running the Linter:**
   ```bash
   npm run lint
   ```

5. **Build for Production:**
   ```bash
   npm run build
   ```
