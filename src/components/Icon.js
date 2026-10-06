import React from 'react';
import PropTypes from 'prop-types';
const paths = {
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
    </>
  ),
  form: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="3" />
      <path d="M8 8h8M8 12h8M8 16h4" />
    </>
  ),
  list: <path d="M9 6h12M9 12h12M9 18h12M3 6h1M3 12h1M3 18h1" />,
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="3" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
    </>
  ),
  counter: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M7 8h4M9 6v4M14 16h4" />
    </>
  ),
  shared: (
    <>
      <circle cx="12" cy="12" r="3" />
      <circle cx="4" cy="4" r="2" />
      <circle cx="20" cy="4" r="2" />
      <circle cx="12" cy="21" r="2" />
      <path d="m6 6 4 4m8-4-4 4m-2 5v4" />
    </>
  ),
  bolt: <path d="m13 2-9 12h7l-1 8 10-12h-7l1-8Z" />,
  refresh: (
    <path d="M20 7a9 9 0 0 0-15 0M4 3v5h5M4 17a9 9 0 0 0 15 0m1 4v-5h-5" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  'arrow-left': <path d="M19 12H5m5-5-5 5 5 5" />,
  chevron: <path d="m9 6 6 6-6 6" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  check: <path d="m5 12 4 4L19 6" />,
  code: <path d="m7 7-5 5 5 5m10-10 5 5-5 5m-4-13-2 18" />,
  book: (
    <path d="M12 5v16M3 3c4-1 7 0 9 2 2-2 5-3 9-2v16c-4-1-7 0-9 2-2-2-5-3-9-2V3Z" />
  ),
  spark: (
    <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m16 8-3 5-5 3 3-5 5-3Z" />
    </>
  ),
};
export default function Icon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="icon"
    >
      {paths[name] || paths.code}
    </svg>
  );
}
Icon.propTypes = { name: PropTypes.string.isRequired };
