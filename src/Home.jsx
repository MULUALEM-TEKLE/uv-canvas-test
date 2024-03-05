import { Button, Card, CardBody, CardHeader } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"

export function Home() {
	let navigate = useNavigate()

	return (
		<>
			<div className="budget-not-set">
				<Card className="p-2" style={{ width: "100%" }}>
					<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
						<p className="text-tiny uppercase  ">Welcome</p>
						<h1 className="py-2">This is the Home page</h1>
						<Button
							variant="bordered"
							className="redirect-to-set-budget"
							onClick={() => navigate("/about")}
						>
							Go To About
						</Button>
					</CardHeader>
					<CardBody className="overflow-visible py-2"></CardBody>
				</Card>
			</div>
		</>
	)
}
