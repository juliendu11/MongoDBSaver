class Compressor {
    constructor(zipper){
        this.zipper = zipper;
    }

    compress(dir, outputDir) {
        return new Promise((resolve, reject) => {
            this.zipper.zipFolder(dir, outputDir, function(err) {
                if(err) {
                    reject(err);
                }
                resolve();
            });
        });
    }
}

module.exports = Compressor;