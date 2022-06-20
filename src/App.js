import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
	return (
		<>
			<NoteState>
				<Router>
					<Navbar />
					<Alert message='Yo Yo Bantai rapper' />
					<div className='container'>
						<Routes>
							<Route path='/' exact element={<Home />} />
							<Route path='/about' exact element={<About />} />
							<Route path='/login' exact element={<Login />} />
							<Route path='/signup' exact element={<Signup />} />
						</Routes>
					</div>
				</Router>
			</NoteState>
		</>
	);
}

export default App;
