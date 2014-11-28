// ------------------------------------------
//  Logs the start of execution of this file
// ------------------------------------------
ModularClassLog.debug('Loading modular:base server_startup.js');

ModularBC.prototype.__startupHooks.push(function(){
  ModularClassLog.debug(' - Running modular:base startup hook');
});
