The Multi-Value Dictionary app is a command line application that stores a multivalue dictionary in memory.  All keys and members are strings.

It should support the following commands.

### KEYS

[X] Returns all the keys in the dictionary.  
[X] Order is not guaranteed.

Example
```
> ADD foo bar
) Added
> ADD baz bang
) Added
> KEYS
1) foo
2) baz
```

### MEMBERS
[X] Returns the collection of strings for the given key.  
[X] Return order is not guaranteed.  
[X] Returns an error if the key does not exists.

Example:
```
> ADD foo bar
> ADD foo baz
> MEMBERS foo
1) bar
2) baz

> MEMBERS bad
) ERROR, key does not exist.
```

### ADD
[X] Adds a member to a collection for a given key. 
[X] Displays an error if the member already exists for the key.

```
> ADD foo bar
) Added
> ADD foo baz
) Added
> ADD foo bar
) ERROR, member already exists for key
```

### REMOVE
[X] Removes a member from a key.  
[X] If the last member is removed from the key, the key is removed from the dictionary. 
[X] If the key or member does not exist, displays an error.

Example:
```
> ADD foo bar
) Added
> ADD foo baz
) Added

> REMOVE foo bar
) Removed
> REMOVE foo bar
) ERROR, member does not exist

> KEYS
1) foo

> REMOVE foo baz
) Removed

> KEYS
) empty set

> REMOVE boom pow
) ERROR, key does not exist
```

### REMOVEALL
[x] Removes all members for a key and removes the key from the dictionary. 
[x] Returns an error if the key does not exist.

Example:
```
> ADD foo bar
) Added
> ADD foo baz
) Added
> KEYS
1) foo

> REMOVEALL foo
) Removed

> KEYS
(empty set)

REMOVEALL foo
) ERROR, key does not exist

```

### CLEAR
[X] Removes all keys and all members from the dictionary.

Example:
```
> ADD foo bar
) Added
> ADD bang zip
) Added
> KEYS
1) foo
2) bang

> CLEAR
) Cleared

> KEYS
(empty set)

> CLEAR
) Cleared

> KEYS
(empty set)

```

### KEYEXISTS
[X] Returns whether a key exists or not.

Example:
```
> KEYEXISTS foo
) false
> ADD foo bar
) Added
> KEYEXISTS foo
) true
```

### MEMBEREXISTS
[x] Returns whether a member exists within a key.  
[x] Returns false if the key does not exist.

Example:
```
> MEMBEREXISTS foo bar
) false
> ADD foo bar
) Added
> MEMBEREXISTS foo bar
) true
> MEMBEREXISTS foo baz
) false
```

### ALLMEMBERS
[X] Returns all the members in the dictionary.  
[X] Returns nothing if there are none. Order is not guaranteed.

Example:
```
> ALLMEMBERS
(empty set)
> ADD foo bar
) Added
> ADD foo baz
) Added
> ALLMEMBERS
1) bar
2) baz
> ADD bang bar
) Added
> ADD bang baz
> ALLMEMBERS
1) bar
2) baz
3) bar
4) baz
```

### ITEMS
[X] Returns all keys in the dictionary and all of their members.  
[X] Returns nothing if there are none.  Order is not guaranteed.

Example:
```
> ITEMS
(empty set)
> ADD foo bar
) Added
> ADD foo baz
) Added
> ITEMS
1) foo: bar
2) foo: baz
> ADD bang bar
) Added
> ADD bang baz
> ITEMS
1) foo: bar
2) foo: baz
3) bang: bar
4) bang: baz
```



