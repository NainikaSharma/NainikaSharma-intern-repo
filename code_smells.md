# Code Smells Reflection

## What code smells did you find in your code?

I identified several common code smells including magic numbers, long functions, duplicate code, deeply nested conditionals, commented-out code, and inconsistent variable naming.

Magic numbers and strings made the code harder to understand because their purpose was unclear. Long functions had multiple responsibilities, making them difficult to test and maintain. Duplicate code increased the risk of inconsistent changes. Deeply nested conditions reduced readability, while unused commented-out code created unnecessary clutter.

---

## How did refactoring improve the readability and maintainability of the code?

Refactoring improved the code by separating large functions into smaller functions with clear responsibilities. Constants were introduced instead of hardcoded values, making changes easier in the future. Duplicate logic was replaced with reusable functions, reducing repetition.

Improved naming conventions also made variables and functions easier to understand. Overall, the code became cleaner, easier to test, and simpler to modify.

---

## How can avoiding code smells make future debugging easier?

Avoiding code smells makes debugging easier because clean code has a clearer structure and better separation of responsibilities. Smaller functions make it easier to locate errors, while meaningful names help developers understand the purpose of variables and logic.

Reducing duplication prevents fixing the same bug in multiple places, and removing unnecessary complexity makes it easier to trace problems and maintain the application over time.
