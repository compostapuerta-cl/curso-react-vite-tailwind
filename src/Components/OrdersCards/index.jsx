import {
  CalendarDaysIcon,
  ChevronRightIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline'
import { formatDate } from '../../utils'

const OrdersCards = (props) => {
  const { date, totalPrice, totalProducts } = props

  return (
    <div className="flex w-full p-4 justify-between items-center mb-3 border border-black rounded-lg hover:text-white hover:bg-black">
      <p className="flex flex-col w-[50%]">
        <span className="flex gap-1 justify-start items-center text-sm font-light">
          <CalendarDaysIcon className="w-5" /> {formatDate(date)}
        </span>
        <span className="flex gap-1 justify-start items-center text-sm font-light">
          <ShoppingBagIcon className="w-5" />{totalProducts} Products
        </span>
      </p>
      <p className="flex w-[50%] justify-between items-center">
        <span className="text-xl font-medium">
          Total: ${totalPrice.toFixed(2)}
        </span>
        <ChevronRightIcon className="w-6" />
      </p>
    </div>
  )
}

export { OrdersCards }
