const fs = require("fs");
const parseTemplate = (path, payload) => {
	try {
		console.log("inside helper")
		content = fs.readFileSync(path).toString();
		var key = Object.keys(payload);
		key.map((key) => {
			content = content.replace("${" + key + "}", payload[key]);
		});
		return content;
	} catch (error) {
		console.trace(error.message)
	}
};

const tableRowGenerator = (orderdItems) => {
	let content = ``
	try {
		for (i = 0; i < orderdItems.length; i++) {
			content += `<tr align="center"><td>${orderdItems[i].name}</td><td><img src="${orderdItems[i].image}" width="50" heigth="50"></td><td>₹ ${orderdItems[i].price}</td></tr>`
		}
		return content
	} catch (error) {
		console.trace(error.message)
	}
}

module.exports = {parseTemplate,tableRowGenerator}