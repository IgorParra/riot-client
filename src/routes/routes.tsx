import { Client, LeagueOfLegendsPage, ValorantPage } from "../pages";
import { RoutesRender } from "./routesRender";
import { RouterRenderProps } from "./types";

const InternRoutes: RouterRenderProps[] = [
	{ path: "/valorant", Element: <ValorantPage /> },
	{ path: ["/leagueoflegends", "/lol"], Element: <LeagueOfLegendsPage /> },
	{ path: "/", Element: <Client /> },
];

export const RoutePaths = () => <RoutesRender Routes={InternRoutes} />;
