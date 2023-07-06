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
    console.log("Отправка письма...")
    sendMail().then((result) => {
        console.log("Получилось");
        console.log(result);
    }).catch((err) => {
        console.log("Пшёл нахуй отсюдова")
        console.log(err)
    });
});


async function sendMail() {
    //let testEmailAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: 'mail.get-esvo-launcher.ru',
        port: 587,
        secure: false,
        auth: {
            user: "fatkullov1999",
            pass: "bhqayhjibalbqgxz",
        },
    });

    let result = await transporter.sendMail({
        from: `"Node js" <root@fatkullov@inbox.ru>`,
        to: 'fatkullov1999@gmail.com',
        subject: 'Message from Node js',
        text: 'This message was sent from Node js server.',
        html:
            'This <i>message</i> was sent from <strong>Node js</strong> server.',
    });
    return result

}