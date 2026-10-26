---
type: PageLayout
title: Hjem
colors: colors-a

sections:
  - elementId: home-hero
    colors: colors-f
    backgroundSize: full
    title: Stefan Jahren Bringaker
    subtitle: Informatikkstudent
    text: >-
      Jeg studerer informatikk ved European University Cyprus og liker å utvikle teknologi som løser praktiske utfordringer. Jeg har erfaring med fullstack-utvikling, computer vision og robotikk, og trives særlig med prosjekter der programvare møter den fysiske verden.

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
          - pt-16
          - pb-16
          - sm:pt-24
          - sm:pb-24
          - lg:pt-32
          - lg:pb-32
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
        className: home-hero-cta
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
    title: 'La oss ta en prat!'
    form:
      type: FormBlock
      elementId: sign-up-form
      fields:
        - name: firstName
          label: Fornavn
          hideLabel: false
          placeholder: Fornavn
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: lastName
          label: Etternavn
          hideLabel: false
          placeholder: Etternavn
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: E-post
          hideLabel: false
          placeholder: E-postadresse
          isRequired: true
          width: full
          type: EmailFormControl
        - name: address
          label: Melding
          hideLabel: false
          placeholder: Hva lurer du på?
          isRequired: true
          width: full
          type: TextareaFormControl
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
