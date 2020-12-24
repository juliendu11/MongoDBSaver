module.exports = {
    HOST: process.env.DATABASE_HOST,
    PORT: process.env.DATABASE_PORT,
    ID: process.env.DATABASE_ID,
    PASSWORD: process.env.DATABASE_PASSWORD,
    ADMIN_AUTH: process.env.DATABASE_ADMIN_AUTH,
    CMD: "mongodump --host <HOST> --port <PORT> --db <DATABASE> --username <USERNAME> --password <PASSWORD> <ADMIN_AUTH> --out '<OUTPUT>'"
}