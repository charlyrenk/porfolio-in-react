import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	max-width: 1600px;
	margin: auto;
	text-align: left;
	position: relative;
	padding: 30px 0;
	@media (max-width: 576px) {
		padding: 15px 0px;
	} 
`;

const skillsContainer = (props) => (
	<Container className="container">
		<div className="row">
			{props.children}
		</div>
	</Container>
)

export default skillsContainer;