export const exercises = [
  {
    path: '/form',
    title: 'User form',
    shortTitle: 'User form',
    group: 'Forms & data',
    icon: 'form',
    tag: 'Formik + Yup',
    description: 'A name and email form with validation before submission.',
    instruction:
      'Submit an empty form, try a one-character name, then enter a valid name and email.',
    concept:
      'Formik tracks values and touched fields. Yup checks the name length and email format.',
  },
  {
    path: '/formik',
    title: 'Contact form',
    shortTitle: 'Contact form',
    group: 'Forms & data',
    icon: 'form',
    tag: 'Formik + Yup',
    description:
      'A second Formik exercise with an inline confirmation and form reset.',
    instruction:
      'Enter at least two characters for your name and a valid email. Submit to see the confirmation and cleared fields.',
    concept:
      'Schema validation, accessible field errors, and resetting the form after submission.',
  },
  {
    path: '/list',
    title: 'List builder',
    shortTitle: 'List builder',
    group: 'Forms & data',
    icon: 'list',
    tag: 'useState',
    description:
      'Add items to a list using a controlled input and React state.',
    instruction:
      'Type an item and select Add. Add another item, then try submitting only spaces.',
    concept:
      'Controlled inputs, form submission, blank-input handling, and rendering arrays. Items last until this page unmounts.',
  },
  {
    path: '/login',
    title: 'API login',
    shortTitle: 'API login',
    group: 'Forms & data',
    icon: 'lock',
    tag: 'Axios + i18next',
    description:
      'The existing ReqRes login exercise, with loading and response messages.',
    instruction:
      'Configure a ReqRes demo API key to send a request. Switch between English and Spanish to try the translated form.',
    concept:
      'Axios requests and interceptors, token storage, asynchronous UI states, and translated labels. This demo does not restrict access to the exercises.',
  },
  {
    path: '/counter',
    title: 'Local counter',
    shortTitle: 'Local counter',
    group: 'State & hooks',
    icon: 'counter',
    tag: 'useState',
    description:
      'Increase and decrease a component-level counter that stops at zero.',
    instruction:
      'Select Increase a few times, then Decrease. The value cannot drop below zero.',
    concept:
      'Functional state updates and a lower-bound check. The counter resets when you leave this page.',
  },
  {
    path: '/redux-counter',
    title: 'Redux counter',
    shortTitle: 'Redux counter',
    group: 'State & hooks',
    icon: 'shared',
    tag: 'Redux Toolkit',
    description: 'Two components read the same counter from the Redux store.',
    instruction:
      'Increase the value to five to change the message. Navigate away and return: the value is retained until a page reload.',
    concept:
      'Redux actions, reducers, and selectors. The reducer also prevents the value from dropping below zero.',
  },
  {
    path: '/memo',
    title: 'Memoized calculation',
    shortTitle: 'useMemo',
    group: 'State & hooks',
    icon: 'bolt',
    tag: 'useMemo',
    description:
      'Calculate the sum of numbers from 1 to 10,000 and reuse the result.',
    instruction:
      'Select Re-render to update the click count. The sum stays at 50,005,000. Check the console to see when the calculation runs.',
    concept:
      'useMemo caches the calculation while its numbers dependency stays unchanged.',
  },
  {
    path: '/callback',
    title: 'Stable callbacks',
    shortTitle: 'useCallback',
    group: 'State & hooks',
    icon: 'code',
    tag: 'useCallback + memo',
    description:
      'A parent counter and a memoized child share a stable callback.',
    instruction:
      'Increase the parent count, then select Click Me in the child. Check the console for the child render and click messages.',
    concept:
      'useCallback preserves the function reference so React.memo can skip an unchanged child.',
  },
  {
    path: '/effect',
    title: 'Effects & cleanup',
    shortTitle: 'useEffect',
    group: 'State & hooks',
    icon: 'refresh',
    tag: 'useEffect + fetch',
    description:
      'Fetch a sample post and toggle a child component to observe cleanup.',
    instruction:
      'Select Fetch Data to request post 1 from JSONPlaceholder. Toggle the child and check the console for mount and cleanup messages.',
    concept:
      'Mount effects, cleanup on unmount, and a button-triggered fetch. The post request needs internet access.',
  },
  {
    path: '/buggy-counter',
    title: 'Interval counter',
    shortTitle: 'Interval counter',
    group: 'State & hooks',
    icon: 'clock',
    tag: 'useEffect',
    description:
      'The corrected stale-closure exercise: a counter that advances every second.',
    instruction:
      'Watch the count increase once per second. Leave the page to stop its interval; return to restart from zero.',
    concept:
      'A functional state update reads the latest count. The cleanup function clears the interval on unmount.',
  },
];
