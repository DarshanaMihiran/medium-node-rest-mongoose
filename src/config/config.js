module.exports = {
    dbURL: 'mongodb://127.0.0.1:27017/entertainment',
    dbOptions: {
        directConnection: true,
        serverSelectionTimeoutMS: 2000,
        appName: 'mongosh+2.2.5'
    }
};
