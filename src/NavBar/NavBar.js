import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap';
import logo from '../images/icon.png';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBell, faUserCircle,  } from '@fortawesome/free-solid-svg-icons'




function NavBar() {
  let user = JSON.parse(localStorage.getItem("token"));
//  const  history = useHistory();

//  function logOut(){
//       localStorage.clear();
//       history.push('/Login');
//   }


  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <Link className="navbar-brand col-2" to="#"><img src={logo} width="55px" height="40px" />BUINESS ARENA</Link>
     <div className="col-sm-6">
      <input className="form-control mr-sm-2" type="search" placeholder="Search for anything" aria-label="Search" />
      </div>
      {/* <div className="col-sm-4 ml-left d-inline-block align-top ">
      <FontAwesomeIcon icon={faBell} color="#a0a2a3" size="1x"/>&nbsp;&nbsp;&nbsp;&nbsp; */}
      
     <Nav>

     
        <NavDropdown title={user && user.access_token}>
        
          {/* <NavDropdown.item>Logout</NavDropdown.item>         */}
        </NavDropdown>
     </Nav>

   
</nav>

    </div>
  )
}

export default NavBar
