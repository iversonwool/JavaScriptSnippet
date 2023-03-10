const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

const dataList = [];
const generateList = data => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const { key } = node;
    /**
     *  扁平化key title 方便做搜索
     */
    dataList.push({ key, title: key });
    if (node.children) {
      generateList(node.children);
    }
  }
};
generateList(gData);

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

/**
 * 搜索所有key
 */


// value 是搜索关键字
// const expandedKeys = dataList
//   .map(item => {
//     if (item.title.indexOf(value) > -1) {
//       return getParentKey(item.key, gData);
//     }
//     return null;
//   })
//   .filter((item, i, self) => item && self.indexOf(item) === i);





let cId = 4;
let tree = [
  {
    id: 0,
    children: [
      {
        id: 1,
        children: [
          {
            id: 3
          }
        ]
      },
      {
        id: 2,
        children: [
          {
            id: 4,
            children: [
              {
                id: 5,
                children: [
                  {
                    id: 6
                  }
                ]
              },
              {
                id: 20
              },
              {
                id: 21
              }
            ]
          },
          {
            id: 7,
            children: [
              {
                id: 8
              }
            ]
          }
        ]
      },
      {
        id: 9,
        children: [
          {
            id: 10,
            children: [
              {
                id: 11
              }
            ]
          }
        ]
      }
    ]
  }
];
let res = []
// false 代表只找不查  true 代表找也查
function findChildren(item, flag) {
  // 判断是否找到那个节点，如果找到则把flag改为true
  if (item.id === cId) {
    flag = true
  }
  // 如果flag为true，那么就存入子数组
  if (flag) {
    res.push(item.id)
  }
  if (!item.children) {
    return;
  }
  item.children.forEach(function (child) {
    findChildren(child, flag);
  })
}
tree.forEach(function (item) {
  findChildren(item, false)
});
console.log(res);

function getNodeByKey(id, tree) {
  for (const node of tree) {
    if (node.id === id) return node
    if (node.children) {
      const found = getNodeByKey(id, node.children)
      if (found) return found
    }
  }
}

console.log('getNode by key', getNodeByKey(7, tree))

function getBrotherNodes(list, id) {
  for(let i in list) {
    if(list[i].id === id) {
      return list.filter(v => v.id !== id)
    }
    if(list[i].children?.length > 0) {
      let node = getBrotherNodes(list[i].children, id)
      if(node) return node.filter(v => v.id !== id)
    }
  }
}

const sibling = getBrotherNodes(tree, 4)
// console.log('sibling', sibling)




function getAllChildrenNodes(list, id, arr = []) {
  for(let i in list) {
    if(list[i].id === id) {
      arr.push(list[i])
      if(list[i].children?.length > 0) {
        getChild(list[i].children, arr)
      }
    }else {
      if(list[i].children?.length > 0) {
        getAllChildrenNodes(list[i].children, id, arr)
      }
    }
  }
  return arr.filter(v => v.id !== id)
}

function getChild(list,  arr) {
  list.forEach(v => {
    arr.push(v)
    if(v.children) {
      getChild(v.children, arr)
    }
  })
}


function getChildrenNodes(list, id, arr = []) {
  for(let i in list) {
    if(list[i].id === id) {
      arr.push(list[i])
      if(list[i].children?.length > 0) {
        getDirectChildren(list[i].children, arr)
      }
    }else {
      if(list[i].children?.length > 0) {
        getChildrenNodes(list[i].children, id, arr)
      }
    }
  }
  // console.log('arr', arr)
  return arr.filter(v => v.id !== id)
}

function getDirectChildren(list, arr) {
  list.forEach(v => {
    arr.push(v)
    // if(v.children) {
    //   getChild(v.children, arr)
    // }
  })
}

// console.log('-', getChildrenNodes(tree, 4))


function findDirectChildren(tree = [], id, arr = []) {
  for (const treeElement of tree) {
    if (treeElement.id === id) {
      arr.push(...treeElement.children)
    } else {
      findDirectChildren(treeElement.children, id, arr)
    }
  }

  return arr
}

const directR = findDirectChildren(tree, 4)
// console.log('directR', directR)

/**
 * flat array to a tree
 * @param arr
 * @returns {*[]}
 */
const listToTree = (arr = []) => {
  let map = {}, node, res = [], i;
  for (i = 0; i < arr.length; i += 1) {
    map[arr[i].id] = i;
    arr[i].children = [];
  };
  for (i = 0; i < arr.length; i += 1) {
    node = arr[i];
    if (node.parentId !== "0") {
      arr[map[node.parentId]].children.push(node);
    }
    else {
      res.push(node);
    };
  };
  return res;
};