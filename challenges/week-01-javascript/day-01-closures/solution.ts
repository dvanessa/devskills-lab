/** Day 01: implement a closure-based counter. */
export function createCounter(initialValue = 0): () => number {
  let count = initialValue;
  return () =>{
      count++;
      return count;
  }
}
