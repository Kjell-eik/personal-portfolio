---
type: PageLayout
title: Home
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75

sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: >-
      Stefan Jahren – Informatikkstudent og utvikler
    subtitle: >-
      Jeg kombinerer akademisk kunnskap med praktisk erfaring i utvikling.
      Spesialisert i moderne webteknologi og fullstack-løsninger.
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-48
          - pl-4
          - pr-4
        flexDirection: row-reverse
        textAlign: left
    type: HeroSection
    actions: []

  - colors: colors-f
    type: FeaturedProjectsSection
    elementId: ''
    actions:
      - type: Link
        label: Se alle prosjekter
        url: /projects
    showDate: false
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/pages/projects/project-two.md
      - content/pages/projects/project-three.md
      - content/pages/projects/project-one.md
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        textAlign: left
    subtitle: Prosjekter

  - type: FeaturedPostsSection
    elementId: ''
    colors: colors-f
    variant: variant-d
    subtitle: Artikler og innlegg
    showFeaturedImage: false
    actions:
      - type: Link
        label: Se alle innlegg
        url: /blog
    posts:
      - content/pages/blog/post-six.md
      - content/pages/blog/post-four.md
      - content/pages/blog/post-three.md
    showDate: true
    showExcerpt: true
    showReadMoreLink: true
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-28
          - pb-48
          - pl-4
          - pr-4
        textAlign: left

  - type: ContactSection
    colors: colors-f
    backgroundSize: full
    title: 'Har du et prosjekt eller en mulighet? Ta kontakt 💬'
    form:
      type: FormBlock
      elementId: sign-up-form
      fields:
        - name: firstName
          label: Fornavn
          hideLabel: true
          placeholder: Fornavn
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: lastName
          label: Etternavn
          hideLabel: true
          placeholder: Etternavn
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: E-post
          hideLabel: true
          placeholder: E-post
          isRequired: true
          width: 1/2
          type: EmailFormControl
        - name: address
          label: Melding
          hideLabel: true
          placeholder: Hva gjelder henvendelsen?
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: updatesConsent
          label: Jeg ønsker oppdateringer
          isRequired: false
          width: full
          type: CheckboxFormControl
      submitLabel: 'Send melding 🚀'
      styles:
        self:
          textAlign: center
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        flexDirection: row
        textAlign: left
---
