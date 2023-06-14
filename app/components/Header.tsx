import React from 'react'

const Header = () => {
  return (
    <header>
      <nav className="container mx-auto max-w-2xl py-6 flex justify-between px-4">
        <a
          href="/"
          className="router-link-active router-link-exact-active title"
          aria-current="page"
        >
          {' '}
          Kiran Dash{' '}
        </a>
        <div className="flex gap-6">
          <a
            href="https://www.npmjs.com/~kirandash"
            rel="noopener noreferrer"
            target="_blank"
          >
            {' '}
            Side Projects{' '}
          </a>
          <a href="/Kiran-Dash-Resume.pdf" target="_blank">
            {' '}
            CV{' '}
          </a>
          <a href="http://bgwebagency.in/" target="_blank">
            {' '}
            Blog{' '}
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
