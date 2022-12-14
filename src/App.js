import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactAudioPlayer from 'react-audio-player';

import Header from './components/header/header.component';
import Houses from './components/houses/houses.component';
import House from './components/house/house.component';
import Footer from './components/footer/footer.component';
import Member from './components/member/member.component';
import './App.css';
import { Fragment } from 'react';

function App() {
	return (
		<Fragment>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index element={<Houses />} />
					<Route path=":houseName" element={<House />} />
					<Route path=":houseName/:name" element={<Member />} />
				</Route>
			</Routes>
		</Fragment>
	);
}

export default App;
