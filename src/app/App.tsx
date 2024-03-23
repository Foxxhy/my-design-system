import ColorSection from './components/color/Color';
import Title from './title/Title';
import Badge from './badge/Button';
import Typography from './typography/Typography';
import Button from './button/Button';
import Card from './card/Card';
import Link from './link/Link';
import Elevation from './elevation/Card';
import Modal from './modal/Modal';
import './common/common.css';
import './app.css';

const App = () => {
	return (
		<main className='main-container'>
			<ColorSection />
			<Title />
			<Typography/>
			<Button />
			<Badge />
			<Link />
			<Card />
			<Elevation />
			<Modal />
		</main>
	)
}

export default App
