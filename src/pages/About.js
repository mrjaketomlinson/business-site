import React, { Component } from 'react';

import '../Home.css';

import coffeeHouse from '../images/coffee-house.jpg';

class About extends Component {
  render() {
    return (
      <div id='about'>
        <div className="container topper">
          <h1 className="highlight-blue"><span className='fas fa-angle-double-right'></span> About</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p>
                A coffeehouse, coffee shop, or café is an establishment that primarily serves coffee, related coffee drinks (latte, cappuccino, espresso), and – depending on country – other drinks including alcoholic. Some coffeehouses may serve cold drinks such as iced coffee and iced tea; in continental Europe, cafés serve alcoholic drinks. A coffeehouse may also serve some type of food, such as light snacks, muffins or pastries. Coffeehouses range from owner-operated small businesses to large multinational corporations.
              </p>
              <p>
                From a cultural standpoint, coffeehouses largely serve as centers of social interaction: the coffeehouse provides patrons with a place to congregate, talk, read, write, entertain one another, or pass the time, whether individually or in small groups. Since the development of Wi-Fi, coffeehouses with this capability have also become places for patrons to access the Internet on their laptops and tablet computers. A coffeehouse can serve as an informal club for its regular members. As early as the 1950s Beatnik era and the 1960s folk music scene, coffeehouses have hosted singer-songwriter performances, typically in the evening.
              </p>
              <a href='https://en.wikipedia.org/wiki/Coffeehouse' target='_blank' rel='noopener noreferrer'>Source and More Info!</a>
            </div>
            <div className="col-md-4">
                <img src={coffeeHouse} className='img-responsive' alt='coffee house' />
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

export default About;
