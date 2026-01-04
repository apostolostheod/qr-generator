// Xρήση του Inquirer για να έχουμε το user input
//Χρήση qr image για την μετατροπή του URL σε qr
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {"message":"Type in your URL : ",name: "URL",},
  ])
  .then((answers) => {
    console.log(answers);
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
//Mε το native module fs δημιουργούμε ένα txt αρχέιο που θα περιέχει το url 
    fs.writeFile("URL.txt",url,(err)=>{
      if(err) throw err;
      console.log("This file has been successfully saved !")
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });