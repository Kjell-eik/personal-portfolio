---
type: PageLayout
title: Home
colors: colors-a

sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: >-
      Stefan Jahren Bringaker – Computer Science student
    subtitle: >-
      Student i Computer Science med erfaring fra teknisk arbeid, prosjektarbeid og kundekontakt. Pålitelig og praktisk anlagt, og trives med ansvar og samarbeid.

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
        label: Last ned CV (PDF)
        url: /cv.pdf
        showIcon: true
        icon: arrow-right
        iconPosition: right
        style: primary
        elementId: ''

  - type: TextSection
    colors: colors-f
    variant: variant-a
    title: Om meg
    subtitle: ''
    text: |
      Student i Computer Science med erfaring fra teknisk arbeid, prosjektarbeid og kundekontakt. Pålitelig og praktisk anlagt, og trives med ansvar og samarbeid. Jeg liker å kombinere teknisk forståelse med praktiske løsninger og bidra i team der det forventes struktur og gjennomføring.
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        textAlign: left

  - type: TextSection
    colors: colors-f
    variant: variant-a
    title: Arbeidserfaring
    subtitle: ''
    text: |
      ### Assistent – Vestfold & Viken bygg og eiendom
      **2023 – d.d.**

      Assistanse ved bygg- og utviklingsprosjekter. Ansvar for drift og utvikling av selskapets nettside og sosiale medier, samt IT‑relaterte oppgaver og kundekontakt.

      ---

      ### Servicetekniker – Nordisk Vannteknikk
      **2021 – 2024**

      Installasjon, drift og reparasjon av mobile vannbehandlingssystemer samt kundekontakt og samarbeid under oppdrag og tilsyn.

      ---

      ### Førstegangstjeneste – Akershus kommandantskap
      **2020 – 2021**

      Gjennomført førstegangstjeneste ved Ørland flystasjon og Kolsås leir.

      ---

      ### Assistent – Bringaker Bygg
      **2019 – 2021**

      Deltok i bygg- og anleggsprosjekter med maskinarbeid, vedlikehold og snekkerarbeid.

      ---

      ### Verkstedmedarbeider – BOMEKAN
      **2017 – 2019**

      Produksjon og bearbeiding av deler til prosjekter innen stålkonstruksjoner.
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
        textAlign: left

  - type: TextSection
    colors: colors-f
    variant: variant-a
    title: Utdanning
    subtitle: ''
    text: |
      ### BS Computer Science – European University Cyprus
      **2022 – d.d.**

      Fagområder: programmering, algoritmer og datastrukturer, databaser, systemutvikling, datanettverk og operativsystemer. Erfaring med prosjektarbeid og programvareutvikling i team.

      ---

      ### Videregående – Thor Heyerdahl
      **2017 – 2020**

      Fullført medier og kommunikasjon med generell studiekompetanse.
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
        textAlign: left

  - type: TextSection
    colors: colors-f
    variant: variant-a
    title: Ferdigheter
    subtitle: ''
    text: |
      ### Kvalifikasjoner
      * Praktisk og teknisk problemløsning
      * Erfaring med prosjektarbeid og samarbeid i team
      * Grunnleggende erfaring med programmering og systemarbeid
      * Erfaring med kundekontakt og servicearbeid
      * Selvstendig og ansvarsbevisst i arbeid
      * Strukturert og løsningsorientert i arbeidssituasjoner
      * God teknisk forståelse og rask til å lære nye systemer
      * Erfaring med teknisk vedlikehold og installasjonsarbeid
      * Flytende norsk og engelsk, muntlig og skriftlig
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
        textAlign: left

  - type: TextSection
    colors: colors-f
    variant: variant-a
    title: Aktiviteter
    subtitle: ''
    text: |
      ### President – Norwegian Students Association EUC
      **2025 – 2026**

      Ansvar for kontakt mellom norske studenter og universitetet, samt planlegging og gjennomføring av studentarrangementer.

      ---

      ### Styremedlem – ANSA
      **2025 – 2026**

      Bidrar til planlegging og gjennomføring av arrangementer samt støtte for norske studenter på Kypros.

      ---

      ### Fotballtrener – HSH Fotball
      **2021-sesong**

      Hovedtrener for gutter 16, ansvar for trening og oppfølging av spillere.
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-16
          - pb-28
          - pl-4
          - pr-4
        textAlign: left

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
