const { Vibrant } = require('node-vibrant/node');
Vibrant.from('public/logo.png').getPalette()
  .then((palette) => {
    for (const name in palette) {
      if (palette[name]) {
        console.log(`${name}: ${palette[name].hex}`);
      }
    }
  })
  .catch(console.error);
