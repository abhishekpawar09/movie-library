import React from 'react'
import { imgUrl } from '../api/tmdb'

export default function MovieCard({ movie, isSaved, onToggle }){
  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden shadow hover:shadow-lg transform transition duration-300 hover:scale-105">
      <img src={imgUrl(movie.poster_path)} alt={movie.title} className="w-full h-64 object-cover" />
      <div className="p-3">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm font-semibold line-clamp-2">{movie.title}</h3>
          <span className="text-xs text-white-400 ml-2">⭐ {movie.vote_average?.toFixed(1) || "NA"}</span>
        </div>
        {/* short description */}
        <p className="text-xs text-slate-300 mb-3 mt-2 line-clamp-3">{movie.overview || "No description available."}</p>
        {/* extra info */}
        <p className="text-xs text-slate-400 mb-2">
          {movie.release_date ? movie.release_date.slice(0,4) : "N/A"} | {movie.media_type ? movie.media_type.charAt(0).toUpperCase() + movie.media_type.slice(1) : "Movie"}
        </p>
        <button
          onClick={() => onToggle(movie)}
          className={`w-full text-sm py-1.5 rounded-lg ${isSaved ? 'bg-red-500 hover:bg-red-600' : 'bg-yellow-500 hover:bg-yellow-600'} text-white transition`}
        >
          {isSaved ? 'Remove' : 'Add to Watchlist'}
        </button>
      </div>
    </div>
  )
}
