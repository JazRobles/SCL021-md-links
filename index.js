#!/usr/bin/env node

//declarando constantes e importando los módulos de nodo
const fs = require('fs')
const path = require('path');
const colors = require("colors");
const arguments = process.argv [2]
console.log({arguments})
const fetch = require("node-fetch");




// verificamos si la ruta existe
  if (fs.existsSync(arguments)) {
	console.log(colors.america("la ruta existe"))
  }
   //la ruta es absoluta
  path.isAbsolute(arguments);
  console.log(colors.rainbow("la ruta es absoluta"));

//   

// fs.readFile toma la ruta del archivo y la devolución de llamada
fs.readFile(arguments, (err, data) => {

	// si hay un error, regístra y regresa
  if (err) {
		console.error(err)
		return 
	};

	

});



fetch("https://reqres.in/api/users?page=2")
.then((respuestaExitosa) => {
  console.log(colors.bgMagenta("respuesta exitosa",respuestaExitosa.status))
})
.catch((error) => {
console.log(error)
})
  
//detectando los links
  function detectaURLs(message) {
    var url = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return message.match(url);
  }
  
  // leer los archivos
const readFile = (route) => {
  return new Promise((resolve, reject) => {
    fs.readFile("README.md", "utf8", (err, data) => {
      console.log(colors.rainbow("lenyendo archivo", typeof data))
      if (err) {
        reject(err);
      } else if (data) {
        const detectaUrl = detectaURLs(data);
        console.log(colors.bgMagenta("detectando urls"), detectaUrl);
        resolve(detectaUrl);
      }
    });
  });
};
readFile().then((data) => console.log(colors.bgGreen("total de links",data.length)));

// // module.exports = () => {
// //   // ...
// };

