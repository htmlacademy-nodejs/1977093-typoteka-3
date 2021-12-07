'use strict';

const {Cli} = require(`./cli`);

const userCommand = process.argv.slice(2);
const [parameter, value] = userCommand;

Cli[parameter].run(value);
