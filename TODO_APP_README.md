# Todo List Application

A modern, feature-rich to-do list application with local storage functionality built with Next.js and React.

## ✨ Features

- ✅ Add, edit, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Local storage persistence
- ✅ Filter todos (All, Active, Completed)
- ✅ Search functionality
- ✅ Priority levels (High, Medium, Low)
- ✅ Due date tracking
- ✅ Beautiful modern UI
- ✅ Responsive design
- ✅ Dark/Light mode support (coming soon)

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit [http://localhost:3000/todo](http://localhost:3000/todo)

## 📁 Project Structure

```
src/app/
├── todo/
│   ├── page.js           # Main todo page
│   └── layout.js         # Todo layout
└── ...

src/components/
├── TodoApp.js            # Main todo component
├── TodoForm.js           # Add todo form
├── TodoItem.js           # Individual todo item
├── TodoList.js           # List of todos
├── TodoFilter.js         # Filter buttons
└── TodoStats.js          # Statistics display
```

## 🎯 How It Works

1. **Local Storage**: All todos are automatically saved to browser's local storage
2. **Add Todos**: Enter task name, priority, and due date
3. **Manage Todos**: Check off completed tasks or delete them
4. **Filter**: View all, active, or completed todos
5. **Search**: Find todos by keyword

## 🎨 UI Features

- Clean, modern interface
- Color-coded priority levels
- Progress indicator
- Smooth animations
- Mobile responsive
- Intuitive controls

## 💾 Data Structure

Todos are stored as JSON in localStorage with the following structure:

```javascript
{
  id: timestamp,
  title: "Task name",
  description: "Task details",
  completed: false,
  priority: "high", // high, medium, low
  dueDate: "2024-01-15",
  createdAt: timestamp,
  completedAt: null
}
```

## 🛠️ Technologies

- Next.js 14
- React 18
- Tailwind CSS
- LocalStorage API
- JavaScript

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

---

Built with ❤️ - A simple yet powerful todo application
