import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='image'>
        </div>
        <ul>
            <li><a href='#/home' className={window.location.pathname==='/home' ?"active" :""}><div>Home</div></a></li>
            <li><a href='#/star-gen' className={window.location.pathname==='#/star-gen' ?"active" :""}><div>Stargen</div></a></li>
            <li><a href='#/cool-web' className={window.location.pathname==='#/cool-web' ?"active" :""}><div>T.T.D.O</div></a></li>
            <li><a href='#/about' className={window.location.pathname==='#/about' ?"active" :""}><div>About Me</div></a></li>
        </ul>
    </div>
  )
}

export default Navbar