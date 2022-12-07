var sealGroup1 = [
  {
    groupType: "金额分组",
    voucherType: "",
    systemType: "",
    amountArea: "[0.00-20.00)",
    sealContails: "1",
    groupDescription: "1号章",
    amountInfo: {
      minSelectMoney: 2,
      maxSelectMoney: 1,
      minMoney: "0.00",
      maxMoney: "20.00",
    },
  },

  {
    groupType: "金额分组",
    voucherType: "",
    systemType: "",
    amountArea: "[20.00-20.00]",
    sealContails: "1",
    groupDescription: "1号章",
    amountInfo: {
      minSelectMoney: 2,
      maxSelectMoney: 2,
      minMoney: "20.00",
      maxMoney: "20.00",
    },
  },
  {
    groupType: "金额分组",
    voucherType: "",
    systemType: "",
    amountArea: "(20.00-*)",
    sealContails: "1",
    groupDescription: "1号章",
    amountInfo: {
      minSelectMoney: 1,
      maxSelectMoney: 3,
      minMoney: "20.00",
      maxMoney: "*",
    },
  },
];
var sealGroup2 = [
  {
    groupType: "金额分组",
    voucherType: "",
    systemType: "",
    amountArea: "[0.00-20.00)",
    sealContails: "1",
    groupDescription: "1号章",
    amountInfo: {
      minMoney: "0.00",
      maxMoney: "20.00",
      minSelectMoney: 2,
      maxSelectMoney: 1,
    },
  },
  {
    groupType: "金额分组",
    voucherType: "",
    systemType: "",
    amountArea: "(-1,000.00--1.00)",
    sealContails: "1",
    groupDescription: "1号章",
    amountInfo: {
      minMoney: "-1,000.00",
      maxMoney: "-1.00",
      minSelectMoney: 1,
      maxSelectMoney: 1,
    },
  },
  {
    groupType: "金额分组",
    voucherType: "",
    systemType: "",
    amountArea: "(20.00-*)",
    sealContails: "1",
    groupDescription: "1号章",
    amountInfo: {
      minMoney: "20.00",
      maxMoney: "*",
      minSelectMoney: 1,
      maxSelectMoney: 3,
    },
  },
  {
    groupType: "金额分组",
    voucherType: "",
    systemType: "",
    amountArea: "[20.00-20.00]",
    sealContails: "1",
    groupDescription: "1号章",
    amountInfo: {
      minMoney: "20.00",
      maxMoney: "20.00",
      minSelectMoney: 2,
      maxSelectMoney: 2,
    },
  },
  {
    groupType: "金额分组",
    voucherType: "",
    systemType: "",
    amountArea: "[-1.00-0.00)",
    sealContails: "1",
    groupDescription: "1号章",
    amountInfo: {
      minSelectMoney: 2,
      maxSelectMoney: 1,
      minMoney: "-1.00",
      maxMoney: "0.00",
    },
  },
];
exports.sealGroup1 = sealGroup1;
exports.sealGroup2 = sealGroup2;
