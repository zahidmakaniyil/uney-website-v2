# UNEY Website

A modern website built with Next.js 15.5.4, featuring the latest React 19 and cutting-edge web technologies.

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js**: Version 18.18.0, 19.8.0, or 20.0.0+ (recommended: 20.x LTS)
- **npm**: Version 9.0.0+ (comes with Node.js)
- **Git**: For version control

You can check your Node.js version by running:
```bash
node --version
npm --version
```

## Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd uney-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

   This will install all the required packages including:
   - Next.js 15.5.4
   - React 19
   - TypeScript
   - Framer Motion
   - Lucide React
   - And other dependencies

## Development

### Start the Development Server

To run the development server with hot reload:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Development Features

- **Hot Reload**: Changes are reflected instantly in the browser
- **TypeScript Support**: Full TypeScript integration with type checking
- **Modern React**: Uses React 19 with the latest features
- **App Router**: Built with Next.js App Router for optimal performance
- **Fast Refresh**: Component state is preserved during development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run type checking
npm run type-check
```

## Building for Production

### Create Production Build

```bash
npm run build
```

This command:
- Optimizes the application for production
- Generates static files and server-side rendered pages
- Minifies JavaScript and CSS
- Creates an optimized bundle

### Start Production Server

After building, you can start the production server:

```bash
npm start
```

The production server will be available at [http://localhost:3000](http://localhost:3000).
