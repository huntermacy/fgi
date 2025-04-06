# Financial Literacy Class Management Tool

A modern, responsive web application for managing financial literacy courses, built with React, TypeScript, and Chakra UI.

## Features

- User authentication (mock)
- Course enrollment and progress tracking
- Interactive learning modules with quizzes
- Progress persistence using localStorage
- Responsive design for all devices

## Tech Stack

- React 18
- TypeScript
- Vite
- Chakra UI
- React Router v6
- React Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd client
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── context/       # React context providers
  ├── pages/         # Page components
  ├── data/          # Mock data and types
  ├── App.tsx        # Main application component
  └── main.tsx       # Application entry point
```

## Development

- The application uses TypeScript for type safety
- Chakra UI components for consistent styling
- React Router for navigation
- Context API for state management
- Local storage for data persistence

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
