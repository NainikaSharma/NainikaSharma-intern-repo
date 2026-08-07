import React, { useEffect, useState } from 'react';

function UseEffectDemo() {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(true);

  // ✅ Runs on mount + cleanup on unmount
  useEffect(() => {
    console.log('🟢 Component Mounted');

    return () => {
      console.log('🔴 Component Unmounted');
    };
  }, []);

  // ✅ Fetch data when button is clicked
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
      );
      const result = await response.json();
      setData(result);
      console.log('📦 Data fetched:', result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>useEffect Demo</h2>

      <button onClick={fetchData}>Fetch Data</button>

      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}

      <hr />

      <button onClick={() => setShow(!show)}>Toggle Component</button>

      {show && <Child />}
    </div>
  );
}

// Child component to demonstrate unmount cleanup
function Child() {
  useEffect(() => {
    console.log('👶 Child Mounted');

    return () => {
      console.log('💀 Child Unmounted (cleanup executed)');
    };
  }, []);

  return <p>Child Component is mounted</p>;
}

export default UseEffectDemo;
