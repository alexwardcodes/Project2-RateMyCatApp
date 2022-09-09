exports.index_get = (req, res) => {
      res.render('home/index', {welcomeMessage: "Welcome to Rate My Cat - the site for cat lovers!"});
    };
    