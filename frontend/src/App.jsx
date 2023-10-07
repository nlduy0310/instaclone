import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';
import HomeLayout from '../components/layout/HomeLayout';
import Explore from '../pages/Explore';
import Reels from '../pages/Reels';
import Messages from '../pages/Messages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="/reels" element={<Reels />} />
					<Route path="/messages" element={<Messages />} />
				</Route>
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/resetpassword" element={<ResetPassword />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
