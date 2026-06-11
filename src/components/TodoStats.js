'use client'

export default function TodoStats({ todos }) {
  const total = todos.length
  const completed = todos.filter((t) => t.completed).length
  const active = total - completed
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100)

  const highPriority = todos.filter((t) => t.priority === 'high' && !t.completed).length
  const overdueTodos = todos.filter(
    (t) => t.dueDate && !t.completed && new Date(t.dueDate) < new Date()
  ).length

  return (
    <div className="px-6 py-6 bg-gradient-to-r from-indigo-50 to-blue-50 border-b">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-600 font-semibold">📊 Total Tasks</p>
          <p className="text-2xl font-bold text-gray-800">{total}</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-600 font-semibold">⏳ Active</p>
          <p className="text-2xl font-bold text-orange-600">{active}</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-600 font-semibold">✅ Completed</p>
          <p className="text-2xl font-bold text-green-600">{completed}</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-600 font-semibold">🎯 Progress</p>
          <p className="text-2xl font-bold text-indigo-600">{progress}%</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-indigo-600 to-blue-600 h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {(highPriority > 0 || overdueTodos > 0) && (
        <div className="mt-4 space-y-2">
          {highPriority > 0 && (
            <div className="px-3 py-2 bg-red-100 text-red-800 rounded-lg text-sm font-semibold">
              🔴 {highPriority} high priority task{highPriority > 1 ? 's' : ''}
            </div>
          )}
          {overdueTodos > 0 && (
            <div className="px-3 py-2 bg-orange-100 text-orange-800 rounded-lg text-sm font-semibold">
              ⚠️ {overdueTodos} overdue task{overdueTodos > 1 ? 's' : ''}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
