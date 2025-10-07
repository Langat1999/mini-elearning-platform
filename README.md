 # Mini E-Learning Platform

## Overview

This is a prototype of a mini e-learning platform designed to demonstrate core functionalities of an online learning system. Built using vanilla HTML, CSS, and JavaScript, it provides a clean, responsive interface for users to explore courses, track progress, and manage their learning journey.

## Features

### Core Functionality
- **User Authentication**: Simple username-based login system with local storage persistence
- **Course Catalog**: Browse available courses with detailed descriptions and categories
- **Lesson Management**: View course-specific lessons with individual completion tracking
- **Progress Tracking**: Visual progress bars showing completion percentage for each course
- **Search & Filter**: Real-time search functionality and category-based filtering

### User Experience
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Interactive Elements**: Hover effects and smooth transitions for enhanced usability
- **Intuitive Navigation**: Easy navigation between login, course list, and detail views

### Technical Features
- **Local Storage**: Client-side data persistence for user sessions and progress
- **Dynamic Rendering**: JavaScript-powered content generation and updates
- **Modular Architecture**: Separated concerns with dedicated HTML, CSS, and JS files

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox for layouts
- **Data Management**: Browser Local Storage API
- **Browser Compatibility**: Modern browsers with ES6 support

## Project Structure

```
mini-elearning-platform/
├── index.html          # Login page
├── courses.html        # Course listing page
├── course.html         # Course detail page
├── script.js           # Application logic
├── style.css           # Styling and responsive design
└── README.md           # Project documentation
```

## Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Running the Application

1. **Download/Clone the Repository**
   ```bash
   git clone <repository-url>
   cd mini-elearning-platform
   ```

2. **Launch the Application**
   - Open `index.html` in your preferred web browser
   - Alternatively, serve the files using a local web server for better compatibility

3. **Access the Platform**
   - Enter any username to log in
   - Start exploring courses and tracking progress

## Usage Guide

### Getting Started
1. **Login**: Enter a username on the login page
2. **Browse Courses**: View available courses on the main dashboard
3. **Search & Filter**: Use the search bar or category dropdown to find specific courses

### Course Management
1. **View Details**: Click "View Details" on any course card
2. **Track Progress**: Monitor completion status with visual progress indicators
3. **Mark Completion**: Toggle lesson completion status individually

### Navigation
- Use the "Back to Courses" button to return to the main listing
- Logout functionality clears user session data

## Data Model

### Course Structure
```javascript
{
  id: number,
  title: string,
  description: string,
  category: string,
  lessons: [
    {
      id: number,
      title: string,
      completed: boolean
    }
  ]
}
```

### User Data Storage
- **User Session**: Stored as `vibeUser` in localStorage
- **Course Completion**: Array of completed course IDs
- **Lesson Progress**: Object mapping course IDs to arrays of completed lesson IDs

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Development Notes

### Code Quality
- Modular JavaScript functions for maintainability
- Semantic HTML structure
- CSS custom properties for consistent theming
- Responsive breakpoints for mobile optimization

### Performance Considerations
- Lightweight vanilla JavaScript implementation
- Minimal DOM manipulation for optimal rendering
- Efficient local storage usage

## Future Enhancements

### Planned Features
- User registration and profile management
- Course enrollment system
- Quiz and assessment modules
- Discussion forums
- Certificate generation
- Admin dashboard for content management

### Technical Improvements
- Backend API integration
- Database persistence
- User authentication with JWT
- Progressive Web App (PWA) capabilities
- Accessibility enhancements (ARIA labels, keyboard navigation)

## Contributing

This is an educational prototype. For contributions:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built as part of VibeCoding Week 1 assignment
- Demonstrates fundamental web development concepts
- Inspired by modern e-learning platforms

---

**Note**: This is a frontend-only prototype using local storage. For production use, implement proper backend services and secure authentication.
