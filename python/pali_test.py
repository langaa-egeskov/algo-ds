#  run with below
#  python3 -m unittest pali_test.py

import pali
import unittest


class TestStringInput(unittest.TestCase):
    def test_str_isPalindrome(self):
        self.assertTrue(pali.isPalindrome("racecar"))
        self.assertTrue(pali.isPalindrome("abbaabba"))
        self.assertFalse(pali.isPalindrome("artbdtra"))


class TestArrayInput(unittest.TestCase):
    def test_list_isPalindrome(self):
        self.assertTrue(pali.isPalindrome([[1, 2, 3, 4, 3, 2, 1]]))
        self.assertTrue(pali.isPalindrome([5, 6, 7, 7, 6, 5]))
        self.assertFalse(pali.isPalindrome([8, 9, 3, 1, 2, 3, 9, 8]))


if __name__ == "__main__":
    unittest.main()
