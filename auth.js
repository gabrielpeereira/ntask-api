const passport = require('passport');
const { Strategy } = require('passport-jwt');

const ExtractJWT = require('passport-jwt').ExtractJwt;
const JWTStrategy = require('passport-jwt').Strategy;

module.exports = app => {
    const Users = app.db.models.Users;
    const cfg = app.libs.config;

    const opts = {};
    opts.jwtFromRequest = ExtractJWT.fromAuthHeaderWithScheme('JWT');
    opts.secretOrKey = process.env.API_JWT_SECRET;

    const strategy = new JWTStrategy(opts, { secretOrKey: cfg.jwtSecret },
    (payload, done) => {
        Users.findById(payload.id)
            .then(user => {
                if (user) {
                    return done(null, {
                        id: user.id,
                        email: user.email
                    });
                }
                return done(null, false);
            })
            .catch(error => done(error, null));
    });
    
    passport.use(strategy);
    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate('jwt', cfg.jwtSession);
        }
    };
};