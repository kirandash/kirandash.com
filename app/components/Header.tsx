import React from 'react'

const Header = () => {
  return (
    <header>
      <nav className="container mx-auto max-w-2xl py-6 flex justify-between px-4">
        <a
          href="/"
          className="router-link-active router-link-exact-active title hover:opacity-50"
          aria-current="page"
        >
          {' '}
          Kiran Dash{' '}
        </a>
        <div className="flex gap-6">
          <a
            href="https://kirandash-portfolio.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:opacity-50"
          >
            {' '}
            Portfolio{' '}
          </a>
          <a
            href="/Kiran-Dash-Resume.pdf"
            target="_blank"
            className="hover:opacity-50"
          >
            {' '}
            CV{' '}
          </a>
          <a
            href="http://bgwebagency.in/"
            target="_blank"
            className="hover:opacity-50"
          >
            {' '}
            Blog{' '}
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
