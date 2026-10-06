import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Login from './Login';
import UserForm from './UserForm';
import FormikContactForm from './App.jsx';
import Parent from './Parent';
import MemoExample from './MemoExample';
import UseEffectDemo from './UseEffectDemo';
import Counter from './Counter';
import CounterMessage from './CounterMessage';
import FormList from './components/FormList';
import ReduxCounter from './ReduxCounter';
import BuggyCounter from './BuggyCounter';
import Icon from './components/Icon';
import { exercises } from './exercises';
import './App.css';

function Workspace() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const current = exercises.find((exercise) => exercise.path === pathname);
  const isOverview = pathname === '/' || pathname === '/home';
  const title = isOverview
    ? 'Overview'
    : pathname === '/profile'
      ? 'About this project'
      : current?.title || 'Page not found';
  useEffect(() => {
    document.title = `${title} · Learning Lab`;
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname, title]);
  const components = {
    '/login': <Login />,
    '/form': <UserForm />,
    '/formik': <FormikContactForm />,
    '/list': <FormList />,
    '/counter': <Counter />,
    '/redux-counter': (
      <>
        <ReduxCounter />
        <CounterMessage />
      </>
    ),
    '/memo': <MemoExample />,
    '/callback': <Parent />,
    '/effect': <UseEffectDemo />,
    '/buggy-counter': <BuggyCounter />,
  };
  return (
    <div
      className="workspace"
      onKeyDown={(event) => {
        if (event.key === 'Escape') setMenuOpen(false);
      }}
    >
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <aside
        className={`sidebar ${menuOpen ? 'is-open' : ''}`}
        id="workspace-navigation"
      >
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">
            <Icon name="layers" />
          </span>
          <span>
            Learning Lab
            <span className="brand-caption">FRONTEND INTERNSHIP</span>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <p className="nav-label">WORKSPACE</p>
          <NavLink
            to="/"
            end
            className={() => `nav-item ${isOverview ? 'active' : ''}`}
          >
            <Icon name="grid" />
            Overview
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <Icon name="user" />
            About the project
          </NavLink>
          {['Forms & data', 'State & hooks'].map((group) => (
            <div key={group}>
              <p className="nav-label">{group.toUpperCase()}</p>
              {exercises
                .filter((exercise) => exercise.group === group)
                .map((exercise) => (
                  <NavLink
                    key={exercise.path}
                    to={exercise.path}
                    className={({ isActive }) =>
                      `nav-item ${isActive ? 'active' : ''}`
                    }
                  >
                    <Icon name={exercise.icon} />
                    {exercise.shortTitle}
                  </NavLink>
                ))}
            </div>
          ))}
        </nav>
        <div className="sidebar-note">
          <span className="note-dot" />
          Built to learn. Made to try.
          <p>React exercises from my Focus Bear internship.</p>
        </div>
        <div className="sidebar-author">
          <span className="avatar">NS</span>
          <div>
            <strong>Nainika Sharma</strong>
            <span>Frontend development intern</span>
          </div>
        </div>
      </aside>
      {menuOpen && (
        <button
          className="menu-backdrop"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div className="workspace-body">
        <header className="topbar">
          <button
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="workspace-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
          <div className="breadcrumb">
            <span>Workspace</span>
            <Icon name="chevron" />
            <strong>{title}</strong>
          </div>
          <div className="topbar-meta">
            <span className="project-badge">INTERNSHIP PROJECT</span>
            <span className="avatar small">NS</span>
          </div>
        </header>
        <main id="main-content" className="main-content">
          {current && (
            <div className="exercise-heading">
              <Link to="/" className="back-link">
                <Icon name="arrow-left" />
                Back to overview
              </Link>
              <div className="eyebrow">{current.group}</div>
              <h1>{current.title}</h1>
              <p>{current.description}</p>
            </div>
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            {exercises.map((exercise) => (
              <Route
                key={exercise.path}
                path={exercise.path}
                element={
                  <div className="exercise-layout">
                    <section
                      className="demo-panel"
                      aria-label={`${exercise.title} exercise`}
                    >
                      {components[exercise.path]}
                    </section>
                    <aside className="guide-panel">
                      <span className="guide-icon">
                        <Icon name="spark" />
                      </span>
                      <h2>Try it yourself</h2>
                      <p>{exercise.instruction}</p>
                      <div className="guide-divider" />
                      <span className="eyebrow">WHAT THIS DEMONSTRATES</span>
                      <p>{exercise.concept}</p>
                      <span className="technology-tag">{exercise.tag}</span>
                    </aside>
                  </div>
                }
              />
            ))}
            <Route
              path="*"
              element={
                <section className="not-found">
                  <Icon name="compass" />
                  <h1>This page does not exist.</h1>
                  <p>
                    Choose an exercise from the sidebar or return to the
                    overview.
                  </p>
                  <Link to="/" className="button-link">
                    Back to overview
                    <Icon name="arrow" />
                  </Link>
                </section>
              }
            />
          </Routes>
          <footer className="page-footer">
            <span>
              Learning Lab <span className="footer-dot">·</span> Nainika Sharma
            </span>
            <span>Built with React & a little curiosity.</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Workspace />
    </BrowserRouter>
  );
}
