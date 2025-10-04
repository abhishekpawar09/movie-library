import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import { fetchPopular, searchMovies } from '../api/tmdb'
import useDebounced from '../hooks/useDebounced'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../store/watchlistSlice'

export default function Home(){
  const [query, setQuery] = useState('')
  const debounced = useDebounced(query, 450)
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const watchlist = useSelector(state => state.watchlist.list)
  const dispatch = useDispatch()

  useEffect(() => {
    let mounted = true
    async function load(){
      setLoading(true); setError(null)
      try{
        const data = debounced 
          ? await searchMovies(debounced, page) 
          : await fetchPopular(page)
        if (mounted) {
          setMovies(data.results || [])
          setTotalPages(data.total_pages || 1)
        }
      }catch(e){ setError('Failed to load movies') }
      finally{ if (mounted) setLoading(false) }
    }
    load()
    return () => { mounted = false }
  }, [debounced, page])

  const toggle = (m) => {
    const exists = watchlist.some(w => w.id === m.id)
    if (exists) dispatch(remove(m.id))
    else dispatch(add({ id: m.id, title: m.title, poster_path: m.poster_path, release_date: m.release_date, vote_average: m.vote_average }))
  }

  return (
    <div>
      
      <div className="flex items-center justify-between mb-6 gap-4">
        <SearchBar value={query} onChange={setQuery} />
        <div className="text-sm text-slate-400">Page {page} / {totalPages}</div>
      </div>

      {loading && <div className="text-center py-10 text-slate-400">Loading...</div>}
      {error && <div className="text-red-400">{error}</div>}

      {!loading && !error && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {movies.map(m => (
              <MovieCard key={m.id} movie={m} isSaved={watchlist.some(w=>w.id===m.id)} onToggle={toggle} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={() => setPage(p => Math.max(1, p-1))}
              disabled={page === 1}
              className="px-4 py-2 rounded bg-slate-800 text-slate-300 disabled:opacity-40"
            >
              Prev
            </button>
            <button 
              onClick={() => setPage(p => Math.min(totalPages, p+1))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded bg-slate-800 text-slate-300 disabled:opacity-40"
            >
              Next
            </button>
          </div>

          {/* Separator line above footer */}
          <hr className="my-8 border-slate-800" />

          <div className='footer flex-auto text-center text-slate-500 text-s mt-6 mb-4 '>
            <p>© 2023 Movie Library. All rights reserved.</p>
          </div>
        </>
      )}
    </div>
  )
}
