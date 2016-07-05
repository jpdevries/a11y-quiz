# a11y-quiz
An accessible HTML quiz about accessibility.

## Demo
[Take the quiz](https://jpdevries.github.io/a11y-quiz/).

## Getting Started
Once you install the Node dependencies the Node server will be ready to&nbsp;launch.

```bash
cd a11y-quiz
npm install
node server.js
```

You should be able to access the quiz at http://localhost:1185. To run the quiz on a different port use the `PORT` environmental&nbsp;variable:

```bash
PORT=8080 node server.js #http://localhost:8080
```

## HTML Semantics
`<main>`, `<form>`, `<button>`, `<fieldset>`, `<legend>`, `<input>`, `<label>`, `<nav>`, and `<footer>` are all semantically used to construct the Accessibility Quiz document. Accessibly hidden text is used along with `aria-hidden` to read the full tag names of tags. For example "Heading Level 6" will be read aloud instead of&nbsp;`<h6>`.

A `<button type="reset">` is used to allow the form to be reset both synchronously and&nbsp;asynchronously.

## Progressive Enhancement
This quiz is HTML&ndash;first meaning that all the questions are accessible even with JavaScript&nbsp;disabled. Synchronous form submissions are supported by the Node&nbsp;server.

![](http://j4p.us/3g3a2H3Q070m/Screen%20Shot%202016-07-04%20at%202.09.55%20PM.png)

JavaScript is used to progressively enhance the quiz by showing one question at a time as well as asynchronously calculating and displaying the&nbsp;score.

![](http://j4p.us/3b3U0a1A0A28/Screen%20Shot%202016-07-05%20at%201.35.01%20AM.png)

In an effort to be mindful of user bandwidth, jQuery is only loaded if native `new FormData().entries()` support detection&nbsp;fails.

## CDN Fallback
If jQuery is needed it will be loaded from `code.jquery.com`. If the CDN is unreachable an "h5bp style" fallback is used to load jQuery&nbsp;locally. This helps keeps the asynchronous experience accessible even if the CDN is blocked or&nbsp;down.

## Synchronous Endpoints
A simple Node backend, `server.js`, is used to support plain HTML. The `<form action>` will post data to a `/score` endpoint. Users will be taken to a new page at `/score` and presented with their score along with a link to play&nbsp;again.

![](http://j4p.us/030O1m080z3Y/Screen%20Shot%202016-07-05%20at%201.33.01%20AM.png)

## ARIA
 - `aria-hidden="true"` is used to prevent numeric code representations of HTML tags like `<h6>` from being read aloud. Instead `.visually-hidden` text like "Heading Level 6" will be read&nbsp;aloud.
 - `aria-live="assertive"` is used to ensure whenever the scope component is updated the new score is read&nbsp;aloud

## Screencasts
 - [VoiceOver Example](https://vimeo.com/173343351)


## Accessibility Proclaimer
This component strives for WCAG 2.0 Guidelines Level AA. Please [open an issue](https://github.com/jpdevries/a11y-quiz/issues/new) for any accessibility issue, feedback, or&nbsp;concern.
