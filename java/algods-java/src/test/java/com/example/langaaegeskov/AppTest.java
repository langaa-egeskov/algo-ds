package com.example.langaaegeskov;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest 
{
    /**
     * Rigorous Test :-)
     */
    @Test
    public void sumTest() {
        int sum = App.sum(1,2);
        assertEquals(3,sum);
    }

    @Test
    public void evaluateTest() {
        int sum = App.evaluate("2+3+4");
        assertEquals(9,sum);
    }
}
