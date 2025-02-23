# DirectDemocracy D5

This is the codebase for DirectDemocracy D5—a scalable, secure, and modular direct democracy platform built with React and Firebase.

## Features

- Responsive, card-based design
- Secure user registration (with future BankID integration)
- Real-time voting components (including both unweighted and weighted results)
- Multi-language support via i18next
- ESLint and Prettier for code quality
- Documentation files located in the /docs folder

## Initial Setup

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/DD3n/D5.git
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   cd D5
   npm install
   \`\`\`

3. **Configure Firebase:**
   - Update the .env file with your Firebase project info (API key, project ID, etc.).

4. **Run the development server:**
   \`\`\`bash
   npm start
   \`\`\`

## Next Steps

- Implement user registration and authentication with Firebase.
- Develop the weighted voting system (1000 points per user).
- Integrate dynamic charts to display results.
- Build an admin panel for managing proposals.
- Test thoroughly and gather user feedback.
