import { Button } from '@mui/material';
import styled from 'styled-components';

import GlobalButton, { StyledButton } from './component/Button';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

function App() {
	return (
		<Container>
			<GlobalButton />
			<Button type='button' variant='contained'>
				Click Me
			</Button>
			<StyledButton fontSize='20px' radius='10px' padding='1rem 2rem' theme='secondary' />
			<StyledButton fontSize='10px' radius='2px' padding='0.5rem 1rem' theme='primary' />
		</Container>
	);
}

export default App;
