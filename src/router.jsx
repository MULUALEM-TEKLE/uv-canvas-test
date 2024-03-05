import { createBrowserRouter, Outlet } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { Nav } from "./Nav"

import "./style.css"

import { Button, Divider } from "@nextui-org/react"
import { themeStore } from "./store"

export const router = createBrowserRouter([
	{
		element: <NavLayout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/about", element: <About /> },
		],
	},
])

function NavLayout() {
	const { darkMode, toggleDarkMode } = themeStore()

	return (
		<>
			<main
				className={
					darkMode
						? "dark text-foreground bg-background"
						: "light text-foreground bg-background"
				}
			>
				<div className="body">
					<div className="container">
						<div className="menu-section">
							<Nav />
							<Button variant="bordered" onClick={toggleDarkMode}>
								{darkMode ? "light" : "dark"}
							</Button>
						</div>
						<Divider orientation="vertical" />
						<div className="main-view">
							<Outlet />
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
