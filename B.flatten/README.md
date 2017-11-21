# B.flatten
Flatten function

Usage:
```
B.flatten( [1, [2, [3, [4, [5]]]]] ); // => [1, 2, 3, 4, 5]
```

For two level nested arrays just use:
```
Array.prototype.concat.apply([], [ [1, 2], [3, 4] ]); // => [1, 2, 3, 4]
```
