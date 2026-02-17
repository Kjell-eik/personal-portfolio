---
type: ProjectLayout
title: Online Examination System
colors: colors-a
date: '2025'
client: Universitetsprosjekt
description: >-
  Et system for å gjennomføre eksamener digitalt. Laget i team som kursprosjekt – med innlogging, automatisk retting, og separate dashboards for lærere og studenter.
featuredImage:
  type: ImageBlock
  url: /images/portfolio/exam-system.jpg
  altText: Online Examination System
media:
  type: ImageBlock
  url: /images/portfolio/code.jpg
  altText: Examination System Dashboard
---

## Om prosjektet

Vi fikk i oppgave å lage et system for digitale eksamener. Tenk deg at en lærer skal kunne lage en eksamen, sette en tidsfrist, og studentene kan ta den hjemmefra. Systemet må vite hvem som er hvem, holde styr på tiden, og rette multiple-choice automatisk.

Det var et 8-ukers teamprosjekt hvor vi bygde hele systemet fra bunnen av med Flask (Python), SQLite database, og vanlig HTML/CSS/JavaScript på frontend.

### Hva vi brukte

**Backend:**

- **Python Flask** – Web framework for å håndtere innlogging og API
- **SQLite** – Database for brukere, eksamener og resultater
- **Werkzeug** – For kryptert passordlagring
- **Session Management** – Holder styr på hvem som er innlogget

**Frontend:**

- **HTML5/CSS3** – Grensesnitt og design
- **JavaScript** – Interaktivitet (nedtelling, validering, etc.)

**Sikkerhet:**

- **Password Hashing** – Passord lagres kryptert (Bcrypt)
- **SQL Injection Protection** – Parametriserte queries
- **Rollebasert tilgang** – Studenter og lærere ser forskjellig innhold

### Funksjonalitet

- **Sikker innlogging** – Krypterte passord og session management
- **To typer brukere** – Studenter og lærere med forskjellige dashboards
- **Opprett eksamener** – Lærere kan lage eksamener med tidsfrister
- **Tidsbegrenset gjennomføring** – Nedtelling mens studenten tar eksamen
- **Automatisk retting** – Multiple-choice rettes med en gang
- **Oversikt** – Historikk og statistikk over tidligere eksamener
- **Fungerer på mobil** – Responsivt design

### Database-struktur

Fem hovedtabeller:

- `users` – Brukerinformasjon og passord
- `exams` – Eksamensdetaljer og tidsfrister
- `questions` – Spørsmål med svaralternativer
- `submissions` – Studentbesvarelser og poeng
- `sessions` – Aktive pålogginger

### Teknisk implementasjon

- **REST API design** – Logisk struktur på endepunkter
- **Server-side validering** – Sjekker all input fra brukere
- **Feilhåndtering** – Gir fornuftige feilmeldinger
- **Normalisert database** – Effektiv datastruktur

> "Å digitalisere eksamener med fokus på sikkerhet"

## Hva jeg lærte

- **Fullstack-utvikling** – Jobbet med alt fra database til frontend
- **Sikkerhet** – Hvordan man håndterer passord, innlogging og sessions
- **Database design** – Å strukturere data fornuftig i SQL
- **Teamarbeid** – Git workflow, koderevisjoner, og samarbeid
- **Feilsøking** – Systematisk debugging av komplekse problemer

**Prosjektteam:** 4 studenter  
**Varighet:** 8 uker  
**Min rolle:** Backend-utvikler og database-design

**Teknologier:** Python, Flask, SQLite, HTML/CSS/JavaScript, REST API
