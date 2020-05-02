const https = require('https');
const fs = require('fs');

module.exports = app => {
    if(process.env.NODE_ENV !== "test"){
        const credentials = {
            key: fs.readFileSync('80259167_ntask.key', 'utf-8'),
            cert: fs.readFileSync('80259167_ntask.cert', 'utf-8')
        }
        app.db.sequelize.sync().done(() => {
            https.createServer(credentials, app)
                .listen(app.get('port'), () => {
                    console.log(`NTask API - porta ${app.get('port')}`);
            });
        });
    }
};