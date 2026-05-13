# Come pubblicare il sito GRATIS con GitHub Pages

Il sito sarà accessibile con un link del tipo:
`https://tuonome.github.io/marta-reggio-nutrizione/`

Puoi mettere questo link nella bio di Instagram.

---

## PASSO 1 – Crea un account GitHub (se non ce l'hai)
1. Vai su https://github.com
2. Clicca **Sign up** e registrati (è gratuito)

---

## PASSO 2 – Crea un nuovo repository
1. Clicca sul **+** in alto a destra → **New repository**
2. Nome repository: `marta-reggio-nutrizione`
3. Metti **Public** (non Private)
4. Clicca **Create repository**

---

## PASSO 3 – Carica il file index.html
1. Nella pagina del repository appena creato, clicca **uploading an existing file**
2. Trascina il file `index.html` (e le foto quando le hai)
3. Clicca **Commit changes**

---

## PASSO 4 – Attiva GitHub Pages
1. Vai su **Settings** (tab in alto nel repository)
2. Nel menu a sinistra clicca **Pages**
3. Sotto "Branch" seleziona **main** e poi **/ (root)**
4. Clicca **Save**

---

## PASSO 5 – Il sito è online!
Dopo 1-2 minuti il sito sarà accessibile all'indirizzo:
`https://TUOUSERNAME.github.io/marta-reggio-nutrizione/`

Inserisci questo link nella bio di Instagram!

---

## Come aggiungere le FOTO
1. Metti le foto nella stessa cartella di `index.html`
2. Nel file `index.html` cerca i commenti `<!-- SOSTITUISCI src -->` e `<!-- <img src=...`
3. Togli il commento `<!--` e `-->` e scrivi il nome del tuo file foto
4. Ricarica il file su GitHub

---

## Aggiornare il sito
Ogni volta che vuoi modificare qualcosa:
1. Modifica `index.html` sul computer
2. Vai su GitHub → repository → clicca sul file `index.html`
3. Clicca l'icona matita (Edit) → incolla il nuovo contenuto → Commit changes

---

## Form di contatto – Formspree (gratuito fino a 50 invii/mese)
1. Vai su https://formspree.io e registrati
2. Crea un nuovo form
3. Copia il tuo **Form ID** (es. `xabc1234`)
4. Nel file `index.html` sostituisci `YOUR_FORM_ID` con il tuo ID

---

## COSE DA PERSONALIZZARE nell'index.html
Cerca questi segnaposto e sostituiscili con i dati reali:

- `info@martareggio.it` → email reale
- `39XXXXXXXXXX` → numero WhatsApp (solo numeri, senza + e spazi)
- `@martareggio.nutrizionista` → handle Instagram reale
- `Via XXXX, Città` → indirizzo studio
- `n. XXXXX` → numero iscrizione Albo Biologi
- `foto-marta.jpg` → nome file foto hero
- `foto-marta-2.jpg` → nome file foto "chi sono"
