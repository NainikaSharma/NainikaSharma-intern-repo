import React, { useEffect, useState } from 'react';
export default function UseEffectDemo() {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    console.log('Component Mounted');
    return () => {
      console.log('Component Unmounted');
    };
  }, []);
  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
      );
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const result = await response.json();
      setData(result);
      console.log('Data fetched:', result);
    } catch (err) {
      setError(
        `Could not fetch the sample post (${err.message}). Check your connection and try again.`
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h2>useEffect Demo</h2>
      <p>
        Request a sample post, then toggle the child to see its cleanup in the
        console.
      </p>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Fetching…' : 'Fetch Data'}
      </button>
      {error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}
      {data && (
        <div className="post-result">
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
      <hr />
      <button onClick={() => setShow(!show)} aria-pressed={show}>
        Toggle Component
      </button>
      {show && <Child />}
    </div>
  );
}
function Child() {
  useEffect(() => {
    console.log('Child Mounted');
    return () => {
      console.log('Child Unmounted (cleanup executed)');
    };
  }, []);
  return <p>Child Component is mounted</p>;
}
