import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ResumePage from './pages/ResumePage';
import OgCard from './pages/OgCard';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Legacy slugs — keep old links working on any host */}
        <Route
          path="/project/pms"
          element={<Navigate to="/project/placement-management-system" replace />}
        />
        <Route path="/project/prepcv2" element={<Navigate to="/project/prepcv" replace />} />

        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/og" element={<OgCard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
