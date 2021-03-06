import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	max-width: 1600px;
	margin: auto;
	text-align: left;
	position: relative;
	padding: 30px;
	@media (max-width: 576px) {
		padding: 30px 30px 0;
	} 
`;

const container = (props) => (
	<Container>
		{props.children}
	</Container>
)

export default container;