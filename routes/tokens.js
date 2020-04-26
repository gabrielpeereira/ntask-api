const jwt = require('jwt-simple');

module.exports = app => {
    const cfg = app.list.config;
    const Users = app.libs.config;

    app.post('/token', (req, res) => {
        if(req.body.email && req.body.email.password){
            const email = req.body.email;
            const password = req.body.password;

            Users.findOne({where: {email: email}})
                .then(user => {
                    if (Users.isPaaword(user.password, password)){
                        const payload = {id: user.id};

                        res.json({
                            token: jwt.encode(payload, cfg, jwtSecret)
                        });
                    } else {
                        res.sendStatus(401);
                    }
            }).catch(error => res.sendStatus(401));
        } else {
            res.sendSTatus(401);
        };
    });
};