# A solution for asynchronous while loops

## Usage

Native:
```
while (conditional != key) { 
    test()
    jump() 
}
```

AwaitWhile:
```
await awaitWhile.while(test, jump, conditional, key)
```

## Parameters 
### main method:
    The method which you are looping
### jump method:
    The method which you will do in between every loop of method1 (ie. i++)
### conditional:
    The conditional statement (in this case the value that you are trying to get to become the key)
### key:
    The value which resolves the method when the conditional equals it

## Example Methods
### main:
```
async function test(conditional, key, callback) {
    setTimeout(async () => {
        conditional++;
        return callback(conditional, key)
    })
}
```
### jump: 
```
async function jump(i) {
    return i + 1
}
```
