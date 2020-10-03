class Mongo {
    constructor(config, executor) {
        this.config = config;
        this.executor = executor;
    }

    saveDatabase(databaseName, outputFolder) {
        return new Promise((resolve, reject) => {
            let cmd = this.config.CMD
                .replace('<HOST>', this.config.HOST)
                .replace('<PORT>', this.config.PORT)
                .replace('<DATABASE>', databaseName)
                .replace('<USERNAME>', this.config.ID)
                .replace('<PASSWORD>', this.config.PASSWORD)
                .replace('<OUTPUT>', outputFolder);

            if (!this.config.ID) {
                cmd = cmd
                .replace('--username', '')
                .replace('--password', '')
            }

            this.executor(cmd, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                }
                resolve(outputFolder)
            });
        });
    }
}

module.exports = Mongo;