// import * as actions from 'items/actions'
import App from 'items/state'
import { initialState} from './initialState'
import { createStore } from 'redux'

// console.log(App)
// console.log(initialState)
let store = createStore(App, initialState
  //, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)






////////////////// Testing

// console.log(store.getState())

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// store.dispatch(actions.openBrowsePage())
// store.dispatch(actions.addItemToFavorites(1))


// // Stop listening to state updates
// unsubscribe()