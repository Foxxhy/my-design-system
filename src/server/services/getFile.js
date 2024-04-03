import fs from 'fs';
import logger from 'winston';
// const cssFilePath = '../../styles.css';
const cssFilePath = '../../theme.css';

fs.readFile(cssFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Une erreur s\'est produite lors de la lecture du fichier CSS :', err);
        return;
    }

    // Affichage du contenu du fichier CSS
    console.log('Contenu du fichier CSS :', data);
});

export const getFile = (path) => {
    return fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            logger.log('error', "127.0.0.1 - there's no place like home");
            return;
        }

        return data;
    });
};