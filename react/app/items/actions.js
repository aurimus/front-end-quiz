export const ADD_ITEM_TO_FAVORITES = 'ADD_ITEM_TO_FAVORITES'
export const ADD_ITEM_TO_BASKET = 'ADD_ITEM_TO_BASKET'
export const LOAD_MORE_ITEMS = 'LOAD_MORE_ITEMS'
export const SET_FILTER = 'SET_FILTER'
export const OPEN_PAGE = 'OPEN_PAGE'

export const addItemToBasket = (id) => ({
  type: ADD_ITEM_TO_BASKET,
  id: id
})

export const addItemToFavorites = (id) => ({
  type: ADD_ITEM_TO_FAVORITES,
  id: id
})

export const loadMoreItems = (filter) => ({
  type: LOAD_MORE_ITEMS,
  number: 20,
  filter: filter
})

export const setFilter = (favorites = false, inbasket = false) => ({
  type: SET_FILTER,
  filter: {
    favorites: favorites,
    inbasket: inbasket
  }
})

export const openBrowsePage = (numOfItems = 20) => ({
  type: OPEN_PAGE,
  name: 'browse',
  numOfItems: numOfItems
})

export const openItemPage = (id) => ({
  type: OPEN_PAGE,
  name: 'item',
  itemId: id
})

// export const openPage = (name, filter = {favorites: false, inbasket: false}, numOfItems = 20) => ({
//   type: OPEN_PAGE,
//   name: name,
//   data: {
//     filter: filter,
//     numOfItems: numOfItems
//   }
// })