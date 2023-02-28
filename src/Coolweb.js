import React from 'react'
import './Web.css'
const Coolweb = () => {
  return (
    <div>
      <header>Things.To.Do.Online</header>
      <p>This is a list of cool websites I have discovered in my exploration of the World Wide Web. Check out some of them 
        if you plan on wasting some time.</p>
      <ul className='websites'>
        <li><a href='https://www.playphrase.me/#/search' target="_blank">PlayPhrase</a></li>
        <p>You can type in a phrase and it will find clips of movies where that phrase has been used. It is quite useful if 
          you plan on making memes as it saves alot of time.</p>
        <li><a href='https://neal.fun/auction-game/' target="_blank">The Auction Game</a></li>
        <p>You can have fun with your valuation skills with this game. It will show you various art pieces and your job is 
          to guess how much it was sold for. </p>
        <li><a href='https://www.quantamagazine.org/theories-of-everything-mapped-20150803' target="_blank">Theory of Everything Map</a></li>
        <p>It is an interactible mind map that shows how different scientific theories are connected to one another.</p>
        <li><a href='https://www.quantamagazine.org/theories-of-everything-mapped-20150803' target="_blank">EyeWire</a></li>
        <p>It is a game that makes you map out the working of neurons, this data helps scientists in their research.</p>
      </ul>
    </div>
  )
}

export default Coolweb