"use strict";

const mongoose = require("mongoose");
//Khi require 1 module, no se cache lai va k goi lai nua
const connectString = "mongodb://localhost:27017/shopDEV";

class Database {
	constructor() {
		this.connect();
	}

	connect(type = "mongodb") {
		if (1 === 1) {
			mongoose.set("debug", true);
			mongoose.set("debug", { color: true });
		}
		mongoose
			.connect(connectString)
			.then((_) => console.log(`Connected Mongo Success`))
			.catch((err) => console.log(`Error connect`));
	}

	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}

		return Database.instance;
	}
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;