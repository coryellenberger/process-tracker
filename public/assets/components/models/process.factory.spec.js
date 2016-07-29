describe('storage', function () {
  beforeEach(function () {
    module('processTracker')
  })

  var storage
  var processFactory
  var _PROCESS_MODEL = {
    name: 'Process Name',
    type: 'Process Type',
    category: 'Process Category',
    children: []
  }
  var _MODEL = {
    TITLE: 'TITLE'
  }
  var _KEY = 'my-processes'

  beforeEach(inject(function (_processFactory_, _storage_) {
    processFactory = _processFactory_
    storage = _storage_
  }))

  it('should be able to get Default Process Model', function () {
    expect(processFactory.getDefaultModel()).toEqual(_PROCESS_MODEL)
  })

  it('should be able to get My Processes from storage', function () {
    spyOn(storage, 'getObject').and.returnValue(_MODEL)

    expect(processFactory.getMyProcesses()).toEqual(_MODEL)

    expect(storage.getObject).toHaveBeenCalledWith(_KEY)
  })

  it('should be able to get Array of 1 Default Process Model if storage is empty', function () {
    spyOn(storage, 'getObject').and.returnValue()

    expect(processFactory.getMyProcesses()).toEqual([_PROCESS_MODEL])

    expect(storage.getObject).toHaveBeenCalledWith(_KEY)
  })

  it('should be able to set My Processes to storage', function () {
    spyOn(storage, 'setObject')

    processFactory.setMyProcesses(_MODEL)

    expect(storage.setObject).toHaveBeenCalledWith(_KEY, _MODEL)
  })
})
