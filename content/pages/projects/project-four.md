---
type: ProjectLayout
title: Hand Gesture Controlled Robot
colors: colors-a
date: '2024-2025'
client: Universitetsprosjekt
description: >-
  I dette universitetsprosjektet laget vi en robot som styres med håndbevegelser i stedet for joystick eller knapper. Et kamera, computer vision og Arduino ble koblet sammen for å gjøre styringen intuitiv.
technologies:
  - Python
  - C++
  - OpenCV
  - Arduino
  - Computer Vision
  - Embedded Systems
featuredImage:
  type: ImageBlock
  url: /images/portfolio/robot-hand-gesture.jpg
  altText: Robotprosjekt med håndbevegelsesstyring
media:
  type: ImageBlock
  url: /images/portfolio/robot-demo.jpg
  altText: Demonstrasjon av robotprosjektet
---

## Om prosjektet

Målet var å lage en robot som reagerer på håndbevegelser i stedet for å bli styrt med joystick. Et kamera og computer vision (OpenCV) gjenkjenner håndbevegelser på PC-en, og en Arduino styrer motorene på roboten. Løsningen kombinerer bildebehandling, programvare og maskinvare.

## På PC-siden

- **Python** – behandler kamerabilder og håndterer gjenkjenning av bevegelser
- **OpenCV** – brukes til bildebehandling og computer vision
- **MediaPipe** – modellen fra Google brukes til håndgjenkjenning

## På robot-siden

- **Arduino** – mikrokontrolleren som styrer motorene
- **C++** – programmeringsspråket som brukes på Arduino
- **DC-motorer** – driver robotens hjul
- **Motorstyring** – regulerer motorenes hastighet og retning

## Styring og funksjon

- Roboten kan kjøre fremover, bakover, til venstre og til høyre, eller stoppe.
- PC-en kommuniserer trådløst med Arduino-enheten.
- Systemet ble prøvd i ulike lysforhold, og håndbevegelsene ble gjenkjent relativt robust.
- Målet med sanntidsbehandlingen var at roboten skulle reagere raskt på bevegelsene.

## Utfordringer og løsninger

- **Forsinkelse:** I starten tok det omtrent 300 ms fra hånden ble beveget til roboten reagerte. Etter optimalisering ble forsinkelsen redusert til under 100 ms.
- **Gjenkjenning:** Roboten måtte skille mellom ulike bevegelser. Prosjektbeskrivelsen oppgir en nøyaktighet på over 95 %.
- **Kommunikasjon:** Python-programmet på PC-en og Arduino-enheten måtte kommunisere pålitelig.
- **Sanntidsbehandling:** Kamerabildene måtte behandles raskt nok til at styringen opplevdes umiddelbar.

## Prosjektets mål

> Å la teknologi tolke menneskelige bevegelser og bruke dem til å styre en robot.

## Demonstrasjon

En video av roboten i bruk er tilgjengelig her:

- [Se demonstrasjonen av roboten](/images/portfolio/robot-gesture-demo.mp4)

## Hva jeg lærte

Prosjektet ga meg praktisk erfaring med:

- computer vision og bildebehandling
- integrasjon av programvare og maskinvare
- programmering av mikrokontrollere med Arduino
- samarbeid i et teknisk prosjekt
- systematisk feilsøking
