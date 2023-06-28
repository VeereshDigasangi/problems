import logger from "./fancyLogger.js";

export default function secondLogger(){
    logger.logCounter()
    logger.logMe("Second Logger")
    logger.logCounter()
}