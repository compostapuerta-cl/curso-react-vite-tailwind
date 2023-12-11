import { useContext } from 'react'
import { Context } from '../../Context'
import { Layout } from '../../Components/Layout'
import { OrdersCards } from '../../Components/OrdersCards'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

function MyOrders() {
  const context = useContext(Context)

  return (
    <Layout>
      <div className='flex max-w-[380px] w-full items-center relative justify-center mb-6'>
        <Link to={`/`}>
        <ChevronLeftIcon className='w-6 absolute left-0 top-0 cursor-pointer'/>
        </Link>
        <h1>My Orders</h1>
      </div>
      {context.order.map((order, i) => (
        <Link key={i} className='flex max-w-[380px] w-full' to={`/my-orders/${i + 1}`}>
          <OrdersCards
            date={order.date}
            totalProducts={order.totalProducts}
            totalPrice={order.totalPrice}
          />
        </Link>
      ))}
    </Layout>
  )
}

export { MyOrders }
