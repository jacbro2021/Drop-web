# Drop: Location Messaging Website

This is the official website for Drop, a location-based messaging app. The site serves as both a marketing page and support portal for the app.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Animated Rainfall Background**: Cartoonish blue lines falling down the screen
- **App Screenshots**: Showcase of the app's main features and interface
- **Support Section**: Contact information for user support
- **Modern UI**: Clean, modern design with glassmorphism effects

## Local Development

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended for best experience)

### Running Locally

#### Option 1: Using Python (Recommended)

If you have Python installed:

```bash
# Navigate to the project directory
cd "Drop Website"

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open your browser and go to `http://localhost:8000`

#### Option 2: Using Node.js

If you have Node.js installed:

```bash
# Install a simple HTTP server globally
npm install -g http-server

# Navigate to the project directory
cd "Drop Website"

# Start the server
http-server -p 8000
```

Then open your browser and go to `http://localhost:8000`

#### Option 3: Using PHP

If you have PHP installed:

```bash
# Navigate to the project directory
cd "Drop Website"

# Start the built-in PHP server
php -S localhost:8000
```

Then open your browser and go to `http://localhost:8000`

#### Option 4: Direct File Opening

You can also open `index.html` directly in your browser, but some features (like the rainfall animation) may not work properly due to browser security restrictions.

### File Structure

```
Drop Website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── icon.png            # App icon (you need to add this)
├── screenshot1.png     # App screenshot 1 (you need to add this)
├── screenshot2.png     # App screenshot 2 (you need to add this)
├── screenshot3.png     # App screenshot 3 (you need to add this)
├── screenshot4.png     # App screenshot 4 (you need to add this)
├── screenshot5.png     # App screenshot 5 (you need to add this)
├── screenshot6.png     # App screenshot 6 (you need to add this)
└── README.md           # This file
```

## Required Images

To complete the setup, you need to add the following image files to the project directory:

1. **icon.png** - The app icon (should be 512x512px or similar square format)
2. **screenshot1.png** - Main feed screenshot
3. **screenshot2.png** - Map view screenshot  
4. **screenshot3.png** - Location detail screenshot
5. **screenshot4.png** - Regional map screenshot
6. **screenshot5.png** - Profile screenshot
7. **screenshot6.png** - Friends management screenshot

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to repository Settings > Pages
4. Select "Deploy from a branch" and choose "main" branch
5. Your site will be available at `https://yourusername.github.io/repository-name`

## Customization

### Changing Colors

The main color scheme can be modified in `styles.css`:
- Background gradient: Lines 8-9
- Accent colors: Various throughout the file
- Text colors: White and gradient text

### Modifying Content

- **App title/subtitle**: Edit in `index.html` lines 15-18
- **Support email**: Change in `index.html` line 45
- **Screenshot captions**: Update in `index.html` lines 25-40

### Adding More Screenshots

1. Add new image files to the project directory
2. Add new `.screenshot-item` divs in `index.html` following the existing pattern
3. The CSS will automatically handle the responsive grid layout

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

This project is for the Drop app marketing and support website.
