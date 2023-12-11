import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../../Context'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const context = useContext(Context)
  const activeStyle = 'underline underline-offset-2'

  const handleSignOut = () => {
    console.log('aqui');
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem('signOut', stringifiedSignOut)
    context.setSignOut(true)
  }

  const menuLeft = [
    {
      to: '/',
      text: 'Shopi',
      className: 'font-semibold text-lg',
    },
    {
      to: '/All',
      text: 'All',
      className: '',
    },
    {
      to: '/clothes',
      text: 'clothes',
      className: '',
    },
    {
      to: '/electronics',
      text: 'electronics',
      className: '',
    },
    {
      to: '/furnitures',
      text: 'furnitures',
      className: '',
    },
    {
      to: '/toys',
      text: 'toys',
      className: '',
    },
    {
      to: '/others',
      text: 'others',
      className: '',
    },
  ]

  const menuRight = [
    {
      to: '',
      text: 'leoCodeDev@gmail.com',
      className: 'text-black/60',
    },
    {
      to: '/my-orders',
      text: 'My Orders',
      className: '',
    },
    {
      to: '/my-account',
      text: 'My Account',
      className: '',
    },
    {
      to: '/sign-in',
      text: 'Sign in',
      className: '',
    },
    {
      to: '',
      text: (
        <>
        <ShoppingCartIcon className='w-4'/>
        {context.cartProducts.length}
        </>
      ),
      className: 'flex gap-1',
    },
  ]

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        {menuLeft.map((link, i) => (
          <li key={link.text} className={link.className}>
            <NavLink
              to={link.to}
              className={({ isActive }) => (isActive && i !== 0 ? activeStyle : undefined)}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        {menuRight.map((link, i) => (
          <li key={link.text} className={link.className}>
            {link.to !== '' 
              ? (<NavLink
              to={link.to}
              className={({ isActive }) => (isActive && i !== 0 ? activeStyle : undefined)}
              onClick={link.to === '/sign-in' ? handleSignOut : undefined}
            >
              {link.text}
            </NavLink>
            ) : (
              <span className={link.className}>{link.text}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { Navbar }
