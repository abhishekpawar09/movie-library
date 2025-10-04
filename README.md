```
Movie Library (React + Vite + Redux)

A simple movie browsing app where users can:

- Browse popular movies (fetched from TMDB API).
- Search movies by title.
- Add movies to a Watchlist stored in localStorage.
- View and manage the Watchlist on a separate page.
- Remove movies from the Watchlist.
- Enjoy a clean, modern UI with TailwindCSS.



Setup & Run Locally
1. Clone the repo
    git clone https://github.com/abhishekpawar09/movie-library.git
    cd movie-library

2. Install dependencies
    npm install

3. Add TMDB API Key
    Create a .env file in the project root.
    Add your TMDB key (from The Movie Database):

    VITE_TMDB_KEY=your_tmdb_api_key_here

4. Run the development server
    npm run dev
    Visit: http://localhost:5173




Running Tests

This project currently doesn’t include automated test cases (unit/integration).
👉 You can test manually by:

- Running the app locally (npm run dev).
- Searching for a movie.
- Adding/removing it from the Watchlist.
- Refreshing the page to confirm persistence.



Assumptions & Design Choices

- API Key is public via VITE_TMDB_KEY because the app fetches data directly from TMDB on the client.
- State Management: Redux Toolkit is used for managing the Watchlist across components.
- Persistence: Watchlist is saved to localStorage so users don’t lose it on refresh.
- Routing: React Router is used for navigation between Browse and Watchlist.
- Styling: TailwindCSS chosen for quick modern styling.
- Error Handling: Simple loading/error states for API calls.
- Scalability: Components like MovieCard and SearchBar are reusable and modular.



📂 Project Structure:

movie-library/
├── src/
│   ├── api/           # TMDB API helpers
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level components (Home, Watchlist)
│   ├── store/         # Redux store & slice
│   ├── hooks/         # Custom hooks
│   ├── App.jsx        # Main app with routes
│   └── main.jsx       # Entry point
├── .env               # TMDB key
├── package.json
└── README.md
```

