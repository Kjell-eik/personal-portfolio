---
type: ProjectLayout
title: Online Examination System
colors: colors-a
date: '2025'
client: Universitetsprosjekt
description: >-
  Fullstack webapplikasjon for online eksamensavvikling med sikker autentisering, sanntids overvåkning og automatisk retting. Utviklet i team som del av systemutviklingskurs.
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

Online Examination System er en fullstack webapplikasjon designet for å håndtere digitale eksamener. Systemet støtter brukerautentisering, eksamensoppretting, sanntids overvåkning og automatisk retting av multiple-choice spørsmål.

### Tech Stack

**Backend:**

- **Python Flask** - Web framework for backend API
- **SQLite** - Relasjonsdatabase for bruker- og eksamendata
- **Werkzeug Security** - Password hashing og sikkerhet
- **Flask Session Management** - Bruker-sesjoner

**Frontend:**

- **HTML5** - Semantisk markup
- **CSS3** - Responsiv styling og layout
- **JavaScript** - Interaktiv funksjonalitet

**Sikkerhet:**

- **Password Hashing** - Bcrypt/SHA-256 for passordsikring
- **Session Management** - Sikre bruker-sesjoner
- **SQL Injection Protection** - Parameteriserte queries
- **Authentication Guards** - Rollbasert tilgangskontroll

### Nøkkelfunksjoner

- **Brukerautentisering** - Sikker innlogging med krypterte passord
- **Rollebasert tilgang** - Separate dashboards for studenter og lærere
- **Eksamensadministrasjon** - Opprett, rediger og administrer eksamener
- **Sanntids eksamen** - Tidsbegrenset eksamensavvikling
- **Automatisk retting** - Umiddelbar feedback på multiple-choice
- **Resultater og statistikk** - Oversikt over tidligere eksamener
- **Responsiv design** - Fungerer på desktop, tablet og mobil

### Database Design

**Tabeller:**

- `users` - Brukerinformasjon og autentisering
- `exams` - Eksamensdetaljer og innstillinger
- `questions` - Spørsmål med svaralternativer
- `submissions` - Student-besvarelser og resultater
- `sessions` - Aktive eksamen-sesjoner

### Tekniske implementasjoner

- **RESTful API design** - Strukturerte endpoints
- **Input validering** - Server-side validering av all brukerinput
- **Error handling** - Omfattende feilhåndtering
- **Database normalisering** - Effektiv datastruktur

> "Digitalisering av eksamensprosessen med fokus på sikkerhet og brukervennlighet"

## Resultater og læring

Prosjektet ga verdifull erfaring med:

- **Fullstack utvikling** - Fra database til brukergrensesnitt
- **Sikkerhetsprinsipper** - Autentisering og autorisasjon
- **Database design** - Relasjonelle databaser og SQL
- **Teamutvikling** - Git workflow og samarbeid
- **Testing og debugging** - Systematisk feilsøking

**Prosjektteam:** 4 studenter  
**Varighet:** 8 uker  
**Rolle:** Backend-utvikler og database-design

**Teknologier demonstrert:** Python, Flask, SQLite, HTML/CSS/JavaScript, Authentication, Database Design, REST API
