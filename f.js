/*
 * @Author: luoli
 * @Date: 2022-12-07 16:21:39
 * @LastEditors: luoli
 * @LastEditTime: 2022-12-07 18:17:03
 * @FilePath: \valid\f.js
 * @Description:
 *
 */
const { sealGroup1, sealGroup2 } = require("./res.js");
function validMountInt(sealGroup) {
  console.log(sealGroup);
  let startAmountArea = []; // 印鉴组合金额区间开始值
  let endAmountArea = []; //印鉴组合金额区间结束值
  let validRes = true; //校验结果
  sealGroup.forEach((item) => {
    // 金额左右都是负数不计入
    if (item.amountArea.match(/-/gim).length === 3) return;
    let amountArea = item.amountArea.split("-");
    console.log(amountArea);
    // 金额左边是负数
    if (item.amountArea[1] === "-") {
      console.log("有负数");
      startAmountArea.push("[0.00");
      endAmountArea.push(amountArea[2]);
    } else {
      console.log("没有负数");
      startAmountArea.push(amountArea[0]);
      endAmountArea.push(amountArea[1]);
    }
  });
  // 如果没有[0 和 *)  区间是不完整的
  if (
    startAmountArea.indexOf("[0.00") === -1 ||
    endAmountArea.indexOf("*)") === -1
  ) {
    console.log("如果没有[0 和 *)  区间是不完整的");
    validRes = false;
    return validRes;
  }
  startAmountArea.forEach((item) => {
    if (item !== "[0.00") {
      let endFindIndex = endAmountArea.findIndex(
        (cont) => cont.substring(0, cont.length - 1) === item.substring(1)
      );
      if (endFindIndex === -1) {
        console.log("bucunzai ");
        validRes = false;
        return;
      }
      validRes =
        item[0] === "(" &&
        endAmountArea[endFindIndex][endAmountArea[endFindIndex].length - 1] ===
          ")"
          ? false
          : true;
      console.log("item", item, "validRes", validRes);
      return;
    }
  });
  console.log("validRes", validRes);
  return validRes;
}
validMountInt(sealGroup1);
// validMountInt(sealGroup2);
