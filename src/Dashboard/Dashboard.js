import React from 'react';
import  '../Dashboard/Dashboard.css';
import NavBar from '../NavBar/NavBar';
import Chart from './chart';
import Requisition from './Requisition';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset,faAddressBook, faFileAlt, faHome, faStickyNote, faUsers } from '@fortawesome/free-solid-svg-icons'

function Dashboard() {
    return (
        <>
        <NavBar />
        <div className="container-class bg-dark">
        <ul>
            <li><Link to="/Requisition" style={{ textDecoration: 'none', color:'white' }}><FontAwesomeIcon icon={faHome} color="rgb(239,244,240,255);" size="1x"  className="icon-1"/><span className="text-set">Dashboard</span></Link></li>
            <li><Link to="/Chart" style={{ textDecoration: 'none', color:'white' }}><FontAwesomeIcon icon={faAddressBook} color="rgb(0, 132, 255);" size="1x" className="icon-2" /><span className="text-set-1">Requisitions</span></Link></li>
            <li><Link to="/Requisition" style={{ textDecoration: 'none', color:'white' }}><FontAwesomeIcon icon={faStickyNote} color="rgb(0, 132, 255);" size="1x" className="icon-3" /><span className="text-set-2">Stock</span></Link></li>
            <li><Link to="/Requisition" style={{ textDecoration: 'none', color:'white' }}><FontAwesomeIcon icon={faUsers} color="rgb(0, 132, 255);" size="1x" className="icon-4" /><span className="text-set-3">Employees</span></Link></li>
            <li><Link to="/Requisition" style={{ textDecoration: 'none', color:'white' }}><FontAwesomeIcon icon={faFileAlt} color="rgb(0, 132, 255);" size="1x" className="icon-5" /><span className="text-set-4">Report</span></Link></li>

        </ul>
            
        <p id="Dashboard-headset"><FontAwesomeIcon icon={faHeadset} color="rgb(0, 132, 255);" size="2x" />&nbsp;&nbsp;&nbsp;Support</p>
        <p id="Dashboard-mailId">businessArena@mail.com</p>
        <p id="Dashboard-Number">+91999245778</p>
        <Link id="Dashboard-maillower" to="/">businessArena@mail.com</Link>

        </div>
        <div className="Requisition-class">
            <Requisition/>
        </div>
        <div className="chart-class">
            <Chart/>
        </div>

        
        </>
    )
}

export default Dashboard;
