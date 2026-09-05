# Chrome Developer Extensions Setup

I used Google Chrome for my development setup and installed the developer tools that I expect to be useful when working on the Focus Bear frontend.

## React Developer Tools

I installed **React Developer Tools** because Focus Bear's frontend is built with React.

The main thing I wanted from this extension was the ability to look at the application as React components rather than only looking at the HTML in Chrome's normal Elements tab.

I tested the Components panel and found that I could select a React component and inspect the props and state associated with it. This would be useful when a component is displaying something incorrectly because I can check what data the component is actually receiving.

For example, if a Focus Bear session card displayed the wrong session name or duration, I could use React Developer Tools to check whether the component received the wrong value or whether the problem occurred inside the component itself.

I also looked at the Profiler, which can be used to investigate React rendering. I think this will be more useful when investigating a performance issue than during normal frontend development.

## Redux DevTools

I installed **Redux DevTools** to make Redux state easier to inspect while debugging.

The useful part for me is being able to see the actions being dispatched and how the application state changes after those actions.

For example, if a setting in the Focus Bear frontend is not updating correctly, I can check whether the expected Redux action was dispatched and whether the state actually changed. This gives me more information than simply looking at the final UI.

I also learned that Redux DevTools is not something I would need for every React problem. If the problem is caused by local component state, React Developer Tools would be more relevant.

## JSON Viewer

I installed a **JSON Viewer** to make API responses easier to read.

Without formatting, a large JSON response can be difficult to inspect because everything can appear as one long block of text. The viewer makes nested objects and arrays easier to navigate.

I think this will be useful when working on frontend features that communicate with the backend. If a UI element is not showing the expected information, I can first look at the API response and check whether the required data is actually being returned.

For example, if the frontend expects a field such as a session duration but the API response does not contain it, I know the problem is not simply a React rendering issue.

## Lighthouse

I also looked at **Lighthouse** for checking the quality of web pages.

One thing I found during this setup was that Lighthouse is already available through Chrome DevTools, so I do not need to install a separate Lighthouse extension.

I ran through the Lighthouse interface and looked at the types of audits it provides, including performance and accessibility.

I think the accessibility checks will be particularly useful when working on frontend features. A component can look correct to me while still having problems such as poor contrast, missing accessible information, or buttons that are not properly identified.

Performance audits could also help when investigating a page that takes too long to load or has inefficient frontend behaviour.

## What I Found Most Useful

The most useful thing I learned was that these tools help me investigate a frontend problem from different points rather than immediately changing the React code.

For example, if information is missing from a Focus Bear screen, I could investigate it in this order:

1. **JSON Viewer** — check whether the backend returned the expected data.
2. **Redux DevTools** — check whether the data was stored or changed correctly if Redux is involved.
3. **React Developer Tools** — check whether the correct props and state reached the component.
4. **Chrome DevTools** — check the actual rendered HTML, CSS, and browser behaviour.
5. **Lighthouse** — use it separately if the issue is related to performance or accessibility.

This was more useful to me than simply installing the extensions because it gave me a clearer idea of **which tool I should use when something goes wrong**.

## What I Would Use Most at Focus Bear

For my frontend work at Focus Bear, I expect **React Developer Tools** to be the tool I use most often because I will be working with React components.

I would use **Redux DevTools** when I am investigating a problem involving Redux state, and the **JSON Viewer** when I need to inspect data coming from an API.

I would use **Lighthouse** when I am specifically checking page performance or accessibility rather than as part of every normal debugging session.

Overall, setting these tools up has given me a better debugging workflow: instead of immediately editing code when something looks wrong, I can first inspect the data and state and work out where the problem is actually occurring.
