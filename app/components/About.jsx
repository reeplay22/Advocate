var React = require('react');

//original code

// var About = React.createClass({
//   render: function (){
//     return(
//       <h3>About</h3>
//     );
//   }
// });

// this is a stateless function using arrowFunc of lambda to pass the return through the arrow from the createClass
var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <h5>Legacy is a baltimore base phone repair company looking to give great service and products to 
      you the people !!!!!!!!</h5>
      <p>
        We fix all Apple mobile products. From the screen to the mother board.
      </p>
      
      <ul>
        <li> iPhone 6
          <ol>
            <li>80 screen repair</li>
            <li>50 camera replacement</li>
            <li>150 motherboad replacement</li>
          </ol>
         </li>
        <li> iPhone 6s 
          <ol>
            <li>80 screen repair</li>
            <li>50 camera replacement</li>
            <li>150 motherboad replacement</li>
          </ol>
          </li>
        <li> iPhone 7 
        <ol>
            <li>80 screen repair</li>
            <li>50 camera replacement</li>
            <li>150 motherboad replacement</li>
          </ol>
          </li>
      </ul>
    </div>
  );
}


module.exports = About;
