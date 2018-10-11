import React, { Component } from 'react';

import '../Home.css';

import beans from '../images/beans.jpg';
import manyCoffees from '../images/many-coffees.jpg';
import steamCoffee from '../images/steam-coffee.jpg';

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className='full-img'>
          <div className='intro-text text-center'>Go ahead!<br/><span className="highlight-black">Make my Coffee!</span></div>
        </div>
        <div className="container text-center">
          <h2>You're about to experience what awesome tastes like...</h2>
        </div>
        <div className="container h-100 d-flex align-items-center">
          <div className="row">
            <div className="col-lg-8">
              <h3>Arabica or Robusta?</h3>
              <p>There are two types of coffee beans: Arabica and Robusta. Most are Arabica, but Robusta have twice as much caffeine. So, lucky for you and your sleepy self, we carry both. Ready to sip on something that'll get you out of your chair? Stop on in and grab a cup of joe!</p>
            </div>
            <div className="col-lg-4">
              <img className="img-responsive fade-pic" src={beans} alt='coffee beans' />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <img className="img-responsive fade-pic" src={manyCoffees} alt='coffee poured into coffee cups' />
            </div>
            <div className="col-lg-8">
              <h3>WAKE UP</h3>
              <p>Did you know that just smelling coffee can wake you up? Some scientists did some science and found out that the aroma of coffee can alter the activity of some genes in your brain! Alright, enough science. It's time for a cup of coffee.</p>
              <a href='/contact'>Get directions!</a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <h3>Everybody's doing it...</h3>
              <p>80% of U.S. adults are consuming caffeine every day. Americans actually consume 400 million cups of coffee per day! Isn't it time you came in to grab your coffee fix already?</p>
            </div>
            <div className="col-lg-4">
              <img className="img-responsive fade-pic" src={steamCoffee} alt='steaming coffee cup' />
            </div>
          </div>
        </div>
        <div className="container-fluid contact-footer">
          <div className="container">
            <h3>Contact us!</h3>
            <form>
              <div className="form-group">
                <label htmlFor="FormControlInput1">Name</label>
                <input type="email" className="form-control" id="FormControlInput1" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="FormControlInput2">Email address</label>
                <input type="email" className="form-control" id="FormControlInput2" placeholder="name@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="FormControlTextarea1">How can we help?</label>
                <textarea className="form-control" id="FormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
