# Idle Planet Miner

An interactive cost calculation tool for crafting/mining games. Calculates all material requirements for complex items with nested dependencies.

## Features

- **Recursive Cost Calculation**: Automatically drills down through all nested sub-requirements
- **Quantity Multiplier Propagation**: Correctly scales nested requirements based on parent quantities
- **Debounced Input**: 300ms debounce on quantity changes for responsive UI without excessive re-renders
- **Cost Breakdown**: Shows all required materials with their quantities
- **Deduction Tracking**: Track and deduct materials as you consume them
- **Auto-reset on Selection**: Resets input and recalculates when switching items

## Recent Updates (v2.0)

- Added new end-game items: Nuclear Reactor, Collider, Gravity Chamber, Robot
- New base materials: Inerton Alloy, Quadium Alloy, Scrith Alloy
- Fixed nested requirement/quantity multiplication logic
- Implemented input debounce for better performance
- Improved state management on item selection

## Tech Stack

- React + Vite
- React Bootstrap (UI components)
- ES6+ JavaScript

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── Components/
│   ├── ItemDetails.jsx      # Main cost calculator component
│   └── ItemList.jsx         # Item selection list
├── constants/
│   └── itemConstants.js     # Item definitions and requirements
└── App.jsx                  # Main app component
```

## How It Works

1. Select an item from the list
2. Enter the quantity you want to craft
3. View the complete cost breakdown including all nested materials
4. Optionally deduct materials as you gather them

The calculator uses recursive traversal to compute all sub-requirements, multiplying quantities correctly at each level of the dependency tree.
