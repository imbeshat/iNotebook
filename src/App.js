import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/about' exact element={<About />} />
					{/* <Route path='/second' exact element={<Second />} /> */}
				</Routes>
			</Router>
		</>
	);
}

export default App;
