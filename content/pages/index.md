---
type: PageLayout
title: Home
colors: colors-a

sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: >-
      Stefan Jahren Bringaker – Informatikkstudent
    subtitle: >-
      Informatikkstudent med erfaring fra fullstack-utvikling, computer vision og hardware-integrasjon. Brenner for å bygge teknologi som løser reelle problemer. Søker sommerjobb/internship innen utvikling.

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
    actions:
      - type: Button
        label: Les mer om meg
        url: /info
        style: primary
        elementId: ''

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
      - content/pages/projects/project-four.md
      - content/pages/projects/project-five.md
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
    subtitle: Utvalgte prosjekter

  - type: ContactSection
    colors: colors-f
    backgroundSize: full
    title: 'Har du spørsmål, samarbeid eller en idé? Ta kontakt 💬'
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
          placeholder: E-postadresse
          isRequired: true
          width: 1/2
          type: EmailFormControl
        - name: address
          label: Melding
          hideLabel: true
          placeholder: Kort om hva du trenger hjelp med
          isRequired: true
          width: 1/2
          type: TextFormControl
      submitLabel: 'Send melding'
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
