#!/usr/bin/env node

//declarando constantes e importando los módulos de nodo
const fs = require('fs')
const path = require('path');
const colors = require("colors");
const arguments = process.argv 
console.log({arguments})



// verificamos si la ruta existe
  if (fs.existsSync(process.argv [2])) {
	console.log("existe")
  }
   
// fs.readFile toma la ruta del archivo y la devolución de llamada
fs.readFile(process.argv [2], (err, data) => {

	// si hay un error, regístra y regresa
  if (err) {
		console.error(err)
		return 
	};

	

});



  


// // module.exports = () => {
// //   // ...
// };
