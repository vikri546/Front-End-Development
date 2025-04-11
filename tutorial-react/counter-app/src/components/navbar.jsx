import React, { Component } from 'react'

// Stateless Functional Component
const NavBar = ({totalCounters}) => {
    console.log('NavBar - Rendered');

    return (
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </a>
          </div>
        </nav>
    )
};

// class NavBar extends Component {
//     render() {
//         // return (
//         //     <nav className="navbar bg-body-tertiary">
//         //       <div className="container-fluid">
//         //         <a className="navbar-brand" href="#">
//         //             Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
//         //         </a>
//         //       </div>
//         //     </nav>
//         // )
//     }
// }

export default NavBar;