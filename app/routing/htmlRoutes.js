module.exports = function (app) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });

}