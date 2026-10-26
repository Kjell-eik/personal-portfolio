# HCI Redesign Report

**Project:** Personal portfolio website redesign  
**Scope in this interim report:** Phases 2–6  
**Status:** Phases 2–6 and all 14 HCI applications are implemented for review. This is an interim report rather than the final assignment submission.

## Assignment map — all 14 HCI applications

| # | Principle / application | Where and how it is implemented | Usability benefit | Screenshot evidence |
|---:|---|---|---|---|
| 1 | Gestalt — Proximity | Each project detail now groups its title and metadata, introduction, image, badges, and Markdown subsections into related regions. Backend, frontend, and security information on the examination page each occupy their own card; VV Bygg's three information groups are likewise separated. | Related labels and explanations can be read together instead of being matched across distant areas. | Phase 6 project-detail screenshots for all three projects at mobile and desktop sizes. |
| 2 | Gestalt — Similarity | All three detail pages share the same title/metadata hierarchy, image frame, badge treatment, section-card backgrounds, borders, padding, and responsive grid. | Similar presentation helps visitors recognize repeated information types and compare projects. | Phase 6 project-detail screenshots for all three projects at mobile and desktop sizes. |
| 3 | Gestalt — Continuity | Breadcrumb, project heading, introduction, image, technology group, detail cards, and related-project links appear in the same top-to-bottom order on each detail page. Cards align in a responsive two-column grid on wider screens and stack on mobile. | A repeated reading path supports orderly scanning and predictable navigation. | Phase 6 mobile and desktop project-detail screenshots. |
| 4 | Gestalt — Figure/Ground | Dark bordered information cards, badge surfaces, and framed project images separate content from the botanical olive background on all project detail pages. | Clear foreground/background separation helps users distinguish content groups. | Phase 6 mobile and desktop project-detail screenshots. |
| 5 | Gestalt — Closure | A small interrupted robot-head contour, with visible eyes, mouth, and antenna, sits beside the robot-side technology explanation. The viewer can infer the complete head shape from its separated contour segments. This is an integrated symbol rather than a standalone explanatory panel; its clarity should be reviewed at both mobile and desktop scale. | The familiar face features provide a meaningful cue for mentally completing the missing head outline without unrelated decoration or a text explanation. | Phase 6 robot detail screenshots, especially the robot-side technology card at mobile and desktop sizes. |
| 6 | Focus / Attention — Contrast | Warm gold distinguishes the homepage CTA, project actions, robot technology badges, form labels, focus outlines, and prominent submit button from dark olive surfaces. | High-priority actions and information are easier to find. | Phase 3 homepage and project-card pairs; Phase 5 contact-form pairs. |
| 7 | Focus / Attention — Size and scale | Homepage name, page titles, project headings, section headings, badges, and supporting copy have descending typographic prominence. | Establishes a clear reading order from the main subject to supporting details. | Phase 3 homepage pairs; Phase 6 project-detail screenshots. |
| 8 | Focus / Attention — Whitespace | Responsive spacing separates the homepage hero, About topics, card groups, project summaries, media, technology badges, detail cards, and form controls. | Breathing room separates tasks and content without leaving excessive empty areas. | Phase 3 homepage pairs; Phase 4 skills and experience pairs; Phase 6 project-detail screenshots. |
| 9 | Recognition — Icon + text labels | Project actions use the explicit “Se prosjekt” label with an arrow, rather than an unlabeled arrow alone. | Visitors can identify the action without having to infer an icon’s meaning. | Phase 3 featured-project and projects-page pairs. |
| 10 | Recognition — Consistent patterns | Repeated project-card actions, Phase 4 information-card layouts, and the shared project-detail technology badges and information cards use consistent visual treatment. | Familiar patterns make controls and content easier to identify on repeat visits. | Phase 3 project pairs; Phase 4 skills and experience pairs; Phase 6 project-detail screenshots. |
| 11 | Recognition — Location and field cues | Project pages show “Prosjekter / [current project]” breadcrumbs and labeled previous/next links; contact forms keep a visible label above every field. | Visitors can recognize their location, navigation direction, and each field’s purpose without relying on memory. | Phase 5 project-detail and contact-form before/after pairs. |
| 12 | 7±2 — Application 1: technical skills | Five named skill-category cards group the existing skills; each category’s related entries remain together. | Visitors first scan five domain chunks, then inspect the relevant skills, rather than scanning one uninterrupted set of 25 entries. | Phase 4 skills pairs at 390px and 1440px. |
| 13 | 7±2 — Application 2: work experience | Five job cards each group role, employer, dates, and description. | The five recognizable entries can be scanned and compared as chunks instead of being read as one long block. | Phase 4 experience pairs at 390px and 1440px. |
| 14 | 7±2 — Application 3: robot technologies | Python, C++, OpenCV, Arduino, Computer Vision, and Embedded Systems remain together as six consistently styled badges on the robot detail page. | The single group contains six manageable items, within the rule’s commonly cited 5–9 range, and avoids introducing extra concepts. | Phase 6 robot detail screenshots at mobile and desktop sizes. |

The screenshot suggestions above identify evidence for each application. The linked before-and-after image pairs in the phase sections below provide the concrete captures.

## Phase 6 — Shared project-detail information design

All three project pages now use the same order: breadcrumb, title and client/date metadata, introduction, main image, technology/concept badges, grouped detail cards, and related-project navigation. Detail cards use a shared dark surface, border, spacing, heading scale, and responsive grid. They stack on mobile and form aligned columns at wider widths. The robot page retains the six original badges and divides PC-side from robot-side information. The small incomplete robot-head symbol is integrated into the robot-side heading area rather than presented as a separate explanatory box. The examination page separates Backend, Frontend, and Sikkerhet and adds badges drawn from its existing content. VV Bygg retains its three named information groups and uses badges based only on its existing technologies and concepts. Original project text, images, destinations, and video links are preserved; duplicated examination technology text has been consolidated into its badge group.

The Closure symbol is intentionally much smaller than the previous illustration. At its actual 64px size beside the robot-side content, the interrupted head corners, eyes, mouth, and antenna read as a robot face in both the mobile and desktop evidence. The missing contour is mentally completed without relying on a caption, so the focused captures support Closure as a visible demonstration rather than an intended-only claim.

### Phase 6 screenshots

The following page-top captures show the updated project details at mobile (390 × 844) and desktop (1440 × 1000) sizes. They were captured from the local production build; the CSS viewport and PNG dimensions match, and no development badge is present.

| Project | Mobile | Desktop |
|---|---|---|
| Hand Gesture Controlled Robot | ![Robot detail page, mobile](./public/hci-redesign/screenshots/phase6-robot-mobile-390.png) | ![Robot detail page, desktop](./public/hci-redesign/screenshots/phase6-robot-desktop-1440.png) |
| Online Examination System | ![Examination detail page, mobile](./public/hci-redesign/screenshots/phase6-exam-mobile-390.png) | ![Examination detail page, desktop](./public/hci-redesign/screenshots/phase6-exam-desktop-1440.png) |
| VV Bygg og Eiendom | ![VV Bygg detail page, mobile](./public/hci-redesign/screenshots/phase6-vvbygg-mobile-390.png) | ![VV Bygg detail page, desktop](./public/hci-redesign/screenshots/phase6-vvbygg-desktop-1440.png) |

Focused captures show the six-item robot technology group and the integrated Closure symbol within the robot-side section:

| Evidence | Mobile, 390 × 844 | Desktop, 1440 × 1000 |
|---|---|---|
| Robot technologies | ![Six robot technologies grouped as badges on mobile](./public/hci-redesign/screenshots/phase6-robot-technology-mobile-390.png) | ![Six robot technologies grouped as badges on desktop](./public/hci-redesign/screenshots/phase6-robot-technology-desktop-1440.png) |
| Gestalt Closure | ![Integrated robot-face Closure mark on mobile](./public/hci-redesign/screenshots/phase6-robot-closure-mobile-390.png) | ![Integrated robot-face Closure mark on desktop](./public/hci-redesign/screenshots/phase6-robot-closure-desktop-1440.png) |

### Phase 6 verification

All three project routes were checked in a real browser context at 375, 390, 768, 900, 1366, and 1440 CSS pixels. The browser viewport matched each requested width; at every width the document scroll width matched its client width, with no horizontal overflow. The detail cards stack in one column at 375 and 390px and form two aligned columns from 768px upward. Every project image loaded, the breadcrumb and related-project navigation remained present, and the robot page retained its six technology badges. The six page-top PNGs are exactly 390 × 844 or 1440 × 1000 pixels as labeled. The focused robot screenshots use those same viewport dimensions.

## Phase 5 — Project details and contact form

### Implemented changes

Individual project pages have a shared responsive reading structure: a linked “Prosjekter / [project title]” breadcrumb, client/date metadata, a prominent project title, a readable summary, a framed responsive image, and Markdown content. Images retain their original sources and are contained rather than cropped; the portrait robot photo receives a portrait frame on mobile. Previous and next project cards use explicit directional labels and the destination project title. Existing links, written project details, videos, and image alt text remain intact.

The Hand Gesture Controlled Robot page groups six technology/concept names as labeled badges. PC-side and robot-side descriptions remain separate. Phase 6 replaces the former large illustration/caption panel with a compact SVG head outline beside the robot-side group; the outline is interrupted, while its eyes, mouth, and antenna tie it to the robot content. This smaller demonstration should be reviewed at both viewport sizes before treating the Closure criterion as conclusive.

Contact forms on the homepage, About page, and projects page now show persistent labels above the first name, last name, email, and message fields. Message uses a full-width textarea; email and message span the form width; the submit button is prominent, full-width on mobile, and keyboard-focus visible. The form still posts to the existing `/api/submit-form` endpoint with the same field names and backend behavior.

### Before-and-after evidence

The original Phase 5 captures remain unchanged. The Phase 6 page-top captures above show the shared detail-page structure; its focused robot captures show the integrated Closure mark and the six-item technology group. Contact captures are aligned to the form fields so labels, message area, and submit action can be compared.

#### Individual project details

| Page and viewport | Before | After |
|---|---|---|
| Hand Gesture Controlled Robot — mobile, 390 × 844 | ![Robot project before Phase 5 at 390px](./public/hci-redesign/screenshots/before-phase5-robot-390.png) | ![Robot project after Phase 5 at 390px](./public/hci-redesign/screenshots/after-phase5-robot-390.png) |
| Hand Gesture Controlled Robot — desktop, 1440 × 1000 | ![Robot project before Phase 5 at 1440px](./public/hci-redesign/screenshots/before-phase5-robot-1440.png) | ![Robot project after Phase 5 at 1440px](./public/hci-redesign/screenshots/after-phase5-robot-1440.png) |
| VV Bygg og Eiendom — mobile, 390 × 844 | ![VV Bygg project before Phase 5 at 390px](./public/hci-redesign/screenshots/before-phase5-project-one-390.png) | ![VV Bygg project after Phase 5 at 390px](./public/hci-redesign/screenshots/after-phase5-project-one-390.png) |
| VV Bygg og Eiendom — desktop, 1440 × 1000 | ![VV Bygg project before Phase 5 at 1440px](./public/hci-redesign/screenshots/before-phase5-project-one-1440.png) | ![VV Bygg project after Phase 5 at 1440px](./public/hci-redesign/screenshots/after-phase5-project-one-1440.png) |
| Online Examination System — mobile, 390 × 844 | ![Online examination project before Phase 5 at 390px](./public/hci-redesign/screenshots/before-phase5-project-five-390.png) | ![Online examination project after Phase 5 at 390px](./public/hci-redesign/screenshots/after-phase5-project-five-390.png) |
| Online Examination System — desktop, 1440 × 1000 | ![Online examination project before Phase 5 at 1440px](./public/hci-redesign/screenshots/before-phase5-project-five-1440.png) | ![Online examination project after Phase 5 at 1440px](./public/hci-redesign/screenshots/after-phase5-project-five-1440.png) |

#### Closure and six technology/concept badges

| Viewport | After — robot face and six-item group |
|---|---|
| Mobile, 390 × 844 | ![Robot closure and technology badges at 390px](./public/hci-redesign/screenshots/after-phase5-robot-closure-tech-390.png) |
| Desktop, 1440 × 1000 | ![Robot closure and technology badges at 1440px](./public/hci-redesign/screenshots/after-phase5-robot-closure-tech-1440.png) |

#### Contact form

| Viewport | Before | After |
|---|---|---|
| Mobile, 390 × 844 | ![Contact form before Phase 5 at 390px](./public/hci-redesign/screenshots/before-phase5-contact-390.png) | ![Contact form after Phase 5 at 390px](./public/hci-redesign/screenshots/after-phase5-contact-390.png) |
| Desktop, 1440 × 1000 | ![Contact form before Phase 5 at 1440px](./public/hci-redesign/screenshots/before-phase5-contact-1440.png) | ![Contact form after Phase 5 at 1440px](./public/hci-redesign/screenshots/after-phase5-contact-1440.png) |

### Verification

All three project detail routes and the contact forms on `/`, `/info/`, and `/projects/` were checked at 375, 390, 768, 1366, and 1440 CSS pixels. The document did not overflow horizontally. Each detail page showed the correct breadcrumb, retained its media, and linked to the available neighboring project pages. Images loaded and fit their responsive frames. The robot page displayed exactly the six requested labels and an SVG with open contour paths.

Contact controls exposed visible associated labels, retained required-field validation, and rendered a textarea for the message. The submit interaction was tested with `fetch` replaced by an in-page success stub, verifying the existing POST URL and field payload without sending an email or contacting the real backend.

The TypeScript check and optimized production build passed. The build continues to report the existing Next.js/SWC version mismatch (`next` 15.5.11 and SWC 15.5.7), but compilation, static generation, and trace collection completed successfully.

## Phase 4 — About Me, technical skills, and work experience

### Implemented changes

The About introduction now uses shorter responsive section spacing, an editorial subheading for each existing paragraph topic, and a distinct closing job-search statement. The original information is retained. Smaller mobile padding avoids long empty transitions between sections; the content remains in a readable narrow text measure.

Technical skills are presented as five consistent category cards: Programming Languages; Frameworks & Libraries; Tools & Technologies; Areas of Expertise; and Other Skills. All five original categories, skill names, and descriptions are retained. The lists inside each card keep each skill and its detail together.

Work experience is presented as five matching entry cards. Each card separates the role, organization, date range, and original description, without removing or changing the employment information. Both the skill and experience cards use a mobile-first single-column layout, two columns at medium widths, and three columns on larger displays.

### HCI applications demonstrated

| Principle | Visible implementation |
|---|---|
| Gestalt — Proximity | Dates, role, employer, and description stay together in each work card; each skill name stays next to its detail within its category card. |
| Gestalt — Similarity | The five skill categories and five jobs use consistent card styling, internal spacing, heading hierarchy, and olive/gold accents. |
| Gestalt — Continuity | Equal-width, aligned responsive grids guide scanning across both sets of cards. |
| Focus / Attention — Visual hierarchy | Section headings, gold-accented category/date labels, role headings, and supporting descriptions have distinct typographic emphasis. |
| Recognition — Consistency | Repeated labels and the same card structure make the five categories and five job entries easy to scan and compare. |
| 7±2 — Application 1: technical skills | Five categories create five recognizable top-level groups. Visitors can first identify the relevant domain, then inspect only the smaller list within that card rather than scanning a single continuous list of 25 skill details. |
| 7±2 — Application 2: work experience | Five separate job cards make the five employment entries recognizable chunks. The repeated role/employer/date/description structure supports comparison without requiring users to hold details from a long text block in working memory. |

### Before-and-after evidence

Each pair shows the corresponding section at the same viewport dimensions, with the section in view.

#### Technical skills

| Before — mobile, 390 × 844 | After — mobile, 390 × 844 |
|---|---|
| ![Technical skills before Phase 4 at 390px](./public/hci-redesign/screenshots/before-phase4-skills-390.png) | ![Technical skills after Phase 4 at 390px](./public/hci-redesign/screenshots/after-phase4-skills-390.png) |

| Before — desktop, 1440 × 1000 | After — desktop, 1440 × 1000 |
|---|---|
| ![Technical skills before Phase 4 at 1440px](./public/hci-redesign/screenshots/before-phase4-skills-1440.png) | ![Technical skills after Phase 4 at 1440px](./public/hci-redesign/screenshots/after-phase4-skills-1440.png) |

#### Work experience

| Before — mobile, 390 × 844 | After — mobile, 390 × 844 |
|---|---|
| ![Work experience before Phase 4 at 390px](./public/hci-redesign/screenshots/before-phase4-experience-390.png) | ![Work experience after Phase 4 at 390px](./public/hci-redesign/screenshots/after-phase4-experience-390.png) |

| Before — desktop, 1440 × 1000 | After — desktop, 1440 × 1000 |
|---|---|
| ![Work experience before Phase 4 at 1440px](./public/hci-redesign/screenshots/before-phase4-experience-1440.png) | ![Work experience after Phase 4 at 1440px](./public/hci-redesign/screenshots/after-phase4-experience-1440.png) |

### Verification

The About page was checked at 375, 390, 768, 1366, and 1440 CSS pixels. At each width, the document scroll width matched its client width, all five skill categories and all 25 original skill entries rendered, all five work entries retained their dates and descriptions, and the CV link remained `/cv.pdf`. The skill and experience grids rendered as one column on mobile, two columns at 768px, and three columns on desktop.

The standalone TypeScript check and optimized production build both passed. The build reports an existing Next.js/SWC version mismatch (`next` 15.5.11 and SWC 15.5.7); it compiled and generated the static pages successfully.

## Phase 3 — Desktop homepage and project cards

### Implemented changes

The homepage retains the dark olive-green palette and monospace typography. The full name remains the primary heading, the professional title now has a distinct warm accent, and the introduction is constrained to a readable desktop measure. Desktop hero padding is balanced rather than leaving a large empty field. The “Les mer om meg” action uses a contrasting warm olive-gold fill and remains the same link to `/info`.

The shared project grid renders the homepage’s featured projects and the `/projects/` feed using consistent cards. Each linked card has a dark, bordered surface separated from the botanical background, an equal-ratio 16:10 featured image, grouped title and description, and a labeled “Se prosjekt” action with a right-arrow icon. The content and destinations are unchanged, and the whole card remains clickable. The homepage grid uses two columns at medium widths and three at large widths; the projects page uses a two-column grid from medium widths. Both grids stretch cards evenly and preserve their order.

### HCI applications demonstrated

| Principle | Visible implementation |
|---|---|
| Gestalt — Proximity | Each project image, title, description, and action is grouped inside one bounded card. |
| Gestalt — Similarity | All cards share image ratio, spacing, border, background, typography, and action treatment. |
| Gestalt — Continuity | Cards align in a responsive grid, with consistent gaps and stretched card heights. |
| Gestalt — Figure/Ground | Dark card surfaces and borders provide separation from the textured olive background. |
| Focus / Attention — Contrast | The desktop CTA and card actions use a warm gold accent against dark olive surfaces. |
| Focus / Attention — Size and scale | The full name is the dominant heading; the title, introduction, card headings, and action are subordinate. |
| Focus / Attention — Whitespace | Balanced hero padding and deliberate spacing distinguish the introduction and card content without excess empty space. |
| Recognition — Icon + text labels | “Se prosjekt” is paired with a right-arrow icon instead of using an unlabeled arrow as the action. |
| Recognition — Consistency | The same card and action pattern is used for featured and all-project listings. |

### Before-and-after evidence

Screenshots are local captures from the same site state immediately before and after Phase 3 at matching viewport sizes. Card-section captures are taken with the relevant grid in view.

#### Homepage

| Before Phase 3 — mobile, 390 × 844 | After Phase 3 — mobile, 390 × 844 |
|---|---|
| ![Homepage before Phase 3 at 390px](./public/hci-redesign/screenshots/before-phase3-home-390.png) | ![Homepage after Phase 3 at 390px](./public/hci-redesign/screenshots/after-phase3-home-390.png) |

| Before Phase 3 — desktop, 1440 × 1000 | After Phase 3 — desktop, 1440 × 1000 |
|---|---|
| ![Homepage before Phase 3 at 1440px](./public/hci-redesign/screenshots/before-phase3-home-1440.png) | ![Homepage after Phase 3 at 1440px](./public/hci-redesign/screenshots/after-phase3-home-1440.png) |

#### Featured project cards on the homepage

| Before Phase 3 — mobile, 390 × 844 | After Phase 3 — mobile, 390 × 844 |
|---|---|
| ![Featured projects before Phase 3 at 390px](./public/hci-redesign/screenshots/before-phase3-featured-projects-390.png) | ![Featured projects after Phase 3 at 390px](./public/hci-redesign/screenshots/after-phase3-featured-projects-390.png) |

| Before Phase 3 — desktop, 1440 × 1000 | After Phase 3 — desktop, 1440 × 1000 |
|---|---|
| ![Featured projects before Phase 3 at 1440px](./public/hci-redesign/screenshots/before-phase3-featured-projects-1440.png) | ![Featured projects after Phase 3 at 1440px](./public/hci-redesign/screenshots/after-phase3-featured-projects-1440.png) |

#### Project cards on `/projects/`

| Before Phase 3 — mobile, 390 × 844 | After Phase 3 — mobile, 390 × 844 |
|---|---|
| ![Projects page before Phase 3 at 390px](./public/hci-redesign/screenshots/before-phase3-projects-390.png) | ![Projects page after Phase 3 at 390px](./public/hci-redesign/screenshots/after-phase3-projects-390.png) |

| Before Phase 3 — desktop, 1440 × 1000 | After Phase 3 — desktop, 1440 × 1000 |
|---|---|
| ![Projects page before Phase 3 at 1440px](./public/hci-redesign/screenshots/before-phase3-projects-1440.png) | ![Projects page after Phase 3 at 1440px](./public/hci-redesign/screenshots/after-phase3-projects-1440.png) |

### Verification

The implementation was checked at viewport widths of 375, 390, 768, 1366, and 1440 CSS pixels. The rendered grid columns and overflow checks were:

| Viewport width | Homepage featured grid | `/projects/` grid | Horizontal overflow |
|---:|:---:|:---:|:---:|
| 375px | 1 column | 1 column | None |
| 390px | 1 column | 1 column | None |
| 768px | 2 columns | 2 columns | None |
| 1366px | 3 columns | 2 columns | None |
| 1440px | 3 columns | 2 columns | None |

At each width, the document scroll width matched its client width, all project images rendered at a 16:10 ratio, all displayed cards included the “Se prosjekt” label and retained a unique internal project destination, and the homepage CTA retained its `/info/` destination. Opening the navigation on `/projects/` marked “Prosjekter” as the current page; choosing it closed the menu. A project card click opened its corresponding project page. The TypeScript check and production build both passed.

## Phase 2 — Mobile homepage and navigation

Phase 2 separates the homepage name and professional title, reduces mobile hero spacing so the primary CTA appears earlier, and provides a compact mobile menu with accessible labels, larger touch targets, a current-page state, and keyboard focus handling.

| Before — homepage, 390 × 844 | After — homepage, 390 × 844 |
|---|---|
| ![Homepage before Phase 2](./public/hci-redesign/screenshots/before-home-mobile.png) | ![Homepage after Phase 2](./public/hci-redesign/screenshots/after-home-mobile-390.png) |

| Before — mobile navigation, 390 × 844 | After — mobile navigation, 390 × 844 |
|---|---|
| ![Navigation before Phase 2](./public/hci-redesign/screenshots/before-navigation-mobile.png) | ![Navigation after Phase 2](./public/hci-redesign/screenshots/after-navigation-mobile-390.png) |

## Remaining assignment work

All 14 applications in the assignment map are represented by implemented interface elements and the evidence listed above. The updated project-detail pages and their screenshots are ready for review; final course-submission requirements remain for the portfolio owner to confirm.

## AI-use disclosure

Generative AI assisted with code changes, responsive test planning, screenshot capture, and drafting this report. The portfolio owner approved Phases 2–5; the shared project-detail updates in Phase 6 are ready for review. No deployment or publication was performed.
