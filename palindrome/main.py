class Solution:
    def isPalindrome(self, x: int) -> bool:
        original = x
        rev = 0
        while x > 0 :
            current = x % 10
            rev = rev * 10 + current
            x //= 10
        return original == rev


solution = Solution()
print(solution.isPalindrome(-121))