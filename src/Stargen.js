import React from 'react'
import RealTurtle from 'real-turtle'
import { useRef, useState } from 'react';
import fstar from './penta.jpg'
import sstar from './hepta.jpg'
import nstar from './nonna.jpg'
import fstart from './pentateach.jpg'
import sstart from './heptateach.jpg'
import nstart from './nonnateach.jpg'
const Stargen = () => {
  const element=document.getElementById("real-turtle");
  let posx=0.25*window.innerWidth
  let posy=0.75*window.innerHeight
  let turtle = new RealTurtle(element, {autoStart: false});
  turtle.setPosition(posx,posy)
  turtle.setSpeed(0.9)
  turtle.setSize(0)
  turtle.setLineWidth(2)
  const inputRef = useRef(null);
  const [updated, setUpdated] = useState('');
  const handleClick = () => {
    setUpdated(inputRef.current.value);
    let input=parseInt(updated);
    if (input%2===1 && input>=5){
        for (var i=1; i<=input; i=i+1){
            turtle.forward(530)
            turtle.left(180-(180/input))
            turtle.start()
        }
    }
    else{
         alert("enter positive odd number greater than or equal to 5")
    }
  };
  const reset = () => {
    window.location.reload(false);
  }

  return (
    <div>
      <header>Stargen</header>
      <div className='stargen_title'>What it does</div>
      <p>This generates a star with as many legs as you say provided it is an odd number greater than 3. I came across the 
        math for this while doing an assignment for an online course in my first year of college. It was the first time I 
        "discovered" something by my own. I felt ecstatic and decided I needed to immortalize this some way. So here we are 
        almost 3 years later.</p>
      <label>Number of legs:<br/>
      <input ref={inputRef} type='number'/>
      </label>
      <br/>
      <button onClick={handleClick}>Draw</button>
      <button onClick={reset}>Reset</button>
      <br/>
      <canvas id='real-turtle' width={0.5*window.innerWidth} height={0.75*window.innerHeight}></canvas>
      <div className='stargen_title'>How it does it</div>
      <div className='stargen_title_smaller'>The Math</div>
      <p>The math is simple and there probably will be several ways of arriving at the result we need. I will be using the 
        method that I find the easiest (and also the only way I know). </p>
      <p>First consider three regular polygon stars of 5, 7 and 9 points:</p>
      <div className='first_images'>
      <img src={fstar} alt='5 pointed star'/>
      <img src={sstar} alt='7 pointed star'/>
      <img src={nstar} alt='9 pointed star'/>
      </div>
      <p>On applying some basic geometric properties on these shapes we get the following values for various angles: </p>
      <div className='second_images'>
      <img src={fstart} alt='5 pointed star'/>
      <img src={sstart} alt='7 pointed star'/>
      <img src={nstart} alt='9 pointed star'/>
      </div>
      <p>Of these angles the one we are interested in is the angle made when each leg bends in on itself. Those are:</p>
      <div className='math'>180-2*360/5, 180-3*360/7, 180-4*360/9</div>
      <p>As you can see, there is a pattern at which these angles are forming. The general equation for this can be obtained as: </p>
      <div className='math'>
        180-((n-1)*360/2*n)<br/>
        =180/n, where n is the number of legs
      </div>
      <div className='stargen_title_smaller'>Working of the Application</div>
      <p>It uses Real Turtle, which is a tutle graphics library for JavaScript. It takes your input, draws the star 
        according to the angle obtained from our earlier equation.</p>
    </div>
  )
}
export default Stargen