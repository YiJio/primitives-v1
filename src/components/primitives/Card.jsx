/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

import base from '../layout/base';

const StyledCard = styled(base('div'))`
	position:relative; display:flex; align-items:center;
`

const Card = ({ title, image, children, ...props }) => {
	return (
		<StyledCard what={'card'} className={'card'} {...props}>{children}</StyledCard>
	)
}

export default Card;