---
type: ProjectFeedLayout
title: Prosjekter
colors: colors-a

projectFeed:
  type: ProjectFeedSection
  colors: colors-f
  showDate: false
  showDescription: true
  showReadMoreLink: true
  showFeaturedImage: true
  variant: variant-a
  styles:
    self:
      width: narrow
      padding:
        - pt-0
        - pl-4
        - pr-4
        - pb-12
topSections:
  - type: HeroSection
    title: Prosjekter
    subtitle: 'En oversikt over utviklingsprosjekter og tekniske løsninger jeg har jobbet med'
    actions: []
    colors: colors-f
    backgroundSize: full
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-16
          - pb-16
          - pl-4
          - pr-4
        flexDirection: row
        textAlign: left
bottomSections:
  - type: ContactSection
    backgroundSize: full
    title: "Har du et prosjekt eller en mulighet? Ta kontakt 💬"
    colors: colors-f
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
          width: full
          type: EmailFormControl
        - name: message
          label: Melding
          hideLabel: true
          placeholder: Fortell om prosjektet ditt
          isRequired: true
          width: full
          type: TextareaFormControl
      submitLabel: "Send melding"
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
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        flexDirection: row
        textAlign: left
---
