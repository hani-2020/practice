import React from 'react'
import gif1 from './cute-cat.gif'
import './Home.css';
const Home = () => {
  return (
    <div>
      <header>What is this?</header>
      <p>The reason I built this website is to test and showcase everything I have learned in my web development journey so far.
        This website will have a design generator that will make stars with as many legs as you specify, a page that 
        lists unique websites and finally a page about me. <br/>This is all I have to say in this page, so while you are here 
        enjoy this GIF of a cat.
      </p>
      <div className='gif'>
      <img src={gif1} alt='There was supposed to be a cute cat GIF here.'/>
      </div>
    </div>
  )
}

export default Home