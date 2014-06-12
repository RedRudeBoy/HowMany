module.exports = {
	sessionSecret: 'thisismysecret',
	uri: process.env.IP || 'http://localhost:', // Without trailing /
	port: 8080,
    redis: {
        host: 'localhost',
        port: 6379
    },
    mongodb: 'mongodb://localhost/my_database',
	environment: (process.env.NODE_ENV !== 'production') ? 'development' : 'production',
	selenium : {
		testtimeout : 60000
	}
};

if (module.exports.environment == 'production') {
	module.exports.port = process.env.PORT || 80; // Joyent SmartMachine uses process.env.PORT
}

module.exports.uri += module.exports.port;