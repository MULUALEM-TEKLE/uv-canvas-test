import {
	Lumiflex,
	Zenitho,
	Novatrix,
	Velustro,
	Tranquiluxe,
	Opulento,
} from "uvcanvas"

export function Home() {
	const components = [
		Lumiflex,
		Novatrix,
		Velustro,
		Tranquiluxe,
		Opulento,
		Zenitho,
	]
	// had to create a separate arrays for names because for some reason when deploying on vercel names get codified
	const componentNames = [
		"Lumiflex",
		"Novatrix",
		"Velustro",
		"Tranquiluxe",
		"Opulento",
		"Zenitho",
	]
	return (
		<>
			<div className="home">
				{components.map((Component, index) => {
					return (
						<div key={index} className={`uv-component uv-component-${index}`}>
							<Component />
							<div className="component-name">{componentNames[index]}</div>
						</div>
					)
				})}
			</div>
		</>
	)
}
