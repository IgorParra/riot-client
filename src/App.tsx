import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";

import { GlobalStyles, theme } from "./styles";
import { RoutePaths } from "./routes";

const App = () => (
	<ChakraProvider resetCSS theme={theme}>
		<Global styles={GlobalStyles} />
		<RoutePaths />
	</ChakraProvider>
);

export default App;
