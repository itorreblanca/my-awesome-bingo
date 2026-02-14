# Copilot Instructions: Soc Ops Bingo

## Development Checklist

Before committing changes, run:
- [ ] `npm run lint` - ESLint check
- [ ] `npm run build` - TypeScript compilation + Vite build
- [ ] `npm test` - Vitest unit tests

## Overview

Social Bingo for in-person mixers. 5×5 grid with FREE_SPACE at center (index 12). React 19 + TypeScript + Vite + Tailwind 4.

**Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS 4, Vitest + React Testing Library

## Architecture

**State**: [useBingoGame](../src/hooks/useBingoGame.ts) hook with localStorage persistence (versioned schema)  
**Logic**: Pure functions in [bingoLogic.ts](../src/utils/bingoLogic.ts) - always return new arrays (immutable)  
**Components**: App → StartScreen | (GameScreen + BingoModal)  
**Types**: [src/types](../src/types/index.ts) defines `BingoSquareData`, `BingoLine`, `GameState`

### Data Flow
1. Hook manages `GameState`: 'start' | 'playing' | 'bingo'
2. `generateBoard()` shuffles 24 questions (Fisher-Yates) + FREE_SPACE at index 12
3. `toggleSquare()` returns new board array (never mutate)
4. `checkBingo()` checks 12 winning lines (5 rows + 5 cols + 2 diagonals)
5. State persists to localStorage with `validateStoredData()` schema checks

## Critical Patterns

### Board Operations
- **5×5 grid**: Indices 0-24, center is 12
- **FREE_SPACE**: Pre-marked, non-toggleable (`!square.isFreeSpace` before toggle)
- **Immutability**: All board ops use `map()` to return new arrays
- **Questions**: Edit [questions.ts](../src/data/questions.ts), need ≥24 prompts

### localStorage Persistence
- Always use SSR guards: `typeof window === 'undefined'`
- Validate with `validateStoredData()` and `STORAGE_VERSION`
- Clear invalid data gracefully with console warnings

### Styling (Tailwind 4)
- Use `@theme` in [index.css](../src/index.css) for custom properties
- Custom vars: `--color-marked`, `--color-marked-border`, `--color-bingo`
- Mobile-first design (touch targets for social mixer context)

## Common Pitfalls

1. **Never mutate board arrays** - Use `map()` to create new arrays
2. **Don't toggle free space** - Check `!square.isFreeSpace`
3. **Always validate localStorage** - Schema versioning required
4. **SSR guards** - Wrap all `window`/`localStorage` access

## Key Commands

```bash
npm install          # Node.js 22+
npm run dev         # Dev server
npm run build       # Production build
npm run lint        # ESLint
npm test            # Vitest tests
```

## Testing

**Framework**: Vitest + React Testing Library (jsdom)  
**Pattern**: Test pure functions in [bingoLogic.test.ts](../src/utils/bingoLogic.test.ts) with edge cases  
**Mock randomness**: Use `vi.spyOn(Math, 'random')` for deterministic tests

## Deployment

Auto-deploys to GitHub Pages on push to `main`. Vite base path: `process.env.VITE_REPO_NAME ? '/${VITE_REPO_NAME}/' : '/'`

## Using VS Code Copilot Features

### Checkpoints
- **Purpose**: Revert unexpected changes during agent-driven development
- **When to use**: After agent makes changes that don't match expectations or break functionality
- **How**: In VS Code chat, use the Checkpoints feature to roll back to a previous state
- **Best practice**: Commit working code often to create natural checkpoint boundaries

### Undo
- **Purpose**: Quick rollback of the last agent action
- **When to use**: Immediately after an agent makes an unwanted change
- **How**: Use the Undo button in chat interface
- **Best practice**: Review agent changes before proceeding to next step

### Development Workflow with Checkpoints
1. Make incremental changes with clear intents
2. Test each change before proceeding
3. Commit working code to create checkpoints
4. If agent goes off-track, use Checkpoints to revert and retry with clearer prompt
5. Keep browser open with live reload to catch visual regressions early
