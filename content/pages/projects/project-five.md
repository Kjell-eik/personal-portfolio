---
type: ProjectLayout
title: Online Examination System
colors: colors-a
date: '2025'
client: Universitetsprosjekt
description: >-
  Et digitalt eksamenssystem vi utviklet som et åtte ukers teamprosjekt. Lærere kan opprette eksamener, mens studenter kan gjennomføre dem med tidsbegrensning. Systemet inkluderer innlogging, automatisk retting og separate oversikter for lærere og studenter.
technologies:
  - Python
  - Flask
  - SQLite
  - HTML5
  - CSS3
  - JavaScript
  - REST API
featuredImage:
  type: ImageBlock
  url: /images/portfolio/exam-system.jpg
  altText: Online Examination System
media:
  type: ImageBlock
  url: /images/portfolio/code.jpg
  altText: Kode fra eksamenssystemet
---

## Om prosjektet

Vi utviklet systemet som et teamprosjekt over åtte uker. Tanken var at en lærer skulle kunne opprette en eksamen med frist, mens studentene kunne logge inn og ta den digitalt. Systemet holder oversikt over brukere og tid, og retter flervalgsoppgaver automatisk.

Løsningen ble bygget med Flask og Python på serversiden, SQLite som database og HTML, CSS og JavaScript i grensesnittet.

## Backend

- **Python og Flask** – håndterer innlogging og API-et
- **SQLite** – lagrer data om brukere, eksamener og resultater
- **Werkzeug** – brukes til håndtering av passord
- **Sesjonshåndtering** – holder oversikt over innloggede brukere

## Frontend

- **HTML5 og CSS3** – bygger opp grensesnittet og utformingen
- **JavaScript** – håndterer blant annet nedtelling og validering

## Sikkerhet

- **Passordhashing med Bcrypt** – passord lagres som hash, ikke i klartekst
- **Beskyttelse mot SQL-injeksjon** – databasen bruker parametriserte spørringer
- **Rollebasert tilgang** – studenter og lærere får tilgang til ulike funksjoner

## Funksjonalitet

- Sikker innlogging og håndtering av brukersesjoner
- Separate oversikter for studenter og lærere
- Opprettelse av eksamener med tidsfrister
- Tidsbegrenset gjennomføring med nedtelling
- Automatisk retting av flervalgsoppgaver
- Historikk og statistikk over tidligere eksamener
- Responsiv utforming for bruk på mobil

## Databasestruktur

Databasen er organisert i fem hovedtabeller:

- `users` – brukere og passord
- `exams` – eksamener og tidsfrister
- `questions` – spørsmål og svaralternativer
- `submissions` – besvarelser og poeng
- `sessions` – aktive innlogginger

## Teknisk arbeid

- Utforming av REST API-endepunkter
- Validering av data på serversiden
- Feilhåndtering med forståelige feilmeldinger
- Normalisering av databasen

## Hva jeg lærte

- **Fullstack-utvikling** – arbeid med database, backend og frontend
- **Sikkerhet** – passordhåndtering, innlogging og sesjoner
- **Databasedesign** – strukturering av data i SQL
- **Teamarbeid** – Git, kodegjennomgang og samarbeid
- **Feilsøking** – systematisk undersøkelse av feil

**Prosjektteam:** fire studenter

**Varighet:** åtte uker

**Min rolle:** backend-utvikling og databasedesign
