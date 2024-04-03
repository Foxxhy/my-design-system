import {
	PROCESS_START,
	PROCESS_THEME,
	PROCESS_CLASSES,
	PROCESS_END,
} from "./configs/index.js";
import {
	THEME_ANIMATION,
	THEME_BREAKPOINTS,
	THEME_COLORS,
	THEME_ELEVATIONS,
	THEME_FONTS,
	THEME_SHADOWS,
	THEME_SIZES,
	THEME_SPACES,
	THEME_WEIGHTS,
	DS_CLASSES,
} from "./configs/index.js";
import {
	getFile,
	validationCSS
} from "./services/index.js";

const app = () => {
	console.log(PROCESS_START);

	console.log(PROCESS_THEME);
	validationCSS(THEME_ANIMATION, getFile(THEME_ANIMATION));
	validationCSS(THEME_BREAKPOINTS, getFile(THEME_BREAKPOINTS));
	validationCSS(THEME_COLORS, getFile(THEME_COLORS));
	validationCSS(THEME_ELEVATIONS, getFile(THEME_ELEVATIONS));
	validationCSS(THEME_FONTS, getFile(THEME_FONTS));
	validationCSS(THEME_SHADOWS, getFile(THEME_SHADOWS));
	validationCSS(THEME_SIZES, getFile(THEME_SIZES));
	validationCSS(THEME_SPACES, getFile(THEME_SPACES));
	validationCSS(THEME_WEIGHTS, getFile(THEME_WEIGHTS));

	console.log(PROCESS_CLASSES);
	validationCSS(DS_CLASSES, getFile(DS_CLASSES));

	console.log(PROCESS_END);
};

app();