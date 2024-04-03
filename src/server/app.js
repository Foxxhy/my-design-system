import validateCss from 'css-validator';
import fs from 'fs';
import assert from 'assert';

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





validateCss({text: 'a { color: blue; }'}, function (err, data) {
  assert.strictEqual(data.validity, true);
  assert.deepEqual(data.errors, []);
  assert.deepEqual(data.warnings, []);
  console.log('test');
});