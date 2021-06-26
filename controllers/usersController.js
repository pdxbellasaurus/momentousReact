const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
  create: function(req, res) {
    const { firstName, lastName, username, email } = req.body;
    const newUser = { firstName, lastName, username, email };
    newUser.password = bcrypt.hashSync(req.body.password, 10);
    db.User.create(newUser)
      .then((user) => res.json({ status: "success" }))
      .catch((err) => res.status(503).json(err));
  },

  find: function (req, res) {
    db.User.findAll({ username: req.body.username })
      .then((user) => {
        return user;
      })
    },

  login: function (req, res) {
    db.User.findOne({ username: req.body.username })
      .then((user) => {
        const hashed = user.password;
        bcrypt.compare(req.body.password, hashed, function (err, match) {
          if (err) {
            console.log(err);
            res.status(503).send("Server error occurred");
          }
          if (match) {
            // req.session.save({
            //   req.session.userId = user.id;
            //   req.session.username = user.username;
            //   req.session.loggedIn = true;
            // })

            res.json({
              status: "success",
              name: `${user.firstName} ${user.lastName}`,
              username: user.username,
              email: user.email
            });
          } else if (!match) {
           res.send(console.log('user not found'))
         } else {
            res.status(401).send("Unauthorized");
          }
        });
      })
      .catch((err) => res.status(503).json(err));
  },

// login: (req, res) => {
//   res.render("users/login");
// },

// authenticate: (req, res, next) => {
//   User.findOne({
//     email: req.body.email
//   })
//       .then(user => {
//         if (user && user.password === req.body.password){
//           res.locals.redirect = `/users/${user._id}`;
//           req.flash("success", `${user.fullName}'s logged in successfully!`);
//           res.locals.user = user;
//           next();
//     } else {
//       req.flash("error", "Your account or password is incorrect.
//  Please try again or contact your system administrator!");
//       res.locals.redirect = "/users/login";
//       next();
//     }
//   })
//       .catch(error => {
//         console.log(`Error logging in user: ${error.message}`);
//         next(error);
//       });
// }

  logout: function (req, res) {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  }
};




