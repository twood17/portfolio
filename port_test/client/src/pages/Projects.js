import React, { Component } from 'react';
import { Col, Row, Container } from '../components/Grid';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel'

class Projects extends Component {
	render() {
		return (
			<Container fluid>
				<Row>
					<Carousel />
				</Row>
				<Footer />
			</Container>
		);
	}
}

export default Projects;
