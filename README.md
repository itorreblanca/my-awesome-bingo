<div align="center">

# 🎯 Soc Ops Bingo

### Break the ice at your next social mixer with interactive bingo!

*Find people who match the prompts, mark your card, and race to get five in a row* 🎉

[![React 19](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![MIT License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

[🎮 Live Demo](https://itorreblanca.github.io/my-awesome-bingo/) • [🚀 Quick Start](#-quick-start) • [🎨 Customize](#-customize-your-game) • [🤝 Contributing](#-contributing)

</div>

---

## ✨ Features

- **🎲 Dynamic Board Generation** - Every game creates a unique 5×5 bingo card
- **💾 Auto-Save Progress** - Never lose your game state, even if you refresh
- **📱 Mobile-First Design** - Optimized touch targets for playing on any device
- **🎨 Modern UI** - Built with React 19 and Tailwind CSS 4 for a sleek experience
- **⚡ Lightning Fast** - Powered by Vite for instant hot module replacement
- **🔧 Easy Customization** - Simple configuration to personalize questions

## 🎯 How It Works

1. **Start a new game** and get your randomized bingo card
2. **Mingle with others** at your event to find people matching each prompt
3. **Tap squares** as you find matches to mark them
4. **Get 5 in a row** (horizontal, vertical, or diagonal) to win! 🏆

Perfect for:
- 👥 Team building events
- 🎓 Classroom icebreakers  
- 🎉 Conference networking
- 🍻 Social gatherings
- 🏢 Company all-hands

## 🚀 Quick Start

### Prerequisites

- [Node.js 22](https://nodejs.org/) or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/itorreblanca/my-awesome-bingo.git
cd my-awesome-bingo

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your bingo game in action! 🎊

## 🎨 Customize Your Game

Edit the prompts to match your event:

```typescript
// src/data/questions.ts
export const questions: string[] = [
  "has a pet",
  "speaks more than 2 languages",
  "loves spicy food",
  // Add your custom prompts here!
];
```

Need at least **24 unique prompts** (the center square is always a free space).

## 🏗️ Tech Stack

This project showcases modern web development best practices:

- **[React 19](https://react.dev/)** - Latest React with improved performance
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS with `@theme` configuration
- **[Vitest](https://vitest.dev/)** - Blazing fast unit testing

### Development Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # Production build with TypeScript + Vite
npm run lint     # Check code with ESLint
npm test         # Run test suite with Vitest
```

## 📦 Deployment

Automatically deploys to GitHub Pages when you push to `main`. Set up in your repository settings:

1. Go to **Settings → Pages**
2. Set source to **GitHub Actions**
3. Push to `main` and watch your site go live! 🚀

## 🗺️ Project Structure

```
src/
├── components/      # React components (App, GameScreen, BingoModal)
├── hooks/          # Custom hooks (useBingoGame with localStorage)
├── utils/          # Pure functions (board generation, win detection)
├── data/           # Game configuration (questions)
└── types/          # TypeScript definitions
```

## 🤝 Contributing

Contributions are welcome! Whether it's:

- 🐛 Bug fixes
- ✨ New features  
- 📝 Documentation improvements
- 🎨 UI/UX enhancements

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

## 🙋 Support

- 📖 [Read the Lab Guide](.lab/GUIDE.md) for detailed setup instructions
- 💬 [Open an issue](https://github.com/itorreblanca/my-awesome-bingo/issues) for bug reports
- 🤔 Check [SUPPORT.md](SUPPORT.md) for help

---

<div align="center">

**Made with ❤️ for bringing people together**

⭐ Star this repo if you found it helpful!

</div>
