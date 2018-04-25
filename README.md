# Learning Redux

These notes have been taken from the official documentation of Redux and links referenced. 

"Redux is a predictable state container for JavaScript apps."

## Redux Principles

1. The state of your whole application is stored in an object tree within a single store.

2. The only way to change the state is to emit an action, an object describing what happened.

3. To specify how the state tree is transformed by actions, you write pure reducers.

## Pure Functions

A pure function is a function which:
  * Given the same input, will always return the same output.
  * Produces no side effects.
  
## Reducer

The state mutation in your APP needs to be described as a pure function. This function takes the previous state and 
action being dispatched, and return the new state.

"Reducers specify how the application's state changes in response to actions sent to the store. 
Remember that actions only describe the fact that something happened, but don't describe how the application's 
state changes." 

"Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. 
No API calls. No mutations. Just a calculation."

```javascript
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
```

```javascript
import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'
const { SHOW_ALL } = VisibilityFilters
​
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
​
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

// Reducer composition - ways to do it.

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

export default todoApp
```



## Considerations

* "In Redux, all the application state is stored as a single object. It's a good idea to think of its shape before writing 
any code. What's the minimal representation of your app's state as an object?" 

* "You'll often find that you need to store some data, as well as some UI state, in the state tree. This is fine, but try 
to keep the data separate from the UI state."

* "Things you should never do inside a reducer: Mutate its arguments, Perform side effects like API calls and routing 
transitions and Call non-pure functions, e.g. Date.now() or Math.random()."



