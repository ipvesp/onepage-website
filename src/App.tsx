import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { BlogList } from './pages/BlogList';
import { Lab } from './pages/Lab';
import { Links } from './pages/Links';

// MDX File Import
import BanditPost from './posts/overthewire-bandit.mdx';
import { BlogPostWrapper } from './components/BlogPostWrapper';
import { ThemeProvider } from './components/ThemeContext';

export function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<BlogList />} />
            <Route path="lab" element={<Lab />} />
            <Route path="links" element={<Links />} />
            <Route path="blog/overthewire-bandit-ilk-7-seviye" element={
              <BlogPostWrapper title="OverTheWire Bandit: İlk 7 Seviye Çözümü" date="Jun 10, 2026">
                <BanditPost />
              </BlogPostWrapper>
            } />
            {/* Catch-all 404 Route: Redirect automatically to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
