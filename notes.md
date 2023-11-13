## JSX

1. It has to alawys return only one parent element
2. Using Fragment will eleminate extra node like div, it will easy to manage and inspect in the browser

## Naming convention

1. camelCasae
   1. Attributes
   2. Function
   3. Event Name attribute in tag
   4. Event Handler
2.

## Elements

1. Some elements have do have closing tags and some don't
2. In react all the elements without closing tags have to be self closed. Ex: <img />

## Formating

1. If you are not using parathensis when returing then make sure opeing tag is in same line as return statement.

## Nest Components

1. We can nest componenets
   Ex:
   ```js
   return (
     <div>
       <Person />
       <Message />
     </div>
   );
   ```
2.

## Images

1. There are three ways to provide image
   1. External image: images hosted on different server (like image copying url from google images)
   2. local images stored in public folder (less perfomant )
   3. local images stoed in src folder . Better solution for assets, since under the hood they get optimized.

## JSX - CSS (inline styles)

1. use style prop
2. {} in JSX means going back to JS Land
3. value is an object with key/value pairs - capitalized and with ''
4. Inline style will overwrite external css (css file)
5. External libraries use inline css, so if you want to make some changes, reference the library docs and elements tab
6.

## Return Types

1. Implicit
   ```js
   const Image = () => <h2>image placeholder</h2>;
   ```
2. Explicit
   ```js
   const Author = () => {
     const inlineHeadingStyles = {
       color: '#617d98',
       fontSize: '0.75rem',
       marginTop: '0.5rem',
     };
     return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
   };
   ```

## JSX

1. {} in JSX means going back to JS Land
2. value inside must be an expression (return value),
   can't be a statement

## Props

1. - props object, convention to call props.
2. pass as key/value pairs
3. if the prop exists it will return value, otherwise no value

## Children Prop

1. everything we render between component tags
2. during the course we will mostly use it Context API
3. special prop, has to be "children"
4. can place anywhere in JSX

## Rendering

1. can't render objects in React
2. map - creates a new array from calling a function for every array element.
3. key value is set where data is iterated and returned

```js
return (
  <section className='booklist'>
    {books.map(({ author, img, title, id }) => (
      <Book author={author} title={title} img={img} key={id} />
    ))}
  </section>
);
```

4. you will see index being used to set for ,but it's not advised to use to set for key if the list is changing
   ```js
   return (
     <section className='booklist'>
       {books.map(({ author, img, title, id }, index) => (
         <Book author={author} title={title} img={img} key={id} />
       ))}
     </section>
   );
   ```
5. Passing object value using spread operator in props
   ```js
   return (
     <section className='booklist'>
       {books.map((book) => (
         <Book {...book} key={book.id} />
       ))}
     </section>
   );
   ```
6.

## Event

1. e.target will point to the element.
2. When passing eventhandler function you cannot call the following way if the eventhandler function accepts a parameter

   1. The following won't work because value has to be passed

   ```js
   <button onClick={getBook}>display title</button>
   ```

   2. The followin won't work because the function will be executed instead instead of passing the function as callback

   ```js
   <button onClick={getBook(id)}>display title</button>
   ```

3. There are two correct ways to call eventhandler function with parameter

   1. using event wrapper

   ```js
   const getSingleBook = () => {
     getBook(id);
   };
   <button onClick={getSingleBook}>display title</button>;
   ```

   2. Passing anonymous function

   ```js
   <button onClick={() => getBook(id)}>display title</button>
   ```

## John Smilaga Practice or Stratagies

1. Instead of writing whole component and redenering it is better to write a basic component and render them, to see if there is no problem with redenering and then iteratively develop the component.

## Prop Drilling

1. react data flow - can only pass props down
2. alternatives Context API, redux, other state libraries

## Exports

1.  There are two popular types of exports

    1. Named one

    ```js
    export const books = [
      {
        author: 'Jordan Moore',
        title: 'Interesting Facts For Curious Minds',
        img: './images/book-1.jpg',
        id: 1,
      },
      {
        author: 'James Clear',
        title: 'Atomic Habits',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
        id: 2,
      },
    ];
    ```

    2.  Default one

        ```js
        const Book = (props) => {
          const { img, title, author } = props;

          return (
            <article className='book'>
              <img src={img} alt={title} />
              <h2>{title}</h2>

              <h4>{author} </h4>
            </article>
          );
        };

        export default Book;
        ```

2.  With named exports names MUST match
3.  With default exports,can rename but only one per file

## Create-React-App Boilerplate (src)

- index.js

```js
import React from 'react';
import ReactDOM from 'react-dom/client';

// styles (typically global)
import './index.css';

// convention to name it App and setup in a separate file
import App from './App';
// import report web vitals
import reportWebVitals from './reportWebVitals';

// StrictMode

// StrictMode is a tool for highlighting potential problems in an application.Activates additional checks and warnings for its descendants.Runs only in Development, does not impact the production build. RENDERS TWICE !!! Possible to remove.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

- remove in src

  - setupTests.js
  - reportWebVitals.js
  - App.test.js

- be careful with multiple css files

App.js

```js
function App() {
  return <h1>backroads app</h1>;
}

export default App;
```

- remove
  - remove logo.svg
  - App.css

## Common Errors

1. Code rendering twice: this not a error, if App component is wrapper with React.StrictMode then code is redendered twice , it perfoms additional checks. Runs only in Development, does not impact the production build. To avoids this you can remove <React.StrictMode> component.

   ```js
   <React.StrictMode>
     <App />
   </React.StrictMode>
   ```

## Vite

1. React scaffolding tool.

#### Vite Install

```sh
npm create vite@latest app-name -- --template react
npm install
npm run dev
```

- http://localhost:5173/

#### Vite Setup

- need to use .jsx extension
- index.html in the source instead of public
- assets still in public
- instead of index.js, need to use main.jsx
- to spin up dev server - "npm run dev"

- rest the same - imports/exports, deployment, assets, etc...
