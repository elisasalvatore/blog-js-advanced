# Blog JS Advanced

Benvenuto su Blog JS Advanced, un sito blog moderno progettato per mettere in mostra animazioni dinamiche, funzionalità avanzate e interattività tramite JavaScript. Questo documento descrive le caratteristiche principali del sito, con particolare attenzione alle animazioni e alle funzioni interattive che migliorano l'esperienza utente.

Per visualizzare il progetto [clicca qui](https://blog-js-advanced.netlify.app/)

## Panoramica del progetto

Blog JS Advanced offre un'esperienza utente fluida e coinvolgente, grazie a un design moderno e interattivo. Il sito integra animazioni accattivanti e funzioni avanzate per migliorare la navigazione e l'accesso ai contenuti

## Funzionalità interattive

- **Design reattivo**: Ottimizzato per la visualizzazione su desktop, tablet e dispositivi mobili.
- **Contenuti dinamici**: I post del blog vengono recuperati e visualizzati dinamicamente tramite JavaScript.
- **Interfaccia interattiva**: Include animazioni, transizioni e scrolling fluido.
- **Bottone "Load More"**: Gli articoli del blog vengono caricati dinamicamente quando l'utente clicca sul pulsante "Load More", senza bisogno di ricaricare l'intera pagina.
- **Scroll-to-Top**: Un pulsante per tornare in cima alla pagina, che appare dopo uno scrolling significativo.
- **Ottimizzazione SEO**: Open Graph Meta Tags implementati per una migliore visibilità sui motori di ricerca e nelle condivisioni social.

## Tecnologie utilizzate

- **HTML 5**: Struttura semantica del contenuto.
- **CSS 3**:
  - Animazioni e Transizioni CSS per effetti visivi accattivanti.
  - Layout moderni con Flexbox.
- **JavaScript (ES6+)**: Rendering dinamico dei contenuti, interazioni con API e interattività dell'utente.
- **Webpack**:
  - Bundler utilizzato per ottimizzare file CSS e JavaScript.
  - Configurato per gestire moduli, transpiling (con Babel) e caricamento di risorse.
  - Permette un'organizzazione modulare e migliora le prestazioni.

## Struttura del progetto

### Descrizione delle cartelle principali

- `dist/`: Contiene i file ottimizzati e minificati, pronti per la distribuzione. Questa cartella viene generata automaticamente da Webpack.
- `src/`: Contiene il codice sorgente del progetto. Qui si trovano i file originali che vengono elaborati e ottimizzati da Webpack.
  - `css/`: Contiene i file CSS modulari per definire lo stile del sito, inclusi temi e animazioni.
  - `js/`: Include script JavaScript separati per funzionalità principali, animazioni e utility.
  - `assets/`: Risorse statiche come immagini e font personalizzati.
- `node_modules/`: Directory generata automaticamente da npm che contiene le dipendenze del progetto.
- `webpack.config.js`: File di configurazione di Webpack che specifica come elaborare i file del progetto (CSS, JS, immagini, ecc.).

## Installazione

Per provare il progetto in locale:

1. **Clona il repository**:

```
git clone https://github.com/username/blog-js-advanced.git
```

2. **Accedi alla cartella del progetto**:

```
cd blog-js-advanced
```

3. **Installa le dipendenze**:

```
npm install
```

4. **Esegui Webpack: Per creare il bundle e avviare un server locale:**:

```
npm run build
npm run dev
```

4. **Apri il progetto nel browser:**:

```
http://localhost:5050
```

## Screenshot

<img class="w-100" src="./src/assets/img/screenshot-blogjs.png" alt="Blog Advanced JS"/>

## Contatti

Creato con ❤️ da Elisa Salvatore. Per qualsiasi domanda o suggerimento, sentiti libero di aprire un'issue o contattarmi direttamente tramite GitHub.
