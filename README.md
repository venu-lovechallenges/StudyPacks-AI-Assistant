# StudyPacks AI Assistant

A comprehensive, intelligent study app designed for O/L and university students with an AI-powered assistant that adapts to grade levels and syllabi.

## Features

### 📚 Organized Learning Structure
- **O/L Study Packs**: All 9 subjects (Sinhala, English, and more)
- **Spoken English Category**: Progressive lessons from beginner to advanced
- **Grade-Specific Content**: Tailored for Grades 10, 11, and University students
- **Unit Tests**: Assessment after each lesson with score tracking

### 🤖 AI Assistant
- Context-aware responses based on selected subject and grade level
- Syllabus-aligned answers
- Cute mascot character for engaging interaction
- Real-time assistance during study sessions

### 🎨 User Interface
- Beautiful pinkish theme with light color palette
- Left sidebar: Categories, study packs, progress tracking, settings
- Right panel: AI assistant with cute character
- Responsive design for web, mobile, and desktop

### ⚙️ Settings
- Theme customization
- Notification preferences
- Study reminders
- Language selection
- Progress synchronization
- Account management

## Tech Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **State Management**: Zustand
- **AI Integration**: OpenAI/Claude API
- **Desktop**: Electron
- **Mobile**: React Native (future)
- **Backend**: Node.js + Express
- **Database**: Firebase/MongoDB

## Project Structure

```
StudyPacks-AI-Assistant/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/               # Page components
│   ├── stores/              # Zustand stores
│   ├── services/            # API services
│   ├── data/                # Syllabus and content data
│   ├── utils/               # Helper functions
│   ├── styles/              # Global styles
│   └── App.tsx              # Main app component
├── public/                  # Static assets
├── backend/                 # Node.js backend
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/venu-lovechallenges/StudyPacks-AI-Assistant.git

# Install dependencies
cd StudyPacks-AI-Assistant
npm install

# Set up environment variables
cp .env.example .env.local
```

### Running the App

```bash
# Web development
npm start

# Desktop (Electron)
npm run electron-dev

# Build for production
npm run build
```

## O/L Subjects Included

1. **Sinhala** - Native language studies
2. **English** - Language proficiency
3. **Mathematics** - Core mathematical concepts
4. **Science** - Physics, Chemistry, Biology
5. **History** - Historical events and periods
6. **Geography** - Physical and human geography
7. **Civics** - Citizenship and governance
8. **Business Studies** - Commerce and economics
9. **Information Technology** - Computing fundamentals

## Spoken English Learning Path

- **Beginner**: Pronunciation, basic vocabulary
- **Elementary**: Simple conversations
- **Intermediate**: Complex sentences, discussions
- **Upper-Intermediate**: Fluency and nuances
- **Advanced**: Professional communication
- **Proficiency**: Native-like fluency

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Support

For support, email support@studypacks.com or open an issue on GitHub.
