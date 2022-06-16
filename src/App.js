import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import NoteState from './context/notes/NoteState';

function App() {
	return (
		<>
			<NoteState>
				<Router>
					<Navbar />
					<div className='container'>
						<Routes>
							<Route path='/' exact element={<Home />} />
							<Route path='/about' exact element={<About />} />
							{/* <Route path='/second' exact element={<Second />} /> */}
						</Routes>
					</div>
				</Router>
			</NoteState>
		</>
	);
}

export default App;
