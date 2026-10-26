# HCI Redesign Report

- **Project:** Personal portfolio redesign and final assessment audit
- **Status:** Draft for owner review; not deployed
- **Screenshot archive:** [`hci-evidence/`](./hci-evidence/)

## Scope and evidence method

The redesign retains the portfolio’s dark olive-green palette and monospace identity while improving the homepage, project cards and detail pages, About content, skills, work history, and contact form. The additional **Robotic Arm Control Using Forward and Inverse Kinematics for Precision Tasks** page is explicitly marked as under development and distinguishes its goals from work and results that are not documented.

The original comparison site was checked out at Git commit `dc17fb4`, immediately before the “Webpage overhaul” commit. Production-build screenshots were captured from that exact revision and from the final local build, at matching 390 × 844 CSS-pixel mobile and 1440 × 900 CSS-pixel desktop viewports. The captures are full-page images: their PNG widths match the CSS viewport, while their heights reflect the page’s full content. The final archive has no development overlay. The original and intermediate screenshot files have been preserved; nothing was deleted or overwritten in the public screenshot directory.

The archive is outside `public/`, so assignment evidence is not served as website content. See [`hci-evidence/03-intermediate-development/screenshot-index.md`](./hci-evidence/03-intermediate-development/screenshot-index.md) for provenance and the archive map.

## Assignment map — all 14 applications

| # | Category and application | Where and how it is implemented | Usability effect | Assessment |
|---:|---|---|---|---|
| 1 | **Gestalt — Proximity** | Project detail pages keep the title, metadata, introduction, image, technology badges, and explanatory sections in related regions. The examination project separates Backend, Frontend, and Security; VV Bygg separates its three existing information groups. | Visitors can associate labels, descriptions, and media locally rather than searching across distant page regions. | Clearly present |
| 2 | **Gestalt — Similarity** | Project cards, technology badges, detail-page cards, skill categories, and experience entries reuse their respective spacing, typography, borders, and colors. | Repeated visual patterns make comparable content easier to recognize. | Clearly present |
| 3 | **Gestalt — Continuity** | The detail pages share the same sequence—breadcrumb, heading and metadata, introduction, image, badges, detail groups, related projects—and aligned responsive card grids. | A consistent reading order supports scanning and makes the next section predictable. | Clearly present; alignment is most visible on desktop |
| 4 | **Gestalt — Figure/Ground** | Dark card surfaces and image frames sit above the botanical olive background on project listings and detail pages. | Bounded surfaces help distinguish foreground content from the decorative background. | Present, but intentionally subdued neighboring colors make this less strong than a high-contrast example |
| 5 | **Gestalt — Closure** | A small SVG robot face is integrated beside the “På robot-siden” technical explanation. Four separated head-contour segments, eyes, mouth, and antenna imply a complete robot head without a closed outline or explanatory caption. | The familiar face features give the viewer enough information to mentally complete the missing contour; the symbol is relevant to the robot project rather than decoration. | Visible in the final robot page; its 64 px size is a weaker demonstration than a larger isolated image, so review it at actual display size |
| 6 | **Focus-Attention — Contrast** | Warm gold distinguishes the homepage “Les mer om meg” CTA, labeled project actions, technology badges, form labels, focus indicators, and submit action from dark surfaces. | Important actions and labels are easier to locate. | Clearly present; no formal color-contrast ratio audit was performed |
| 7 | **Focus-Attention — Size and scale** | The homepage name and project titles are more prominent than role labels, introductions, section headings, and body text. | Establishes a hierarchy from page subject to supporting detail. | Clearly present |
| 8 | **Focus-Attention — Whitespace** | Responsive gaps separate the homepage hero, card groups, project sections, skill and experience groups, badges, and form fields. | Distinguishes tasks and content without relying on extra decorative elements. | Present; mobile spacing is more compact than desktop |
| 9 | **Recognition — Icon + text labels** | Project-card actions pair an arrow with the explicit label “Se prosjekt.” | The action is named instead of requiring visitors to infer the meaning of an icon alone. | Clearly present |
| 10 | **Recognition — Consistent patterns** | Cards and badges repeat their established styling on the homepage, `/projects/`, and the three original project details; the Senior Project uses the same project structure and status treatment. | Familiar patterns reduce the need to relearn how similar content is presented. | Clearly present |
| 11 | **Recognition — Location and field cues** | Project details show a “Prosjekter / [project]” breadcrumb and related-project links. The mobile navigation exposes the active route, and contact fields have persistent labels above them. | Visitors can recognize their location, navigation choices, and field purposes without relying on memory or placeholders. | Clearly present |
| 12 | **7±2 — Application 1: technical skills** | The existing technical skills are arranged in five named category cards, with each skill and its explanation kept together. | Five top-level domain groups let visitors scan by area before reading individual skill details, rather than approaching the content as one long list. | Clearly present |
| 13 | **7±2 — Application 2: work experience** | The five existing jobs use repeated cards that separate role, employer, dates, and description. | Five recognizable entries can be scanned and compared as chunks. | Clearly present |
| 14 | **7±2 — Application 3: robot technologies** | Python, C++, OpenCV, Arduino, Computer Vision, and Embedded Systems appear as six consistently styled badges in one technology group. | The six requested concepts are easy to perceive as one bounded set, without adding technologies. | Clearly present |

The 7±2 examples use grouping as a practical scanning aid; they do not claim that a fixed number is a universal cognitive limit.

## Screenshot evidence

These pairs compare the original commit with the final local build at matching viewport widths. Each image is a genuine full-page capture; image heights vary with page content.

### E1 — Homepage: hierarchy, attention, and labeled CTA

| Mobile — 390 px CSS viewport | Desktop — 1440 px CSS viewport |
|---|---|
| Before: [original homepage](./hci-evidence/01-original-website/mobile/home-mobile-390-fullpage.png) · After: [final homepage](./hci-evidence/02-final-website/mobile/home-mobile-390-fullpage.png) | Before: [original homepage](./hci-evidence/01-original-website/desktop/home-desktop-1440-fullpage.png) · After: [final homepage](./hci-evidence/02-final-website/desktop/home-desktop-1440-fullpage.png) |

### E2 — Project cards: proximity, similarity, continuity, figure/ground, and icon + text

| Mobile — 390 px CSS viewport | Desktop — 1440 px CSS viewport |
|---|---|
| Before: [original projects page](./hci-evidence/01-original-website/mobile/projects-mobile-390-fullpage.png) · After: [final projects page](./hci-evidence/02-final-website/mobile/projects-mobile-390-fullpage.png) | Before: [original projects page](./hci-evidence/01-original-website/desktop/projects-desktop-1440-fullpage.png) · After: [final projects page](./hci-evidence/02-final-website/desktop/projects-desktop-1440-fullpage.png) |

The final homepage also retains the three featured projects: [mobile](./hci-evidence/02-final-website/mobile/home-mobile-390-fullpage.png) · [desktop](./hci-evidence/02-final-website/desktop/home-desktop-1440-fullpage.png).

### E3 — About, technical skills, and work experience

| Mobile — 390 px CSS viewport | Desktop — 1440 px CSS viewport |
|---|---|
| Before: [original About page](./hci-evidence/01-original-website/mobile/about-mobile-390-fullpage.png) · After: [final About page](./hci-evidence/02-final-website/mobile/about-mobile-390-fullpage.png) | Before: [original About page](./hci-evidence/01-original-website/desktop/about-desktop-1440-fullpage.png) · After: [final About page](./hci-evidence/02-final-website/desktop/about-desktop-1440-fullpage.png) |

### E4 — Shared project-detail structure

The robot, examination-system, and VV Bygg captures show the shared detail-page hierarchy on both screen sizes. The robot pair also contains the integrated Closure symbol and six-item technology group.

| Page and viewport | Before | After |
|---|---|---|
| Robot — mobile | [Original](./hci-evidence/01-original-website/mobile/robot-mobile-390-fullpage.png) | [Final](./hci-evidence/02-final-website/mobile/robot-mobile-390-fullpage.png) |
| Robot — desktop | [Original](./hci-evidence/01-original-website/desktop/robot-desktop-1440-fullpage.png) | [Final](./hci-evidence/02-final-website/desktop/robot-desktop-1440-fullpage.png) |
| Examination system — mobile | [Original](./hci-evidence/01-original-website/mobile/examination-mobile-390-fullpage.png) | [Final](./hci-evidence/02-final-website/mobile/examination-mobile-390-fullpage.png) |
| Examination system — desktop | [Original](./hci-evidence/01-original-website/desktop/examination-desktop-1440-fullpage.png) | [Final](./hci-evidence/02-final-website/desktop/examination-desktop-1440-fullpage.png) |
| VV Bygg — mobile | [Original](./hci-evidence/01-original-website/mobile/vv-bygg-mobile-390-fullpage.png) | [Final](./hci-evidence/02-final-website/mobile/vv-bygg-mobile-390-fullpage.png) |
| VV Bygg — desktop | [Original](./hci-evidence/01-original-website/desktop/vv-bygg-desktop-1440-fullpage.png) | [Final](./hci-evidence/02-final-website/desktop/vv-bygg-desktop-1440-fullpage.png) |

The final Senior Project is new and therefore has no original-page counterpart: [mobile](./hci-evidence/02-final-website/mobile/senior-project-mobile-390-fullpage.png) · [desktop](./hci-evidence/02-final-website/desktop/senior-project-desktop-1440-fullpage.png).

### E5 — Contact form

The final homepage captures show the live persistent labels and textarea: [mobile](./hci-evidence/02-final-website/mobile/home-mobile-390-fullpage.png) · [desktop](./hci-evidence/02-final-website/desktop/home-desktop-1440-fullpage.png). Earlier phase-specific captures are also preserved in the intermediate archive. They are not substituted for the original-commit/final-production comparison.

## Image and content audit

- **VV Bygg og Eiendom:** The project card uses a collage while its detail page uses a rainy-window photograph. The source assets are present in the original repository, but neither image establishes that it depicts the described website work. No image was changed. Request a genuine, approved screenshot or project image before proposing a replacement.
- **Online Examination System:** The card illustration and detail-page code photograph are not established by repository evidence as authentic artifacts from the student project. No replacement was made. Use only an approved project image, with personal or student information removed if necessary.
- **Senior Project:** No proposal, progress log, implementation evidence, tests, or results were found in the available project materials. The new page is limited to the supplied brief and labels implementation and evaluation as future/undocumented work. It has no invented date, photo, language, framework, hardware, or controller.
- **Norwegian copy:** Main portfolio copy and the three existing project descriptions have been revised in Norwegian. Seven generic blog posts still contain template filler/Lorem Ipsum and English text, including a quote attributed to someone else. They were left untouched rather than replaced with invented personal writing. The About section’s summer-job wording may be outdated and requires owner confirmation.

## Technical verification

| Check | Result |
|---|---|
| Original baseline | Exact commit `dc17fb4`; a separate worktree was used to build and capture it. The comparison does not describe an uncommitted approximation as the original. |
| TypeScript | `tsc --noEmit` passed. |
| Production builds | `npm run build` passed for the baseline and final versions. Both builds report the existing version warning: Next.js 15.5.11 versus `@next/swc` 15.5.7. No dependency manifest was changed. |
| Routes and responsive widths | Seven final routes were checked at 375, 390, 768, 900, 1366, and 1440 CSS px (42 route/viewport checks). All returned HTTP 200, document and body widths did not exceed the viewport, and no development overlay appeared. |
| Navigation layout | Desktop links and social links were visible from 768 through 1440 px; the hamburger was hidden at those widths. The links fit without overlap or horizontal overflow. |
| Mobile menu | Open/closed state, equal 64 × 64 px social-icon link areas, active route indication, Escape-to-close, and focus restoration were checked. No message was submitted. |
| Screenshots | 12 original-commit and 14 final full-page captures are stored outside `public/`. PNG widths were checked against the configured 390 px and 1440 px viewports. |
| Contact form | Persistent labels and the textarea are present in the final page. No real submission or email was sent during this audit. |

## Review items before submission

1. Confirm the About page’s summer-employment wording and the facts in the rewritten personal copy.
2. Supply or approve authentic images for VV Bygg and the Online Examination System; no unapproved changes were made.
3. Replace or remove the generic blog filler using owner-provided text and review the attribution before publishing those posts.
4. Review whether the 64 px robot-face symbol is unmistakably legible at normal mobile viewing size. The full-page robot captures include it; preserved phase-specific focused Closure captures are under `hci-evidence/03-intermediate-development/`.
5. Confirm the institution’s requirements for AI disclosure and acceptable screenshot evidence before PDF export.

The report and evidence are prepared for review only. Nothing has been deployed or published.
