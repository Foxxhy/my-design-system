const fs = require('fs');
const path = require('path');

// Fonction pour lire le contenu d'un fichier
function readFile(filePath) {
    return fs.promises.readFile(filePath, 'utf8');
}

// Fonction pour récupérer le contenu de tous les fichiers dans un dossier
async function readFilesInDirectory(directoryPath) {
    try {
        const files = await fs.promises.readdir(directoryPath);
        const fileContents = {};

        // Parcours de chaque fichier dans le dossier
        await Promise.all(files.map(async (fileName) => {
            const filePath = path.join(directoryPath, fileName);
            const fileContent = await readFile(filePath);
            fileContents[fileName] = fileContent;
        }));

        return fileContents;
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la lecture des fichiers:', error);
        return {};
    }
}

// Appel de la fonction pour récupérer le contenu des fichiers dans le dossier 'assets'
const directoryPath = path.join(__dirname, 'assets');
readFilesInDirectory(directoryPath)
    .then((fileContents) => {
        console.log('Contenu des fichiers :', fileContents);
        // Construction de l'objet ICONS avec les noms de fichiers et leur contenu
        const ICONS = {};
        for (const fileName in fileContents) {
            ICONS[fileName.split('.')[0]] = fileContents[fileName];
        }
        console.log('ICONS :', ICONS);
        return ICONS;
    })
    .catch((error) => {
        console.error('Une erreur s\'est produite lors de la récupération du contenu des fichiers:', error);
    });
