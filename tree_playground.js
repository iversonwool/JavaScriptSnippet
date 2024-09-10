function getParentIds(tree, nodeId, config = {}) {
  const {children = 'children', id = 'id'} = config

  const toFlatArray = (treeData, parentId) => {
    return treeData.reduce((t, _) => {
      const child = _[children]
      return [
        ...t,
        parentId ? {..._, parentId} : _,
        ...(child && child.length ? toFlatArray(child, _[id]) : [])]
    }, [])
  }
  const getIds = (flatArray) => {
    let ids = [nodeId]
    let child = flatArray.find(_ => _[id] === nodeId)
    while (child && child.parentId) {
      ids = [child.parentId, ...ids]
      child = flatArray.find(_ => _[id] === child.parentId)
    }
    return ids
  }

  return getIds(toFlatArray(tree));
};

const testTree = [
  {
    id: '1',
    label: '嘻嘻嘻',
    children: [
      {
        id: '11', label: 'hhh', children: [
          {
            id: '111', label: '小行星',children: []
          }
        ]
      },
      {id: '12', label: 'hhh', children: []}
    ]
  },
  {
    id: '2', label: '1', children: [
      {id: '21', label: 'eee', children: []}
    ]
  }
]

function getCurrentChildren(id, tree) {
  for (const i of tree) {
    if (i.id === id) {
      console.log(i.id)
      return i.children
    } else if (i.children.find(item => item.id === id)) {
      const found = i.children.find(item => item.id === id)
      return found.children
    } else {
      return getCurrentChildren(id, i.children)
    }
  }
}

const result = getCurrentChildren('2', testTree)
console.log(result)

function getAllChildrenNodes(list, id, arr = []) {
  for(let i in list) {
    if(list[i].id === id) {
      arr.push(list[i])
      // if(list[i].children?.length > 0) {
      //   getChild(list[i].children, arr)
      // }
    }else {
      if(list[i].children?.length > 0) {
        getAllChildrenNodes(list[i].children, id, arr)
      }
    }
  }
  return arr
  // return arr.filter(v => v.id !== id)
}
function getChild(list,  arr) {
  list.forEach(v => {
    arr.push(v)
    if(v.children) {
      getChild(v.children, arr)
    }
  })
}
// console.log(getAllChildrenNodes(testTree, '11'))


const treeData = [
  {
    id: 1,
    label: 'test1',
    children: [
      {
        id: 2,
        label: 'test1-1',
        children: [
          {
            id: 3,
            label: 'test1-1-1'
          },
          {
            id: 4,
            label: 'test1-1-2',
            children: [
              {
                id: 5,
                label: 'test1-1-1-1'
              }
            ]
          }
        ]
      }
    ]
  }
]

console.log(getParentIds(treeData, 5))

const lynkcoTree = [
  {
    "uuid": "1a48ed95944b95c9a5b0b62b2f432f5fRc9zM6ylPUD",
    "parentPermissionUuid": null,
    "name": "经营管理",
    "permissionValue": "MANAGEMENT",
    "relationUrl": null,
    "remark": "",
    "type": "menu",
    "dataAccessRules": [],
    "childrenList": [
      {
        "uuid": "7190b14da8eeaf88f319920f5d54be8fN7TvTldX82R",
        "parentPermissionUuid": "1a48ed95944b95c9a5b0b62b2f432f5fRc9zM6ylPUD",
        "name": "场站管理",
        "permissionValue": "MANAGEMENT_STATION",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "4e7a4c222617deae4ea0e80128aa6e7eoewqX9yEO5a",
            "parentPermissionUuid": "7190b14da8eeaf88f319920f5d54be8fN7TvTldX82R",
            "name": "同步刷新",
            "permissionValue": "MANAGEMENT_STATION_SYNC_REFRESH",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "9ebfa9617ec5aa663f559d2833bf9aadpr23lsP3gLi",
            "parentPermissionUuid": "7190b14da8eeaf88f319920f5d54be8fN7TvTldX82R",
            "name": "导出",
            "permissionValue": "MANAGEMENT_STATION_EXPORT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "2cdde6749c0cbd309b25211456ab0004YUbtVeWXNeA",
            "parentPermissionUuid": "7190b14da8eeaf88f319920f5d54be8fN7TvTldX82R",
            "name": "查看详情",
            "permissionValue": "MANAGEMENT_STATION_DETAIL",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "2100899e7eb1d3c8a8a99f69e0f169848MWSoto2GFi",
            "parentPermissionUuid": "7190b14da8eeaf88f319920f5d54be8fN7TvTldX82R",
            "name": "停/启用",
            "permissionValue": "MANAGEMENT_STATION_START_STOP",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "a58d3f2e601ce6cc35285505a79169956H45xODGUe2",
            "parentPermissionUuid": "7190b14da8eeaf88f319920f5d54be8fN7TvTldX82R",
            "name": "刷新",
            "permissionValue": "MANAGEMENT_STATION_REFRESH",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      },
      {
        "uuid": "55311cbb48cb4afa1360e7d0d028c8a0ylbjJuhoe9X",
        "parentPermissionUuid": "1a48ed95944b95c9a5b0b62b2f432f5fRc9zM6ylPUD",
        "name": "订单管理",
        "permissionValue": "MANAGEMENT_ORDER",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "f14512b1d0235fd3144d5c1d702306ebL6Cb7ZCRKBN",
            "parentPermissionUuid": "55311cbb48cb4afa1360e7d0d028c8a0ylbjJuhoe9X",
            "name": "导出",
            "permissionValue": "MANAGEMENT_ORDER_EXPORT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "a0357f63af268aa3411c9bcbcce449e5NmQojjVx8g7",
            "parentPermissionUuid": "55311cbb48cb4afa1360e7d0d028c8a0ylbjJuhoe9X",
            "name": "查看详情",
            "permissionValue": "MANAGEMENT_ORDER_DETAIL",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "144d4f992cbc61577e2a6dbfab240632InV8WV4HxJI",
            "parentPermissionUuid": "55311cbb48cb4afa1360e7d0d028c8a0ylbjJuhoe9X",
            "name": "关闭订单",
            "permissionValue": "MANAGEMENT_ORDER_CLOSE",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      }
    ]
  },
  {
    "uuid": "46afd4ef537362456b9bf27177672d14RqgMwE9BwX0",
    "parentPermissionUuid": null,
    "name": "运营管理",
    "permissionValue": "OPERATE",
    "relationUrl": null,
    "remark": "",
    "type": "menu",
    "dataAccessRules": [],
    "childrenList": [
      {
        "uuid": "88ecbcef6cb2f2b36ab8decd40bbbd43bK9hI1o7MRs",
        "parentPermissionUuid": "46afd4ef537362456b9bf27177672d14RqgMwE9BwX0",
        "name": "能量豆账户管理",
        "permissionValue": "OPERATE_ENERGY_BEAN_ACCOUNT",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "39b5f869c3b009b29a2f3f028a951ec1P64j6IdT4lr",
            "parentPermissionUuid": "88ecbcef6cb2f2b36ab8decd40bbbd43bK9hI1o7MRs",
            "name": "批量调节",
            "permissionValue": "OPERATE_ENERGY_BEAN_ACCOUNT_BATCH_ADJUST",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "9f185e924184d4834d4d0bd1e6b9908b5OtIY0mTnII",
            "parentPermissionUuid": "88ecbcef6cb2f2b36ab8decd40bbbd43bK9hI1o7MRs",
            "name": "查看",
            "permissionValue": "OPERATE_ENERGY_BEAN_ACCOUNT_DETAIL",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      },
      {
        "uuid": "571cb4d010bc37650fa7ac175749d3f5P8oDYLSBQU4",
        "parentPermissionUuid": "46afd4ef537362456b9bf27177672d14RqgMwE9BwX0",
        "name": "能量豆预算包管理",
        "permissionValue": "OPERATE_ENERGY_BEAN_PACKAGE",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "1d5d10761390c935880f6b6b4c95088aXRI7nue9F1F",
            "parentPermissionUuid": "571cb4d010bc37650fa7ac175749d3f5P8oDYLSBQU4",
            "name": "新增",
            "permissionValue": "OPERATE_ENERGY_BEAN_PACKAGE_ADD",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "cbb2443ba9025c55be179a2cc6abf90cV1sfzVPH6Z1",
            "parentPermissionUuid": "571cb4d010bc37650fa7ac175749d3f5P8oDYLSBQU4",
            "name": "导出",
            "permissionValue": "OPERATE_ENERGY_BEAN_PACKAGE_EXPORT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "bd35b4db120c397918e7873b6cb012bfr0BHzDzGq3z",
            "parentPermissionUuid": "571cb4d010bc37650fa7ac175749d3f5P8oDYLSBQU4",
            "name": "查看",
            "permissionValue": "OPERATE_ENERGY_BEAN_PACKAGE_DETAIL",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "257377bc080e335418d6854f8d9e2b36lS6g055k128",
            "parentPermissionUuid": "571cb4d010bc37650fa7ac175749d3f5P8oDYLSBQU4",
            "name": "停/启用",
            "permissionValue": "OPERATE_ENERGY_BEAN_PACKAGE_START_STOP",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "c7dc7d7294b8449b040c2d23d8a96314piQMkjLdseQ",
            "parentPermissionUuid": "571cb4d010bc37650fa7ac175749d3f5P8oDYLSBQU4",
            "name": "编辑",
            "permissionValue": "OPERATE_ENERGY_BEAN_PACKAGE_EDIT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "f7282ace01da419cac9116f192c0f886ImQt0lUeozb",
            "parentPermissionUuid": "571cb4d010bc37650fa7ac175749d3f5P8oDYLSBQU4",
            "name": "加推",
            "permissionValue": "OPERATE_ENERGY_BEAN_PACKAGE_SEND",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      },
      {
        "uuid": "12a0bc0583f28601343a3f24ca7f5beew65IeU6oKwX",
        "parentPermissionUuid": "46afd4ef537362456b9bf27177672d14RqgMwE9BwX0",
        "name": "能量豆流水",
        "permissionValue": "OPERATE_ENERGY_BEAN_TURNOVER",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": []
      },
      {
        "uuid": "828668c038dee55ab9756189f0d29f90Tu3jRdUxKkx",
        "parentPermissionUuid": "46afd4ef537362456b9bf27177672d14RqgMwE9BwX0",
        "name": "营销投放管理",
        "permissionValue": "OPERATE_ENERGY_BEAN_MARKETING",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "399bc348f4e388d4eabe2a52835236d5KaPAzYUN6A9",
            "parentPermissionUuid": "828668c038dee55ab9756189f0d29f90Tu3jRdUxKkx",
            "name": "新增",
            "permissionValue": "OPERATE_ENERGY_BEAN_MARKETING_ADD",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "83ca7d332e2bb8155b0c002d18ad458aVTGPcbFb7AW",
            "parentPermissionUuid": "828668c038dee55ab9756189f0d29f90Tu3jRdUxKkx",
            "name": "查看",
            "permissionValue": "OPERATE_ENERGY_BEAN_MARKETING_DETAIL",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "4f8dff54d7e438ee8b37777471bda7e5IN7OKF0NJLd",
            "parentPermissionUuid": "828668c038dee55ab9756189f0d29f90Tu3jRdUxKkx",
            "name": "停/启用",
            "permissionValue": "OPERATE_ENERGY_BEAN_MARKETING_START_STOP",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "8d73d64b96db9828468450d22719cd1dKCc1s0CGcb3",
            "parentPermissionUuid": "828668c038dee55ab9756189f0d29f90Tu3jRdUxKkx",
            "name": "编辑",
            "permissionValue": "OPERATE_ENERGY_BEAN_EDIT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "56f8987dc8837a0031eec85551a3fe74752uNTawu6E",
            "parentPermissionUuid": "828668c038dee55ab9756189f0d29f90Tu3jRdUxKkx",
            "name": "删除",
            "permissionValue": "OPERATE_ENERGY_BEAN_MARKETING_DELETE",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      }
    ]
  },
  {
    "uuid": "01b2247b1b245e5db24703029c321ce0SspyRemc1To",
    "parentPermissionUuid": null,
    "name": "财务管理",
    "permissionValue": "FINANCE",
    "relationUrl": null,
    "remark": "",
    "type": "menu",
    "dataAccessRules": [],
    "childrenList": [
      {
        "uuid": "473d0f7960ac8c9f5e2d9032126897c0Xal5gX2DQYi",
        "parentPermissionUuid": "01b2247b1b245e5db24703029c321ce0SspyRemc1To",
        "name": "账单列表",
        "permissionValue": "FINANCE_BILL_LIST",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "9341e40537a8b2accc0eaa7e495acabeg7Q3k1JWgNo",
            "parentPermissionUuid": "473d0f7960ac8c9f5e2d9032126897c0Xal5gX2DQYi",
            "name": "导出",
            "permissionValue": "FINANCE_BILL_LIST_EXPORT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      }
    ]
  },
  {
    "uuid": "725691b547a4d80b3f6ee186424dca21T1X6BHaukYI",
    "parentPermissionUuid": null,
    "name": "供应链管理",
    "permissionValue": "SUPPLYCHAIN",
    "relationUrl": null,
    "remark": "",
    "type": "menu",
    "dataAccessRules": [],
    "childrenList": [
      {
        "uuid": "a957460101de9f6522696d915e8a14eaZ7jCW5MxxN6",
        "parentPermissionUuid": "725691b547a4d80b3f6ee186424dca21T1X6BHaukYI",
        "name": "仓库管理",
        "permissionValue": "SUPPLYCHAIN_WAREHOUSE",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "922018d5ca59666e98fe38975c1127311okA1x8Uzry",
            "parentPermissionUuid": "a957460101de9f6522696d915e8a14eaZ7jCW5MxxN6",
            "name": "新增",
            "permissionValue": "SUPPLYCHAIN_WAREHOUSE_ADD",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "99d97310dd59ae53eaf74609d908620fylTDf4N6FOv",
            "parentPermissionUuid": "a957460101de9f6522696d915e8a14eaZ7jCW5MxxN6",
            "name": "停/启用",
            "permissionValue": "SUPPLYCHAIN_WAREHOUSE_START_STOP",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "cd0b9964cd94042bb1e4c4c457a9c351ZB8PM5oTunJ",
            "parentPermissionUuid": "a957460101de9f6522696d915e8a14eaZ7jCW5MxxN6",
            "name": "编辑",
            "permissionValue": "SUPPLYCHAIN_WAREHOUSE_EDIT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "4599e6b3ad7d59cce89d9370e726ea9dmEb5BMx3Z47",
            "parentPermissionUuid": "a957460101de9f6522696d915e8a14eaZ7jCW5MxxN6",
            "name": "新建采购单",
            "permissionValue": "SUPPLYCHAIN_WAREHOUSE_ADD_SHOPPING",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "9ab2f7718f6a175bdc31f0cc24f900f6AZLD0VVxZM1",
            "parentPermissionUuid": "a957460101de9f6522696d915e8a14eaZ7jCW5MxxN6",
            "name": "继续添加",
            "permissionValue": "SUPPLYCHAIN_WAREHOUSE_CONTINUE",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "8cf4067e55c9be24fe79d089a4744245KDnkxGoI8X0",
            "parentPermissionUuid": "a957460101de9f6522696d915e8a14eaZ7jCW5MxxN6",
            "name": "作废",
            "permissionValue": "SUPPLYCHAIN_WAREHOUSE_CANCEL",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "7c6f9a858219a2e946e3c3e916ce017aUIJB6Mx75Kw",
            "parentPermissionUuid": "a957460101de9f6522696d915e8a14eaZ7jCW5MxxN6",
            "name": "采购详情",
            "permissionValue": "SUPPLYCHAIN_WAREHOUSE_SHOPPING_DETAIL",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "2c06ce702c8cc5a5a3e505257099e5feXT5GmeFEvJG",
            "parentPermissionUuid": "a957460101de9f6522696d915e8a14eaZ7jCW5MxxN6",
            "name": "收货详情",
            "permissionValue": "SUPPLYCHAIN_WAREHOUSE_GOODS_DETAIL",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      },
      {
        "uuid": "326e817b31fa90410ce34953930a333bDoz9CbdF0NM",
        "parentPermissionUuid": "725691b547a4d80b3f6ee186424dca21T1X6BHaukYI",
        "name": "库存管理",
        "permissionValue": "SUPPLYCHAIN_INVENTORY",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "8ae311578208b837dd4e57258a8e4f1apHfLj9vpeei",
            "parentPermissionUuid": "326e817b31fa90410ce34953930a333bDoz9CbdF0NM",
            "name": "库存调整",
            "permissionValue": "SUPPLYCHAIN_INVENTORY_ADJUST",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "bf73da9950cf23bfbd0233ef0af2f141p4FAUppqLvV",
            "parentPermissionUuid": "326e817b31fa90410ce34953930a333bDoz9CbdF0NM",
            "name": "调整记录",
            "permissionValue": "SUPPLYCHAIN_INVENTORY_ADJUST_RECORDS",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      },
      {
        "uuid": "9d62477b9f671fb211e9040b5fb78ae37ZRU0I187cI",
        "parentPermissionUuid": "725691b547a4d80b3f6ee186424dca21T1X6BHaukYI",
        "name": "出库记录",
        "permissionValue": "SUPPLYCHAIN_INVENTORY_DELIVERY",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": []
      },
      {
        "uuid": "d4ce94c137723dfa06a6fe256a631ec8w120pS9Oo1z",
        "parentPermissionUuid": "725691b547a4d80b3f6ee186424dca21T1X6BHaukYI",
        "name": "订单管理",
        "permissionValue": "SUPPLYCHAIN_ORDER",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "1f10bb94f9e5de748fa20046d11f5d29oNHMGJW1rO5",
            "parentPermissionUuid": "d4ce94c137723dfa06a6fe256a631ec8w120pS9Oo1z",
            "name": "赠桩申请",
            "permissionValue": "SUPPLYCHAIN_ORDER_APPLY",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "6f551592a8305380430701fe5a5526684KntjkUsOeA",
            "parentPermissionUuid": "d4ce94c137723dfa06a6fe256a631ec8w120pS9Oo1z",
            "name": "导出",
            "permissionValue": "SUPPLYCHAIN_ORDER_EXPORT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "4563598345dea006217a09f229185c3dGrjhhQWL7TY",
            "parentPermissionUuid": "d4ce94c137723dfa06a6fe256a631ec8w120pS9Oo1z",
            "name": "查看",
            "permissionValue": "SUPPLYCHAIN_ORDER_DETAIL",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      }
    ]
  },
  {
    "uuid": "c213f7fab0f9eea02f0e0263be4d2e03i3UUUn3BpLw",
    "parentPermissionUuid": null,
    "name": "销售管理",
    "permissionValue": "SALE",
    "relationUrl": null,
    "remark": "",
    "type": "menu",
    "dataAccessRules": [],
    "childrenList": [
      {
        "uuid": "0784e3895e9a31ac4eaac5a175355f39gYBp9qhnNTX",
        "parentPermissionUuid": "c213f7fab0f9eea02f0e0263be4d2e03i3UUUn3BpLw",
        "name": "赠桩车型列表",
        "permissionValue": "SALE_STAKE_LIST",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "0bd86def29d22246aa91a6a04dc498f3b8gzU2MVZOk",
            "parentPermissionUuid": "0784e3895e9a31ac4eaac5a175355f39gYBp9qhnNTX",
            "name": "新增",
            "permissionValue": "SALE_STAKE_LIST_ADD",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "f511147315f937dcf103bfe0e45a58318XpoINx6Y0u",
            "parentPermissionUuid": "0784e3895e9a31ac4eaac5a175355f39gYBp9qhnNTX",
            "name": "编辑",
            "permissionValue": "SALE_STAKE_LIST_EDIT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      },
      {
        "uuid": "2cc5637da903099cdcd861396b4c4d4a1WqtPjHGoVP",
        "parentPermissionUuid": "c213f7fab0f9eea02f0e0263be4d2e03i3UUUn3BpLw",
        "name": "车型库列表",
        "permissionValue": "SALE_PROTOTYPE",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "50ebb5cfe40b84d90b612b01346ddbdcn2wwcgJlxFh",
            "parentPermissionUuid": "2cc5637da903099cdcd861396b4c4d4a1WqtPjHGoVP",
            "name": "新增",
            "permissionValue": "SALE_PROTOTYPE_ADD",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "89820ee7a0a8444273051994df6763c4z84QxXsgvOr",
            "parentPermissionUuid": "2cc5637da903099cdcd861396b4c4d4a1WqtPjHGoVP",
            "name": "编辑",
            "permissionValue": "SALE_PROTOTYPE_EDIT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      }
    ]
  },
  {
    "uuid": "df14848fccd2dca0b6ed8570b02d36f00hW6KSLc6o0",
    "parentPermissionUuid": null,
    "name": "安装管理",
    "permissionValue": "INSTALL",
    "relationUrl": null,
    "remark": "",
    "type": "menu",
    "dataAccessRules": [],
    "childrenList": [
      {
        "uuid": "755394d2771d001775c1c5ae54aa972br1NW59Madn1",
        "parentPermissionUuid": "df14848fccd2dca0b6ed8570b02d36f00hW6KSLc6o0",
        "name": "我的工单",
        "permissionValue": "INSTALL_MYORDER",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "cf02e5bb15d27528c93de0ab7becf919NoUc0u974qv",
            "parentPermissionUuid": "755394d2771d001775c1c5ae54aa972br1NW59Madn1",
            "name": "导出",
            "permissionValue": "INSTALL_MYORDER_EXPORT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "f77de5153cadb42e948b068973e62ad7smSAv9XD8BT",
            "parentPermissionUuid": "755394d2771d001775c1c5ae54aa972br1NW59Madn1",
            "name": "批量审核通过",
            "permissionValue": "INSTALL_MYORDER_BATCH_PASS",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "4fb3e28e68cac5cec9ddb809169d80fdzUQ5Zkbo3r6",
            "parentPermissionUuid": "755394d2771d001775c1c5ae54aa972br1NW59Madn1",
            "name": "审核通过",
            "permissionValue": "INSTALL_MYORDER_PASS",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "9b7b311fe90976771992b119d69c95fahUphEeZjdXT",
            "parentPermissionUuid": "755394d2771d001775c1c5ae54aa972br1NW59Madn1",
            "name": "驳回",
            "permissionValue": "INSTALL_MYORDER_DENIED",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "85e0c978e219a91e357e675b0e5d5291iCKYuhIU5Dk",
            "parentPermissionUuid": "755394d2771d001775c1c5ae54aa972br1NW59Madn1",
            "name": "关闭",
            "permissionValue": "INSTALL_MYORDER_CLOSE",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "db1ef928755c717b202346d57f36ba37zly3L1V0Uz3",
            "parentPermissionUuid": "755394d2771d001775c1c5ae54aa972br1NW59Madn1",
            "name": "详情",
            "permissionValue": "INSTALL_MYORDER_DETAIL",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      },
      {
        "uuid": "133961d120ad0cabf4e78394758609aeQdY7ZbmgSW6",
        "parentPermissionUuid": "df14848fccd2dca0b6ed8570b02d36f00hW6KSLc6o0",
        "name": "订单部审批",
        "permissionValue": "INSTALL_ORDER_AUDIT",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "b4a67875601475e4190ecb9c77d28f43bn7uZhAgRyQ",
            "parentPermissionUuid": "133961d120ad0cabf4e78394758609aeQdY7ZbmgSW6",
            "name": "导出",
            "permissionValue": "INSTALL_ORDER_AUDIT_EXPORT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "4a3f3d8d4f53c53664bcc3b205302551ggYurktHngr",
            "parentPermissionUuid": "133961d120ad0cabf4e78394758609aeQdY7ZbmgSW6",
            "name": "批量审批通过",
            "permissionValue": "INSTALL_ORDER_AUDIT_BATCH_PASS",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "c47e89e25b402ab5b9a712f1b8429165xZFnd1UQx6r",
            "parentPermissionUuid": "133961d120ad0cabf4e78394758609aeQdY7ZbmgSW6",
            "name": "批量驳回",
            "permissionValue": "INSTALL_ORDER_AUDIT_BATCH_DENIED",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "0673fed73a47b41e3c03e03e4c414515FRcGPuyrQki",
            "parentPermissionUuid": "133961d120ad0cabf4e78394758609aeQdY7ZbmgSW6",
            "name": "通过",
            "permissionValue": "INSTALL_ORDER_AUDIT_PASS",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "b6e37cee45cd396295d94b6f2163f046xbu9gWpnGvT",
            "parentPermissionUuid": "133961d120ad0cabf4e78394758609aeQdY7ZbmgSW6",
            "name": "驳回",
            "permissionValue": "INSTALL_ORDER_AUDIT_DENIED",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "dc291882382efad3f5867c8a661b96945Q81ejlL5re",
            "parentPermissionUuid": "133961d120ad0cabf4e78394758609aeQdY7ZbmgSW6",
            "name": "详情",
            "permissionValue": "INSTALL_ORDER_AUDIT_DETAIL",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "8044a8d7a3980b3b0a1786844773147779MMn8fqidI",
            "parentPermissionUuid": "133961d120ad0cabf4e78394758609aeQdY7ZbmgSW6",
            "name": "查看驳回次数和原因",
            "permissionValue": "INSTALL_ORDER_AUDIT_REASON",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      },
      {
        "uuid": "7a30418aa2ec177b9df89e5efe3ba2f7WZWFysFymlF",
        "parentPermissionUuid": "df14848fccd2dca0b6ed8570b02d36f00hW6KSLc6o0",
        "name": "财务部审批",
        "permissionValue": "INSTALL_FINANCIAL_AUDIT",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "49493eb7f90bd6bb031137a0c8d6f852tY861cZ5AXb",
            "parentPermissionUuid": "7a30418aa2ec177b9df89e5efe3ba2f7WZWFysFymlF",
            "name": "导出",
            "permissionValue": "INSTALL_FINANCIAL_AUDIT_EXPORT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "c486d6b06f6c4843ddfdc1ed68c05079FhBlIzNbLVV",
            "parentPermissionUuid": "7a30418aa2ec177b9df89e5efe3ba2f7WZWFysFymlF",
            "name": "批量审批通过",
            "permissionValue": "INSTALL_FINANCIAL_AUDIT_BATCH_PASS",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "7c46e6d2792383ddf1f79d836d648af0ppWeaE0vym9",
            "parentPermissionUuid": "7a30418aa2ec177b9df89e5efe3ba2f7WZWFysFymlF",
            "name": "批量驳回",
            "permissionValue": "INSTALL_FINANCIAL_AUDIT_BATCH_DENIED",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "ad41a1245835f775ebb39d8c45cc046awRMqEutHQ02",
            "parentPermissionUuid": "7a30418aa2ec177b9df89e5efe3ba2f7WZWFysFymlF",
            "name": "通过",
            "permissionValue": "INSTALL_FINANCIAL_AUDIT_PASS",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "757551632452fabbb51f2a4895a50340Wk9mfrStVDS",
            "parentPermissionUuid": "7a30418aa2ec177b9df89e5efe3ba2f7WZWFysFymlF",
            "name": "驳回",
            "permissionValue": "INSTALL_FINANCIAL_AUDIT_DENIED",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "b63ba43e6e6296a68bd521cb87ffe2c2nvC8GRpq2Fi",
            "parentPermissionUuid": "7a30418aa2ec177b9df89e5efe3ba2f7WZWFysFymlF",
            "name": "详情",
            "permissionValue": "INSTALL_FINANCIAL_AUDIT_DETAIL",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "83a24c01826a5b6daad4a6f03750e9f00JAxRmiNl2h",
            "parentPermissionUuid": "7a30418aa2ec177b9df89e5efe3ba2f7WZWFysFymlF",
            "name": "查看驳回次数和原因",
            "permissionValue": "INSTALL_FINANCIAL_AUDIT_REASON",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      },
      {
        "uuid": "de92f0c2fdac3548f29b171a581977ad0vEOG6c1195",
        "parentPermissionUuid": "df14848fccd2dca0b6ed8570b02d36f00hW6KSLc6o0",
        "name": "履约记录",
        "permissionValue": "INSTALL_BLACKLIST",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "042baa3aec75c607bf7eeed1057c21eaRp5GYhlqjaW",
            "parentPermissionUuid": "de92f0c2fdac3548f29b171a581977ad0vEOG6c1195",
            "name": "导入",
            "permissionValue": "INSTALL_BLACKLIST_EXPORT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "8323c7dd69439adb5d69c674441fc5d3QOHFZAB5L8N",
            "parentPermissionUuid": "de92f0c2fdac3548f29b171a581977ad0vEOG6c1195",
            "name": "下载模版",
            "permissionValue": "INSTALL_BLACKLIST_DOWNLOAD",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "1ee79a4a54a951aa3b2aced8a4404d32DEXmqKCgqyD",
            "parentPermissionUuid": "de92f0c2fdac3548f29b171a581977ad0vEOG6c1195",
            "name": "批量删除",
            "permissionValue": "INSTALL_BLACKLIST_BATCH_DELETE",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "906ef04c6cf309b22488e6e3200238c04zhjoWGxZ3K",
            "parentPermissionUuid": "de92f0c2fdac3548f29b171a581977ad0vEOG6c1195",
            "name": "新增",
            "permissionValue": "INSTALL_BLACKLIST_ADD",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "1b3559ec8f0351a147681fb575a361a3Fhpit7q4ePT",
            "parentPermissionUuid": "de92f0c2fdac3548f29b171a581977ad0vEOG6c1195",
            "name": "编辑",
            "permissionValue": "INSTALL_BLACKLIST_EDIT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "bf329d4119aba0a9f29154ab268b6e7eWWSCBXVHIKt",
            "parentPermissionUuid": "de92f0c2fdac3548f29b171a581977ad0vEOG6c1195",
            "name": "删除",
            "permissionValue": "INSTALL_BLACKLIST_DELETE",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      }
    ]
  },
  {
    "uuid": "c3f1154cd504e61625c881fc57106f70BT1UdIOoXEG",
    "parentPermissionUuid": null,
    "name": "桩控管理",
    "permissionValue": "STAKE",
    "relationUrl": null,
    "remark": "",
    "type": "menu",
    "dataAccessRules": [],
    "childrenList": [
      {
        "uuid": "6b83c5654a8daf548694a2cb7eba0630cP3lcFFWIJ2",
        "parentPermissionUuid": "c3f1154cd504e61625c881fc57106f70BT1UdIOoXEG",
        "name": "设备资料",
        "permissionValue": "STAKE_DEVICE",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "a1b135b90bc6b95918e4a9a80993f0f8YNHMzZJ94P7",
            "parentPermissionUuid": "6b83c5654a8daf548694a2cb7eba0630cP3lcFFWIJ2",
            "name": "导入设备",
            "permissionValue": "STAKE_DEVICE_IMPORT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "15af62781c82a395defe388ed1b7ac99uJFzcLEaTg5",
            "parentPermissionUuid": "6b83c5654a8daf548694a2cb7eba0630cP3lcFFWIJ2",
            "name": "批量删除",
            "permissionValue": "STAKE_DEVICE_BATCH_DELETE",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "78f7caca281706a36c17a8684157120fHpLCqumHNwG",
            "parentPermissionUuid": "6b83c5654a8daf548694a2cb7eba0630cP3lcFFWIJ2",
            "name": "导出",
            "permissionValue": "STAKE_DEVICE_EXPORT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      },
      {
        "uuid": "d7fe0aea8923732710a7cb559e131bfdwCYln4OA1w2",
        "parentPermissionUuid": "c3f1154cd504e61625c881fc57106f70BT1UdIOoXEG",
        "name": "版本管理",
        "permissionValue": "STAKE_VERSION",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "ded890961357fd2c04041eab2331abbesMdlqmw29cy",
            "parentPermissionUuid": "d7fe0aea8923732710a7cb559e131bfdwCYln4OA1w2",
            "name": "添加",
            "permissionValue": "STAKE_VERSION_ADD",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "ba4520362575eb7ea03f158fc81eba23nwxoAe04N7Z",
            "parentPermissionUuid": "d7fe0aea8923732710a7cb559e131bfdwCYln4OA1w2",
            "name": "删除",
            "permissionValue": "STAKE_VERSION_DELETE",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      },
      {
        "uuid": "15dc65d23efcea082aa5d803b79a0325VjE4Gm6kL3f",
        "parentPermissionUuid": "c3f1154cd504e61625c881fc57106f70BT1UdIOoXEG",
        "name": "设备信息",
        "permissionValue": "STAKE_INFO",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "ac97d03f3291a0628aba7e3d2dc6ebb6sOsQqsYmLTp",
            "parentPermissionUuid": "15dc65d23efcea082aa5d803b79a0325VjE4Gm6kL3f",
            "name": "设备信息",
            "permissionValue": "STAKE_INFO_DETAIL",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "3676793e143717213753f4924a67f5680PHzKw4eAyP",
            "parentPermissionUuid": "15dc65d23efcea082aa5d803b79a0325VjE4Gm6kL3f",
            "name": "充电记录",
            "permissionValue": "STAKE_INFO_RECORD",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "bb239444f9c9ff001ce6735f19b5800dyO2FRjdN4rt",
            "parentPermissionUuid": "15dc65d23efcea082aa5d803b79a0325VjE4Gm6kL3f",
            "name": "设备重启",
            "permissionValue": "STAKE_VERSION_RESTART",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "69e5760a79d91c8b4cf8bb8008f2aeaeYCygxCeFi9e",
            "parentPermissionUuid": "15dc65d23efcea082aa5d803b79a0325VjE4Gm6kL3f",
            "name": "设备升级",
            "permissionValue": "STAKE_VERSION_UPGRADE",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "64653a44976a0e3a56bc0bc51fb2a900eJgyvqmeKF3",
            "parentPermissionUuid": "15dc65d23efcea082aa5d803b79a0325VjE4Gm6kL3f",
            "name": "设备解绑",
            "permissionValue": "STAKE_VERSION_UNBIND",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      }
    ]
  },
  {
    "uuid": "e32755f9b31a240f572827f21dfc3431AKRNCEFJBwx",
    "parentPermissionUuid": null,
    "name": "合同管理",
    "permissionValue": "CONTRACTS",
    "relationUrl": null,
    "remark": "",
    "type": "menu",
    "dataAccessRules": [],
    "childrenList": [
      {
        "uuid": "b724a85d18c822f70210b55129287deef7YH5UDKuA7",
        "parentPermissionUuid": "e32755f9b31a240f572827f21dfc3431AKRNCEFJBwx",
        "name": "合同列表",
        "permissionValue": "CONTRACTS_LIST",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "d63ff0d2b2f0cecd9969e97bd4bc2fa9r3aCiUiNk6B",
            "parentPermissionUuid": "b724a85d18c822f70210b55129287deef7YH5UDKuA7",
            "name": "新增",
            "permissionValue": "CONTRACTS_LIST_ADD",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "4579e6451dcf0bd8194ae112c025f0bbADj1wnDCjWp",
            "parentPermissionUuid": "b724a85d18c822f70210b55129287deef7YH5UDKuA7",
            "name": "编辑",
            "permissionValue": "CONTRACTS_LIST_EDIT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "67fc3240d2ec8ef54f81ff034c668e8aX2qWvhRbyvV",
            "parentPermissionUuid": "b724a85d18c822f70210b55129287deef7YH5UDKuA7",
            "name": "查看详情",
            "permissionValue": "CONTRACTS_LIST_DETAIL",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "965cdf347af93417edb929637de7feb9k71GfED4EZf",
            "parentPermissionUuid": "b724a85d18c822f70210b55129287deef7YH5UDKuA7",
            "name": "上/下线",
            "permissionValue": "CONTRACTS_LIST_ONLINE_OFFLINE",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      }
    ]
  },
  {
    "uuid": "39ed01ef37dcdf4d4f4a113cd612bf7e9tM0n9LV6yp",
    "parentPermissionUuid": null,
    "name": "商户管理",
    "permissionValue": "MERCHANTS",
    "relationUrl": null,
    "remark": "",
    "type": "menu",
    "dataAccessRules": [],
    "childrenList": [
      {
        "uuid": "e6aa79716e8de1a5d0c976f10505b48cRuO2dnONrN6",
        "parentPermissionUuid": "39ed01ef37dcdf4d4f4a113cd612bf7e9tM0n9LV6yp",
        "name": "商户列表",
        "permissionValue": "MERCHANTS_LIST",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "00ccb2c15b6d1a952793dac7d0573ee52TvobaS9p4k",
            "parentPermissionUuid": "e6aa79716e8de1a5d0c976f10505b48cRuO2dnONrN6",
            "name": "新增",
            "permissionValue": "MERCHANTS_LIST_ADD",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "b52f534179cfacab73af769a3c6f472d45WqlscDEKy",
            "parentPermissionUuid": "e6aa79716e8de1a5d0c976f10505b48cRuO2dnONrN6",
            "name": "编辑",
            "permissionValue": "MERCHANTS_LIST_EDIT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "1fc0789b5736efeea130798bbce8e083mAaD8bd9Orl",
            "parentPermissionUuid": "e6aa79716e8de1a5d0c976f10505b48cRuO2dnONrN6",
            "name": "查看详情",
            "permissionValue": "MERCHANTS_LIST_DETAIL",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      }
    ]
  },
  {
    "uuid": "f6869cdcca117f9e80d1eb7d77eef92aLSlVC9UPXg2",
    "parentPermissionUuid": null,
    "name": "商品管理",
    "permissionValue": "COMMODITY",
    "relationUrl": null,
    "remark": "",
    "type": "menu",
    "dataAccessRules": [],
    "childrenList": [
      {
        "uuid": "1e67852870558b1d353b75acd8dffd03I7tjQIQpjL9",
        "parentPermissionUuid": "f6869cdcca117f9e80d1eb7d77eef92aLSlVC9UPXg2",
        "name": "商品列表",
        "permissionValue": "COMMODITY_LIST",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "feec415e2eb0530b9f66d00601c763ecyFU1RV9PY6a",
            "parentPermissionUuid": "1e67852870558b1d353b75acd8dffd03I7tjQIQpjL9",
            "name": "新增商品",
            "permissionValue": "COMMODITY_LIST_ADD",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "b5d15e4ca1dcf729fd396a25f5dbdfa8drU5Ky2w30E",
            "parentPermissionUuid": "1e67852870558b1d353b75acd8dffd03I7tjQIQpjL9",
            "name": "上/下架",
            "permissionValue": "COMMODITY_LIST_ONLINE_OFFLINE",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "71333caa73875d8ef48aa3c298b1db37QcdfUR4e9kg",
            "parentPermissionUuid": "1e67852870558b1d353b75acd8dffd03I7tjQIQpjL9",
            "name": "查看",
            "permissionValue": "COMMODITY_LIST_DETAIL",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      }
    ]
  },
  {
    "uuid": "6670a725e99ddbdba114b2155a6ba6a26o0v9XdBUFo",
    "parentPermissionUuid": null,
    "name": "内容管理",
    "permissionValue": "CONTENT",
    "relationUrl": null,
    "remark": "",
    "type": "menu",
    "dataAccessRules": [],
    "childrenList": [
      {
        "uuid": "dfcfce1529a5fde07767c816ac367a2322jB0j41mNC",
        "parentPermissionUuid": "6670a725e99ddbdba114b2155a6ba6a26o0v9XdBUFo",
        "name": "内容配置",
        "permissionValue": "CONTENT_CONFIG",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "dda9bbb64d827e5020501002afe4a99cl96N51b8L2w",
            "parentPermissionUuid": "dfcfce1529a5fde07767c816ac367a2322jB0j41mNC",
            "name": "新增",
            "permissionValue": "CONTENT_CONFIG_ADD",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "effd423a1689c6995f44bea87e1f782bHE1VcC3iXxF",
            "parentPermissionUuid": "dfcfce1529a5fde07767c816ac367a2322jB0j41mNC",
            "name": "上/下架",
            "permissionValue": "CONTENT_CONFIG_ONLINE_OFFLINE",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "8ab9898861fd1d6086ecf9055d45b1f2YrCjptcvDdj",
            "parentPermissionUuid": "dfcfce1529a5fde07767c816ac367a2322jB0j41mNC",
            "name": "编辑",
            "permissionValue": "CONTENT_CONFIG_EDIT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "181797b37e82d7e638c8f4b3c2bc3feepIFBmuo9oM4",
            "parentPermissionUuid": "dfcfce1529a5fde07767c816ac367a2322jB0j41mNC",
            "name": "删除",
            "permissionValue": "CONTENT_CONFIG_DELETE",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      },
      {
        "uuid": "7eab056fb38a4f89296329bf04ed1d5aNpqCuv457c8",
        "parentPermissionUuid": "6670a725e99ddbdba114b2155a6ba6a26o0v9XdBUFo",
        "name": "专题配置",
        "permissionValue": "TOPIC_CONFIG",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "62fc01b8cf09039cb8e3bb5d7df16df6GdqYYy3rU1y",
            "parentPermissionUuid": "7eab056fb38a4f89296329bf04ed1d5aNpqCuv457c8",
            "name": "新增",
            "permissionValue": "TOPIC_CONFIG_ADD",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "eda36274db1aee3db11a4049ad80ab07XmVEFwJ5Tao",
            "parentPermissionUuid": "7eab056fb38a4f89296329bf04ed1d5aNpqCuv457c8",
            "name": "启/停用",
            "permissionValue": "TOPIC_CONFIG_START_STOP",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "f8c73e0a8b60b50fe04d08e1add67060UUjb2AgCxZh",
            "parentPermissionUuid": "7eab056fb38a4f89296329bf04ed1d5aNpqCuv457c8",
            "name": "关联内容",
            "permissionValue": "TOPIC_CONFIG_RELEVANCY",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "5fd160f5d26444efdaa6edab86744b1cj4ZyAwJcGDB",
            "parentPermissionUuid": "7eab056fb38a4f89296329bf04ed1d5aNpqCuv457c8",
            "name": "编辑",
            "permissionValue": "TOPIC_CONFIG_EDIT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "a3554c80692bb3d54f338b0065bd3aeeKjoceyF0KEv",
            "parentPermissionUuid": "7eab056fb38a4f89296329bf04ed1d5aNpqCuv457c8",
            "name": "删除",
            "permissionValue": "TOPIC_CONFIG_DELETE",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      }
    ]
  },
  {
    "uuid": "934a24d74ccea89b976502216df89536KnpuDsj8BQJ",
    "parentPermissionUuid": null,
    "name": "客服管理",
    "permissionValue": "CUSTOMER_SERVICE",
    "relationUrl": null,
    "remark": "",
    "type": "menu",
    "dataAccessRules": [],
    "childrenList": [
      {
        "uuid": "f871a5d24c5fcf8abab8f39aa21a17d7eK0q2plvxZ3",
        "parentPermissionUuid": "934a24d74ccea89b976502216df89536KnpuDsj8BQJ",
        "name": "问题FAQ管理",
        "permissionValue": "CUSTOMER_SERVICE_FAQ",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "bf4d6c3b88612bcb2970c46cc24079f9NBtJrC0nVF0",
            "parentPermissionUuid": "f871a5d24c5fcf8abab8f39aa21a17d7eK0q2plvxZ3",
            "name": "新增",
            "permissionValue": "CUSTOMER_SERVICE_FAQ_ADD",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "dc2202583838e285c150a328f83cd5a8pAecaY6lufq",
            "parentPermissionUuid": "f871a5d24c5fcf8abab8f39aa21a17d7eK0q2plvxZ3",
            "name": "预览",
            "permissionValue": "CUSTOMER_SERVICE_FAQ_PREVIEW",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "28863ed0e288aadc52045e345552eb26KVeMhiplDd1",
            "parentPermissionUuid": "f871a5d24c5fcf8abab8f39aa21a17d7eK0q2plvxZ3",
            "name": "停/启用",
            "permissionValue": "CUSTOMER_SERVICE_FAQ_START_STOP",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "7a1e8f8594097bff946cba52136c3a37uTEZX67X4A2",
            "parentPermissionUuid": "f871a5d24c5fcf8abab8f39aa21a17d7eK0q2plvxZ3",
            "name": "编辑",
            "permissionValue": "CUSTOMER_SERVICE_FAQ_EDIT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "13999f73269300f226f655d7fdd72b35manNF1n5A8I",
            "parentPermissionUuid": "f871a5d24c5fcf8abab8f39aa21a17d7eK0q2plvxZ3",
            "name": "删除",
            "permissionValue": "CUSTOMER_SERVICE_FAQ_DELETE",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      }
    ]
  },
  {
    "uuid": "88f62cd2edb2822b9cb15b08b88dffa4rsRkSIvBlvY",
    "parentPermissionUuid": null,
    "name": "账号权限",
    "permissionValue": "PERMISSION",
    "relationUrl": null,
    "remark": "",
    "type": "menu",
    "dataAccessRules": [],
    "childrenList": [
      {
        "uuid": "05af7577b74b42b13cbcc34815b2148fe9nQCCft6dA",
        "parentPermissionUuid": "88f62cd2edb2822b9cb15b08b88dffa4rsRkSIvBlvY",
        "name": "角色管理",
        "permissionValue": "PERMISSION_ROLE",
        "relationUrl": null,
        "remark": "",
        "type": "menu",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "210095caa38a4cc9ecf1e458a5c72ee1Nyg78H1wdse",
            "parentPermissionUuid": "05af7577b74b42b13cbcc34815b2148fe9nQCCft6dA",
            "name": "新建",
            "permissionValue": "PERMISSION_ROLE_ADD",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "cd56934a8b33c14023fd01021d3e52dfaRy68NLfQvy",
            "parentPermissionUuid": "05af7577b74b42b13cbcc34815b2148fe9nQCCft6dA",
            "name": "编辑",
            "permissionValue": "PERMISSION_ROLE_EDIT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "5fbdfe6a22c8d4b5c411c9af896023adoTucfmaMiJs",
            "parentPermissionUuid": "05af7577b74b42b13cbcc34815b2148fe9nQCCft6dA",
            "name": "启/停用",
            "permissionValue": "PERMISSION_ROLE_START_STOP",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "36077fb7afc6c557a659ea4eb4a7bed5zWpncxqUGjn",
            "parentPermissionUuid": "05af7577b74b42b13cbcc34815b2148fe9nQCCft6dA",
            "name": "成员查看",
            "permissionValue": "PERMISSION_ROLE_DETAIL",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      },
      {
        "uuid": "8ea8bbfcc82710b9a97c2c2072167396KFdDdBUC7Sw",
        "parentPermissionUuid": "88f62cd2edb2822b9cb15b08b88dffa4rsRkSIvBlvY",
        "name": "账号管理",
        "permissionValue": "PERMISSION_ACCOUNT",
        "relationUrl": null,
        "remark": "",
        "type": "button",
        "dataAccessRules": [],
        "childrenList": [
          {
            "uuid": "7cba0e51a4318c5360c4864e8bb7d1cbOobdarr98lZ",
            "parentPermissionUuid": "8ea8bbfcc82710b9a97c2c2072167396KFdDdBUC7Sw",
            "name": "新建",
            "permissionValue": "PERMISSION_ACCOUNT_ADD",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "3c2c4990484e326294653414634f9225qLlbT1t68lK",
            "parentPermissionUuid": "8ea8bbfcc82710b9a97c2c2072167396KFdDdBUC7Sw",
            "name": "编辑",
            "permissionValue": "PERMISSION_ACCOUNT_EDIT",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "e6d34a929008c675358f74d1e87bb4bfeQu1NBUu6ai",
            "parentPermissionUuid": "8ea8bbfcc82710b9a97c2c2072167396KFdDdBUC7Sw",
            "name": "冻结/解冻",
            "permissionValue": "PERMISSION_ACCOUNT_FREEZE_UNFREEZE",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          },
          {
            "uuid": "2a0b5c79f8134eb5cf4b21b3998e60f0FYqCkfigY6U",
            "parentPermissionUuid": "8ea8bbfcc82710b9a97c2c2072167396KFdDdBUC7Sw",
            "name": "区域详情",
            "permissionValue": "PERMISSION_ACCOUNT_DETAIL",
            "relationUrl": null,
            "remark": "",
            "type": "button",
            "dataAccessRules": [],
            "childrenList": null
          }
        ]
      }
    ]
  }
]

/*
console.log(getParentIds(lynkcoTree, '4e7a4c222617deae4ea0e80128aa6e7eoewqX9yEO5a', {
  children: 'childrenList',
  id: 'uuid'
}))

 */


function Node() {
  this.name     = ''
  this.children = []


  // this.visited  = false
}

/**
 * 深度优先算法
 * 暴力递归
 * @param node
 */
function dfs(node) {
  console.log('探寻阶段=>', node.name)
  node.children.forEach((child) => {
    dfs(child)
  })
  console.log('回溯阶段=>', node.name)
}


/***
 *  A
 *  B                 D
 *  C
 */

const node = {
  name: 'A',
  children: [
    {
      name: 'B',
      children: [
        {
          name: 'C',
          children: []
        }
      ]
    },
    {
      name: 'D',
      children: []
    }
  ]
}

dfs(node)
