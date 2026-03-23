//configurazione 
const sharp = require("sharp");
const glob = require("glob");
const fs = require("fs");
const path = require("path");


const sourceDir = "./immagini"
const targetDir = "./immagini/convertite"
const targetFormatA = "avif"

//verifichiamo se le cartelle esistono in modo sincrono perchè necessarie per lo script
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}


const convertImages = async()=>{
  
  const imageFiles = glob.sync(`${sourceDir}/*.{jpg,jpeg,png,gif,webp}`, {
    ingore: `${targetDir}/**`,
  });

  if (imageFiles.length === 0) {
        console.log("❌ Nessuna immagine trovata! Assicurati di mettere file nella cartella 'immagini'.");
        return;
    }

  //ottenute le immagini, verifica in console
  console.log(`✅ trovate ${imageFiles.length} immagini da convertire...`);

  //contatore di statistiche per sapere quante immagini abbiamo convertito e quanti errori abbiamo avuto
  let converted = 0;
  let errors = 0;

  for (const imagePath of imageFiles){
    try {
        //otteniamo il file name ed il percorso finale compreso di formato
        const filename = path.basename(imagePath, path.extname(imagePath))
        console.log(`🔄 Elaboro: ${filename}`);
        const outputpath = path.join(targetDir, `${filename}.${targetFormatA}`);
        console.log(`✅ Creato: ${filename} in ${outputpath}`);

        //verifica se i file col formato avif esistono già
        if(fs.existsSync(outputpath)){
            console.log(`Saltato: ${outputpath}, (esiste già)`);
            continue;
        }

        //conversione vera e propria
        await sharp(imagePath)
        .avif({ quality: 90 })
        .toFile(outputpath);

        converted++;
        console.log(`convertito: ${imagePath} -> ${outputpath}`);

    } catch (error) {
        errors++;
        console.error(`errore durante la conversione di ${imagePath}:`,error.message);
    }
  }
}
//eventuali errori della funzione
convertImages().catch(err =>{
    console.error("errore durante l'esecuzione della funzione",err);
    process.exit(1);
});




