/* eslint-disable no-dupe-keys */
import { useContext } from 'react'
import { Context } from '../../Context'
import { ProductDetail } from '../../Components/ProductDetails'
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import { useParams } from 'react-router-dom'

function Home() {
  const context = useContext(Context)
  const { category } = useParams()

  const categories = {
    All: '',
    clothes: 'clothing',
    electronics: 'electronics',
    furnitures: 'furnitures',
    toys: 'toys',
    others: 'jewelery',
  }

  if (category) context.setSearchByCategory(categories[category])

  const handleChange = (e) => {
    context.setSearchByTitle(e.target.value)
  }

  return (
    <Layout>
      <h1 className="font-medium text-xl mb-4">Exclusives Products</h1>
      <input
        type="text"
        placeholder="Search products"
        className="w-40 border border-black py-1 rounded-lg focus:outline-none mb-8 placeholder:text-center text-center"
        onChange={(e) => handleChange(e)}
        value={context.searchByTitle}
      />
      {context.isOpen.details && <ProductDetail />}
      {context.isOpen.checkout && <CheckoutSideMenu />}
      <div className="grid gap-5 grid-cols-4 w-full max-w-screen-lg">
        {context.filteredProducts.length > 0 ? (
          context.filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-4">
            Sorry, we couldn&#39;t find anything.
          </p>
        )}
      </div>
    </Layout>
  )
}

export { Home }
