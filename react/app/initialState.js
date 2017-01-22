export const initialState = {
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