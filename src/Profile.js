import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './components/Icon';
export default function Profile() {
  return (
    <>
      <div className="exercise-heading">
        <div className="eyebrow">ABOUT THIS PROJECT</div>
        <h1>From concepts to working examples.</h1>
        <p>A record of my frontend development practice at Focus Bear.</p>
      </div>
      <section className="profile-card">
        <span className="profile-avatar">NS</span>
        <div>
          <span className="eyebrow">THE DEVELOPER</span>
          <h2>Nainika Sharma</h2>
          <p>Frontend development intern · Focus Bear</p>
        </div>
        <a
          href="https://github.com/NainikaSharma/NainikaSharma-intern-repo"
          target="_blank"
          rel="noreferrer"
          className="secondary-button"
        >
          View repository
          <Icon name="arrow" />
        </a>
      </section>
      <div className="about-grid">
        <section className="about-panel">
          <Icon name="code" />
          <h2>What I built</h2>
          <p>
            This workspace brings together the routing, forms, counters, list
            building, and React hook exercises in this repository.
          </p>
          <div className="tag-list">
            {[
              'React',
              'JavaScript',
              'React Router',
              'Formik',
              'Yup',
              'Redux Toolkit',
              'Axios',
              'i18next',
              'Tailwind CSS',
            ].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <Link to="/formik" className="text-link">
            Try the contact form
            <Icon name="arrow" />
          </Link>
        </section>
        <section className="about-panel">
          <Icon name="book" />
          <h2>Written reflections</h2>
          <p>
            The original Markdown files remain in the project folder. They
            document the work behind these exercises.
          </p>
          <ul className="document-list">
            <li>
              <span>Git workflows</span>
              <code>git_understanding.md</code>
            </li>
            <li>
              <span>Clean code</span>
              <code>clean_code.md</code>
            </li>
            <li>
              <span>Testing</span>
              <code>UnitTestingReflection.md</code>
            </li>
            <li>
              <span>Development tools</span>
              <code>vs_code_productivity.md</code>
            </li>
          </ul>
        </section>
      </div>
      <section className="scope-note">
        <Icon name="compass" />
        <div>
          <h2>How to review the project</h2>
          <p>
            Use the sidebar to try each exercise. Local forms, counters, and
            lists run in your browser. The API login and sample post request use
            external services; the README explains their configuration and
            limits.
          </p>
        </div>
      </section>
    </>
  );
}
