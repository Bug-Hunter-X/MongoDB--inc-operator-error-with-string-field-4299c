# MongoDB $inc Operator Error with String Field

This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB: attempting to increment a string field.

## Bug

The `bug.js` file contains code that attempts to increment the `age` field, which is a string, using the `$inc` operator. This results in a `TypeError` because the `$inc` operator only works with numeric fields.

## Solution

The `bugSolution.js` file provides the corrected code.  The `age` field is correctly defined as a number, allowing the `$inc` operator to work as expected.  Additionally, error handling is included to manage potential issues, such as if the document is not found.

## How to Reproduce

1. Clone this repository.
2. Install MongoDB.
3. Create a collection (e.g., `users`).
4. Insert a document with a string `age` field (e.g., `{"name": "John", "age": "25"}`).
5. Run `bug.js`. Observe the error.
6. Run `bugSolution.js` which correctly increments the number field.

## Lesson Learned

Always ensure that the field you're incrementing using `$inc` is of a numeric type (int, long, double).