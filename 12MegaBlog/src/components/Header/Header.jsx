import React from 'react'
import { Container , Logo , LogoutBtn , } from '../index.js'
import { Link , useNavigate } from 'react-router-dom'
import { UseSelector } from 'react-redux'
function Header() {
  const authStatus = UseSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  return (
    <header className='py-3 shadow bg-gray500-'>
      <Container>
    <nav className='flex'>
      <div className='mr-4'>
        <Link to={"/"}>
        <Logo widht='70px'/>
        </Link>
      </div>
      <ul className='flex ml-auto'>
            {navItems.map((item) => item.active ? (
              <li key={item.name}>
                <button></button>
              </li>
            ) : null)}
          </ul>
    </nav>
      </Container>
    </header>
  )
}

export default Header