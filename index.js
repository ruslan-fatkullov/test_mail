var express = require("express");

var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
});

app.get("/", function (request, response) {
    response.render("homePage");
});




const nodemailer = require('nodemailer');

app.post("/", function (req, res) {
    console.log(req.query.email)
    res.json({ message: "Вы зарегистрировались" })

    const transporter = nodemailer.createTransport({
        host: "smtp.forwardemail.net",
        port: 465,
        secure: true,
        auth: {
            user: 'root@get-esvo-launcher.ru',
            pass: 'dsfdsfdsfgh'
        }
    });

    async function main() {
        const info = await transporter.sendMail({
            from: '"Fred Foo 👻" <root@get-esvo-launcher.ru>', // sender address
            to: req.query.email,
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);

    }

    main().catch(console.error);


});
