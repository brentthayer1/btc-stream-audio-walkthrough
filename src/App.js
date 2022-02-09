import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './pages/home/Home';
import Navigation from './components/navigation/Navigation';

import { home } from './sections/Home';
import { controlSurface } from './sections/controlSurface';
import { generalSetup } from './sections/generalSetup';
import { recording } from './sections/recording';
import { mixing } from './sections/mixing';
import { vocalProcessing } from './sections/vocalProcessing';
import { instProcessing } from './sections/instProcessing';
import { returns } from './sections/returns';
import { masterOut } from './sections/masterOut';

import Setup from './pages/setup/Setup';
import Recording from './pages/recording/Recording';
import Mixing from './pages/mixing/Mixing';
import ControlSurface from './pages/control-surface/ControlSurface';
import VocalProcessing from './pages/vocal-processing/VocalProcessing';
import Returns from './pages/returns/Returns';
import MasterOut from './pages/master-out/MasterOut';

import './App.css';
import InstProcessing from './pages/inst-processing/InstProcessing';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				{/* <Navigation /> */}
				<Routes>
					<Route path='/' element={<Home key={1} section={home} />} />
					<Route
						path='/setup'
						element={<Setup key={2} section={generalSetup} />}
					/>
					<Route
						path='/control-surface'
						element={<ControlSurface key={5} section={controlSurface} />}
					/>
					<Route
						path='/recording'
						element={<Recording key={3} section={recording} />}
					/>
					<Route path='/mixing' element={<Mixing key={4} section={mixing} />} />
					<Route
						path='/vocal-processing'
						element={<VocalProcessing key={5} section={vocalProcessing} />}
					/>
					<Route
						path='/instrument-processing'
						element={<InstProcessing key={6} section={instProcessing} />}
					/>
					<Route
						path='/returns'
						element={<Returns key={7} section={returns} />}
					/>
					<Route
						path='/master-out'
						element={<Returns key={7} section={masterOut} />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
