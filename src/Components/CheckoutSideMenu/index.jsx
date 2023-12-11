import { XMarkIcon } from '@heroicons/react/24/outline'
import { Context } from '../../Context'
import { useContext } from 'react'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'
import { Link } from 'react-router-dom'

const CheckoutSideMenu = () => {
  const context = useContext(Context)
  const handleCloseMenu = () => {
    context.closeMenu()
    context.setProductToShow({})
  }

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    )

    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const order = {
      date: new Date(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    }

    context.setOrder([...context.order, order])
    context.setCartProducts([])
    context.setCount(0)
    context.closeMenu()
  }

  return (
    <aside className="flex flex-col fixed right-0 border border-black bg-gray-200 top-68 rounded-lg w-[360px] h-[calc(100vh-80px)]">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="h-6 w-6 cursor-pointer"
          onClick={handleCloseMenu}
        />
      </div>
      <div className="overflow-y-auto scrollbar-hide">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            price={product.price}
            img={product.image}
            id={product.id}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="flex flex-col justify-end px-6 flex-1">
        <p className="flex justify-between items-center">
          <span className="font-light">Total: </span>
          <span className="font-medium text-2xl mb-2">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="w-full py-3 mb-6 rounded-lg bg-black text-white"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export { CheckoutSideMenu }
