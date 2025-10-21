import express from "express"
import dotenv from "dotenv";
import methodOverride from "method-override";
import {connectDB} from "./lib/db.js";
import articleRouter from "./routes/articles.js";
import Article from "./models/article.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));


app.use("/articles", articleRouter);

app.get('/', async (req, res) => {  
  const articles = await Article.find().sort({createdAt: 'desc'}); 
  res.render('articles/index', {articles: articles});
})



app.listen(PORT, () => {
  console.log("server is running on port", PORT);
  connectDB();
})

/*

*/ 
