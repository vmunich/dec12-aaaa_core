const AggregateConcern = require('./base')

module.exports = class SumConcern {
  static apply (column, as) {
    return AggregateConcern.apply('MAX', column, as)
  }
}
