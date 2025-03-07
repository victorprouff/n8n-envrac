const { log } = require('console');
const convertToArticles = require('../src/EnVracLib');

test('convertToArticles', () => {
    const input = [
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
        }
    ];
    const output = [
        {
            title: "8BitDo Lite 2 : la mini manette pas chère qui ne va plus quitter votre sac (vraiment)",
            description: "",
            urls: [
                {
                    url: "https://korben.info/8bitdo-lite-2-la-mini-manette-pas-chere-qui-ne-va-plus-quitter-votre-sac-vraiment.html",
                    title: "8BitDo Lite 2 : la mini manette pas chère qui ne va plus quitter votre sac (vraiment) | Le site de Korben",
                },
            ],
            category: "PutAside",
            categoryMd: "Autre",
        },
        {
            title: "BioArt Source - Une mine d'or d'illustrations médicales gratuites",
            description: "",
            urls: [
                {
                    url: "https://korben.info/bioart-source-illustrations-medicales-gratuites.html",
                    title: "BioArt Source - Une mine d'or d'illustrations médicales gratuites | Le site de Korben",
                },
                {
                    url: "https://bioart.niaid.nih.gov/",
                    title: "Sources",
                },
            ],
            category: "Tools",
            categoryMd: "🛠️ Tools",
        },
        {
            title: "Pourquoi les criminels achètent ces téléphones 6000$ ?",
            description: "",
            urls: [
                {
                    url: "https://www.youtube.com/watch?v=dS01AoUF1xo&t=1s",
                    title: "https://www.youtube.com/watch?v=dS01AoUF1xo",
                },
            ],
            category: "Youtube",
            categoryMd: "🎞️ Youtube",
        }
    ];
    var result = convertToArticles(input);
    log(result);
    expect(result).toBe(output);
});