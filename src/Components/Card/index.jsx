import { useContext } from 'react'
import { Context } from '../../Context'
import { CheckCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'

const Card = (props) => {
  const { product } = props
  const context = useContext(Context)

  const handleClickOnCard = (product) => {
    context.setProductToShow(product)
    context.openMenu('details')
  }

  const addProductsToCart = (e, product) => {
    e.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, product])
    context.openMenu('checkout')
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.find((product) => product.id === id)

    if (!isInCart) {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white/60 w-6 h-6 rounded-full text-md m-2"
          onClick={(e) => addProductsToCart(e, product)}
        >
          <PlusCircleIcon className="w-6" />
        </div>
      )
    } else {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white/60 w-6 h-6 rounded-full text-md m-2">
          <CheckCircleIcon className="w-6 text-green-500" />
        </div>
      )
    }
  }

  return (
    <div
      className="bg-white w-56 h-60 cursor-pointer rounded-lg"
      onClick={() => handleClickOnCard(product)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bg-white/60 rounded-lg px-3 bottom-0 left-0 m-2 text-sm">
          {product.category}
        </span>
        <img
          className="w-full h-full object-contain rounded-lg"
          src={product.image}
          alt={product.title}
        />
        {renderIcon(product.id)}
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{product.title}</span>
        <span className="text-md font-medium">{`$${product.price}`}</span>
      </p>
    </div>
  )
}

export { Card }
