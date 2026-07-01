package LoggingFramework;

import java.util.logging.Level;
import java.util.logging.Logger;

public class LoggingDemo {

    // Create Logger object
    private static final Logger logger = Logger.getLogger(LoggingDemo.class.getName());

    public static void main(String[] args) {

        logger.info("Application Started");

        int a = 20;
        int b = 10;

        logger.info("Value of a = " + a);
        logger.info("Value of b = " + b);

        int sum = a + b;
        logger.info("Sum = " + sum);

        int difference = a - b;
        logger.info("Difference = " + difference);

        int product = a * b;
        logger.info("Product = " + product);

        int quotient = a / b;
        logger.info("Quotient = " + quotient);

        logger.warning("This is a Warning Message.");

        logger.severe("This is a Severe Error Message.");

        logger.log(Level.INFO, "Program Executed Successfully.");
    }
}