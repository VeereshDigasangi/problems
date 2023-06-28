class DatabaseFactory{
    static createConnection(config){
        if(config.type=="mysql"){
            return new MySQLConnection()
        }else if(config.type=="mongoose"){
            return new mongodbConnection()
        }

    }
}

module.exports = DatabaseFactory;