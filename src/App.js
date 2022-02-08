import Header from './components/header/Header';
import Home from './pages/home/Home';
import Navigation from './components/navigation/Navigation';

import {
	generalSetup,
	recording,
	mixing,
	intro,
	controlSurface,
} from './sections/section1';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Setup from './pages/setup/Setup';
import Recording from './pages/recording/Recording';
import Mixing from './pages/mixing/Mixing';

import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Navigation />
				<Routes>
					<Route path='/' element={<Home key={intro.id} section={intro} />} />
					<Route
						path='/setup'
						element={<Setup key={generalSetup.id} section={generalSetup} />}
					/>
					{/* <Route
						path='/recording'
						element={<Recording key={recording.id} section={recording} />}
					/> */}
					{/* <Route
						path='/mixing'
						element={<Recording key={mixing.id} section={mixing} />}
					/> */}
					<Route
						path='/control-surface'
						element={
							<Recording key={controlSurface.id} section={controlSurface} />
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
