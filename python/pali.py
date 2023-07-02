def isPalindrome(arr_or_str):
    i = 0
    j = len(arr_or_str) - 1

    while i <= j:
        if arr_or_str[i] != arr_or_str[j]:
            return False
        i += 1
        j -= 1

    return True
