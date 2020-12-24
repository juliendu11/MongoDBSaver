const rimraf = require("rimraf");

class Cleaner {
    static checkExist(fs, fileOrFolderPath) {
        return new Promise((resolve, reject) => {
            fs.stat(fileOrFolderPath, function (err, stats) {
                if (err) {
                    return resolve(false)
                }
                resolve(true);
            })
        });
    }

    static deleteFile(fs, filePath) {
        return new Promise(async (resolve, reject) => {
            if (await this.checkExist(fs, filePath)){
                fs.unlink(filePath, function (err) {
                    if (err) return reject(err);
                    resolve();
                });
            }
        });
    }

    static deleteFolder(fs, folderPath) {
        return new Promise(async (resolve, reject) => {
            if (await this.checkExist(fs, folderPath)){
                rimraf(folderPath, function (err) 
                { 
                    if (err) return reject(err);
                    resolve() 
                });
            }
        });
    }
}

module.exports = Cleaner;