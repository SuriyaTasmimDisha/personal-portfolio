import { BrowserRouter } from "react-router-dom";
import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-secondary dark:bg-primary">
				<div className="bg-light-hero-pattern dark:bg-dark-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<Feedbacks />
				<div className="bg-primary relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
