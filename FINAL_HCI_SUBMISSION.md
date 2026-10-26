# HCI Redesign — Final Assessment Submission

**Status:** Draft for review

**Website:** Personal portfolio redesign
**Evidence folder:** `public/hci-redesign/screenshots/`

## Introduction

This redesign improves the portfolio’s information hierarchy and responsive presentation while retaining its dark olive-green palette, monospace typography, existing content, and navigation. The work was implemented in phases across the homepage, project cards, About page, skills, work history, project details, and contact forms.

This report assesses the four assignment categories against the actual implementation and available screenshots. It distinguishes strong demonstrations from cases where the evidence is less conclusive. The paired captures used below are authentic local website screenshots at matching viewports: **390 × 844 px mobile** and **1440 × 1000 px desktop**. No screenshot has been edited or replaced for this document.

## Assessment at a glance

All 14 requested applications have a corresponding visible implementation. Most are clearly demonstrated in the available evidence. Three deserve a qualified assessment: continuity is clearest in the desktop grid; figure/ground separation is present but uses neighboring dark tones; and the closure illustration has a strong after-state image but no directly matched before image of that specific page location. Several screenshots also retain a small Next.js development indicator. These evidence limitations are called out rather than concealed.

## 1. Gestalt

| # | Application and implementation | Assessment | Visual evidence |
|---:|---|---|---|
| 1 | **Proximity.** Project titles, summaries, media, and content are kept together. On the About page, each skill name stays with its explanation, while role, employer, dates, and description are grouped in each job card. | **Clearly demonstrated.** Related details can be read together without matching text across distant sections. | [E2 — Project cards](#e2-project-cards), [E3 — Skills and experience](#e3-skills-and-experience), [E4 — Project details](#e4-project-details) |
| 2 | **Similarity.** Project cards share image treatment, spacing, typography, and a labeled action. Skill groups and work entries repeat consistent card structures. | **Clearly demonstrated.** Repeated styling makes comparable items recognizable as the same kind of content. | [E2](#e2-project-cards), [E3](#e3-skills-and-experience) |
| 3 | **Continuity.** The projects page aligns cards into a consistent desktop grid; project detail pages also provide a predictable previous/next sequence. | **Demonstrated, with a viewport limitation.** Alignment is especially visible on desktop. On mobile, the grid becomes a single column, so the evidence is a vertical scan rather than a row. | [E2](#e2-project-cards), [E4](#e4-project-details) |
| 4 | **Figure/Ground.** Dark project cards and media frames sit above the botanical olive background. The robot technology badges use a bounded dark treatment as well. | **Visible, but moderate.** The card boundary and darker surface separate foreground from background; the overall palette remains intentionally subdued, so the separation is less pronounced than a high-contrast treatment. | [E2](#e2-project-cards), [E6 — Robot closure and technologies](#e6-robot-closure-and-technologies) |
| 5 | **Closure.** The robot project includes five separated, rounded contour segments with eyes, a mouth, and an antenna. The incomplete outline suggests a robot face that the viewer mentally completes. | **Clearly demonstrated in the after-state.** The face remains recognizable without relying on its caption. A directly matched before screenshot of this exact page location was not captured; the existing before image shows the project page’s earlier top section, not the position of the new illustration. | [E6](#e6-robot-closure-and-technologies); [before project overview, mobile](public/hci-redesign/screenshots/before-phase5-robot-390.png), [desktop](public/hci-redesign/screenshots/before-phase5-robot-1440.png) |

## 2. Focus-Attention

| # | Application and implementation | Assessment | Visual evidence |
|---:|---|---|---|
| 6 | **Contrast.** Warm gold highlights the homepage “Les mer om meg” action, project actions, form labels and submit button against the olive/dark surfaces. | **Clearly demonstrated.** Primary actions have a distinct fill or accent instead of relying only on position. | [E1 — Homepage](#e1-homepage), [E2](#e2-project-cards), [E5 — Contact form](#e5-contact-form) |
| 7 | **Size and scale.** The homepage name and project/page headings have stronger typographic scale than subtitles and body copy. | **Clearly demonstrated.** The page’s subject and the reading order are apparent before the supporting description. | [E1](#e1-homepage), [E4](#e4-project-details) |
| 8 | **Whitespace.** Responsive spacing separates the hero, project groups, skill and work cards, project content, and form controls. | **Demonstrated.** Space helps distinguish content groups and form fields. The mobile captures are important evidence that the spacing remains compact enough for a narrow viewport. | [E1](#e1-homepage), [E3](#e3-skills-and-experience), [E5](#e5-contact-form) |

## 3. Recognition

| # | Application and implementation | Assessment | Visual evidence |
|---:|---|---|---|
| 9 | **Icon + text labels.** Project-card actions pair an arrow with the explicit Norwegian label “Se prosjekt.” | **Clearly demonstrated.** The destination action is named rather than communicated by an unlabeled arrow alone. | [E2](#e2-project-cards) |
| 10 | **Consistency.** Project actions, information cards, contact controls, and form buttons reuse consistent presentation across the relevant pages. | **Clearly demonstrated.** Familiar patterns reduce the need to infer how repeated elements work. | [E2](#e2-project-cards), [E3](#e3-skills-and-experience), [E5](#e5-contact-form) |
| 11 | **Location and field cues.** Project details show a “Prosjekter / [project]” breadcrumb and labeled previous/next links. Contact forms show persistent labels above fields. | **Clearly demonstrated.** Current location, navigation direction, and field purpose are explicit. | [E4](#e4-project-details), [E5](#e5-contact-form) |

## 4. 7±2 Rule

| # | Application and implementation | Assessment | Visual evidence |
|---:|---|---|---|
| 12 | **Application 1 — Technical skills.** The existing skills are arranged under five named category cards: Programming Languages; Frameworks & Libraries; Tools & Technologies; Areas of Expertise; and Other Skills. Each skill remains grouped with its detail. | **Clearly demonstrated.** The five top-level groups make the long skills section scannable by domain instead of presenting one continuous list. | [E3 — Skills](#e3-skills-and-experience) |
| 13 | **Application 2 — Work experience.** The five existing jobs are shown as separate, similarly structured cards containing role, employer, dates, and description. | **Clearly demonstrated.** Five recognizable entries can be scanned or compared independently. | [E3 — Experience](#e3-skills-and-experience) |
| 14 | **Application 3 — Robot technologies.** Python, C++, OpenCV, Arduino, Computer Vision, and Embedded Systems appear together as six consistent badges. | **Clearly demonstrated.** The requested six items form one bounded, easily scanned group without adding technologies. | [E6](#e6-robot-closure-and-technologies) |

## Visual evidence

The following before/after pairs use matching viewport dimensions. Phase 3–5 originals remain in the evidence folder; the document links directly to those files.

### E1 — Homepage

The hero separates name, professional title, and introduction. The gold “Les mer om meg” button gives the primary action a clear visual priority.

| Before — mobile, 390 × 844 | After — mobile, 390 × 844 |
|---|---|
| ![Homepage before redesign, mobile](public/hci-redesign/screenshots/before-phase3-home-390.png) | ![Homepage after redesign, mobile](public/hci-redesign/screenshots/after-phase3-home-390.png) |

| Before — desktop, 1440 × 1000 | After — desktop, 1440 × 1000 |
|---|---|
| ![Homepage before redesign, desktop](public/hci-redesign/screenshots/before-phase3-home-1440.png) | ![Homepage after redesign, desktop](public/hci-redesign/screenshots/after-phase3-home-1440.png) |

### E2 — Project cards

The cards use consistent imagery frames, content spacing, typography, and “Se prosjekt” actions. The desktop capture shows the aligned grid; the mobile capture shows the same card pattern in a single-column layout.

| Before — mobile, 390 × 844 | After — mobile, 390 × 844 |
|---|---|
| ![Project cards before redesign, mobile](public/hci-redesign/screenshots/before-phase3-featured-projects-390.png) | ![Project cards after redesign, mobile](public/hci-redesign/screenshots/after-phase3-featured-projects-390.png) |

| Before — desktop, 1440 × 1000 | After — desktop, 1440 × 1000 |
|---|---|
| ![Project cards before redesign, desktop](public/hci-redesign/screenshots/before-phase3-featured-projects-1440.png) | ![Project cards after redesign, desktop](public/hci-redesign/screenshots/after-phase3-featured-projects-1440.png) |

### E3 — Skills and experience

Five skill categories and five work entries use repeated structures. The mobile and desktop pairs show both the compact single-column treatment and the aligned wider-screen grids.

#### Technical skills

| Before — mobile, 390 × 844 | After — mobile, 390 × 844 |
|---|---|
| ![Skills before redesign, mobile](public/hci-redesign/screenshots/before-phase4-skills-390.png) | ![Skills after redesign, mobile](public/hci-redesign/screenshots/after-phase4-skills-390.png) |

| Before — desktop, 1440 × 1000 | After — desktop, 1440 × 1000 |
|---|---|
| ![Skills before redesign, desktop](public/hci-redesign/screenshots/before-phase4-skills-1440.png) | ![Skills after redesign, desktop](public/hci-redesign/screenshots/after-phase4-skills-1440.png) |

#### Work experience

| Before — mobile, 390 × 844 | After — mobile, 390 × 844 |
|---|---|
| ![Experience before redesign, mobile](public/hci-redesign/screenshots/before-phase4-experience-390.png) | ![Experience after redesign, mobile](public/hci-redesign/screenshots/after-phase4-experience-390.png) |

| Before — desktop, 1440 × 1000 | After — desktop, 1440 × 1000 |
|---|---|
| ![Experience before redesign, desktop](public/hci-redesign/screenshots/before-phase4-experience-1440.png) | ![Experience after redesign, desktop](public/hci-redesign/screenshots/after-phase4-experience-1440.png) |

### E4 — Project details

The robot project before/after pair shows the change to a consistent detail-page hierarchy, breadcrumb, project summary, and responsive media frame.

| Before — mobile, 390 × 844 | After — mobile, 390 × 844 |
|---|---|
| ![Robot detail before redesign, mobile](public/hci-redesign/screenshots/before-phase5-robot-390.png) | ![Robot detail after redesign, mobile](public/hci-redesign/screenshots/after-phase5-robot-390.png) |

| Before — desktop, 1440 × 1000 | After — desktop, 1440 × 1000 |
|---|---|
| ![Robot detail before redesign, desktop](public/hci-redesign/screenshots/before-phase5-robot-1440.png) | ![Robot detail after redesign, desktop](public/hci-redesign/screenshots/after-phase5-robot-1440.png) |

Equivalent original captures are preserved for the other project-detail pages: [VV Bygg mobile before/after](public/hci-redesign/screenshots/before-phase5-project-one-390.png) / [after](public/hci-redesign/screenshots/after-phase5-project-one-390.png), [VV Bygg desktop before/after](public/hci-redesign/screenshots/before-phase5-project-one-1440.png) / [after](public/hci-redesign/screenshots/after-phase5-project-one-1440.png), [Online Examination mobile before/after](public/hci-redesign/screenshots/before-phase5-project-five-390.png) / [after](public/hci-redesign/screenshots/after-phase5-project-five-390.png), and [Online Examination desktop before/after](public/hci-redesign/screenshots/before-phase5-project-five-1440.png) / [after](public/hci-redesign/screenshots/after-phase5-project-five-1440.png).

### E5 — Contact form

Persistent labels, a message textarea, improved spacing, and a prominent submit action are visible at both widths.

| Before — mobile, 390 × 844 | After — mobile, 390 × 844 |
|---|---|
| ![Contact form before redesign, mobile](public/hci-redesign/screenshots/before-phase5-contact-390.png) | ![Contact form after redesign, mobile](public/hci-redesign/screenshots/after-phase5-contact-390.png) |

| Before — desktop, 1440 × 1000 | After — desktop, 1440 × 1000 |
|---|---|
| ![Contact form before redesign, desktop](public/hci-redesign/screenshots/before-phase5-contact-1440.png) | ![Contact form after redesign, desktop](public/hci-redesign/screenshots/after-phase5-contact-1440.png) |

### E6 — Robot closure and technologies

The after-state capture shows the intentionally open robot-face contour and all six existing technology/concept badges. The illustration is recognizable as a robot face from its contour and facial features without needing the caption.

| After — mobile, 390 × 844 | After — desktop, 1440 × 1000 |
|---|---|
| ![Robot closure and six technology badges, mobile](public/hci-redesign/screenshots/after-phase5-robot-closure-tech-390.png) | ![Robot closure and six technology badges, desktop](public/hci-redesign/screenshots/after-phase5-robot-closure-tech-1440.png) |

**Evidence limitation:** These are authentic after-state screenshots at the illustration and badge section. The preserved before-state project screenshots show the earlier project-page view, not this exact scroll position. No synthetic or reconstructed before image is used. If the assignment requires a tightly matched before/after comparison of this new feature, capture the preserved original revision at the corresponding project-page position before final PDF export.

## Project image audit

The image configuration in the project files and the captured pages were checked against the assets present in the original repository baseline. No image was replaced as part of this audit.

- **VV Bygg og Eiendom:** The homepage/project card uses a collage (`moodboard.webp`); the detail page uses a rainy-window photograph (`architecture.jpg`). The two images are inconsistent with each other and neither visibly identifies the described WordPress work or the client’s website. These assets were already present in the original baseline. **Proposed correction:** use a real, approved screenshot of the VV Bygg site or an authentic project image for both the card and detail page, with consistent crop and accurate alt text. No such replacement should be made until the project owner supplies or approves the image.
- **Online Examination System:** The card uses a generic software illustration, and the detail page uses a generic code photograph (`code.jpg`). The repository does not establish that either is a screenshot or artifact from the student project. **Proposed correction:** use an authentic project dashboard or other approved project artifact for the card and detail page. Do not use identifiable student data; redact it if needed. No replacement was made.

The relevant original captures are preserved: [VV Bygg card, desktop](public/hci-redesign/screenshots/after-phase3-featured-projects-1440.png), [VV Bygg detail, mobile](public/hci-redesign/screenshots/after-phase5-project-one-390.png), [Online Examination card, desktop](public/hci-redesign/screenshots/after-phase3-featured-projects-1440.png), and [Online Examination detail, mobile](public/hci-redesign/screenshots/after-phase5-project-five-390.png).

## Technical verification and remaining issues

| Check | Result |
|---|---|
| TypeScript check and production build | **Passed.** Next.js reports a version warning: Next.js 15.5.11 and `@next/swc` 15.5.7 do not match. Compilation and static generation completed successfully. |
| Responsive pages and overflow | **Passed.** Six routes (`/`, `/info/`, `/projects/`, and all three project details) were checked at 375, 390, 768, 1366, and 1440 CSS px: 30 route/viewport combinations. No horizontal document overflow or broken page images were found. |
| Navigation and active location | **Passed.** Project routes loaded, project breadcrumbs and neighboring-project links were present, the mobile menu indicated the current “Prosjekter” page, and selecting “Info” navigated and closed the menu. |
| CV download | **Passed.** The `/cv.pdf` asset returned HTTP 200 with `application/pdf`. A Next.js prefetch request for a page-data URL associated with this static PDF returned 404; the PDF itself is available at its target URL. |
| Contact forms | **Passed with a local stub.** The homepage, About, and projects forms each submitted the expected fields to `/api/submit-form` and displayed the success state. The request was intercepted in the browser; **no real message or email was sent**. |
| Screenshot evidence | **Preserved.** The existing screenshot directory contains 51 original PNG captures. No screenshots were deleted or overwritten. `public/hci-redesign/edge-test.png` was also left untouched. |

### Evidence handling before submission or deployment

Some existing captures show a small Next.js development indicator near the lower-left corner. The captures remain unaltered so their source evidence is preserved. For a cleaner final PDF, recapture the relevant pages from a production preview at the same scroll positions and dimensions; do not retouch or replace the preserved originals.

The screenshots currently live under `public/`, so a deployed site would expose them as public static files and include them in the deployment output. Keep the evidence there until it has been reviewed and backed up. Before deployment, it is advisable to move the submission evidence to a location outside `public/` and update this document’s image links. **No evidence has been moved or cleaned up.**

## Conclusion

The redesign visibly applies the 14 requested HCI applications across the portfolio and retains responsive page structure, navigation, project content, and form behavior. The strongest evidence is the before/after treatment of the homepage, project cards, skills, work entries, and contact form. The robot illustration provides a distinct closure example, though its exact before-state comparison should be strengthened if the grading submission requires one. The two project-image authenticity concerns remain open pending approved source images.

## AI-use disclosure

An AI coding assistant was used to help implement the approved website changes, review the local implementation and screenshots, run technical checks, and draft this assessment text. The screenshots referenced here are real captures of the local website; they were not AI-generated or edited for this document. Existing project and employment information was retained from the portfolio content. The author should review this draft, confirm every factual statement and image permission, and follow the institution’s rules for AI disclosure before submission.
