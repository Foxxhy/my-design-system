import React from 'react';
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
import IconSection from './components/iconSection/IconSection';
import FormSection from './components/formSection/FormSection';

const App = () => {
	return (
		<>
			<main className="f-margin-16 f-flex f-flex-column f-gap-16">
				<div>
					<h1 className='f-title-main' >My Style Guide</h1>
				</div>
				<Section title='Global'>
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
				<Section title={"Icons"}>
					<IconSection />
				</Section>
				<Section title={"Forms"}>
					<FormSection />
				</Section>
			</main>
		</>
	)
}

export default App
