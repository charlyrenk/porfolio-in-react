import React, {Fragment} from 'react';
import styled from 'styled-components';
import {Element} from 'react-scroll';

const SectionTitle = styled.h2`	
	font-size: 60px;
	font-family: 'Alegreya Sans',sans-serif;
	text-align: center;
	margin: 90px 0 0 0;
	color: #c8b16a;
	font-weight: bold;
	@media (max-width: 576px) {
		font-size: 36px;
	} 
`;

const element = {
	marginTop: '-57px'
}

const sectionTitle = (props) => (
	<Fragment>
		<Element style={element} name={props.id}>
		</Element>
		<SectionTitle>{props.title}</SectionTitle>
	</Fragment>

)

export default sectionTitle;