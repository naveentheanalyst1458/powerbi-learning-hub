# Power BI Learning Hub — Modular V3

Development preview based on the approved Topics 1 & 2 version, not on the older single-lesson production site. The original visual labs, practice, quiz questions and topic completion rules are preserved; both quizzes use a common renderer. The notes use Markdown with trusted HTML for existing richly styled tables and callouts.

## Open the website
Extract the entire ZIP and double-click `index.html`. The prebuilt JavaScript works locally without a server or network connection. No Python installation is needed just to view the site.

## Edit a lesson
1. Edit `content/business-intelligence.md` or `content/intro.md`.
2. From the project root, install the build dependency once: `python -m pip install -r requirements.txt`.
3. Regenerate the browser-ready notes: `python tools/build_notes.py`.
4. Refresh the browser and check the Notes tab. Commit both the Markdown and generated JavaScript when approved.

Markdown source is the authoring source of truth. The website reads `generated/lesson-notes.js`, not the raw Markdown. This avoids local browser fetch restrictions and works on GitHub Pages. No automatic build or Drive sync is configured. Only trusted author content should be compiled (HTML is allowed).

## File responsibilities
- `index.html`: page shell and legacy fallback templates.
- `css/styles.css`: existing visual design.
- `config/course.js`: curriculum metadata and topic IDs.
- `content/*.md`: written lesson sources named by topic ID.
- `tools/build_notes.py`: shared Markdown compiler.
- `generated/lesson-notes.js`: compiled lesson content.
- `js/app.js`: navigation, labs, practice and progress; shared notes and quiz lookup.

The next stage will organise reusable visual lab components. Custom visual labs still have topic-specific logic; new topics also require curriculum registration and activities. Do not mark unfinished topics ready until their activities exist.

Deploy only after reviewing the development branch. The ZIP does not change GitHub or Google Drive.

## Edit or add a quiz
- Edit `quizzes/<topic-id>.json` (same topic ID as `config/course.js`). Each question has `question`, `options`, `correct` (zero-based option index), and `why`. Quiz metadata controls the title, pass percentage, and optional completion/score storage.
- Run `python tools/build_quizzes.py` to validate and regenerate `generated/quiz-data.js`. Commit both the JSON and generated output. No additional dependency is needed for this build.
- The shared renderer is `js/quiz-engine.js`. It supports variable question counts and one point per correct answer; no topic-specific quiz code is required. Both existing five-question quizzes retain their 80% pass threshold. Topic 1 retains manual completion; Topic 2 retains automatic completion on a pass and its last-score key. The quiz layout and feedback styling are now consistent.
- Browser navigation was blocked in the authoring environment; local browser verification is required.
