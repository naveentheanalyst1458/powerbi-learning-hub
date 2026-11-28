# Power BI Learning Hub

Power BI Notes, DAX, Practical Examples and Exercises

## Modular foundation v1

This is a refactor of the existing development branch (00fbeb283412049dbf1c57a50b51a9b4130f0143). The visual design, available lesson and existing interactions are unchanged.

| File | Responsibility |
|---|---|
| index.html | Page structure and current lesson markup |
| css/styles.css | Shared styles and responsive layout |
| config/course.js | Existing curriculum catalogue |
| js/app.js | Module search, lesson navigation, tabs, quiz and browser-local progress |

Open index.html locally to preview, or serve the directory with `python -m http.server 8000`. Keep the file paths intact.

## Deployment

Upload the contents (not the enclosing directory) to the development branch. Preserve the directory structure. Review and test before merging into main. Do not change GitHub Pages publishing settings during development.

## Deferred work

Markdown lesson rendering, JSON question banks, multiple independent lessons, reusable quiz engine, and Google Drive resource links are future steps. The current source includes only the existing introduction lesson and one quiz question; the previously approved additional content is not included in the supplied ZIP.

## Validation
- Static verification: original HTML structure, CSS, course data and application code preserved exactly apart from extraction and surrounding whitespace/comments.
- JavaScript syntax checks passed for both scripts.
- Browser testing could not run because the environment blocks local browser navigation. Manually check appearance, search, navigation, quiz and progress before merging.
