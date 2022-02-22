import { RoutePaths } from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

const App = () => (
	<ChakraProvider resetCSS theme={theme}>
		<RoutePaths />
	</ChakraProvider>
);

export default App;
