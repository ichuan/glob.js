## Intro

UNIX globbing (wildcard matching) for javascript


## Fetures

### Match exactly one unknown character
```javascript
glob.match('ab?d', 'abcd') // ok
glob.match('ab\\?d', 'ab?d') // ok
```
### Match any number of unknown characters
```javascript
glob.match('ab*d', 'abcaeg@3d') // ok
glob.match('ab\\*d', 'ab*d') // ok
```
### Match a character as part of a group of characters
```javascript
glob.match('ab[cd]e', 'abce') // ok
```
### Escape character
```javascript
glob.match('ab\\nc', 'abnc') // ok
glob.match('ab\\mc', 'abmc') // ok
```

### Combining
```javascript
glob.match("ab?c*[df]\\d|.q", 'ab1c234fd|.q') // ok
```
