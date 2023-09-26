"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECOND = 5000;
const countConnect = () => {
	const numConnection = mongoose.connections.length;
	console.log(`Number of connection:: ${numConnection}`);
};

//check overload
const checkOverload = () => {
	setInterval(() => {
		const numConnection = mongoose.connections.length;
		const numCore = os.cpus().leng;
		const memoryUsage = process.memoryUsage().rss;
		// example maximum number of connections based on number of core
		const maxConnections = numCore * 5;
		console.log(`Active connections: ${numConnection}`);

		console.log(`Memory usage: ${memoryUsage / 1024 / 1024}MB`);

		if (numConnection > maxConnections) {
			console.log(`Connection overload detected!`);
		}
	}, _SECOND);
};
module.exports = {
	countConnect,
	checkOverload,
};
