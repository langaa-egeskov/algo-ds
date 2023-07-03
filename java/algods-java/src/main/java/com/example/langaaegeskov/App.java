package com.example.langaaegeskov;

/**
 * https://techcommunity.microsoft.com/t5/testingspot-blog/java-test-with-visual-studio-code/ba-p/3302401
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( sum(1,2));
        System.out.println(evaluate("2+3+4"));
    }

    // adds two ints
    public static int sum(int a, int b) {
        int sum = a + b;
        return sum;
    }

    //calculates an additional expression
    public static int evaluate(String expression) {
        int sum = 0;
        for (String summand: expression.split("\\+"))
            sum += Integer.valueOf(summand);
        return sum;
    }
}
