# Portfolio App

A modern, responsive portfolio website built with Angular, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Beautiful gradient hero section
- 💼 Projects showcase section
- 📧 Contact form
- ⚡ Smooth scrolling navigation
- 🎯 Built with TypeScript for type safety

## Technologies Used

- **Angular 21** - Modern web framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **CSS3** - Custom animations and styles

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-app
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

## Customization

### Update Your Information

Edit `src/app/app.ts` to customize:

- **name**: Your name
- **title**: Your professional title
- **projects**: Add/edit your project portfolio
- **skills**: Add/edit your skill set

### Styling

- **Tailwind Classes**: Modify `src/app/app.html` to change layout and styling
- **Custom Styles**: Edit `src/app/app.css` for additional custom styles
- **Global Styles**: Edit `src/styles.css` for site-wide styling

### Colors

The app uses Tailwind's default color palette. To customize colors:

1. Edit `tailwind.config.js` to add custom colors in the `theme.extend` section
2. Use your custom colors in the HTML template

## Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
portfolio-app/
├── src/
│   ├── app/
│   │   ├── app.ts          # Main component logic
│   │   ├── app.html        # Main template
│   │   ├── app.css         # Component styles
│   │   └── app.config.ts   # App configuration
│   ├── index.html          # Main HTML file
│   ├── main.ts             # Application entry point
│   └── styles.css          # Global styles (includes Tailwind)
├── tailwind.config.js      # Tailwind configuration
└── angular.json            # Angular configuration
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests

## Deployment

This app can be deployed to:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use `angular-cli-ghpages`
- **Firebase Hosting**: Use Firebase CLI

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Built with ❤️ using Angular and Tailwind CSS
