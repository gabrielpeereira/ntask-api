const jwt  = require('jwt-simple');
describe('Routes: Tasks', () => {
    const Users = app.db.models.Users;
    const Tasks = app.db.models.Tasks;

    const jwtSecret = app.libs.config.jwtSecret;
})