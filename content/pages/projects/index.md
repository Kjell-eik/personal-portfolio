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
      width: wide
      padding:
        - pt-0
        - pl-4
        - pr-4
        - pb-12
topSections:
  - type: HeroSection
    title: Prosjekter
    subtitle: 'Her finner du utvalgte utviklingsprosjekter og tekniske løsninger jeg har jobbet med.'
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
    title: 'La oss ta en prat!'
    colors: colors-f
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
