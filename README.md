# DevSkills Lab

**A hands-on Fullstack learning and assessment repository** for a 10-week journey through JavaScript, React, TypeScript, ASP.NET Core, AWS, and technical English.

## Goals
- Solve a practical coding challenge every study day.
- Validate solutions with automated tests.
- Explain technical decisions clearly in English.
- Track learning progress with a consistent 100-point daily rubric.
- Grow this repository into a React + .NET + AWS portfolio project.

## Tech stack
- **Now:** TypeScript, Vitest, GitHub Actions
- **Later:** React, ASP.NET Core, PostgreSQL, Docker, AWS

## Quick start
Requires Node.js 20+ and npm.

```bash
git clone https://github.com/dvanessa/devskills-lab.git
cd devskills-lab
npm install
npm run typecheck
npm test
```

**Expected on day one:** TypeScript checking should pass, but Day 01 tests **fail intentionally** because `createCounter` is a TODO. Implement the function to make them pass. GitHub Actions will likewise be red until the challenge is solved.

## Day 01
Go to [Day 01 — Closures & Scope](challenges/week-01-javascript/day-01-closures/README.md).

1. Read the instructions and English learning resources.
2. Implement `solution.ts` without editing the tests.
3. Run `npm test` and `npm run typecheck`.
4. Answer the concept questions and English prompt in `evaluation.md`.
5. Commit your work.

## Scoring
| Area | Points |
| --- | ---: |
| Technical concepts | 40 |
| Automated coding challenge | 40 |
| Technical English | 20 |
| **Total** | **100** |

Coding is assessed automatically; concept answers and English communication are evaluated with a rubric.

## Repository roadmap
- Weeks 1–3: JavaScript, TypeScript, React, HackerRank-style exercises
- Week 4: ASP.NET Core and PostgreSQL
- Weeks 5–7: AWS, Docker, CI/CD
- Weeks 8–10: interview practice and portfolio improvements

> This is an educational project. Never publish secrets, AWS credentials, or personal recordings.
