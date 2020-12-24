class Mongo {
    constructor(config, executor) {
        this.config = config;
        this.executor = executor;
    }

    saveDatabase(databaseName, outputFolder) {
        return new Promise((resolve, reject) => {
            if (typeof this.config.ADMIN_AUTH === 'string'){
                this.config.ADMIN_AUTH = (this.config.ADMIN_AUTH == 'true');
            }

            let cmd = this.config.CMD
                .replace('<HOST>', this.config.HOST)
                .replace('<PORT>', this.config.PORT)
                .replace('<DATABASE>', databaseName)
                .replace('<USERNAME>', this.config.ID)
                .replace('<PASSWORD>', this.config.PASSWORD)
                .replace('<OUTPUT>', outputFolder)
                .replace('<ADMIN_AUTH>', this.config.ADMIN_AUTH ? '--authenticationDatabase admin': '');

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