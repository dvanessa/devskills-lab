# Day 01 — Closures & Scope

## Learning objectives
- Explain lexical scope and closures in JavaScript.
- Implement private state without global variables.
- Demonstrate independent state across function instances.

## Practical task (40 points)
Implement `createCounter(initialValue)` in `solution.ts`. It must return a function that increments its own counter by one every time it is called.

**Rules:** Do not change `solution.test.ts`. Do not use global state or classes.

Run `npm install` and `npm test` from the repository root. Tests intentionally fail until you implement the solution.

## Concept questions (40 points)
1. What is a closure, and why does `createCounter` need one? (20 points)
2. What is the difference between lexical scope and global scope? Give an example. (20 points)

## Technical English (20 points)
Explain in English for 1–2 minutes: **How does my counter preserve state between calls?** Record notes or a transcript in `evaluation.md`.

## Practical English resources
- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures)
- [javascript.info: Variable scope, closure](https://javascript.info/closure)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
