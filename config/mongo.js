module.exports = {
    HOST: process.env.DATABASE_HOST,
    PORT: process.env.DATABASE_PORT,
    ID: process.env.DATABASE_ID,
    PASSWORD: process.env.DATABASE_PASSWORD,
    CMD: "mongodump --host <HOST> --port <PORT> --db <DATABASE> --username <USERNAME> --password <PASSWORD> --out '<OUTPUT>'"
}