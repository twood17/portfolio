import React, { Component } from 'react';
import { Col, Row, Container } from '../components/Grid';
import Footer from '../components/Footer'

class Home extends Component {
	render() {
		return (
			<Container fluid>
				<Row>
					<h1>I</h1>
				</Row>
                <Footer />
			</Container>
		);
	}
}

export default Home;
