export default {
	ENV: process.env.NODE_ENV,
	PORT: process.env.PORT || '2332',
  node_version: process.version,
  database: {
    url: process.env.DB_URL || 'mongodb://localhost:27017/event2ally'
  },
  logger: {
    level: process.env.LOG_LEVEL || 'info',
    file: process.env.LOG_FILE || 'logs/error.log'
  },
}