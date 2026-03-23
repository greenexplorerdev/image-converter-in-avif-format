🌐 Convertitore Immagini Semplice (Node.js)
È uno script che ho creato per automatizzare una cosa noiosa: convertire le immagini. Invece di aprire Photoshop o un sito web per ogni foto, ho scritto questo programma che prende tutte le immagini in una cartella e le converte in automatico in formato .avif (un formato moderno che pesa poco).

### Tech Stack
Javascript - Node.js

### Funzionalità Implementate
- Cerca nella cartella `./immagini` tutti i file `.jpg`, `.png`, `.gif` e `.webp`.
- Li converte in formato **AVIF** con una buona qualità (90).
- Li salva nella cartella `./immagini/convertite`.
- **Funzione intelligente**: Se chiudi lo script e lo riavvii, non riconverte le immagini che hai già fatto. Controlla se il file esiste e lo salta. Questo fa risparmiare un sacco di tempo! ⏱️


## 🚀 Come usarlo

Se vuoi provarlo sul tuo computer, segui questi passi:

### 1. Requisiti
Devi avere installato [Node.js](https://nodejs.org/).

### 2. Installazione
- Scarica o clona questo progetto.
- apri il terminale nella cartella e installa:

```bash
npm install sharp glob
```

### 3. Preparazione
Crea una cartella chiamata `immagini` e mettici dentro le tue foto. (Non serve creare la cartella `convertite`, ci pensa lo script da solo!).

### 4. Esecuzione
Lancia lo script da terminale dentro la cartella di progetto:

```bash
node index.js
```
### 📸 Screenshot
![convertitore-immagini-node](https://github.com/user-attachments/assets/3ff4cdd5-c2bd-48d2-9666-a84d0c243f91)

### 🤝 Contatti
Sono aperto a feedback, consigli e opportunità di collaborazione!

**LinkedIn**: https://www.linkedin.com/in/cosimo-francesco-di-ruscio || **Email**: *cosimof.diruscio@tutamail.com*
