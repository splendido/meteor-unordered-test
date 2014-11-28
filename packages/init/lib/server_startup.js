// ------------------------------------------
//  Logs the start of execution of this file
// ------------------------------------------
ModularClassLog.debug('Loading modular:init server_startup.js');

ModularBC.prototype.__startupHooks.push(function(){
    ModularClassLog.debug(' - Running modular:init startup hook');
});
