// You'd want to do something like this after moving this directory to your project and copying all the recipe files to this directory.
// require('dotenv').config();
// const { Recipe } = require('../models');

try {
	const fname = process.argv[2];
	const jsonData = require(fname);
	console.log(`looks like you want to import ${fname}`);
	console.log(jsonData);
	const keys = Object.keys(jsonData);
	console.log(`and it has ${keys}`);
	console.log(`
  	  This object has a more complicated ingredients list than yours, I think.
	  For your ingredients array, I'd do something like:

	  	jsonData.ingredients = jsonData.ingredients.join('\n');

	   
	  `);

	console.log(`
	  Here would be a good place for a Sequelize model call like:

	  	await Recipe.create(jsonData);
	  `);

	await Recipe.create({
		title: jsonData.name,
		garnish: jsonData.garnish,
		ingredients: jsonData.ingredients,
		//etc...
	});
} catch (e) {
	console.log("error", e);
}
