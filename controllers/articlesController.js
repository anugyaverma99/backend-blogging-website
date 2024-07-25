const Article = require('../models/Article'); // Replace with your actual Article model

// Create a new article
exports.createArticle = async (req, res) => {
  try {
    const article = new Article(req.body);
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ message: 'Error creating article', error });
  }
};

// Get the feed of articles
exports.feedArticles = async (req, res) => {
  try {
    const articles = await Article.find(); // Adjust the query as needed
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching articles', error });
  }
};

// Get an article by slug
exports.getArticleWithSlug = async (req, res) => {
  try {
    const article = await Article.findOne({ slug: req.params.slug });
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching article', error });
  }
};
