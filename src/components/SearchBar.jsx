import React from 'react'

export default function SearchBar({ value, onChange }){
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Search..."
      className="bg-slate-800 text-slate-200 px-5 py-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
    />
  )
}
