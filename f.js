const {
  sealGroup1,
  sealGroup2,
  sealGroup3,
  sealGroup4,
  sealGroup5,
} = require('./res.js')

function validMountInt(sealGroup) {
  console.log(sealGroup)
  let startAmountArea = [] // 印鉴组合金额区间开始值
  let endAmountArea = [] //印鉴组合金额区间结束值
  let validRes = true //校验结果
  let sameFlag = true //结尾区间的金额是否重复出现
  sealGroup.forEach((item) => {
    // 金额左右都是负数不计入
    if (item.amountArea.match(/-/gim).length === 3) return
    let amountArea = item.amountArea.split('-')
    // 金额左边是负数
    if (item.amountArea[1] === '-') {
      startAmountArea.push('[0.00')
      endAmountArea.push(amountArea[2])
    } else {
      startAmountArea.push(amountArea[0])
      endAmountArea.push(amountArea[1])
    }
  })
  sameFlag =
    endAmountArea.toString().match(/\d+.\d+/g).length ===
    new Set(endAmountArea.toString().match(/\d+.\d+/g)).size
      ? false
      : true
  console.log('sameFlag', sameFlag)
  // 如果没有[0 和 *)  区间是不完整的
  if (
    startAmountArea.indexOf('[0.00') === -1 ||
    endAmountArea.indexOf('*)') === -1
  ) {
    console.log('如果没有[0 和 *)  区间是不完整的')
    validRes = false
    return validRes
  }
  console.log('endAmountArea', endAmountArea)
  startAmountArea.forEach((item, index) => {
    if (item !== '[0.00') {
      let isOpen = true //区间是否开放
      let endFindIndex = endAmountArea.findIndex(
        (cont) => cont.substring(0, cont.length - 1) === item.substring(1)
      )
      if (endFindIndex === -1) {
        validRes = false
        return
      }

      //条件一、上个金额结尾和下个金额开头按顺序是开放区间),(
      isOpen =
        item[0] === '(' &&
        endAmountArea[endFindIndex][endAmountArea[endFindIndex].length - 1] ===
          ')'
      //条件二、金额数字出现2次以上
      if (!isOpen) {
        return (validRes = true)
      } else if (sameFlag) {
        return (validRes = true)
      } else if (!sameFlag) {
        return (validRes = false)
      }

      console.log(endFindIndex, '===')
      console.log(endAmountArea[endFindIndex], 1)
      console.log('item', item, 'validRes', validRes)
      return
    }
  })
  console.log('validRes', validRes)
  return validRes
}
// validMountInt(sealGroup1)
validMountInt(sealGroup2)
// validMountInt(sealGroup3)
// validMountInt(sealGroup4)
// validMountInt(sealGroup5)
