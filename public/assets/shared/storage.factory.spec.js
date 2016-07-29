describe('storage', function () {
  beforeEach(module('processTracker'))

  var storage
  var _MODEL = {
    _TITLE: 'TITLE',
    _DETAIL: 'DETAIL'
  }
  var _KEY = 'KEY'

  beforeEach(inject(function (_storage_) {
    storage = _storage_
  }))

  it('should be able to get JSON object from localStorage', function () {
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(_MODEL))

    expect(storage.getObject(_KEY)).toEqual(_MODEL)

    expect(localStorage.getItem).toHaveBeenCalledWith(_KEY)
  })

  it('should be able to set JSON as String in localStorage', function () {
    spyOn(localStorage, 'setItem')

    storage.setObject(_KEY, _MODEL)

    expect(localStorage.setItem).toHaveBeenCalledWith(_KEY, JSON.stringify(_MODEL))
  })
})
