# React-Redux

## Essentials:

## How to setup Redux with React from scratch:

1. `npx create-react-app <app-name>`
2. `cd <app-name> && npm i`
3. `npm i react-redux && npm i redux && npm i redux-thunk`

## Core pieces of using Redux with React:

1. Reducers.
2. `<Provider>` and store.
3. action Objects.
4. Thunk, dispatch and async actions.

## Action objects

action objects are plain javascript objects that reducers use to do some action to the state. Action objects require ONE key "type" which specifies what type of action needs to be taken in regards to the state. However, action objects are usualy dispatched with TWO sets of keys and values. The key 'type' is always, required. The second key and value pair is used to hold data that you want to update the state with.
example:
`{ type: 'CREATE_NEW_NOTE', payload: noteData }`

## Reducers

reducers are functions that take in TWO arguments: the current state (with a default argument if no state exists), and an action object and ALWAYS return ONE thing, which is a copy of updated state, or the current state if no changes have been made to it. Reducers handle the logic of updating the state based on the action object's type value.
example:
`const initialState = []; export default (state = initialState, { type, payload }) => { switch (type) { case "GET_NOTES": return payload; case "CREATE_NOTE": return [...state, payload]; case "DELETE_NOTE": return handleDeleteNote(state, payload); case "UPDATE_NOTE": return handleUpdateNote(state, payload); default: return state; } };`

## Creating a store and making it available in your app.

- `import thunk from 'redux-thunk`
- `import { Provider } from 'react-redux`
- `import { createStore, applyMiddleware} from 'redux'`
- `import { yourReducer } from 'somefile'`

- At the highest level of your app (index.js):
  1. Initialize your store and save it to a variable:
     `const store = createStore(yourReducer, applyMiddleware(thunk))`
  2. Wrap the component the component you are rendering with the `<Provider>` tag imported from `'react-redux'` and pass it the store variable under the key "store":
     `<Provider store={store}> <App/> </Provider>`

## Connecting your component to your app's Redux store.

1. Connect is used to connect your Redux store to your props. connect takes it TWO sets of parentheses when invoked. The first parentheses will take in TWO arguments `(mapStateToProps, mapDispatchToProps)`. The second parentheses will take in the actual component you are exporting.
   - if you do not need to `mapStateToProps`, your first parentheses should look like this `(null, mapDispatchToProps)`
   - if you do not need to mapDispatchToProps, you can ommit it from the first parentheses which should
2. mapStateToProps: This will grab the state from the store and add it to your props.
   example `const mapStateToProps = state => ({ notes: state });`
3. mapDispatchToProps: This will add any functions you provide it to your props AND pass in "dispatch" (under the hood) as an argument when they're invoked.
   example: `const mapDispatchToProps = { deleteNoteFromDB }`

4. These blocks of code will live OUTSIDE your React Component definition and will be used when exporting the component:
   `export default connect(mapStateToProps, mapDispatchToProps)(ShowNote)`
