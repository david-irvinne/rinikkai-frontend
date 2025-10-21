import express from "express";
import Article from "../models/article.js";

const router = express.Router();

router.get('/', (req, res) => {
  res.send("in articles");
})

router.get("/new", (req, res) => {
  res.render("articles/new", {article: new Article()});
})

router.get('/:slug', async (req, res) =>{
  const article = await Article.findOne({slug: req.params.slug});
  if(article == null) res.redirect('/');
  // console.log(article.title);
  // console.log(article.description);
  // console.log(article.markdown);
  res.render('articles/show', {article: article});
})

router.get("/edit/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);

  res.render("articles/edit", {article: article});
})

router.post("/", async (req, res, next) =>{
  req.article = new Article();
  next();
}, saveArticleAndRedirect('new'));

router.put("/:id", async (req, res, next) =>{
  req.article = await Article.findById(req.params.id);
  next();
}, saveArticleAndRedirect('edit'));

function saveArticleAndRedirect(path){
  return async (req, res) => {
    // yang lama, dari database
    let article = req.article; 
    // yang baru diubah dr user, dari body
    article.title = req.body.title; 
    article.description = req.body.description;
    article.markdown = req.body.markdown;
    
    try {
      article = await article.save();
      res.redirect(`/articles/${article.slug}`);
    } catch (error) {
      console.log(error);
      res.render(`articles/${path}`, {article: article}); // prefill
    }
  }
}

router.delete('/:id', async(req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect('/');
})

export default router;

