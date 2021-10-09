import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCalendar, FaPhone, FaComments, FaSignOutAlt } from 'react-icons/fa';
import './NavSideBar.css';

function NavSideBar() {
    const sideBar = useRef();
	const toggle = useRef();
	const toggleSideBar = () => {
		sideBar.current.classList.toggle('active');
		toggle.current.classList.toggle('collapsed');
	};
    
    return (
        <div className="wrapper">
			<nav
				id="sidebar"
				ref={sideBar}
				className="flex_column"
			>
				<ul className="navMenu navList flex_column">
					<li className="navItem">
						<Link to="/">
						    <FaHome className="icon"/>	
						</Link>
					</li>
					<li className="navItem">
						<Link to="/">
						    <FaPhone className="icon"/>	
						</Link>
					</li>
					<li className="navItem">
						<Link to="/chat">
						    <FaComments className="icon"/>	
						</Link>
					</li>
					<li className="navItem">
						<Link to="/">
						    <FaCalendar className="icon"/>	
						</Link>
					</li>
					<li className="navItem">
						<Link to="/">
						    <FaPhone className="icon"/>	
						</Link>
					</li>
				</ul>
				<ul className="navMenu">
					<li>
						<div className="navItem" id="LogOut">
							<FaSignOutAlt className="icon"/>
						</div>
					</li>
				</ul>
			</nav>
			<div id="content" className="w-100">
				<nav className="navbar" onClick={toggleSideBar}>
					<button type="button" id="sidebarCollapse" ref={toggle}>
						<span className="icon-bar top-bar"></span>
						<span className="icon-bar middle-bar"></span>
						<span className="icon-bar bottom-bar"></span>
					</button>
				</nav>
			</div>
		</div>
    )
}

export default NavSideBar
