import { addPrefixer } from './providers/addPrefixer';
import Section from './components/common/Section';
import GlobalSection from './components/globalSection/GlobalSection';
import ColorSection from './components/colorSection/ColorSection';
import TitleSection from './components/titleSection/TitleSection';
import TypographySection from './components/typographySection/TypographySection';
import ButtonSection from './components/buttonSection/ButtonSection';
import BadgeSection from './components/badgeSection/BadgeSection';
import CardSection from './components/cardSection/CardSection';
import ElevationSection from './components/elevationSection/ElevationSection';
import ModalSection from './components/modalSection/ModalSection';
import './common/common.css';
import './app.css';

const App = () => {
	return (
		<>
			<main className={`${addPrefixer('margin-16')} ${addPrefixer('display-flex')} ${addPrefixer('flex-column')} ${addPrefixer('gap-16')}`}>
				<div>
					<h1 className={`${addPrefixer('main-title')}`}>My Style Guide</h1>
				</div>
				<Section title='Global' >
					<GlobalSection />
				</Section>
				<Section title={"Colors & Backgrounds"}>
					<ColorSection />
				</Section>
				<Section title={"Titles"}>
					<TitleSection />
				</Section>
				<Section title={"Typographies"}>
					<TypographySection />
				</Section>
				{/* <Section title={"Links"}>
					<LinkSection />
				</Section>	 */}
				<Section title={"Buttons"}>
					<ButtonSection />
				</Section>
				<Section title={"Badges"}>
					<BadgeSection />
				</Section>	
				<Section title={"Cards"}>
					<CardSection />
				</Section>
				<Section title={"Elevations"}>
					<ElevationSection />
				</Section>
				<Section title={"Modal & Dropdown"}>
					<ModalSection />
				</Section>
			</main>
		</>
	)
}

export default App
