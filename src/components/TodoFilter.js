'use client'

export default function TodoFilter({ activeFilter, onFilterChange }) {
  const FILTERS = [
    { value: 'all', label: '📋 All', icon: '📋' },
    { value: 'active', label: '⏳ Active', icon: '⏳' },
    { value: 'completed', label: '✅ Completed', icon: '✅' },
  ]

  return (
    <div className="px-6 py-4 bg-gray-50 border-b flex gap-2 flex-wrap">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          onClick={() => onFilterChange(f.value)}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            activeFilter === f.value
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
