import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from './components/Icon';
import { exercises } from './exercises';
const featuredPaths = [
  '/formik',
  '/counter',
  '/redux-counter',
  '/memo',
  '/list',
  '/effect',
];
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="overview-heading">
        <div>
          <div className="eyebrow">MY FRONTEND WORKSPACE</div>
          <h1>A little practice. A lot of learning.</h1>
          <p>
            Explore the React exercises I built during my Focus Bear internship.
          </p>
        </div>
        <span className="outline-badge">
          <span className="note-dot" />
          React portfolio
        </span>
      </div>
      <section className="hero-card">
        <div className="hero-copy">
          <span className="hero-kicker">
            <Icon name="spark" />
            LEARN BY BUILDING
          </span>
          <h2>
            Hello, Focus Bear.
            <br />
            Welcome to my lab.
          </h2>
          <p>
            Forms that validate. State that updates.
            <br />
            Small, interactive examples of the concepts
            <br className="desktop-break" /> I put into practice.
          </p>
          <a href="#exercises" className="button-link light-button">
            Explore exercises
            <Icon name="arrow" />
          </a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="art-chip chip-top">
            <Icon name="check" />
            Learn. Build. Repeat.
          </span>
          <div className="mini-window">
            <div className="window-bar">
              <span />
              <span />
              <span />
              <span className="window-title">my-learning.jsx</span>
            </div>
            <div className="window-content">
              <span className="code-comment">
                {'// One concept at a time.'}
              </span>
              <p>
                <span className="code-purple">const</span> learning = {'{'}
              </p>
              <p className="code-indent">
                curiosity: <span className="code-green">true</span>,
              </p>
              <p className="code-indent">
                practice: <span className="code-yellow">{"'every day'"}</span>,
              </p>
              <p className="code-indent">
                builtWith: <span className="code-yellow">{"'React'"}</span>
              </p>
              <p>{'}'};</p>
              <div className="window-result">
                <span className="note-dot" />
                Ready to explore
              </div>
            </div>
          </div>
          <span className="art-chip chip-bottom">
            <Icon name="code" />
            Made by Nainika
          </span>
        </div>
      </section>
      <section className="stats-grid" aria-label="Project at a glance">
        <div>
          <span className="stat-icon violet">
            <Icon name="grid" />
          </span>
          <div>
            <strong>{exercises.length}</strong>
            <span>Interactive exercises</span>
          </div>
        </div>
        <div>
          <span className="stat-icon mint">
            <Icon name="layers" />
          </span>
          <div>
            <strong>3</strong>
            <span>Dedicated hook demos</span>
          </div>
        </div>
        <div>
          <span className="stat-icon peach">
            <Icon name="form" />
          </span>
          <div>
            <strong>2</strong>
            <span>Formik validation demos</span>
          </div>
        </div>
      </section>
      <section id="exercises" className="exercise-catalogue">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE THE WORK</span>
            <h2>Pick an exercise</h2>
          </div>
          <span>Try it. See what changes.</span>
        </div>
        <div className="exercise-grid">
          {featuredPaths.map((path, index) => {
            const exercise = exercises.find((item) => item.path === path);
            return (
              <Link to={path} className="exercise-card" key={path}>
                <div className="card-top">
                  <span className={`card-icon tone-${index % 3}`}>
                    <Icon name={exercise.icon} />
                  </span>
                  <span className="card-index">0{index + 1}</span>
                </div>
                <h3>{exercise.title}</h3>
                <p>{exercise.description}</p>
                <div className="card-bottom">
                  <span>{exercise.tag}</span>
                  <span className="card-arrow">
                    <Icon name="arrow" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <p className="catalogue-hint">
          More exercises in the sidebar: user form, API login, useCallback, and
          the interval counter.
        </p>
      </section>
      <section className="notes-banner">
        <span className="notes-icon">
          <Icon name="book" />
        </span>
        <div>
          <h2>The learning behind the code</h2>
          <p>
            The repository includes reflections on Git, clean code, testing, and
            development tools.
          </p>
        </div>
        <button
          className="secondary-button"
          onClick={() => navigate('/profile')}
        >
          Go to Profile
          <Icon name="arrow" />
        </button>
      </section>
    </>
  );
}
