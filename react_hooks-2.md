# **useMemo Reflection**

## **How does useMemo improve performance?**

useMemo improves performance by caching the result of expensive calculations and only recomputing them when their dependencies change. This prevents unnecessary calculations during component re-renders and makes the application more efficient.

## **When should you avoid using useMemo?**

useMemo should be avoided for simple calculations that are inexpensive to compute. Overusing useMemo can make code more complex and may not provide any noticeable performance benefits. It is best used only when there is a proven performance issue.

## **What happens if you remove useMemo from your implementation?**

Without useMemo, expensive calculations will run on every component render, even when the input data has not changed. This can lead to unnecessary processing and reduced performance, especially in components that render frequently or work with large datasets.

## **What I Learned**

- How useMemo memoizes computed values.
- How it helps avoid unnecessary recalculations.
- The importance of optimizing expensive operations in React.
- When useMemo is useful and when it is unnecessary.
-
-
