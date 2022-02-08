import Header from './components/header/Header';
import Home from './pages/home/Home';
import Navigation from './components/navigation/Navigation';

import { home } from './sections/Home';
import { controlSurface } from './sections/controlSurface';
import { generalSetup } from './sections/generalSetup';
import { recording } from './sections/recording';
import { mixing } from './sections/mixing';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Setup from './pages/setup/Setup';
import Recording from './pages/recording/Recording';
import Mixing from './pages/mixing/Mixing';
import ControlSurface from './pages/control-surface/ControlSurface';

import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Navigation />
				<Routes>
					<Route path='/' element={<Home key={home.id} section={home} />} />
					<Route
						path='/setup'
						element={<Setup key={generalSetup.id} section={generalSetup} />}
					/>
					<Route
						path='/recording'
						element={<Recording key={recording.id} section={recording} />}
					/>
					<Route
						path='/mixing'
						element={<Mixing key={mixing.id} section={mixing} />}
					/>
					<Route
						path='/control-surface'
						element={
							<ControlSurface
								key={controlSurface.id}
								section={controlSurface}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
