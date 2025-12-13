import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './components/common/DashboardLayout'
import Dashboard from './components/dashboard/Home'
import CreateTask from './components/tasks/CreateTask'
import UpdateTask from './components/tasks/UpdateTask'
import ViewTasks from './components/tasks/ViewTasks'
import Signup from './pages/signup'
import Login from './pages/login'

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<DashboardLayout />}/>
          <Route path="signup" element={<Signup />}  />
          <Route path="login" element={<Login />}  />

          <Route path="/" element={<DashboardLayout />}>

          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create-task" element={<CreateTask />} />
          <Route path="update-task" element={<UpdateTask />} />
          <Route path="view-tasks" element={<ViewTasks />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App