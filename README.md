# a11y-quiz
An accessible HTML quiz about accessibility.

## Demo
[Take the quiz](https://jpdevries.github.io/a11y-quiz/).

## HTML Semantics
`<main>`, `<form>`, `<button>`, `<fieldset>`, `<legend>`, `<input>`, `<label>`, `<nav>`, and `<footer>` are all semantically used to construct the Accessibility Quiz document. Accessibly hidden text is used along with `aria-hidden` to read the full tag names of tags. For example "Heading Level 6" will be read aloud instead of&nbsp;`<h6>`.

A `<button type="reset">` is used to allow the form to be reset both synchronously and&nbsp;asynchronously.

## ARIA
 - `aria-hidden="true"` is used to prevent numeric question numbers like 5) from being read aloud
 - `aria-live="assertive"` is used to ensure whenever the scope component is updated the new score is read&nbsp;aloud

 _Instead of reading numeric question numbers like "5)"" screen readers will ready visually hidden text like&nbsp;"Question 5 "._

## Progressive Enhancement
This quiz is HTML&ndash;first meaning that all the questions are accessible even with JavaScript&nbsp;disabled.

![](http://j4p.us/3g3a2H3Q070m/Screen%20Shot%202016-07-04%20at%202.09.55%20PM.png)

JavaScript is used to progressively enhance the quiz by showing one question at a time as well as asynchronously calculating and displaying the&nbsp;score.

In an effort to be mindful of user bandwidth, jQuery is only loaded if native `new FormData().entries()` support detection&nbsp;fails.

## Screencasts
 - [VoiceOver Example](https://vimeo.com/173343351)

## Accessibility Proclaimer
This component strives for WCAG 2.0 Guidelines Level AA. Please [open an issue](https://github.com/jpdevries/a11y-quiz/issues/new) for any accessibility issue, feedback, or&nbsp;concern.
