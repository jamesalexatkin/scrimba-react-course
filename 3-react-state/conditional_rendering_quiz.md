1. What is "conditional rendering"?

Changing aspects of a page element depending on conditions (e.g. visibility, class, text).

2. When would you use &&?

When you want to toggle the visibility of an element based on a condition.

3. When would you use a ternary?

When there are two different things that may change in an element (e.g. a text change), but not a simple boolean visibility.

4. What if you need to decide between > 2 options on
   what to display?

It is generally cleaner to perform the logic outside the JSX `return` and store the result in a variable which can then be used in the JSX.
