var express = require("express");

var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
});

app.get("/", function(request, response)  {
    response.render("homePage");
});

app.post("/", function(req, res){
    console.log(req.query.email)
    res.json({message: "Вы зарегистрировались"})
});
