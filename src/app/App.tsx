import { addPrefixer } from './providers/addPrefixer';
import Section from './components/common/Section';
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

// ${addPrefixer('margin-16')}

const App = () => {
	return (
		<>
			<main className={`${addPrefixer('margin-16')} ${addPrefixer('display-flex')} ${addPrefixer('flex-column')} ${addPrefixer('gap-16')}`}>
				<div>
					<h1 className={`${addPrefixer('main-title')}`} >My Style Guide</h1>
				</div>
				<Section title={"Colors"}>
					test
				</Section>
				<ColorSection />
				<Title />
				<Typography />
				<Button />
				<Badge />
				<Link />
				<Card />
				<Elevation />
				<Modal />
			</main>
		</>
	)
}

export default App
