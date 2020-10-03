class Upload {
    constructor(uptoboxAPIHandler, token) {
        this.uptoboxAPIHandler = uptoboxAPIHandler;
        this.token = token;
    }

    async uploadFile(filePath) {
        const value = await this.uptoboxAPIHandler.uploadOneFile(this.token, filePath)
        if (value.url) {
            return {error:false, message: '', url: value.url};
        }
        return {error:true, message: JSON.stringify(value), url: ''};
    }
}

module.exports = Upload;