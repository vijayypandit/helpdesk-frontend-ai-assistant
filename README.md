# 🤖 HelpDesk AI Assistant — Frontend

An intelligent, AI-powered helpdesk chat application built with **React** and **Spring AI** (backend). This is the frontend client that provides a modern, real-time conversational interface where users can interact with an AI assistant to get support, ask questions, and resolve issues.

---

## 📸 Overview

The application features a clean, WhatsApp-style chat UI with a sidebar for conversation history and a main chat panel for real-time messaging with the AI assistant.

| Page | Route | Description |
|------|-------|-------------|
| **Home / Landing** | `/` | Welcome screen with branding and a "Start Getting Help" CTA |
| **Chat** | `/chat` | Full chat interface with sidebar + message area |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + Vite 8 |
| **Routing** | React Router v8 |
| **Styling** | Tailwind CSS v4 |
| **UI Components** | shadcn/ui + Radix UI primitives |
| **Icons** | Lucide React |
| **Typography** | Geist (variable font) |
| **Linting** | Oxlint |

---

## ✅ What's Been Done

### Pages & Routing
- [x] **Home Page (`ChatHome`)** — Landing screen with a bot icon, welcome heading, and a button to navigate into the chat.
- [x] **Chat Page (`Chat`)** — Two-column layout with a sidebar and a main chat area.
- [x] **Client-side routing** set up with React Router (`/` → Home, `/chat` → Chat).

### UI Components
- [x] **MessageBubble** — Reusable chat bubble component that visually distinguishes between user messages (dark, right-aligned) and bot messages (muted, left-aligned), with timestamps.
- [x] **shadcn/ui primitives** — Button, Input, Avatar, ScrollArea, Separator integrated and working.

### Chat Interface
- [x] **Sidebar** — Search bar and new-chat button (static layout ready).
- [x] **Chat header** — Avatar, bot name ("Liza Support AI"), online/typing status indicator.
- [x] **Message list** — Renders a scrollable list of messages using `MessageBubble`.
- [x] **Static conversation data** — Mock conversation data for UI development and testing.

### Bug Fixes
- [x] Fixed `Separator` import — was importing from top-level `radix-ui` (returns an object, not a component); corrected to local shadcn/ui wrapper.
- [x] Fixed ternary expression in `MessageBubble` for proper left/right alignment of messages.
- [x] Removed stray `bo` text in chat area class names.

---

## 🚧 What's In Progress / Planned

### Backend Integration (Spring AI)
- [ ] Connect to Spring AI backend API for real-time AI responses.
- [ ] Implement streaming responses (SSE / WebSocket) for a "typing" effect.
- [ ] Handle API error states and retries gracefully.

### Chat Functionality
- [ ] **Send message input** — Add the message compose bar with send button at the bottom of the chat.
- [ ] **Dynamic conversations** — Replace static mock data with real state management.
- [ ] **Chat history** — Populate the sidebar with actual past conversations from the backend.
- [ ] **New chat creation** — Wire up the "+" button to start a fresh conversation.
- [ ] **Search chats** — Implement sidebar search/filter functionality.

### User Experience
- [ ] Loading states and skeleton screens while waiting for AI responses.
- [ ] Auto-scroll to the latest message on new messages.
- [ ] Responsive design — make the sidebar toggle on mobile.
- [ ] Markdown rendering in bot responses (code blocks, lists, links).
- [ ] Typing indicator animation when the AI is generating a response.

### Authentication & Identity
- [ ] User identification (email, unique ID, or session-based).
- [ ] Persist conversation history per user.

### Polish
- [ ] Dark mode support.
- [ ] Animations and transitions for message appearance.
- [ ] Accessibility improvements (ARIA labels, keyboard navigation).
- [ ] SEO meta tags for public-facing pages.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd helpdesk-frontend-ai-assistant

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app will be available at **http://localhost:5173**.

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

### Lint

```bash
npm run lint
```

---

## 📁 Project Structure

```
src/
├── assets/              # Static assets (images, etc.)
├── components/
│   ├── ui/              # shadcn/ui primitives (Button, Input, Avatar, etc.)
│   └── MessageBubble.jsx   # Chat message bubble component
├── lib/                 # Utility functions (cn, etc.)
├── pages/
│   ├── ChatHome.jsx     # Landing / welcome page
│   └── Chat.jsx         # Main chat interface
├── App.jsx              # App shell
├── main.jsx             # Entry point with router setup
└── index.css            # Global styles + Tailwind directives
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is private and not currently published under an open-source license.
