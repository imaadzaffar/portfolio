import React from 'react'

const Footer = () => {
  return (
    <div className="bg-slate-800 text-center p-8">
      <div className="text-base text-slate-400">
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        <p>Built with 💙 by Imaad Zaffar</p>
      </div>
    </div>
  )
}

export default Footer
