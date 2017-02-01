import React from 'react';
var {Link, IndexLink} = require('react-router');
// var About = require('About');
// var Examples = require('Examples');
// var Extra = require('Extra');

 var Nav = React.createClass({
   onSearch: function(e){
     e.preventDefault();
     var searchBarLocation = this.refs.searchBarLocation.value;
     var encodedLocation = encodeURIComponent(searchBarLocation);

     if(searchBarLocation.length >0){
       this.refs.searchBarLocation.value = "";
       window.location.hash = '#/?location='+ encodedLocation ;
     }
   },

  render: function () {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Legacy Repairs</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home(main)</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="searchBarLocation" placeholder="Search weather"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
}
})

module.exports = Nav;
