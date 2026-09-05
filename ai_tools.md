# AI Tools for Development

## AI Tool I Tried

I used **GitHub Copilot** to experiment with AI-assisted software development. I tested it with three React-related tasks:

1. Generating a reusable React component.
2. Debugging a React state-update problem.
3. Explaining the React `useCallback` Hook.

I used the responses to evaluate whether Copilot was useful for writing code, debugging, and learning a technical concept.

## Experiment 1: Generating a Reusable React Component

### Prompt

> Create a reusable React component for displaying a focus session with the session name, duration, start button, and disabled state. Use functional components and basic CSS.

### Copilot's response

Copilot created a `FocusSession.jsx` component that accepts four props:

* `name` — the focus session name.
* `duration` — the session duration.
* `disabled` — controls whether the session can be started.
* `onStart` — callback executed when the Start Session button is clicked.

It also created a separate `FocusSession.css` file and provided an example showing how the component could be used.

The component used conditional rendering for the button text:

```javascript
{disabled ? "Unavailable" : "Start Session"}
```

and applied a different CSS class when the session was disabled:

```javascript
<div className={`session-card ${disabled ? "session-disabled" : ""}`}>
```

### What worked well

The response was useful because it produced a complete starting point rather than only providing an isolated code snippet. The component was reusable because the session name, duration, disabled state, and button behaviour were passed through props.

The response also separated the styling into its own CSS file, making the example easier to modify.

### What could be improved

The generated component was generic and did not account for the existing Focus Bear codebase. For example, it chose its own class names, styling, button text, and component structure. These decisions may not match Focus Bear's existing components or design system.

The generated code therefore demonstrates the structure of a possible solution, but I would need to inspect the existing codebase before using it in a real feature.

**Assessment:** Useful for quickly creating a starting implementation, but the generated code requires review and adaptation before being used in production.

---

## Experiment 2: Debugging a React State-Update Problem

### Prompt

I gave Copilot this code:

```javascript
const [count, setCount] = useState(0);

function increaseCount() {
    setCount(count + 1);
    setCount(count + 1);
}
```

I then asked:

> Why doesn't this increase the count by 2 when the button is clicked? Explain the problem and provide a corrected version.

### Copilot's response

Copilot explained that both calls use the same `count` value from the current render.

For example, if `count` is `0`, both statements effectively calculate:

```javascript
setCount(0 + 1);
setCount(0 + 1);
```

Therefore, both updates request the value `1` rather than the second update using the result of the first update.

Copilot suggested the functional update form:

```javascript
function increaseCount() {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
}
```

Each update receives the previous state value, allowing the two updates to produce `1` and then `2`.

### What worked well

This was the most useful of the three experiments because Copilot explained the reason for the unexpected behaviour instead of only replacing the code.

The example using `count = 0` made the problem concrete. It showed exactly why the two original calls both produce `1`.

The corrected version also demonstrated a React pattern that is useful when a new state value depends on the previous state.

### What could be improved

Copilot described React state updates as "asynchronous and batched." While batching is relevant, that description alone can give an incomplete understanding of the problem. The important point in this example is that the `count` variable used by both statements refers to the value from the current render.

I would therefore verify explanations like this against React's documentation rather than treating the AI's explanation as the final authority.

**Assessment:** Very useful for debugging because the response connected the observed behaviour to the specific code and provided a corrected implementation.

---

## Experiment 3: Learning React `useCallback`

### Prompt

> Explain React useCallback to me as a software engineering student. Explain why it is used, give me a small example, and explain when I should NOT use it.

### Copilot's response

Copilot explained that `useCallback` can preserve a function reference between renders until its dependencies change.

It identified three situations where it can be useful:

* Passing a callback to a memoised child component using `React.memo`.
* Maintaining a stable function reference for Hook dependencies.
* Avoiding unnecessary work associated with changing function references.

Copilot also provided a counter example where `increment` is wrapped with `useCallback`:

```javascript
const increment = useCallback(() => {
    setCount(c => c + 1);
}, []);
```

It also explained situations where `useCallback` should not automatically be used, such as when a function is simple and there is no performance problem that requires a stable function reference.

### What worked well

The response did more than explain the syntax. It explained why function references can matter in React and connected `useCallback` to `React.memo` and Hook dependencies.

The section explaining when **not** to use `useCallback` was particularly useful because it prevented me from treating the Hook as something that should be added to every function.

### What could be improved

The statement that "`useCallback` memoizes a function so React does not recreate it on every render" is a simplification. The more precise explanation is that `useCallback` returns the same function reference when its dependencies have not changed.

Also, the statement that `increment` is created "once" is overly simplified. The important behaviour is the stable returned function reference, not simply that the function is never created again.

**Assessment:** Useful for learning the concept, but technical explanations from AI still need to be checked for precision.

---

## What Worked Well Overall?

The three experiments showed different strengths of Copilot.

For **code generation**, Copilot produced a complete React component quickly. This reduced the amount of boilerplate I had to write manually.

For **debugging**, Copilot was able to explain the specific reason that the two `setCount(count + 1)` calls do not produce the expected result and provide the functional-update solution.

For **learning**, Copilot gave me an explanation of `useCallback`, an example, and situations where it should not be used.

The quality of the responses was also related to how specific the prompts were. Each experiment clearly specified the technology and task, which gave Copilot enough context to provide a targeted response.

## What Didn't Work Well?

The main limitation was that Copilot did not know the specific requirements and architecture of the Focus Bear application from the first prompt. The generated `FocusSession` component therefore used generic names and styling rather than Focus Bear's existing conventions.

The responses also contained simplified technical explanations. For example, the explanation of React state updates and the description of `useCallback` were useful, but some wording was less precise than an explanation based directly on React's documentation.

This means I should not treat AI-generated code or explanations as automatically correct. I need to understand the suggested code, check it against the project's requirements, and test it before using it.

## When Do I Think AI Is Most Useful for Coding?

Based on these experiments, I found AI most useful for **three specific situations**:

### 1. Creating a starting implementation

For a small, well-defined component, Copilot can produce the initial structure quickly. I can then modify it to match the existing project.

### 2. Investigating a specific bug

Providing the actual code and describing the unexpected behaviour allows Copilot to identify possible causes and explain them. This is more useful than asking a general question about an error.

### 3. Understanding unfamiliar technical concepts

Copilot can provide an initial explanation and example for concepts such as React Hooks. I can then verify the explanation and ask follow-up questions if something remains unclear.

## Overall Reflection

My experiments showed that Copilot is useful when I give it a specific development problem and use its response as a starting point.

The generated React component demonstrated how AI can reduce the time required to create an initial implementation. The state-update experiment showed that AI can help explain a specific bug. The `useCallback` experiment showed that AI can help me understand unfamiliar React concepts.

However, the experiments also showed why I should not copy AI-generated code directly into a production project. The generated component did not know Focus Bear's existing architecture or styling conventions, and some of the technical explanations used simplified wording.

For my Focus Bear development work, I would therefore use Copilot to **generate small pieces of code, investigate bugs, and explain unfamiliar React code**, while I remain responsible for reviewing, testing, and adapting the result to the actual codebase.
