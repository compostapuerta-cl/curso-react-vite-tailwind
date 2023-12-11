import {XMarkIcon} from '@heroicons/react/24/outline'
import { Context } from '../../Context'
import { useContext } from 'react'

const ProductDetail = () => {
  const context = useContext(Context)
  const handleCloseMenu = () => {
    context.closeMenu()
    context.setProductToShow({})
  }
  return (
    <aside 
        className="flex flex-col fixed right-0 border border-black bg-gray-200 rounded-lg w-[360px] h-[calc(100vh-80px)]"
    >
        <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">Detail</h2>
            <XMarkIcon 
            className='h-6 w-6 cursor-pointer'
            onClick={handleCloseMenu}
            />
        </div>
        <figure className='px-6 w-full self-center'>
          <img 
          src={context.productToShow.image}
          alt={context.productToShow.title}
          className='w-full h-full rounded-lg'
          />
        </figure>
        <p className='flex flex-col p-6'>
          <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
          <span className='font-medium text-lg'>{context.productToShow.title}</span>
          <span className='font-light text-sm'>{context.productToShow.description}</span>
        </p>
    </aside>
  )
}

export { ProductDetail }