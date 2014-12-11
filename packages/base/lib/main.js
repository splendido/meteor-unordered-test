
ModularClassLog = new Logger('modular');
Logger.setLevel('modular', 'debug');


// ------------------------------------------
//  Logs the start of execution of this file
// ------------------------------------------
ModularClassLog.debug('Loading modular:base:main.js');


// ------------------------
//  Base Class Declaration
// ------------------------

ModularBC = function() {
  this.log.debug('Instantiating ModularClass');
};

ModularBC.prototype.log = ModularClassLog;
