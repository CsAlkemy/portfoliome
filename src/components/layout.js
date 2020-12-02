import React from 'react';

import './style.scss';
import Footer from './footer';
import Navbar2 from './Navbar/Navbar';
import Helmet from './helmet';

const Layout = (props) => (
	<div>
		<Helmet />
		<Navbar2 />
		{props.children}
		<Footer />
	</div>
);

export default Layout;
