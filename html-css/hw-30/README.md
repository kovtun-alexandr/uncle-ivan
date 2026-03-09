# Advice Generator App

A responsive web application that displays random advice quotes with a modern, accessible design.

## Overview

This project showcases a clean and interactive advice generator interface with a focus on responsive design and modern CSS techniques. Users can generate random advice quotes by clicking a dice button.

## Features

- ✨ Random advice quote display with ID numbering
- 🎲 Interactive dice button to generate new quotes
- 📱 Fully responsive design (mobile: 375px, desktop: 1440px)
- 🌙 Dark theme with modern color palette
- ♿ WCAG-compliant with semantic HTML
- 🎨 Smooth animations and hover effects
- 📱 Mobile-first approach

## Project Structure

```
hw-30/
├── index.html                 # Main HTML file
├── assets/
│   ├── images/
│   │   ├── favicon-32x32.png
│   │   └── icons/
│   │       ├── dice.svg       # Dice button icon
│   │       └── pause.svg      # Quote separator icon
│   └── style/
│       ├── style.scss         # Main styles (SCSS)
│       ├── style.css          # Compiled CSS
│       └── _reset.scss        # CSS reset module
└── README.md                  # This file
```

## Technologies Used

### HTML & Semantic Markup
- Semantic HTML5 structure
- Meta tags for viewport and charset
- Favicon support

### SCSS/CSS
- **Preprocessor**: SCSS with module imports (`@use` directive)
- **CSS Reset**: Custom reset using SCSS module
- **Layout**: Flexbox for centering and card layout
- **Responsive Design**: Mobile-first with media queries
- **Features Used**:
  - CSS variables (SCSS variables)
  - Pseudo-elements (`::before`, `::after`)
  - Pseudo-classes (`:hover`)
  - CSS transitions
  - Box shadow effects
  - Responsive padding and font sizing

### Typography
- **Font Family**: Manrope (imported from Google Fonts)
- **Font Weight**: 800 (bold)
- **Font Sizes**:
  - Quote text: 28px (desktop), 24px (mobile)
  - Label: 13px

### Design System

#### Color Palette
- **Body Background**: #202733 (Dark blue)
- **Card Background**: #313A48 (Dark blue-gray)
- **Text Color**: #CEE3E9 (Light blue-gray)
- **Accent Color**: #52FFA8 (Green)
- **Divider Line**: #4F5D74 (Medium blue-gray)

#### Spacing & Layout
- **Max Width**: 1470px (container)
- **Card Padding**: 48px (desktop), 40px 24px (mobile)
- **Gap Between Elements**: 24px
- **Button Size**: 62px × 62px (circular)

#### Effects
- **Box Shadow**: 30px 50px 80px rgba(0, 0, 0, 0.100202)
- **Button Hover Shadow**: 0px 0px 3px 3px rgba(82, 255, 168, 0.3)
- **Transitions**: 0.3s ease for hover effects

## Responsive Breakpoints

- **Mobile**: 375px - 559px
- **Desktop**: 560px and above

The design uses a mobile-first approach with specific adjustments for smaller screens.

## Accessibility

- Semantic HTML structure with proper heading hierarchy
- Accessible color contrasts meeting WCAG standards
- Alt text for images
- Interactive elements with visible focus states
- Proper font sizing and line height for readability

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- CSS Variables support required
- SCSS compilation required for development

## Getting Started

1. Open `index.html` in a web browser
2. View the initial advice quote
3. Click the dice button to generate a new random quote
4. The app is fully responsive and works on all device sizes

## Build Process

This project uses SCSS for styling. To compile SCSS to CSS:

```bash
sass assets/style/style.scss assets/style/style.css
```

Or use your preferred SCSS compiler/task runner.

## Notes

- The project uses a modern CSS approach with minimal JavaScript required for the button interaction
- All styling is modular with a separate reset file for better organization
- SVG icons are used for crisp display on all screen sizes
- The design focuses on accessibility and user experience
