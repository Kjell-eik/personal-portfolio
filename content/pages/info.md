---
type: PageLayout
title: Home
colors: colors-a

sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: >-
      Stefan Jahren – Informatikkstudent og utvikler
    subtitle: >-
      Jeg bygger tekniske og digitale prosjekter, og jobber stadig med nye løsninger både innen programmering og praktisk utviklingsarbeid. Hobby investeringer og prosjekter innen oppussing og utleie. Her finner du prosjekter, erfaring og arbeid jeg har gjort så langt.

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
      Jeg er en passionert teknologi-entusiast med erfaring fra både praktisk teknisk arbeid og akademiske studier. Mine interesser spenner fra programmering og webutvikling til eiendomsinvesteringer og oppussingsprosjekter. Jeg trives med å kombinere teknisk kunnskap med praktiske løsninger, og liker å ta på meg utfordringer som krever både analytisk tenkning og hands-on arbeid.

      Gjennom mine studier i Computer Science og arbeidserfaringen fra Nordisk Vannteknikk AS har jeg utviklet solide ferdigheter innen problemløsning, prosjektledelse og teknisk kompetanse. På fritiden driver jeg med investeringer og eiendomsutvikling.
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
      ### Tekniker – Nordisk Vannteknikk AS
      **2021 - 2024**

      Teknisk ansvarlig for installasjon, drift og vedlikehold av mobile vannbehandlingssystemer. Jobbet med avanserte tekniske installasjoner, feilsøking og optimalisering av systemer. Prosjektet krevde omfattende teknisk kompetanse, problemløsningsevner og evne til å jobbe selvstendig.

      * Installasjon og vedlikehold av vannbehandlingssystemer
      * Teknisk feilsøking og problemløsning
      * Prosjektledelse og kundeoppfølging
      * Dokumentasjon og rapportering

      ---

      ### Vikar – Bringaker Bygg
      **2018 - 2021**

      Deltatt i ulike byggeprosjekter med fokus på rehabilitering og oppussing. Erfaring med praktisk byggearbeid, prosjektplanlegging og gjennomføring.

      * Oppussing og rehabilitering
      * Byggeprosjekter og renovering
      * Praktisk håndverksarbeid
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
      ### Bachelor i Computer Science
      **European University Cyprus – 2022 til i dag**

      Gjennomfører bachelor i Computer Science med fokus på programvareutvikling, algoritmer, datastrukturer og systemutvikling. Aktiv deltaker i robotikklubb og IEEE (Institute of Electrical and Electronics Engineers).

      **Nøkkelfag:**
      * Programmering (Python, Java, C++)
      * Webutvikling (HTML, CSS, JavaScript, React, Next.js)
      * Datastrukturer og algoritmer
      * Databasesystemer
      * Software Engineering
      * Virksomhet og ledelse (valgfag)

      **Ekstraaktiviteter:**
      * Medlem av IEEE student chapter
      * Robotikklubb
      * Teknologiprosjekter og hackathons
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
      ### Tekniske ferdigheter
      * **Programmering:** Python, JavaScript, TypeScript, Java, C++
      * **Webutvikling:** React, Next.js, HTML/CSS, Tailwind CSS
      * **Verktøy:** Git, VS Code, Node.js, npm
      * **Databaser:** SQL, NoSQL
      * **Annet:** Linux, Windows, Microsoft Office

      ### Praktiske ferdigheter
      * Prosjektledelse og planlegging
      * Teknisk feilsøking og problemløsning
      * Bygg og oppussing
      * Vannbehandlingssystemer
      * Kundeservice og kommunikasjon

      ### Personlige egenskaper
      * Selvdrevet og målrettet
      * God problemløser
      * Lærevillig og nysgjerrig
      * Strukturert og organisert
      * Godt samarbeidsevner
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
    title: Frivillighet og engasjement
    subtitle: ''
    text: |
      ### IEEE Student Member
      **2022 - i dag**

      Aktivt medlem i IEEE (Institute of Electrical and Electronics Engineers) student chapter ved European University Cyprus. Deltar i tekniske workshops, foredrag og nettverksarrangementer.

      ### Robotikklubb
      **2022 - i dag**

      Medlem av universitetets robotikklubb hvor vi jobber med programmeringsprosjekter, robotikk og teknologiutvikling. Deltar i konkurranser og prosjektarbeid.
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
    title: 'Har du et prosjekt du vil jeg skal se pa? Ta kontakt 💬'
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
