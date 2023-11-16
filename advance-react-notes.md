## useState hook

1. returns an array with two elements: the current state value, and a function that we can use to update the state
2. accepts default value as an argument
3. state update triggers re-render

## Initial Render and Re-Renders

1. In a React application, the initial render is the first time that the component tree is rendered to the DOM. It happens when the application first loads, or when the root component is first rendered. This is also known as "mounting" the components.

2. Re-renders, on the other hand, happen when the component's state or props change, and the component needs to be updated in the DOM to reflect these changes. React uses a virtual DOM to optimize the process of updating the actual DOM, so that only the necessary changes are made.

3. There are a few ways that you can trigger a re-render in a React component:
   1. By changing the component's state or props. When the component's state or props change, React will re-render the component to reflect these changes.
   2. When the parent element re-renders, even if the component's state or props have not changed.

## General Rules of Hooks

1. starts with "use" (both -react and custom hooks)
2. component must be uppercase
3. invoke inside function/component body
4. don't call hooks conditionally. Following is prohibited

   ```js
   if (true) {
     const [count, setCount] = useState(0);
   }
   ```

5. set functions don't update state immediately (cover later)
   ```js
   const handleClick = () => {
     setCount(count + 1);
     console.log(count); // this will still show the old value
   };
   ```
6.

## Automatic Batching

1. In React, "batching" refers to the process of grouping multiple state updates into a single update. This can be useful in certain cases because it allows React to optimize the rendering of your components by minimizing the number of DOM updates that it has to perform.

2. By default, React uses a technique called "auto-batching" to group state updates that occur within the same event loop into a single update. This means that if you call the state update function multiple times in a short period of time, React will only perform a single re-render for all of the updates.

3. React 18 ensures that state updates invoked from any location will be batched by default. This will batch state updates, including native event handlers, asynchronous operations, timeouts, and intervals.

# Gotcha

### useState Gotcha

If you want to update the state immediately and synchronously, you can pass a function to setState that receives the previous state as an argument and returns the new state. For example:

```js
setState((prevState) => {
  return { ...prevState, value: newValue };
});
```

This can be useful if you need to update the state based on the previous state, or if you need to update the state synchronously.

```js
const handleClick = () => {
  setValue((currentState) => {
    // must return otherwise undefined
    // below is the latest/current state value
    const newState = currentState + 1;
    return newState;
  });
};
```

- setTimeout Example

```js
const handleClick = () => {
  // setTimeout(() => {
  // console.log('clicked the button');
  //   setValue(value + 1);
  // }, 3000);
  setTimeout(() => {
    console.log('clicked the button');
    setValue((currentState) => {
      return currentState + 1;
    });
  }, 3000);
};
```

### Fetch Errors "Gotcha" (optional)

```js
import Starter from './tutorial/03-conditional-rendering/starter/02-multiple-returns-fetch-data.jsx';
```

Unlike for example Axios, by default, the fetch() API does not consider HTTP status codes in the 4xx or 5xx range to be errors. Instead, it considers these status codes to be indicative of a successful request,

```js
try {
const resp = await fetch(url);
// console.log(resp);
if (!resp.ok) {
  setIsError(true);
  setIsLoading(false);
  return;
}

const user = await resp.json();
setUser(user);

}

```

### FormData

1. Don't call your Component FormData when using FormData API

## useEffect Basics

useEffect is a hook in React that allows you to perform side effects in function components.There is no need for urban dictionary - basically any work outside of the component. Some examples of side effects are: subscriptions, fetching data, directly updating the DOM, event listeners, timers, etc.

- useEffect hook
- accepts two arguments (second optional)
- first argument - cb function
- second argument - dependency array
- by default runs on each render (initial and re-render)
- cb can't return promise (so can't pass a async callaback function )
  Example of incorrect usage

  ```js
  useEffect(async () => {});
  ```

  Example of correct usage if promise is to be handled

  ```js
  useEffect(()=> {
   async fetchData() => {
      const peopel = await fetch(`ddadfa`)
   }
   fetchData()
  })

  ```

- if dependency array empty [] runs only on initial render

  ```js
  useEffect(() => {}, []);
  ```

- We can have mulitple UseEffect in a component
- Conditional UseEffect

      The follwong use effect only runs when 'value' state is updated

      ```js
      const [value, setValue] = useState(0);

      // Only runs when 1st value is updated
      useEffect(() => {
      console.log('hello from 1st useEffect');
      }, [value]);
      ```

## You Might Not Need an Effect

[You Might Not Need an Effect](https://beta.reactjs.org/learn/you-might-not-need-an-effect)

- fetching data
  replaced by libraries - react query, rtk query, swr or next.js

## useRef

- DOES NOT TRIGGER RE-RENDER
- preserves the value between renders
- target DOM nodes/elements

## Custom Hooks

- same rules as regular hooks
- simplify component (less code)
- re-use functionality
- function should start with use


## Setup Global Context

- in src create context.jsx
- setup a global context - GlobalContext
- setup a component (AppContext) with one state value
- return GlobalContext.Provider from AppContext
- wrap then entire application (main.jsx) - children prop "gotcha"
- setup a custom hook
- access in App.jsx
- log result
