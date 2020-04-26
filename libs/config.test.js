module.exports = {
    database: "ntask_test",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "ntask.sqlite",
        loggin: false,
        define: {
            underscored: true
        }
    },

    jwtSecret: 'Nta$K_API',
    jwtSession: {session: false}
};