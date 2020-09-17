import React from 'react';

import './style.scss';
import Footer from './footer';
import Navbar from './navbar';
import Helmet from './helmet';

const Layout = (props) => (
	<div>
		<Helmet />
		<Navbar />
		{props.children}
		<Footer />
	</div>
);

export default Layout;
