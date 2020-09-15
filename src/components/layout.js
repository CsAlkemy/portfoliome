import React from 'react';

import './style.scss';
import Footer from './footer';
import Navbar from './navbar';

const Layout = (props) => (
	<div>
		<Navbar />
		{props.children}
		<Footer />
	</div>
);

export default Layout;
