import React from 'react';
import './style.css';

function Nav(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<h3>William Wood</h3>
			<div className="collapse navbar-collapse " id="navbarNavAltMarkup">
				<div className="navbar-nav ">
					<a className="nav-item nav-link active" href="/">
						About <span className="sr-only">(current)</span>
					</a>
					<a className="nav-item nav-link" href="/Projects">
						Projects
					</a>
					<a className="nav-item nav-link" href="/Contact">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
