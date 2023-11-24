import { Button as MuiButton } from '@mui/material';

import styled, { css } from 'styled-components';

const buttonTheme = (theme) => {
	switch (theme) {
		case 'primary':
			return css`
				background-color: black;
				color: white;
			`;
		case 'secondary':
			return css`
				background-color: yellow;
				color: green;
			`;
		default:
			return css``;
	}
};

const Button = styled(MuiButton)`
	${({ theme }) => buttonTheme(theme)}
	border-radius: ${({ radius }) => radius};
	font-size: ${({ fontSize }) => fontSize};
	padding: ${({ padding }) => padding};
`;

const StyledButton = (props) => {
	const { fontSize, radius, padding, theme } = props;
	return (
		<Button type='button' fontSize={fontSize} radius={radius} padding={padding} theme={theme}>
			Styled Click me
		</Button>
	);
};

StyledButton.defaultProps = {
	fontSize: '20px',
};

export default StyledButton;
