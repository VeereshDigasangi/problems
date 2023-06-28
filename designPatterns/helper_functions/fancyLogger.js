class FancyLogger{
    constructor(){
        if(FancyLogger.instance==null){
            this.logs=[];
            FancyLogger.instance=this;
        }
    return FancyLogger.instance;
    }

    logMe(message){
    this.logs.push(message)
    console.log("Fancy message",message);
    }

    logCounter(){
        console.log("Total logs are",this.logs.length);
    }
}

const logger= new FancyLogger();
Object.freeze(logger);
export default logger;