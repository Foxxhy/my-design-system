# Design System
Ce document contient les directives et les conventions pour utiliser le Design System dans vos projets. Le Design System fournit une série de variables, de classes et de composants réutilisables pour garantir la cohérence visuelle et la facilité de développement.

Variables Globales
Les variables globales sont définies au niveau de la racine et peuvent être utilisées dans tout le système de conception pour assurer la cohérence visuelle. Elles incluent des variables pour les couleurs, les espaces, les polices, etc.

Exemple :
```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --space-xs: 8px;
    --space-s: 16px;
    /* Autres variables globales */
}
```

## Consommation des Variables
Les variables globales peuvent être utilisées dans les classes SASS pour appliquer facilement des styles cohérents à vos éléments HTML.

Exemple :
```scss
.button {
    background-color: var(--primary-color);
    color: var(--white);
    padding: var(--space-s);
    border-radius: var(--space-xs);
    /* Autres styles */
}
```

## Atomes
Les atomes représentent les éléments de base du Design System, tels que les couleurs, les espaces, les badges, les boutons, etc. Ces éléments peuvent être combinés pour créer des molécules et des organismes plus complexes.

### Background
Les arrières-plans fournissent des classes pour définir des arrière-plans colorés.

### Badges
Les badges sont des composants utilisés pour afficher des informations, généralement sous forme de texte court.

### Button
Les boutons sont des éléments interactifs utilisés pour déclencher des actions lorsque l'utilisateur clique dessus.

### Cards
Les cartes sont des conteneurs rectangulaires utilisés pour afficher des informations liées, souvent sous forme de blocs de contenu.

### Grid
La grille fournit des classes pour créer des mises en page réactives et adaptatives.

### Link
Les liens sont des éléments cliquables permettant à l'utilisateur de naviguer vers d'autres pages ou sections du site.

### Separator
Les séparateurs sont des éléments utilisés pour diviser visuellement le contenu, généralement sous forme de lignes horizontales ou verticales.

### Shadow
Les ombres sont des effets visuels appliqués aux éléments pour leur donner de la profondeur et de la dimension.

### Text
Les styles de texte fournissent des classes pour définir la taille, la couleur, la police, etc., du texte.

### Title
Les titres sont des éléments utilisés pour mettre en évidence et organiser le contenu, généralement sous forme de titres et de sous-titres.

## Molécules
Les molécules combinent plusieurs atomes pour former des éléments plus complexes et fonctionnels. Les molécules disponibles dans ce Design System sont Collapse, Modal et Dialog.