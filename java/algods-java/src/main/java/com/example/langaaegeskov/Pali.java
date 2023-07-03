package com.example.langaaegeskov;

public class Pali {
    public static void main(String str)
    {
        System.out.println( isPalindrome(str));
        
    }

    public static boolean isPalindrome (String str) {
        int i = 0;
        int j = str.length() - 1;
         
        while (i <= j) {
            if (str.charAt(i) != str.charAt(j)) {
                return false;
            }
            ++i;
            --j;
        }

        return true;
    }
}
