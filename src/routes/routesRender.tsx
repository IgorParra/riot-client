import { Route } from "react-router-dom";
import { Routes as BrowserRouter } from "react-router-dom";
import { RouterRenderProps } from "./types";

export const RoutesRender = ({ Routes }: { Routes: RouterRenderProps[] }) => {
	return (
		<BrowserRouter>
			{Routes.map(({ path, Element }) => {
				if (!Array.isArray(path)) {
					return <Route path={path} element={Element} key={path} />;
				} else {
					return path.map((prop: string) => (
						<Route path={prop} element={Element} key={prop} />
					));
				}
			})}
		</BrowserRouter>
	);
};
