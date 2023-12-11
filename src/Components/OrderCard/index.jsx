import { MinusCircleIcon } from '@heroicons/react/24/solid'

const OrderCard = (props) => {
  const {id, title, price, img, handleDelete} = props

  return (
    // <div className="flex justify-between items-center px-6 mb-4">
    <div className="grid grid-cols-3 px-6 mb-4">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            src={img}
            alt={title}
            className="w-full h-full rounded-lg object-contain"
          />
        </figure>
      </div>
        <p className="w-full self-center text-ellipsis text-sm font-light">{title}</p>
      <div className="flex items-center gap-2 relative">
        <p className="w-full text-center text-lg font-medium">${price}</p>
        {handleDelete && <MinusCircleIcon 
          className="h-6 w-6 cursor-pointer absolute top-0 right-0 text-red-600" 
          onClick={() => handleDelete(id)}
        />}
      </div>
    </div>
  )
}

export { OrderCard }
