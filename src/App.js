import Theme from "./styles/Theme";

import { About, Contact, Home, Resume, Review, Screen } from "./containers";

function App() {
	return (
		<Theme>
			<Screen>
				<Home />
				<About />
				<Resume />
				<Review />
				<Contact />
			</Screen>

			{/* <Screen /> */}
		</Theme>
	);
}

export default App;
