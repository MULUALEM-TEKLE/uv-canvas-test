import { Divider } from "@nextui-org/react"
import { NavLink } from "react-router-dom"

export function Nav() {
	return (
		<>
			<ul>
				<Divider className="mb-2" />
				<li className="px-2">
					<NavLink to="/" className="my-4 font-bold">
						Home
					</NavLink>
				</li>
				<Divider className="my-2" />
				<li className="px-2">
					<NavLink to="/about" className="my-4 font-bold">
						About
					</NavLink>
				</li>
				<Divider className="my-2" />
			</ul>
		</>
	)
}
