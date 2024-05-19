/*GET Homepage*/
const index = (req, res) => {
    res.render('index', {title: "Travlr etaways"});
};

module.exports = {
    index
}