import React from 'react'

const Footer = () => {
  return (
    <div className="bg-slate-800 text-center p-10">
      <div className="text-sm text-slate-400">
        <p>Copyright &copy; {new Date().getFullYear()} Imaad Zaffar</p>
        <div className="text-sm text-slate-600">
          Icons made by{' '}
          <a
            href="https://www.flaticon.com/authors/ruslan-babkin"
            title="Ruslan Babkin"
          >
            Ruslan Babkin
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
