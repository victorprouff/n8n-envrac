const data = [
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
    },
    {
        title: "Créez facilement des raccourcis clavier en images",
        description: "",
        urls: [
            {
                url: "https://korben.info/generateur-images-raccourcis-clavier.html",
                title: "Créez facilement des raccourcis clavier en images | Le site de Korben",
            },
        ],
        category: "Tools",
        categoryMd: "🛠️ Tools",
    },
    {
        title: "Pourquoi ce scammer me donne de l’argent ?",
        description: "",
        urls: [
            {
                url: "https://www.youtube.com/watch?v=7revMCR3O4M",
                title: "Pourquoi ce scammer me donne de l’argent ?",
            },
        ],
        category: "Youtube",
        categoryMd: "🎞️ Youtube",
    },
    {
        title: "Les États-Unis suspendent toutes leurs opérations cyber contre la Russie",
        description: "",
        urls: [
            {
                url: "https://next.ink/173284/les-etats-unis-suspendent-toutes-operations-cyber-contre-la-russie/",
                title: "Les États-Unis suspendent toutes leurs opérations cyber contre la Russie - Next",
            },
        ],
        category: "Articles",
        categoryMd: "📖 Articles",
    },
    {
        title: "Apprendre, si par bonheur - Becky Chambers",
        description:
            "Dans le futur, 4 astronautes font parti d'une mission scientifique et éthique pour explorer 4 exoplanètes. Une réflexion sur ce que devrait être l'exploration spatiale, une vision éthique et altruiste de la recherche de connaissance. «Nous n’avons rien trouvé que vous pourrez vendre. Nous n’avons rien trouvé d’utile. Nous n’avons trouvé aucune planète qu’on puisse coloniser facilement ou sans dilemme moral, si c’est un objectif important. Nous n’avons rien satisfait que la curiosité, rien gagné que du savoir. »",
        urls: [],
        category: "Livre",
        categoryMd: "📚 Livres",
    },
    {
        title: "Underscore_ - Le cloud français est-il un échec ?",
        description: "",
        urls: [
            {
                url: "https://open.spotify.com/episode/60IbAqpq2k6bwfvdMSRjVI?si=feda39d38f0f4643",
                title: "S5E11 - Le cloud français est-il un échec ?",
            },
        ],
        category: "Podcast",
        categoryMd: "🎧 Podcasts",
    },
    {
        title: "États-Unis : la pollution des data centers pèse sur la santé publique",
        description: "",
        urls: [
            {
                url: "https://next.ink/173587/etats-unis-la-pollution-des-data-centers-pese-sur-la-sante-publique/",
                title: "États-Unis : la pollution des data centers pèse sur la santé publique - Next",
            },
        ],
        category: "Articles",
        categoryMd: "📖 Articles",
    },
    {
        title: "Lier un fragment de texte dans une page web",
        description: "",
        urls: [
            {
                url: "https://blog.professeurjoachim.com/billet/2024-12-03-lier-un-fragment-de-texte-dans-une-page-web",
                title: "Lier un fragment de texte dans une page web",
            },
        ],
        category: "PutAside",
        categoryMd: "Autre",
    },
];

// Execution du code
return run(data);
// return {
//     blogData: run(inputJson.all()),
//     linkedinData: "",
// };
// return run($input.all());

// Fonction principale
function run(articles) {
    var blogData = createBlogArticle(articles);

    console.log(blogData);
    return {
        blogData: blogData,
        linkedinData: "",
    };
}

function createBlogArticle(articles) {
    const tamplate = blogArticleTemplate();

    var blogArticle = tamplate + "\n";

    const groupedArticles = articles.reduce((acc, article) => {
        const key = article.categoryMd;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(article);
        return acc;
    }, {});

    // Filtrer les groupes pour ne garder que ceux qui ont des articles
    Object.keys(groupedArticles).forEach((category) => {
        const articlesInCategory = groupedArticles[category];
        if (
            articlesInCategory.some((article) => article.categoryMd === category)
        ) {
            blogArticle += `<h3>### ${category}</h3>\n`;

            Object.keys(articlesInCategory).forEach((index) => {
                const article = articlesInCategory[index];

                // console.log(article);
                // blogArticle += `<span>    - [${article.title}](${article.urls[0].url})</span><br/>`;
                blogArticle += `<span>    - [${article.title}]</span>\n`;

            });
        }
    });

    // const itemStrings = articles.map(
    //     (item) =>
    //         `category: ${item.categoryMd}, Content: ${item.title}, Description: ${item.description}`
    // );

    // blogArticle += itemStrings.join("\n");

    // var blogArticle = articles.map((article) => {
    //     const header = `<h3>### ${article.categoryMd}</h3>`;

    //     return createArticle(article);
    // });

    // articles.forEach((article) => {
    //     blogArticle += `<span>    - [${article.title}](${article.urls[0].url})</span><br/>`;
    // });

    return blogArticle;
}

function formatArticle(article) {
    // Supposons que _articles soit un tableau d'objets avec une propriété 'Category'
    const groupedArticles = articles.reduce((acc, article) => {
        const key = article.Category;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(article);
        return acc;
    }, {});

    // Filtrer les groupes pour ne garder que ceux qui ont des articles
    Object.keys(groupedArticles).forEach((category) => {
        const articlesInCategory = groupedArticles[category];
        if (
            articlesInCategory.some((article) => article.Category === category)
        ) {
            // Votre logique ici
            console.log(`Category: ${category}, Articles:`, articlesInCategory);
        }
    });
}
function blogArticleTemplate() {
    return `
  <p>Hello ! 😊</p>
  <p>Comme chaque semaine pouvez retrouver ici des liens d’articles de vidéos ou de podcast que j’ai découvert au fil
      de ma veille quotidienne et que j’aimerais partager avec vous. 😀</p>
  <p>Vous pouvez également retrouver :</p>
  
  <span>- Les deux derniers EnVrac :</span><br/>
  <span>    - [[En Vrac] - 27 janvier](https://blog.victorprouff.fr/posts/2025-01-27-envrac/)</span><br/>
  <span>    - [[En Vrac] - 02 janvier](https://blog.victorprouff.fr/posts/2025-02-03-envrac/)</span><br/>
  <span>- Et mes deux derniers articles :</span><br/>
  <span>    - [Gestionnaires mots de passe - Partie 1 - Présentation](https://blog.victorprouff.fr/posts/2025-01-28-gestionnaire-mot-de-passe-partie1/)</span><br/>
  <span>    `;
}
