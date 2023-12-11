import { useContext } from 'react'
import { Layout } from '../../Components/Layout'
import { OrderCard } from '../../Components/OrderCard'
import { Context } from '../../Context'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { Link, useParams } from 'react-router-dom'

function MyOrder() {
  const context = useContext(Context)
  const {id} = useParams()
  const index = Number(id)

  return (
    <Layout>
      <div className='flex max-w-[380px] w-full items-center relative justify-center'>
        <Link to={`/my-orders`}>
        <ChevronLeftIcon className='w-6 absolute left-0 top-0 cursor-pointer'/>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className=" max-w-[600px] min-w-[380px] w-[60%] mt-6">
        {context.order?.at(index ? index - 1 : -1)?.products.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            price={product.price}
            img={product.image}
            id={product.id}
          />
        ))}
      </div>
    </Layout>
  )
}

export { MyOrder }
