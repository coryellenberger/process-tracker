/**
 * Process Factory
 * @namespace Factories
 */
(function () {
  angular
    .module('processTracker')
    .factory('processFactory', processFactory)

  processFactory.$inject = ['storage']

  /**
   * @namespace Process
   * @desc Stores and maintains the Process Model
   * @memberOf Factories
   */
  function processFactory (storage) {
    // private components
    var _PROCESS_MODEL = {
      name: 'Process Name',
      type: 'Process Type',
      category: 'Process Category',
      children: []
    }
    // accessible members
    var service = {
      getDefaultModel: getDefaultModel,
      getMyProcesses: getMyProcesses,
      setMyProcesses: setMyProcesses
    }

    return service

    /**
     * @name getDefaultModel
     * @desc Get the default Process Model
     * @returns {Object} Process Object
     * @memberOf Factories.Process
     */
    function getDefaultModel () {
      return _PROCESS_MODEL
    }

    /**
     * @name getMyProcesses
     * @desc Get My Processes from localStorage
     * @returns {Object} Process Object
     * @memberOf Factories.Process
     */
    function getMyProcesses () {
      return storage.getObject('my-processes') || [_PROCESS_MODEL]
    }

    /**
     * @name setMyProcesses
     * @desc Set My Processes in localStorage
     * @param {Object} Process Object
     * @memberOf Factories.Process
     */
    function setMyProcesses (model) {
      storage.setObject('my-processes', model)
    }
  }
})()
