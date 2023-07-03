// package com.example;
package com.example.langaaegeskov;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class PaliTest {
    /**
     * test even odd # Palindrome 'racecar'
     */
    @Test
    public void test_01() {
        String possiblePali_01 = "racecar";
        assertTrue(Pali.isPalindrome(possiblePali_01));
    }

    @Test
    public void test_02() {
        String possiblePali_02 = "abbaabba";
        assertTrue(Pali.isPalindrome(possiblePali_02));
    }

    @Test
    public void test_03() {
        String possiblePali_03 = "artbdtra";
        assertFalse(Pali.isPalindrome(possiblePali_03));
    }
}
