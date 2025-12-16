# Transport Layer & Networking Quiz

A professional, interactive quiz application for testing knowledge on Transport Layer, TCP/UDP, DNS, HTTP, and Network Hardware/Media. Built for GitHub Pages deployment.

## Features

- ✅ **110 Multiple Choice Questions** covering transport layer protocols, networking devices, and media
- 🔀 **Randomized Answer Choices** - A/B/C/D positions shuffle on every attempt
- 📊 **Instant Scoring** with detailed results
- 🔍 **Review Wrong Answers** to learn from mistakes
- 💾 **Auto-save Progress** using localStorage (optional)
- 📱 **Responsive Design** - works on desktop, tablet, and mobile
- ⚙️ **Flexible Settings** - choose question count, shuffle order
- 🎨 **Modern Dark UI** with smooth animations

## Quick Start

### Option 1: Deploy to GitHub Pages

1. **Create a new repository** on GitHub
2. **Upload all files** from this project to your repository:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `questions.js`
   - `README.md`
3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Under "Source", select `main` branch and `/ (root)` folder
   - Click Save
4. **Access your quiz** at: `https://yourusername.github.io/repositoryname/`

### Option 2: Run Locally

1. Download all project files
2. Open `index.html` in any modern web browser
3. No build process or server required!

## File Structure

```
quiz/
├── index.html          # Main HTML structure
├── styles.css          # Modern dark theme styles
├── app.js              # Quiz logic & answer randomization
├── questions.js        # 110 MCQ questions with answers
└── README.md           # This file
```

## Usage

1. **Configure Settings**:
   - Select number of questions (10, 20, 50, or all)
   - Enable/disable question shuffling
   - Toggle progress auto-save

2. **Take the Quiz**:
   - Answer choices are randomized per question
   - Navigate using Previous/Next buttons
   - Your progress is saved automatically (if enabled)

3. **Review Results**:
   - View your score and statistics
   - Review wrong answers with correct solutions
   - Retake with newly shuffled questions

## Technologies

- **Pure HTML/CSS/JavaScript** - No frameworks required
- **LocalStorage API** - For optional progress saving
- **CSS Grid & Flexbox** - Modern responsive layout
- **Fisher-Yates Shuffle** - For true randomization

## Customization

### Add/Edit Questions

Edit `questions.js`:

```javascript
{
  id: 111,
  question: "Your question here?",
  choices: ["Option 1", "Option 2", "Option 3", "Option 4"],
  correct: 1 // Index of correct answer (0-3)
}
```

### Change Theme Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --primary: #6c8cff;
  --bg: #0f1220;
  --card: #171a2b;
  /* ... */
}
```

## Browser Compatibility

- ✅ Chrome/Edge (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Mobile browsers

## License

Free to use for educational purposes.

## Credits

Built for studying Transport Layer & Networking concepts.

---
By : Marwan Mokhtar
