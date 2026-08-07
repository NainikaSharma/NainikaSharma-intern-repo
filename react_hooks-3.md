**Understanding React Hooks: useEffect**

**What is useEffect and when is it used?**

\`useEffect\` is a React Hook used to handle side effects in functional components. Side effects include things like API calls, subscriptions, timers, logging, or directly interacting with the DOM. It runs after the component renders and helps manage operations that are outside the normal rendering flow.

In this task, I learned how \`useEffect\` runs on component mount, update, and unmount depending on the dependency array provided.

**What did I do in this task?**

\- Researched how \`useEffect\` works and its lifecycle behavior.

\- Created a React component that:

\- Logs a message when the component mounts.

\- Logs a message when the component unmounts using a cleanup function.

\- Fetches data from an API when a button is clicked.

\- Implemented cleanup function inside \`useEffect\` to avoid memory leaks.

\- Pushed the component code to GitHub.

**Reflection**

**When should you use useEffect instead of handling logic inside event handlers?**

\`useEffect\` should be used for side effects that happen automatically based on component lifecycle or state changes, such as API calls on load, subscriptions, or timers. Event handlers should be used for actions triggered by user interactions like button clicks. If the logic depends on rendering or state changes, \`useEffect\` is the correct choice.

**What happens if you don’t provide a dependency array?**

If you don’t provide a dependency array, \`useEffect\` runs after every render of the component. This can lead to unnecessary executions, repeated API calls, and performance issues.

**How can improper use of useEffect cause performance issues?**

Improper use of \`useEffect\`, such as missing dependency arrays or incorrect dependencies, can cause infinite re-renders, repeated API calls, memory leaks, and slow application performance. It may also lead to unexpected behavior if effects run more often than needed.

**What I Learned**

\- \`useEffect\` handles side effects in React functional components.

\- It runs after rendering and can be controlled using dependency arrays.

\- Cleanup functions help prevent memory leaks.

\- Proper dependency management is important for performance.

\- Separating event logic and side effects improves code structure and readability.
