---
name: docdr
description: Write, revise, or review technical documentation using Diátaxis and clear, gradual explanations. Use for tutorials, how-to guides, reference pages, conceptual guides, and documentation structure or readability reviews.
---

# docdr

Help the reader take the next step without having to guess what a sentence means.

This skill is based on [Diátaxis](https://diataxis.fr/). We admire the [FastAPI documentation](https://fastapi.tiangolo.com/python-types/).

## Start with the reader

Infer the audience, their existing knowledge, and their immediate need from the request and surrounding documentation. Read the relevant source, examples, and project instructions before describing product behavior. Ask a focused question only when a missing fact would materially change the result.

Match the requested scope: a paragraph edit stays a paragraph edit; a review produces findings unless edits were requested. Preserve the user's language, terminology, documentation system, and chosen format. The approach applies beyond Python and web APIs.

Choose the kind of documentation by what the reader is doing now. A beginner can need a reference entry; an expert can need a tutorial for an unfamiliar task.

| The reader needs to… | Write… | The page succeeds when… |
| --- | --- | --- |
| Practise something unfamiliar with guidance | A tutorial | They complete a meaningful exercise and see what their actions do. |
| Solve a specific problem in their work | A how-to guide | They can reach their goal in their own situation. |
| Look up an exact fact while working | Reference | They find a precise answer quickly. |
| Understand a subject and its reasons | Explanation | They can connect the ideas and understand the tradeoffs. |

Keep one main purpose per page. When content serves another need, move it to an appropriate existing page and link to it, or suggest a separate page if that exceeds the requested scope. Brief context can stay when it is needed to use the page. A README can introduce the project and direct readers to several kinds of documentation.

Improve the material that needs attention first. Do not manufacture four empty sections, rename a whole site, or require every topic to have four pages. For a requested full documentation set, use these categories to identify real reader needs and group useful pages; retain working URLs or provide redirects when reorganizing.

## Write for the chosen purpose

### Tutorial: guide an exercise

Choose a small, meaningful result and one dependable route to it. State the starting requirements, files, and environment. Give exact actions in order, with recognizable results at useful checkpoints. Tell the reader what to notice before moving on. Use a consistent example they can run again. Keep choices and background discussion off the main path; link to them afterward. End with the thing the reader has made and a relevant next step.

### How-to guide: solve the problem

Name the goal in the title. Start with the situation in which the guide applies and the prerequisites it assumes. Give actions in dependency order. Include conditional choices when real situations differ, and say how to choose. Explain placeholders before the reader uses them. Finish with a way to confirm the desired state; add recovery guidance for likely failures. Link to background and full option lists instead of teaching the subject from scratch.

### Reference: make facts easy to find

Organize entries around the product's public interface: commands, configuration, APIs, fields, or other named elements. Use a consistent layout. For each relevant item, state its purpose, exact spelling or signature, type, required status, default, constraints, result, and errors or side effects where applicable. Distinguish an omitted value from an explicit empty or null value. Add a small usage example where it removes ambiguity. Preserve precision and completeness within the requested scope; never invent missing facts to fill a table. Keep the tone factual and link to procedures or design discussion.

### Explanation: connect the ideas

Bound the page with a real question about how or why the subject works. Begin with a familiar situation, then explain the mechanism and its consequences. Discuss reasons, constraints, alternatives, and tradeoffs. Distinguish documented design decisions from your own interpretation. Use an analogy only when it helps, map it back to the actual system, and state where it stops being accurate. Keep setup steps and exhaustive parameter lists in linked guides or reference pages.

## Make each idea easy to follow

Use the relevant examples in [Writing patterns](references/writing-patterns.md) when drafting a new page or making a substantial style revision.

- Give the reader a concrete reason to care before introducing new syntax or terminology.
- Start with the smallest useful example. Keep its names and setting stable as you add one concept at a time. Show the changed part with enough surrounding context to place it.
- Put the action, expected result, and a brief observation close together. Code should not leave the reader to infer what changed or why the output matters.
- Use everyday words where they preserve the meaning. Introduce necessary technical terms in plain language at first use, then use the same term consistently. Keep literal API names and units exact.
- Build sentences on what the reader already knows. Name the thing a pronoun refers to when that could be unclear. Use short paragraphs with a single developed idea, not a pile of disconnected fragments.
- Address the reader directly. Use active verbs and descriptive headings. Avoid marketing claims, unexplained acronyms, and reassurance such as “obviously,” “simply,” or “easy” in place of an explanation.
- Use a table for comparable facts, a list for steps or parallel items, and a diagram for relationships that prose makes difficult to follow. Provide useful labels and image descriptions.
- Keep notes and warnings selective. Essential steps belong in the main flow. Put a concrete warning before the action with the relevant consequence; place optional depth after the reader can make progress.

Adapt the pace to the purpose: a reference entry should remain compact, and a how-to guide should respect the reader's competence. Friendly writing must not erase exact behavior, limitations, or prerequisites.

## Verify and review

Check correctness separately from readability. Resolve names, flags, defaults, versions, links, and example behavior against the relevant source or authoritative documentation. Run examples and the existing documentation build or link checks when available and appropriate. Do not execute commands with external effects merely because they appear in a guide. Say exactly what you verified and what you could not verify; label illustrative output and pseudocode.

Review the artifact in two passes:

1. **Reader need:** Does the page serve its chosen purpose? Are scope, prerequisites, navigation, and success criteria clear? Are facts complete for that scope, and are digressions linked to their proper home?
2. **Reading flow:** Can the reader understand each new idea using only what has already been introduced? Are the examples coherent, the terms explained, and the actions and results unambiguous?

When peer review is requested, ask an independent reviewer to assess the actual draft and its supporting evidence. Fix material findings and recheck the affected section. If no independent reviewer is available, disclose that and perform a separate self-review without calling it peer review.

Deliver the requested documentation or focused review. Keep process commentary and review records out of reader-facing pages unless requested. Report material changes, verification, and unresolved factual gaps briefly; avoid a second essay about the framework.
