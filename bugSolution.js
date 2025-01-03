```javascript
// Correct usage of $inc operator with a numeric field
db.collection.updateOne({name: "John"}, {$inc: {age: 1}}, (err, result) => {
if (err) {
  console.error("Error updating document:", err);
} else if (result.modifiedCount === 0) {
  console.warn("Document not found or not updated.");
} else {
  console.log("Document updated successfully.");
}
});
```