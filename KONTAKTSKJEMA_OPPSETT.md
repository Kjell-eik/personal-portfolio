# Slik setter du opp e-postvarsler for kontaktskjemaet

Kontaktskjemaet bruker nå **Netlify Forms**. For å motta meldinger på e-post, må du konfigurere e-postvarsler i Netlify-dashboardet.

## Steg-for-steg:

### 1. Logg inn på Netlify

Gå til [app.netlify.com](https://app.netlify.com) og logg inn

### 2. Velg nettstedet ditt

Klikk på `personal-portfolio` nettstedet

### 3. Gå til Form notifications

1. Klikk på **"Forms"** i menyen til venstre
2. Etter første skjemainnsending vil du se skjemaet **"sign-up-form"**
3. Klikk på skjemanavnet
4. Klikk på **"Settings and notifications"** eller **"Form notifications"**

### 4. Legg til e-postvarsel

1. Under **"Form notifications"**, klikk på **"Add notification"**
2. Velg **"Email notification"**
3. Skriv inn e-postadressen din: **stefanbringaker@gmail.com**
4. Velg om du vil ha varsel for hver innsending eller et sammendrag
5. Klikk **"Save"**

## Hva skjer nå?

✅ Når noen fyller ut kontaktskjemaet på nettsiden, får du e-post til stefanbringaker@gmail.com med:

- Fornavn og etternavn
- E-postadresse
- Melding

## Testing

Du kan teste skjemaet ved å:

1. Gå til nettsiden din (både localhost:3002 eller live nettsiden)
2. Fyll ut kontaktskjemaet
3. Send inn
4. Sjekk Netlify Forms-dashboardet (Forms > sign-up-form) for å se innsendingen
5. Etter at du har satt opp e-postvarsel, får du e-post for alle nye innsendinger

## Hvor ser jeg alle innsendinger?

I Netlify dashboardet under **Forms** > **sign-up-form** ser du alle innsendinger, selv om du ikke har satt opp e-postvarsel.

## Spam-beskyttelse

Skjemaet har innebygd spam-beskyttelse (honeypot-felt) som hindrer roboter i å spamme skjemaet.
