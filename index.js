const express = require("express")
const path = require("path")
const mongoose = require("mongoose")

const userRouter = require("./routes/user")

const app = express();
const PORT = 8000;

mongoose
     .connect('mongodb://localhost:27017/blogify')
     .then((e) => console.log("MongoDB Connected"));

app.set('view engine', 'ejs')
app.set('views', path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
     res.render('home')
})  

app.use("/user", userRouter)
app.use("/", userRouter)


app.listen(PORT, () => console.log(`Server started at PORT:${PORT} `))