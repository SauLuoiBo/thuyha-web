import Theme from "./styles/Theme";

import { About, Contact, Home, Resume, Review } from "./containers";

function App() {
	return (
		<Theme>
			<Home />
			<About />
			<Resume/>
			<Review />
			<Contact />
			
		</Theme>
	);
}

export default App;
