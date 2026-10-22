import { Navigate, Route, Routes } from 'react-router-dom'
import PageLayout from './components/PageLayout.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Intro from './pages/Intro.jsx'
import Mood from './pages/Mood.jsx'
import Scrapbook from './pages/Scrapbook.jsx'
import Today from './pages/Today.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route element={<PageLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/today" element={<Today />} />
        <Route path="/scrapbook" element={<Scrapbook />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
