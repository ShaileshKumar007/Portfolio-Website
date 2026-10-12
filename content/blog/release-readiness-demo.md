---
title: A checklist is not the same as a readiness check
summary: A demonstration article about making release checks observable, actionable, and tied to a clear decision.
category: Engineering practice
demo: true
---

> DEMONSTRATION CONTENT — replace or review this sample before publishing.

A release checklist records steps. A readiness check should help answer a decision: **is this change safe to continue through the next stage?**

That distinction changes how a check is designed. A useful check has an owner, a clear signal, a meaningful failure state, and an action someone can take.

## Start with the decision

Write down what a person needs to know before the release advances. Avoid collecting signals simply because they are easy to query. For example, an endpoint check is useful when its result maps to an owner and a response plan.

## Keep outcomes explicit

| Result | Meaning | Next step |
| --- | --- | --- |
| Ready | Required checks passed | Continue |
| Needs attention | A known issue needs review | Route to the owner |
| Unknown | The check could not determine health | Investigate the signal |

Treating an unknown as healthy hides uncertainty. Treating it as a distinct state makes the system easier to reason about.

## Keep the check maintainable

A small, well-owned set of checks is easier to trust than a large list no one reviews. Make failures explain what was checked, when it ran, and where the result should go.

```java
record CheckResult(String name, Status status, String detail) {}

enum Status {
    READY,
    NEEDS_ATTENTION,
    UNKNOWN
}
```

This is a conceptual example for this demo article, not code from an internal system.

## A useful next question

For every check, ask: **what decision changes when this result changes?** If the answer is unclear, the check may need a better owner, a clearer signal, or a narrower scope.
