import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import { red } from '@mui/material/colors';

const theme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'capitalize',
				},
			},
		},
	},
	palette: {
		primary: {
			// main: red[500],
			main: '#2d2c61',
		},
	},
});

const GlobalButton = () => {
	return (
		<ThemeProvider theme={theme}>
			<Button type='button' variant='contained' color='primary'>
				Click me
			</Button>
		</ThemeProvider>
	);
};

export default GlobalButton;
