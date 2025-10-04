import React from 'react'
import MovieCard from '../components/MovieCard'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../store/watchlistSlice'

export default function WatchlistPage(){
  const watchlist = useSelector(state => state.watchlist.list)
  const dispatch = useDispatch()

  const toggle = (m) => {
    const exists = watchlist.some(w => w.id === m.id)
    if (exists) dispatch(remove(m.id))
    else dispatch(add(m))
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">My Watchlist</h2>
      {watchlist.length === 0 ? (
        <div className="text-slate-400">Your watchlist is empty — add movies from the Browse page.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {watchlist.map(m => (
            <MovieCard key={m.id} movie={m} isSaved={true} onToggle={toggle} />
          ))}
        </div>
      )}
    </div>
  )
}
