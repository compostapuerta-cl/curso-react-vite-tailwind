import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

const Context = createContext()

const initializeLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem('account')
  const signOutInLocalStorage = localStorage.getItem('signOut')
  let parsedAccount
  let parsedSignOut

  if (!accountInLocalStorage) {
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage)
  }

  if (!signOutInLocalStorage) {
    localStorage.setItem('signOut', JSON.stringify(false))
    parsedSignOut = false
  } else {
    parsedSignOut = JSON.parse(signOutInLocalStorage)
  }
}

const ContextProvider = ({ children }) => {
  // * My Account
  const [account, setAccount] = useState({})

  //* Sign Out
  const [signOut, setSignOut] = useState(false)

  //* Shopping Cart
  // ~ Product Quantity
  const [count, setCount] = useState(0)

  // ~ Products to Cart
  const [cartProducts, setCartProducts] = useState([])

  // ~ Order
  const [order, setOrder] = useState([])

  // * Product Details
  // ~ Show Product
  const [productToShow, setProductToShow] = useState({})

  // * Open/Close Menus

  const [isOpen, setIsOpen] = useState({
    details: false,
    checkout: false,
  })

  const openMenu = (menu) => {
    const updateState = {}

    for (const key in isOpen) {
      updateState[key] = false
    }

    updateState[menu] = true
    setIsOpen(updateState)
  }

  const closeMenu = () => {
    const updateState = {}
    for (const key in isOpen) {
      updateState[key] = false
    }
    setIsOpen(updateState)
  }

  // * Get Products

  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const { data } = await axios('/products')

    if (!data) return 'No products founds'
    if (data) setProducts(data)
  }

  useEffect(() => {
    try {
      fetchData()
    } catch (error) {
      console.log(error)
    }

    // fetch('https://fakestoreapi.com/products')
    // .then(response => response.json())
    // .then(data => setProducts(data))
  }, [])

  // ~ By title

  const [searchByTitle, setSearchByTitle] = useState('')

  // ~ By Category

  const [searchByCategory, setSearchByCategory] = useState('')

  // * Filter Products
  // ~ By Title

  const filterProductsByTitle = (products, searchByTitle) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchByTitle.toLowerCase())
    )
  }

  useEffect(() => {
    setFilteredProducts(filterProductsByTitle(products, searchByTitle))
  }, [products, searchByTitle])

  // ~ By Category

  const filterProductsByCategory = (products, searchByCategory) => {
    return products.filter((product) =>
      product.category.toLowerCase().includes(searchByCategory.toLowerCase())
    )
  }

  useEffect(() => {
    setFilteredProducts(filterProductsByCategory(products, searchByCategory))
  }, [products, searchByCategory])

  // ~ Filtered Products

  const [filteredProducts, setFilteredProducts] = useState([])

  return (
    <Context.Provider
      value={{
        count,
        setCount,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isOpen,
        openMenu,
        closeMenu,
        order,
        setOrder,
        products,
        setProducts,
        searchByTitle,
        setSearchByTitle,
        setSearchByCategory,
        filteredProducts,
        account,
        setAccount,
        signOut,
        setSignOut,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
