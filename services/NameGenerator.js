class NameGenerator {
    
    getName() {
        const todayDate = new Date();

        const year = todayDate.getFullYear();
        const month = ("0" + (todayDate.getMonth() + 1)).slice(-2)
        const day = ("0" + (todayDate.getDate())).slice(-2)

        const hour =todayDate.getHours();
        const minute =todayDate.getMinutes();


        return `[${year}-${month}-${day} ${hour}-${minute}-00]database`
    }
}

module.exports = NameGenerator