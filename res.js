var sealGroup1 = [
  {
    amountArea: '[0.00-20.00)',
  },

  {
    amountArea: '[20.00-20.00]',
  },
  {
    amountArea: '(20.00-*)',
  },
]
var sealGroup2 = [
  {
    amountArea: '[0.00-20.00)',
  },
  {
    amountArea: '(-1,000.00--1.00)',
  },
  {
    amountArea: '(20.00-*)',
  },
  {
    amountArea: '[20.00-20.00]',
  },
  {
    amountArea: '[-1.00-0.00)',
  },
]

var sealGroup3 = [
  {
    amountArea: '[0.00-20.00)',
  },
  {
    amountArea: '[20.00-20.00]',
  },
  {
    amountArea: '(20.00-40.00)',
  },
  {
    amountArea: '[40.00-40.00]',
  },
  {
    amountArea: '(40.00-*)',
  },
]

var sealGroup4 = [
  {
    amountArea: '[0.00-20.00)',
  },
  {
    amountArea: '[20.00-50.00)',
  },
  {
    amountArea: '[50.00-*)',
  },
]

var sealGroup5 = [
  {
    amountArea: '[0.00-20.00]',
  },
  {
    amountArea: '(20.00-*)',
  },
]

exports.sealGroup1 = sealGroup1
exports.sealGroup2 = sealGroup2
exports.sealGroup3 = sealGroup3
exports.sealGroup4 = sealGroup4
exports.sealGroup5 = sealGroup5
