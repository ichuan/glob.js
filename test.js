var glob= require('./glob').glob
  , assert = require('assert');

// Test
// ? and *
assert.ok(glob.match('abcd\\?de', 'abcd?de'))
assert.ok(glob.match('abcd?de', 'abcdxde'))
assert.ok(glob.match('abcd\\*de', 'abcd*de'))
assert.ok(glob.match('abcd*de', 'abcdsdg93klg9slgde'))
// char group
assert.ok(glob.match('ab[cf]d*de', 'abfdsdg93klg9slgde'))
// special chars
assert.ok(glob.match('ab.cd(w|9)x', 'ab.cd(w|9)x'))
assert.ok(!glob.match('ab.cd(w|9)x', 'ab.cdwx'))
// normal escapings
assert.ok(glob.match('abc\\me', 'abcme'))
assert.ok(glob.match('abc\\\\e', 'abc\\e'))
// special escapings
assert.ok(glob.match('abc\\nme', 'abcnme'))
assert.ok(glob.match('abc\\dme', 'abcdme'))
