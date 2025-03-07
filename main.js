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

// ------------------------------------------------

// Initialisation
const markdownLinkPattern = /\[(.*?)\]\((.*?)\)/;
const urlPattern =
    /(?:https?:\/\/)?(?:www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/;

class Link {
    constructor(url, title = "Source") {
        this.url = url;
        this.title = title;
    }

    ToMarkdown() {
        return `[${this.title}](${this.url})`;
    }
    ToMarkdown(value) {
        return `[${value ?? Title}](${Url})`;
    }
}

// Enum Category en JavaScript (supposée pour l'exemple)
const Category = {
    Youtube: "Youtube",
    Articles: "Articles",
    Tools: "Tools",
    Podcast: "Podcast",
    Livre: "Livre",
    PutAside: "PutAside",
};

// Classe Article en JavaScript
class Article {
    // Constructeur privé simulé en JavaScript
    constructor(title, description, urls, category) {
        this._title = title;
        this._description = description;
        this._urls = urls;
        this._category = category;
    }

    // Méthode statique pour créer une instance de Article
    static create(title, description, urls, category) {
        return new Article(title, description, urls, category);
    }

    // Getters pour accéder aux propriétés
    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get urls() {
        return this._urls;
    }

    get category() {
        return this._category;
    }
}

// Execution du code
return run(data);
// return {
//     blogData: run(inputJson.all()),
//     linkedinData: "",
// };
// return run($input.all());

// Fonction principale
function run(params) {
    var articles = params.map((item) => {
        return convertToArticle(item); // item.json
    });

    return articles;
    // const itemStrings = articles.map(item => `section: ${item.section}, Content: ${item.content}, Description: ${item.description}`);
    // console.log("itemStrings", itemStrings);

    // var blogData = createBlogArticle(articles);

    // console.log(blogData);
    // return {
    //     blogData: blogData,
    //     linkedinData: "",
    // };
}

function createBlogArticle(articles) {
    var tamplate = blogArticleTemplate();

    var blogArticle = articles.map((article) => {
        const header = `<h3>### ${toCategoryString(article.category)}</h3>`;

        return createArticle(article);
    });

    articles.forEach((article) => {
        blogArticle += `<span>    - [${article.title}](${article.urls[0].url})</span><br/>`;
    });

    return blogArticle;
}

function convertToArticle(article) {
    var urls = extractRegexPattern(article.content, markdownLinkPattern);
    var descriptionWithoutLinks = removeRegexPattern(
        article.description,
        markdownLinkPattern
    );

    var otherUrls = extractRegexPattern(
        article.description,
        markdownLinkPattern
    );
    var descriptionWithoutUrls = removeRegexPattern(
        descriptionWithoutLinks,
        urlPattern
    );

    var item = Article.create(
        article.content,
        cleanText(descriptionWithoutUrls),
        removeDoublon(urls.concat(otherUrls)),
        convertToCategory(article.section)
    );
    return item;
}

// Fonction pour convertir un entier en une catégorie
function convertToCategory(content) {
    // Utiliser un objet pour mapper les entiers aux catégories
    const categoryMap = {
        181074705: Category.Youtube,
        179438112: Category.Articles,
        181074629: Category.Tools,
        184011119: Category.Podcast,
        184719314: Category.Livre,
    };

    // Retourner la catégorie correspondante ou PutAside par défaut
    return categoryMap[content] || Category.PutAside;
}

function toCategoryString(category) {
    switch (category) {
      case 'Youtube':
        return '🎞️ Youtube';
      case 'Articles':
        return '📖 Articles';
      case 'Tools':
        return '🛠️ Tools';
      case 'Podcast':
        return '🎧 Podcasts';
      case 'Livre':
        return '📚 Livres';
      default:
        return 'Autre';
    }
  }
  
// -------

// Fonction pour extraire des motifs regex d'une chaîne d'entrée
function extractRegexPattern(input, pattern) {
    if (!input) {
        return [];
    }

    const matches = [...input.matchAll(new RegExp(pattern, "g"))];
    const links = [];

    matches.forEach((match) => {
        if (match.length === 1) {
            links.push(new Link(removeLastCharIfIsPoint(match[0])));
        } else if (match.length > 2) {
            links.push(new Link(removeLastCharIfIsPoint(match[2]), match[1]));
        }
    });

    return links;
}

// Fonction pour supprimer le dernier caractère s'il s'agit d'un point
function removeLastCharIfIsPoint(input) {
    return input.endsWith(".") ? input.slice(0, -1) : input;
}

function removeRegexPattern(input, pattern) {
    if (!input) {
        return "";
    }

    const regex = new RegExp(pattern, "g");
    return input.replace(regex, "");
}

function cleanText(input) {
    if (input.length === 1) {
        return "";
    }
    return input.replace(/\n/g, "").replace(/- /g, "").replace(/-/g, "");
}

function removeDoublon(links) {
    const uniqueLinksMap = new Map();

    links.forEach((link) => {
        uniqueLinksMap.set(link.url, link);
    });

    return Array.from(uniqueLinksMap.values());
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