export default class NewsApiService {

    BASE_PATH = 'http://newsapi.org/v2/top-headlines?country=ua&category=business&apiKey=';
    USER_KEY = '54166df2e24f48ba9b998adcec40ca5e';

    getResource = async () => {
        const res = await fetch(`${this.BASE_PATH}${this.USER_KEY}`);
        if (res.status === 'error') {
            throw new Error(`${res.message}`)
        };
        const body = await res.json();
        return body;
    }

    getAllArticles = async () => {
        const res = await this.getResource();
        return res.articles.map(this._transformArticle);
    }

    _transformArticle = (article) => {
        return {
            author: article.author,
            title: article.title,
            description: article.description,
            url: article.url,
            urlToImage: article.urlToImage,
        }
    }
}

