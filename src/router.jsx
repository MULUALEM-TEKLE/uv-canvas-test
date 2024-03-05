import { createBrowserRouter, Outlet } from "react-router-dom"
import { Home } from "./Home"

import "./style.css"

export const router = createBrowserRouter([
	{
		element: <NavLayout />,
		children: [{ path: "/", element: <Home /> }],
	},
])

function NavLayout() {
	return (
		<>
			<div className="container">
				<Outlet />
			</div>
		</>
	)
}
