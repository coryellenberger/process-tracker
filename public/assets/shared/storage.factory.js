/**
 * Storage Factory
 * @namespace Factories
 */
(function () {
  angular
    .module('processTracker')
    .factory('storage', storage)

  /**
   * @namespace Storage
   * @desc Application wide Local Storage
   * @memberOf Factories
   */
  function storage () {
    // accessible members
    var service = {
      getObject: getObject,
      setObject: setObject
    }

    return service

    /**
     * @name getObject
     * @desc Get object from storage parsed as JSON
     * @param {String} key Key to get value pair
     * @returns {Object} value from the localStorage
     * @memberOf Factories.Storage
     */
    function getObject (key) {
      return JSON.parse(localStorage.getItem(key))
    }

    /**
     * @name setObject
     * @desc Set object in storage as string
     * @param {String} key Key to store object under
     * @param {Object} obj Object to be stored
     * @memberOf Factories.Storage
     */
    function setObject (key, obj) {
      localStorage.setItem(key, JSON.stringify(obj))
    }
  }
})()
