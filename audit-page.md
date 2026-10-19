# Webpage audit: personal profile

Reviewed `index.html`, `style.css`, and `script.js` against the request. Behavior was also checked in a local browser session at `http://127.0.0.1:8765/`.

## Requirement checklist

| Requirement | Status | Notes |
| --- | --- | --- |
| HTML in `index.html` | Pass | Single document with semantic `header`, `main`, `section`, and `footer`. |
| All styling in `style.css` | Pass | Linked with `<link rel="stylesheet" href="style.css">`. |
| No inline `style` attributes | Pass | Search found no `style=` attributes. Theme changes use CSS classes, not inline CSS. |
| Page title | Pass | `<title>PLACEHOLDER: Your Name — Personal Profile</title>` |
| One main heading | Pass | A single `h1` in the hero. Section titles use `h2`. |
| About section | Pass | `#about` with two placeholder paragraphs. |
| Skills as a list | Pass | `#skills` uses a `<ul>` with five `<li>` items. |
| Projects with links | Pass | `#projects` has three items; each title is an `<a href="...">`. Clicking a project link loaded Example Domain (`https://example.com/...`). |
| Unknown details marked PLACEHOLDER | Pass | Name, tagline, about copy, skills, project titles, descriptions, and footer name all include the word `PLACEHOLDER`. |
| `script.js` present | Pass | Sets the footer year, toggles the mobile menu, and switches light/dark theme with `localStorage`. |
| `audit-page.md` present | Pass | This file. |

## Browser review

- Desktop dark theme rendered the title, About, Skills, and the start of Projects.
- Theme toggle changed the page to a light palette and updated the button label to “Switch to dark theme”.
- In-page nav updated the URL to `#projects` and `#skills`.
- On a narrow viewport the Menu button appeared, opened a dropdown, and closed after a nav click.
- Footer year showed `2026` from JavaScript (`new Date().getFullYear()`).
- Project link navigation left the profile page and opened Example Domain, which is expected for the `example.com` placeholders.

## Accessibility and structure

- Skip link, landmark regions, labelled navigation, and `aria-expanded` / `aria-pressed` on the buttons are in place.
- Focus styles live in CSS (`:focus-visible`).
- Project links currently stay in the same tab. That is valid HTML; after you replace placeholders you may want `target="_blank"` and `rel="noopener noreferrer"` for external sites.

## How to replace placeholders

Search the project for `PLACEHOLDER` (about 17 occurrences in `index.html`) and replace:

- Your name (title, brand, heading, footer)
- Tagline and About copy
- Skill names
- Project titles, descriptions, and URLs (`https://example.com/placeholder-project-*`)

## Follow-ups (optional)

- Add a photo or contact section once you have real details.
- Host the site (GitHub Pages or similar) instead of opening files locally.
- Confirm contrast on both themes after you change colors or add images.
