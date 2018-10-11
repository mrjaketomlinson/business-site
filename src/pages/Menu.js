import React, { Component } from 'react';

import '../Home.css';

class Services extends Component {
  render() {
    return (
      <div id='menu'>
        <div className="container topper">
          <h1 className="highlight-blue"><span className='fas fa-angle-double-right'></span> Menu</h1>
        </div>
        <div className="container">
          <div className="row">
            <h3 className='text-center'>COFFEE</h3>
            <div className="col-md-6">
              <h4>Drip Coffee <span className='right'>2.50</span></h4>
              <span>Brewed fresh every day!</span>
              <h4>Americano <span className='right'>2.50</span></h4>
              <span>Espresso and water. That's it.</span>
              <h4>Macchiatto <span className='right'>3.00</span></h4>
              <span>4oz espresso and 1oz steamed milk.</span>
              <h4>Cappuccino <span className='right'>3.00</span></h4>
              <span>4oz espresso and 4oz steamed milk.</span>
            </div>
            <div className="col-md-6">
              <h4>Latte <span className='right'>4.00</span></h4>
              <span>Espresso and steamed milk.</span>
              <h4>Mocha <span className='right'>4.00</span></h4>
              <span>Espresso, steamed milk, dark chocolate, and brown sugar.</span>
              <h4>Au Lait <span className='right'>2.50</span></h4>
              <span>Drip coffee and steamed milk.</span>
            </div>
          </div>
          <div className='row'>
            <h3 className='text-center spacing'>NOT COFFEE</h3>
            <div className="col-md-6">
              <h4>Chai Latte <span className='right'>4.00</span></h4>
              <span>Spiced and sweetened organic black tea blended with steamed milk.</span>
              <h4>Foggy London <span className='right'>3.50</span></h4>
              <span>Earl Grey tea with steamed cream and vanilla syrup.</span>
              <h4>Hot Chocolate <span className='right'>2.50</span></h4>
              <span>Milk chocolate mix steamed with milk.</span>
            </div>
            <div className="col-md-6">
              <h4>Hot Tea <span className='right'>2.50</span></h4>
              <span>Variety of teas in store.</span>
              <h4>Iced Tea <span className='right'>4.00</span></h4>
              <span>Tea brewed fresh daily. Choose different teas and add syrup.</span>
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

export default Services;
