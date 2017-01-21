import * from './actions'
import { combineReducers } from 'redux'

const initalState = {
  pages: {
    browse: {
      filter: {
        favorites: false,
        inbasket: false
      },
      numOfItems: 20
    },
    item: {
      id: 1
    }
  },
  currentPage: 'browse',
  favoriteItems: [1, 3, 5],
  inBasketItems: [6],
}

const loadMoreItems = (state = initalState.pages.browse.numOfItems, action) => {
  switch (action.type) {
    case LOAD_MORE_ITEMS:
      return state = action.number
    default:
      return state
  }
}

const openPage = (state = initalState.currentPage, action) => {
  if (action.type != OPEN_PAGE) return state

  switch (action.name) {
    case 'browse':
      return state = 'browse'
    case: 'item':
      return state = 'item'
    default:
      return state
  }
}


const setFilter = (state = initalState.page.data.filter, action) => {
  switch (action.type) {
    case SET_FILTER:
      return Object.assign({}, state, action.filter)
    default:
      return state
  }
}


const addItemToFavorites = (state = initalState.favoriteItems, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_FAVORITES:
      state.push(action.id)
      return state
    default:
      return state
  }
}


const addItemToBasket = (state = initalState.inBasketItems, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_BASKET:
      state.push(action.id)
      return state
    default:
      return state
  }
}


const App = combineReducers({
  loadMoreItems,
  openPage,
  setFilter,
  addItemToFavorites,
  addItemToBasket
})

export default App