# Zorvyn

A modern, responsive financial dashboard application built with React, designed to help users track their income, expenses, and financial insights in a user-friendly interface.

## Features

- **Dashboard Overview**: View key financial metrics including total balance, income, and expenses through intuitive summary cards.
- **Interactive Charts**: Visualize spending trends with line charts for balance over time and pie charts for expense breakdown by category.
- **Transaction Management**: Browse, search, and filter transactions by category and type (income/expense). Export data to CSV or JSON formats.
- **Insights**: Get personalized insights on spending patterns, highlighting the top expense category.
- **Role-Based Access**: Admin users can add new income and expense transactions directly from the dashboard.
- **Data Persistence**: Transactions are stored locally using browser local storage for seamless user experience.
- **Responsive Design**: Optimized for desktop and mobile devices using Tailwind CSS and DaisyUI components.
- **Mock API Integration**: Includes a mock API for initial data loading and demonstration purposes.

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, DaisyUI
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Linting**: ESLint
- **Package Manager**: npm

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RAHUL-KAR-Kalyani/zorvyn-test.git
   cd zorvyn-test
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173` (default Vite port).

## Usage

- **Viewing Dashboard**: Upon loading, the dashboard displays summary cards, charts, transaction list, and insights based on available data.
- **Adding Transactions** (Admin Role): Use the "+ Add Income Transaction" or "+ Add Expense Transaction" buttons to add sample transactions.
- **Searching and Filtering**: Use the search bar to filter transactions by category and the dropdown to filter by type (all, income, expense).
- **Exporting Data**: Click the "CSV" or "JSON" buttons to download transaction data.
- **Data Persistence**: All changes are automatically saved to local storage and persist across sessions.

## Project Structure

```
zorvyn/
├── public/                 # Static assets
├── src/
│   ├── api/                # Mock API functions
│   ├── assets/             # Asset files
│   ├── components/         # Reusable UI components
│   │   ├── Charts.jsx      # Chart visualizations
│   │   ├── Insights.jsx    # Financial insights
│   │   ├── SummaryCards.jsx # Summary metrics cards
│   │   └── Transactions.jsx # Transaction table and controls
│   ├── pages/              # Page components
│   │   └── Dashboard.jsx   # Main dashboard page
│   ├── utils/              # Utility functions
│   │   ├── export.js       # Data export utilities
│   │   └── storage.js      # Local storage helpers
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
└── README.md               # Project documentation
```

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run lint`: Run ESLint for code quality checks
- `npm run preview`: Preview the production build locally


## Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/)
- Charts powered by [Recharts](https://recharts.org/)
- Icons and animations by [Framer Motion](https://www.framer.com/motion/)