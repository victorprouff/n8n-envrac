const { log } = require("console");
// const convertToArticles = require("./src/EnVracLib");
const { healthCheck, convertToArticles } = require("./src/EnVracLib");

const data = [
    {
        section: 153821093,
        content:
            "8BitDo Lite 2 : la mini manette pas chère qui ne va plus quitter votre sac (vraiment)",
        description:
            "[8BitDo Lite 2 : la mini manette pas chère qui ne va plus quitter votre sac (vraiment) | Le site de Korben](https://korben.info/8bitdo-lite-2-la-mini-manette-pas-chere-qui-ne-va-plus-quitter-votre-sac-vraiment.html)",
    },
    {
        section: 181074629,
        content:
            "BioArt Source - Une mine d'or d'illustrations médicales gratuites",
        description:
            "[BioArt Source - Une mine d'or d'illustrations médicales gratuites | Le site de Korben](https://korben.info/bioart-source-illustrations-medicales-gratuites.html)\n[Sources](https://bioart.niaid.nih.gov/)",
    },
    {
        section: 181074705,
        content: "Pourquoi les criminels achètent ces téléphones 6000$ ?",
        description:
            "[https://www.youtube.com/watch?v=dS01AoUF1xo](https://www.youtube.com/watch?v=dS01AoUF1xo&t=1s)",
    },
    {
        section: 179438112,
        content: "Article",
        description: "",
    },
    {
        section: 184011119,
        content: "Podcast",
        description: "",
    },
    {
        section: 184719314,
        content: "Livre",
        description: "",
    },
    {
        section: 181074629,
        content: "Créez facilement des raccourcis clavier en images",
        description:
            "[Créez facilement des raccourcis clavier en images | Le site de Korben](https://korben.info/generateur-images-raccourcis-clavier.html)",
    },
    {
        section: 181074705,
        content: "Pourquoi ce scammer me donne de l’argent ?",
        description:
            "[Pourquoi ce scammer me donne de l’argent ?](https://www.youtube.com/watch?v=7revMCR3O4M)",
    },
    {
        section: 153821093,
        content: "Lier un fragment de texte dans une page web",
        description:
            "[Lier un fragment de texte dans une page web](https://blog.professeurjoachim.com/billet/2024-12-03-lier-un-fragment-de-texte-dans-une-page-web)",
    },
];

var result = convertToArticles(data);

log(result);

var health = healthCheck();
log(health);