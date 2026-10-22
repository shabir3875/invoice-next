'use strict';

const assert = require('assert');
const braces = require('./index');

console.log('Running safe-braces comprehensive test suite...');

// Test 1: Normal patterns
assert.deepStrictEqual(braces('./src/**/*.{js,jsx}'), ['./src/**/*.(js|jsx)']);
assert.deepStrictEqual(braces.expand('./pages/**/*.{js,jsx}'), ['./pages/**/*.js', './pages/**/*.jsx']);
assert.deepStrictEqual(braces('a/{b,c}/d'), ['a/(b|c)/d']);
assert.deepStrictEqual(braces.expand('a/{b,c}/d'), ['a/b/d', 'a/c/d']);
assert.deepStrictEqual(braces.expand('{1..5}'), ['1', '2', '3', '4', '5']);
assert.deepStrictEqual(braces.expand('{01..03}'), ['01', '02', '03']);
assert.deepStrictEqual(braces.expand('a/{b,{c,d}}/e'), ['a/b/e', 'a/c/e', 'a/d/e']);
assert.deepStrictEqual(braces('a/{1..10}/b'), ['a/([1-9]|10)/b']);
console.log('✓ Normal glob patterns pass');

// Test 2: Curly brace nesting limit (GHSA-vfj7-8cjw-p6xm)
assert.throws(() => {
  braces('{'.repeat(40) + 'a' + '}'.repeat(40));
}, /Max brace nesting depth \(32\) exceeded/);
console.log('✓ Curly nesting depth > 32 throws SyntaxError');

// Test 3: Parentheses nesting limit
assert.throws(() => {
  braces('('.repeat(40) + 'a' + ')'.repeat(40));
}, /Max nesting depth \(32\) exceeded/);
console.log('✓ Parentheses nesting depth > 32 throws SyntaxError');

// Test 4: Direct AST compile recursion limit
let root = { type: 'root', nodes: [] };
let cur = root;
for (let i = 0; i < 70; i++) {
  const next = { type: 'brace', open: true, close: true, commas: 1, nodes: [] };
  cur.nodes.push(next);
  cur = next;
}
assert.throws(() => {
  braces.compile(root);
}, /Max AST compile recursion depth \(64\) exceeded/);
console.log('✓ Direct AST compile recursion depth > 64 throws RangeError');

// Test 5: Cartesian product combinatorial explosion
assert.throws(() => {
  braces.expand('{a,b}'.repeat(21));
}, /expanded array length exceeds range limit/);
console.log('✓ Combinatorial Cartesian explosion throws RangeError');

// Test 6: Max input length
assert.throws(() => {
  braces('a'.repeat(10001));
}, /exceeds max characters/);
console.log('✓ Input length > 10000 throws SyntaxError');

console.log('✅ ALL safe-braces tests passed successfully!');

