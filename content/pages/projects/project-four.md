---
type: ProjectLayout
title: Hand Gesture Controlled Robot
colors: colors-a
date: '2024-2025'
client: Universitetsprosjekt
description: >-
  En robot som styres med håndbevegelser – uten joystick eller knapper. Universitetsprosjekt hvor vi kombinerte kamera, AI og Arduino for å lage en intuitiv måte å kontrollere en robot på.
featuredImage:
  type: ImageBlock
  url: /images/portfolio/robot-hand-gesture.jpg
  altText: Hand Gesture Robot
media:
  type: ImageBlock
  url: /images/portfolio/robot-demo.jpg
  altText: Hand Gesture Controlled Robot
---

## Om prosjektet

I dette prosjektet ville vi lage noe annerledes enn de vanlige robotene som styres med joystick. Tanken var: Hva om du bare kunne bevege hånda di, og roboten beveger seg dit du peker?

Vi brukte et kamera og computer vision (OpenCV) til å gjenkjenne håndbevegelser, og koblet det opp til en Arduino som styrte motorene. Det var utfordrende å få det til å fungere raskt nok uten forsinkelse, men vi klarte å få det ned til under 100ms.

### Hva vi brukte

**På PC-siden:**

- **Python** – For å behandle kamerabilder og gjenkjenne håndbevegelser
- **OpenCV** – Computer vision-bibliotek for bildebehandling
- **MediaPipe** – AI-modell fra Google for håndgjenkjenning

**På robot-siden:**

- **Arduino** – Mikrokontroller som styrer motorene
- **C++** – Programmeringsspråk for Arduino
- **DC Motorer** – Drivsystem for hjulene
- **Motor Driver** – For å kontrollere hastighet og retning

### Hvordan det fungerer

- **Rask respons** – Roboten reagerer på håndbevegelser nærmest øyeblikkelig (under 100ms)
- **Fleksibel styring** – Kjører frem, tilbake, venstre, høyre, og stopper
- **Trådløs** – PC-en kommuniserer trådløst med Arduino
- **Fungerer i forskjellige lysforhold** – Relativt robust deteksjon

### Utfordringer vi løste

1. **Forsinkelse** – I starten tok det 300ms fra du beveget hånda til roboten reagerte. Fikk det ned til under 100ms ved å optimalisere koden.
2. **Nøyaktighet** – Roboten måtte forstå forskjell på bevegelser. Klarte 95%+ nøyaktighet.
3. **Kommunikasjon** – Få Python og Arduino til å snakke sammen sømløst.
4. **Sanntidsbehandling** – Behandle kamerabilder raskt nok for øyeblikkelig respons.

> "Når teknologi og menneskelige bevegelser møtes"

### Videoer

**Robotdemonstrasjon:**  
Se roboten i aksjon:

- [robot-demo.mp4](/images/portfolio/robot-demo.mp4)
- [robot-gesture-demo.mp4](/images/portfolio/robot-gesture-demo.mp4)

## Hva jeg lærte

Prosjektet ga meg erfaring med:

- Computer vision og bildebehandling i praksis
- Å koble sammen hardware og software
- Programmering av mikrokontrollere (Arduino)
- Teamarbeid på tekniske prosjekter
- Feilsøking når ting ikke fungerer som forventet

**Teknologier:** Python, C++, OpenCV, Arduino, Computer Vision, Embedded Systems
