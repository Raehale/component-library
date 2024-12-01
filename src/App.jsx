import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/Banner"
import Card from "./components/Card/Card"
import Testimonial from "./components/Testimonial/Testimonial"
import Tooltip from "./components/Tooltip/Tooltip"
import Toast from "./components/Toast/Toast"

export default function App() {
	return (
		<>
			<header><h1>Rae's React Component Library</h1></header>
			<main>
				<section className="badges">
					<Badge variant="square" color="gray">Gray</Badge>
					<Badge variant="pill" color="red">Red</Badge>
					<Badge variant="square" color="yellow">Yellow</Badge>
					<Badge variant="pill" color="green">Green</Badge>
					<Badge variant="square" color="blue">Blue</Badge>
				</section>

				<section className="banners">
					<Banner variant="success" title="Congratulations!">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
					</Banner>
					<Banner variant="warning" title="Attention">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
					</Banner>
					<Banner variant="error" title="There is a problem with your application">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
					</Banner>
					<Banner variant="nutral" title="Update available">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
					</Banner>
				</section>

				<section className="cards">
					<Card title="Easy Deployment">
						Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
					</Card>
				</section>

				<section className="testimonials">
					<Testimonial img="rae.jpg" name="Rae Haley" location="Cedar Mountain Software, Junior Dev">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
					</Testimonial>
					<Testimonial name="Rae Haley" location="Cedar Mountain Software, Junior Dev">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
					</Testimonial>
				</section>

				<section className="tooltips">
					<Tooltip title="Archive Notes" color="black" varient="dark">Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>
					<Tooltip title="Archive Notes" color="black" varient="light">Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>
					<Tooltip title="Archive Notes" color="blue" varient="dark">Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>
					<Tooltip title="Archive Notes" color="blue" varient="light">Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>
					<Tooltip title="Archive Notes" color="purple" varient="dark">Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>
					<Tooltip title="Archive Notes" color="purple" varient="light">Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>
					<Tooltip title="Archive Notes" color="green" varient="dark">Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>
					<Tooltip title="Archive Notes" color="green" varient="light">Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>
				</section>

				<section className="toasts">
					<Toast variant="Success">Your work has been saved</Toast>
					<Toast variant="Warning">A network error was detected</Toast>
					<Toast variant="Information">Please read updated information</Toast>
					<Toast variant="Error">Please re-save your work again</Toast>
				</section>
			</main>
			<footer>Rae</footer>
		</>
	)
}
