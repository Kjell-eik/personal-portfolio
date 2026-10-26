---
type: PageLayout
title: Om meg
colors: colors-a

sections:
  - elementId: info-about-hero
    colors: colors-f
    backgroundSize: full
    title: >-
      Stefan Jahren Bringaker – Informatikkstudent
    subtitle: >-
      4. års informatikkstudent som liker å bygge ting som faktisk fungerer. Med erfaring fra fullstack-utvikling, computer vision og robotikk, søker jeg sommerjobb hvor jeg kan lære og bidra i et utviklerteam.

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
          - pt-12
          - pb-12
          - sm:pt-20
          - sm:pb-20
          - lg:pt-24
          - lg:pb-24
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
      ### Bakgrunn
      Jeg er informatikkstudent i fjerde år på Kypros, og har alltid vært nysgjerrig på hvordan teknologi fungerer. Det startet med å lure på hvordan ting virker, og nå bygger jeg dem selv – alt fra roboter som reagerer på håndbevegelser til systemer for digitale eksamener.

      ### Teknologi i praksis
      Det morsomste med programmering er når ting faktisk begynner å fungere. Gjennom studiene har jeg fått jobbe med mange forskjellige teknologier: computer vision som gjenkjenner bevegelser, Arduino-roboter, og webutvikling med Flask og Python. Jeg liker spesielt prosjekter hvor du må kombinere forskjellige teknologier for å få noe til å virke.

      ### Praktisk erfaring og ledelse
      Ved siden av studiene har jeg jobbet mye praktisk – både i byggbransjen, som servicetekniker, og nå med nettsideadministrasjon. Akkurat nå er jeg også president i foreningen for norske studenter her på Kypros, noe som har gitt meg mye erfaring med organisering og det å få ting til å skje.

      ### Interesser og mål
      Utenom koding er jeg interessert i økonomi og investering – følger aksjemarkedet og har litt eiendomsinvestering på siden. Synes det er spennende hvordan teknologi og business hører sammen.

      **Søker sommerjobb** hvor jeg kan være med i et utviklerteam, lære hvordan det er å jobbe i et profesjonelt miljø, og bidra med det jeg kan.
    elementId: info-about-copy
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-12
          - pb-12
          - sm:pt-16
          - sm:pb-16
          - lg:pt-20
          - lg:pb-20
          - pl-4
          - pr-4
        textAlign: left

  - type: InfoGroupsSection
    colors: colors-f
    title: Arbeidserfaring
    elementId: info-work-experience
    groupType: experience
    groups:
      - title: Assistent
        organization: Vestfold & Viken bygg og eiendom
        dates: 2023 – d.d.
        description: Hjelper til med forskjellige prosjekter i selskapet. Har hovedansvar for nettsiden deres og sosiale medier, samt IT-relaterte oppgaver og kundekontakt.
      - title: Servicetekniker
        organization: Nordisk Vannteknikk
        dates: 2021 – 2024
        description: Jobbet med installasjon, drift og reparasjon av mobile vannbehandlingssystemer. Mye reising til forskjellige oppdrag, og mye kundekontakt.
      - title: Førstegangstjeneste
        organization: Akershus kommandantskap
        dates: 2020 – 2021
        description: Fullført førstegangstjeneste ved Ørland flystasjon og Kolsås leir.
      - title: Assistent
        organization: Bringaker Bygg
        dates: 2019 – 2021
        description: Jobbet på forskjellige byggeprosjekter med maskinarbeid, vedlikehold og snekkerarbeid.
      - title: Verkstedmedarbeider
        organization: BOMEKAN
        dates: 2017 – 2019
        description: Produksjon og bearbeiding av deler til stålkonstruksjoner.
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-12
          - pb-12
          - sm:pt-16
          - sm:pb-16
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
      **2022 – Ferdig januar 2027**

      4-årig bachelor i informatikk. Studerer alt fra grunnleggende programmering til mer avanserte ting som computer vision og systemdesign.

      **Noen av fagene:** Python, Java, C++, algoritmer, databaser, nettverk, operativsystemer, webutvikling, computer vision.

      **Prosjekter:** Håndbevegelses-styrt robot, digitalt eksamensystem, og flere andre teamprosjekter.

      **Andre aktiviteter:** President i Norwegian Students Association (2025-2026), styremedlem i ANSA, IEEE-medlem, robotikklubb.

      ---

      ### Videregående – Thor Heyerdahl
      **2017 – 2020**

      Medier og kommunikasjon, generell studiekompetanse.
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

  - type: InfoGroupsSection
    colors: colors-f
    title: Tekniske ferdigheter
    elementId: info-technical-skills
    groupType: skills
    groups:
      - title: Programmeringsspråk
        skills:
          - name: Python
            detail: Computer vision, backend-utvikling, Arduino-integrasjon
          - name: JavaScript
            detail: Frontend-utvikling og interaktivitet
          - name: C++
            detail: Embedded systems og Arduino-programmering
          - name: HTML5 & CSS3
            detail: Webdesign og responsiv layout
          - name: SQL
            detail: Database design og queries (SQLite)
      - title: Frameworks & Biblioteker
        skills:
          - name: Flask
            detail: Python web framework for backend API
          - name: OpenCV
            detail: Computer vision og bildebehandling
          - name: WordPress
            detail: CMS for nettside-administrasjon
      - title: Verktøy & Teknologier
        skills:
          - name: Git
            detail: Versjonskontroll og samarbeid
          - name: Arduino
            detail: Mikrokontroller-programmering
          - name: SQLite
            detail: Relasjonsdatabase
          - name: REST API
            detail: API-design og implementasjon
          - name: VS Code
            detail: Primært utviklingsverktøy
      - title: Kompetanseområder
        skills:
          - name: Fullstack webutvikling
            detail: frontend og backend
          - name: Computer vision
            detail: bildegjenkenning
          - name: Hardware/software integrasjon
          - name: Database design og administrasjon
          - name: Sikkerhet og autentisering
            detail: password hashing, session management
          - name: Responsive web design
          - name: SEO-optimalisering
          - name: Prosjektstyring og teamarbeid
      - title: Andre ferdigheter
        skills:
          - name: Teknisk problemløsing og debugging
          - name: Kundekontakt og servicearbeid
          - name: Teknisk dokumentasjon
          - name: Flytende norsk og engelsk
            detail: muntlig og skriftlig
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-12
          - pb-12
          - sm:pt-16
          - sm:pb-16
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

      Leder foreningen for norske studenter på Kypros. Holder kontakt med universitetet, planlegger arrangementer, og hjelper andre norske studenter.

      ---

      ### Styremedlem – ANSA
      **2025 – 2026**

      Bidrar med å planlegge arrangementer og støtte norske studenter på Kypros.

      ---

      ### Fotballtrener – HSH Fotball
      **2021-sesong**

      Hovedtrener for gutter 16.
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
    title: 'Ta gjerne kontakt!'
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
