// import { addItemToBasket, addItemToFavorites, loadMoreItems, setFilter, openBrowsePage, openItemPage } from './actions'
import { initialState } from '../initialState'
import { ADD_ITEM_TO_FAVORITES, ADD_ITEM_TO_BASKET, LOAD_MORE_ITEMS, SET_FILTER, OPEN_PAGE } from './actions'
// import { combineReducers } from 'redux'
// import { reduceReducers } from 'reduce-reducers'


const loadMoreItems = (state = initialState.pages.browse.numOfItems, action) => {
  switch (action.type) {
    case LOAD_MORE_ITEMS:
      return state = action.number
    default:
      return state
  }
}


const setFilter = (state = initialState.pages.browse.filter, action) => {
  switch (action.type) {
    case SET_FILTER:
      return Object.assign({}, state, action.filter)
    default:
      return state
  }
}


const openPage = (state = initialState, action) => {
  if (action.type != OPEN_PAGE) return state

  state = Object.assign({}, state)

  switch (action.name) {
    case 'browse':
      state.pages.browse.numOfItems = action.numOfItems
      state.currentPage = 'browse'
    case 'item':
      state.currentPage = 'item'
      state.pages.item.id = action.itemId
  }

  return state
}


const addItemToFavorites = (state = initialState.favoriteItems, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_FAVORITES:
      state.push(action.id)
      return state
    default:
      return state
  }
}


const addItemToBasket = (state = initialState.inBasketItems, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_BASKET:
      state.push(action.id)
      return state
    default:
      return state
  }
}


// const slicesReducer = combineReducers({
//   pages: combineReducers({
//     browse: combineReducers({
//       numOfItems: loadMoreItems,
//       filter: setFilter
//     })
//   }),
//   favoriteItems: addItemToFavorites,
//   inBasketItems: addItemToBasket
// })


const App = (state = initialState, action) => {
  state = Object.assign({}, state)

  switch (action.type) {
    case OPEN_PAGE:
      state = openPage(state, action)
    case LOAD_MORE_ITEMS:
      state.pages.browse.numOfItems = loadMoreItems(state.pages.browse.numOfItems, action)
    case SET_FILTER:
      state.pages.browse.filter = setFilter(state.pages.browse.filter, action)
    case ADD_ITEM_TO_FAVORITES:
      state.favoriteItems = addItemToFavorites(state.favoriteItems, action)
    case ADD_ITEM_TO_BASKET:
      state.inBasketItems = addItemToBasket(state.inBasketItems, action)
  }

  return state
}

export default App