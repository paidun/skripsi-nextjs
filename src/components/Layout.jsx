import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import NavbarCombination from './NavbarCombination'

export default function Layout({ children, type }) {
  return (
    <div>
      <LayoutType type={type} />
      <main>
        {children}
      </main>
    </div>
  )
}

const LayoutType = ({ type }) => {
  if (type == "Navbar") {
    return (
      <Navbar />
    )
  }
  else if (type == "Combination") {
    return (
      <NavbarCombination />
    )
  }
  else {
    return (
      <Header />
    )
  }
}
