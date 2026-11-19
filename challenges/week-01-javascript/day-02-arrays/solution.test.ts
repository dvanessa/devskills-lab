import { describe, expect, it } from 'vitest';
import { summarizeTasks } from './solution';

describe('Day 02: summarizeTasks', () => {
  it('returns zero counts for an empty array', () => {
    expect(summarizeTasks([])).toEqual({
      total: 0,
      completed: 0,
      pending: 0,
      highPriorityPending: 0,
    });
  });

  it('summarizes a mixed list of tasks', () => {
    const tasks = [
      { id: 1, title: 'Learn React', completed: true, priority: 'high' as const },
      { id: 2, title: 'Practice TypeScript', completed: false, priority: 'high' as const },
      { id: 3, title: 'Study AWS', completed: false, priority: 'medium' as const },
      { id: 4, title: 'Review JavaScript', completed: true, priority: 'low' as const },
    ];

    expect(summarizeTasks(tasks)).toEqual({
      total: 4,
      completed: 2,
      pending: 2,
      highPriorityPending: 1,
    });
  });

  it('does not count completed high-priority tasks as high-priority pending', () => {
    expect(summarizeTasks([
      { id: 1, title: 'Done', completed: true, priority: 'high' },
      { id: 2, title: 'Pending', completed: false, priority: 'low' },
    ])).toEqual({
      total: 2,
      completed: 1,
      pending: 1,
      highPriorityPending: 0,
    });
  });

  it('handles all completed tasks', () => {
    expect(summarizeTasks([
      { id: 1, title: 'Done A', completed: true, priority: 'high' },
      { id: 2, title: 'Done B', completed: true, priority: 'medium' },
    ])).toEqual({
      total: 2,
      completed: 2,
      pending: 0,
      highPriorityPending: 0,
    });
  });

  it('counts multiple pending high-priority tasks', () => {
    expect(summarizeTasks([
      { id: 1, title: 'A', completed: false, priority: 'high' },
      { id: 2, title: 'B', completed: false, priority: 'high' },
      { id: 3, title: 'C', completed: false, priority: 'low' },
    ])).toEqual({
      total: 3,
      completed: 0,
      pending: 3,
      highPriorityPending: 2,
    });
  });

  it('does not mutate the original array or task objects', () => {
    const tasks = Object.freeze([
      Object.freeze({ id: 1, title: 'A', completed: false, priority: 'high' as const }),
      Object.freeze({ id: 2, title: 'B', completed: true, priority: 'medium' as const }),
    ]);
    const original = JSON.parse(JSON.stringify(tasks));

    expect(summarizeTasks([...tasks])).toEqual({
      total: 2,
      completed: 1,
      pending: 1,
      highPriorityPending: 1,
    });
    expect(tasks).toEqual(original);
  });
});
