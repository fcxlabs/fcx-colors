const { green } = require('@fcxlabs/colors');
const { red } = require('@fcxlabs/colors');
const { pear } = require('@fcxlabs/colors');
const { gray } = require('@fcxlabs/colors');
const { black } = require('@fcxlabs/colors');
const { white } = require('@fcxlabs/colors');
// const { yellow } = require("@fcxlabs/colors");

const fs = require('fs');
const path = require('path');
const packageJson = require('@fcxlabs/colors/package.json');

const colors = packageJson.keywords.join(', ');
const dependencyFolder = path.dirname(require.resolve('./package.json'));
const scssFilePath = path.join(dependencyFolder, 'fcx-color.scss');
const stylesScssFilePath = path.join(process.cwd(), '/src/styles.scss');

function convertColorsToScss(colors: Record<string, string>) {
  const scssVariables = Object.entries(colors)
    .map(([colorName, colorValue]) => `$${colorName}: ${colorValue};`)
    .join('\n');

  return scssVariables;
}

// Verificar se o Node.js está instalado
if (typeof process === 'undefined' || !process.versions || !process.versions.node) {
  console.warn('O Node.js não está instalado. A execução do script de criação do SCSS foi pulada.');
  console.log('A instalação da dependência continuará normalmente.');
} else {
  // Verificar se o arquivo styles.scss existe
  if (!fs.existsSync(stylesScssFilePath)) {
    console.warn('O arquivo styles.scss não foi encontrado na pasta do projeto.');
    console.log('A instalação da dependência continuará normalmente.');
  } else {
    try {
      // Dados das cores em formato JSON
      const colorsData: Record<string, string> = {
        //red.primary
        'fcx-color-red': red.primary,
        //red.shades.light
        'fcx-color-lightred-5': red.shades.light5,
        'fcx-color-lightred-15': red.shades.light15,
        'fcx-color-lightred-25': red.shades.light25,
        'fcx-color-lightred-35': red.shades.light35,
        'fcx-color-lightred-45': red.shades.light45,
        'fcx-color-lightred-55': red.shades.light55,
        'fcx-color-lightred-65': red.shades.light65,
        'fcx-color-lightred-75': red.shades.light75,
        'fcx-color-lightred-85': red.shades.light85,
        'fcx-color-lightred-95': red.shades.light95,
        //red.shades.dark
        'fcx-color-darkred-5': red.shades.dark5,
        'fcx-color-darkred-15': red.shades.dark15,
        'fcx-color-darkred-25': red.shades.dark25,
        'fcx-color-darkred-35': red.shades.dark35,
        'fcx-color-darkred-45': red.shades.dark45,
        'fcx-color-darkred-55': red.shades.dark55,
        'fcx-color-darkred-65': red.shades.dark65,
        'fcx-color-darkred-75': red.shades.dark75,
        'fcx-color-darkred-85': red.shades.dark85,
        'fcx-color-darkred-95': red.shades.dark95,

        //green.primary
        'fcx-color-green': green.primary,
        //green.shades.light
        'fcx-color-lightgreen-5': green.shades.light5,
        'fcx-color-lightgreen-15': green.shades.light15,
        'fcx-color-lightgreen-25': green.shades.light25,
        'fcx-color-lightgreen-35': green.shades.light35,
        'fcx-color-lightgreen-45': green.shades.light45,
        'fcx-color-lightgreen-55': green.shades.light55,
        'fcx-color-lightgreen-65': green.shades.light65,
        'fcx-color-lightgreen-75': green.shades.light75,
        'fcx-color-lightgreen-85': green.shades.light85,
        'fcx-color-lightgreen-95': green.shades.light95,
        //green.shades.dark
        'fcx-color-darkgreen-5': green.shades.dark5,
        'fcx-color-darkgreen-15': green.shades.dark15,
        'fcx-color-darkgreen-25': green.shades.dark25,
        'fcx-color-darkgreen-35': green.shades.dark35,
        'fcx-color-darkgreen-45': green.shades.dark45,
        'fcx-color-darkgreen-55': green.shades.dark55,
        'fcx-color-darkgreen-65': green.shades.dark65,
        'fcx-color-darkgreen-75': green.shades.dark75,
        'fcx-color-darkgreen-85': green.shades.dark85,
        'fcx-color-darkgreen-95': green.shades.dark95,

        //pear.primary
        'fcx-color-pear': pear.primary,
        //pear.shades.light
        'fcx-color-lightpear-5': pear.shades.light5,
        'fcx-color-lightpear-15': pear.shades.light15,
        'fcx-color-lightpear-25': pear.shades.light25,
        'fcx-color-lightpear-35': pear.shades.light35,
        'fcx-color-lightpear-45': pear.shades.light45,
        'fcx-color-lightpear-55': pear.shades.light55,
        'fcx-color-lightpear-65': pear.shades.light65,
        'fcx-color-lightpear-75': pear.shades.light75,
        'fcx-color-lightpear-85': pear.shades.light85,
        'fcx-color-lightpear-95': pear.shades.light95,
        //pear.shades.dark
        'fcx-color-darkpear-5': pear.shades.dark5,
        'fcx-color-darkpear-15': pear.shades.dark15,
        'fcx-color-darkpear-25': pear.shades.dark25,
        'fcx-color-darkpear-35': pear.shades.dark35,
        'fcx-color-darkpear-45': pear.shades.dark45,
        'fcx-color-darkpear-55': pear.shades.dark55,
        'fcx-color-darkpear-65': pear.shades.dark65,
        'fcx-color-darkpear-75': pear.shades.dark75,
        'fcx-color-darkpear-85': pear.shades.dark85,
        'fcx-color-darkpear-95': pear.shades.dark95,

        //gray.primary
        'fcx-color-gray': gray.primary,
        //gray.shades.light
        'fcx-color-lightgray-5': gray.shades.light5,
        'fcx-color-lightgray-15': gray.shades.light15,
        'fcx-color-lightgray-25': gray.shades.light25,
        'fcx-color-lightgray-35': gray.shades.light35,
        'fcx-color-lightgray-45': gray.shades.light45,
        'fcx-color-lightgray-55': gray.shades.light55,
        'fcx-color-lightgray-65': gray.shades.light65,
        'fcx-color-lightgray-75': gray.shades.light75,
        'fcx-color-lightgray-85': gray.shades.light85,
        'fcx-color-lightgray-95': gray.shades.light95,
        //gray.shades.dark
        'fcx-color-darkgray-5': gray.shades.dark5,
        'fcx-color-darkgray-15': gray.shades.dark15,
        'fcx-color-darkgray-25': gray.shades.dark25,
        'fcx-color-darkgray-35': gray.shades.dark35,
        'fcx-color-darkgray-45': gray.shades.dark45,
        'fcx-color-darkgray-55': gray.shades.dark55,
        'fcx-color-darkgray-65': gray.shades.dark65,
        'fcx-color-darkgray-75': gray.shades.dark75,
        'fcx-color-darkgray-85': gray.shades.dark85,
        'fcx-color-darkgray-95': gray.shades.dark95,

        //yellow.primary
        //'fcx-color-yellow': yellow.primary,
        //yellow.shades.light
        //'fcx-color-lightyellow-5': yellow.shades.light5,
        //'fcx-color-lightyellow-15': yellow.shades.light15,
        //'fcx-color-lightyellow-25': yellow.shades.light25,
        //'fcx-color-lightyellow-35': yellow.shades.light35,
        //'fcx-color-lightyellow-45': yellow.shades.light45,
        //'fcx-color-lightyellow-55': yellow.shades.light55,
        //'fcx-color-lightyellow-65': yellow.shades.light65,
        //'fcx-color-lightyellow-75': yellow.shades.light75,
        //'fcx-color-lightyellow-85': yellow.shades.light85,
        //'fcx-color-lightyellow-95': yellow.shades.light95,
        //yellow.shades.dark
        //'fcx-color-darkyellow-5': yellow.shades.dark5,
        //'fcx-color-darkyellow-15': yellow.shades.dark15,
        //'fcx-color-darkyellow-25': yellow.shades.dark25,
        //'fcx-color-darkyellow-35': yellow.shades.dark35,
        //'fcx-color-darkyellow-45': yellow.shades.dark45,
        //'fcx-color-darkyellow-55': yellow.shades.dark55,
        //'fcx-color-darkyellow-65': yellow.shades.dark65,
        //'fcx-color-darkyellow-75': yellow.shades.dark75,
        //'fcx-color-darkyellow-85': yellow.shades.dark85,
        //'fcx-color-darkyellow-95': yellow.shades.dark95,

        'fcx-color-white': white.primary,
        'fcx-color-black': black.primary,
      };

      // Função para converter as cores para SCSS

      // Converter as cores para SCSS
      const scssCode = convertColorsToScss(colorsData);

      // Escrever o código SCSS em um arquivo
      fs.writeFileSync(scssFilePath, scssCode);

      console.log('Arquivo fcx-color.css criado com sucesso!');
      // Verificar se a declaração de importação já existe
      const importDeclaration = `@import '${path.relative(path.dirname(stylesScssFilePath), scssFilePath)}';`;
      const stylesScssContent = fs.readFileSync(stylesScssFilePath, 'utf8');

      if (stylesScssContent.includes(importDeclaration)) {
        console.log('A declaração de importação já existe no arquivo styles.scss.');
      } else {
        const updatedContent = `${importDeclaration}\n${stylesScssContent}`;
        fs.writeFileSync(stylesScssFilePath, updatedContent, 'utf8');
        console.log('Declaração de importação adicionada ao arquivo styles.scss.');
      }
    } catch (error) {
      console.error('Ocorreu um erro ao gerar o arquivo SCSS:', error);
      console.log('A instalação da dependência continuará normalmente.');
    }
  }
}
