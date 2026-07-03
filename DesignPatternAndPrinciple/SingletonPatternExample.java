class Logger {
    private Logger() { 
        System.out.println("Logger has been initialized !");
    }

    private static Logger loggerInstance;

    public static Logger getLoggerInstance() { 
        if ( loggerInstance == null ){
            loggerInstance = new Logger();
        }
        return loggerInstance;
    }
}

public class SingletonPatternExample { 
    public static void main(String [] args){
        Logger log1 = Logger.getLoggerInstance();
        Logger log2 = Logger.getLoggerInstance();

        if (log1 == log2){
            System.out.println("Same Object");
        }
        else {
            System.out.println("Different Objects");
        }
    }
}
