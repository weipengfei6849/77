// 菜品分类
export const categories = [
  { id: 1, name: '热菜' },
  { id: 2, name: '凉菜' },
  { id: 3, name: '汤类' },
  { id: 4, name: '烧烤' },
  { id: 5, name: '主食' },
  { id: 6, name: '饮品' },
]

// 口味选项
export const spiceOptions = [
  { id: 'no_spice', label: '不辣' },
  { id: 'mild', label: '微辣' },
  { id: 'natural', label: '孜然' },
  { id: 'suantian', label: '酸甜' },
]

// 菜品列表
export const dishes = [
  // ===== 热菜 =====
  {
    id: 101,
    name: '炒鸡蛋',
    price: 1,
    categoryId: 1,
    image: 'chaojidan.png',
    description: '鸡蛋 葱花 生菜',
  },
  {
    id: 102,
    name: '鱼香肉丝',
    price: 1,
    categoryId: 1,
    image: 'yuxiang_rousi.png',
    description: '猪肉丝 木耳 胡萝卜',
  },
  {
    id: 103,
    name: '麻婆豆腐',
    price: 1,
    categoryId: 1,
    image: 'mapo_tofu.png',
    description: '嫩豆腐 肉末 花椒',
  },
  {
    id: 104,
    name: '回锅肉',
    price: 1,
    categoryId: 1,
    image: 'huiguo_rou.png',
    description: '五花肉 青椒 蒜苗',
  },
  {
    id: 105,
    name: '红烧肉',
    price: 1,
    categoryId: 1,
    image: 'hongshao_rou.png',
    description: '五花肉 冰糖 八角',
  },
  {
    id: 106,
    name: '水煮鱼',
    price: 1,
    categoryId: 1,
    image: 'shuizhuyu.png',
    description: '草鱼 豆芽 花椒',
  },
  {
    id: 107,
    name: '酸菜鱼',
    price: 1,
    categoryId: 1,
    image: 'suancaiyu.png',
    description: '黑鱼 酸菜 泡椒',
  },
  {
    id: 108,
    name: '糖醋排骨',
    price: 1,
    categoryId: 1,
    image: 'tangcupaigu.png',
    description: '猪小排 糖醋汁',
  },

  // ===== 凉菜 =====
  {
    id: 201,
    name: '拍黄瓜',
    price: 1,
    categoryId: 2,
    image: 'paihuanggua.png',
    description: '黄瓜 蒜末 香醋',
  },
  {
    id: 203,
    name: '皮蛋豆腐',
    price: 1,
    categoryId: 2,
    image: 'pidandoufu.png',
    description: '皮蛋 嫩豆腐 酱油',
  },
  {
    id: 204,
    name: '口水鸡',
    price: 1,
    categoryId: 2,
    image: 'koushuiji.png',
    description: '鸡肉 花生 红油',
  },

  // ===== 汤类 =====
  {
    id: 301,
    name: '西红柿蛋汤',
    price: 1,
    categoryId: 3,
    image: 'xihongshijidantang.png',
    description: '西红柿 鸡蛋 香菜',
  },
  {
    id: 302,
    name: '紫菜蛋花汤',
    price: 1,
    categoryId: 3,
    image: 'zicaidanhuatang.png',
    description: '紫菜 鸡蛋 虾皮',
  },
  {
    id: 303,
    name: '三鲜汤',
    price: 1,
    categoryId: 3,
    image: 'sanxiantang.png',
    description: '蘑菇 豆腐 生菜',
  },

  // ===== 烧烤 =====
  {
    id: 401,
    name: '烤肉',
    price: 1,
    categoryId: 4,
    image: 'kaorou.png',
    description: '牛肉',
  },
  {
    id: 402,
    name: '炸串',
    price: 1,
    categoryId: 4,
    image: 'zhachuan.png',
    description: '疙瘩 土豆',
  },

  // ===== 主食 =====
  {
    id: 501,
    name: '炒饼',
    price: 1,
    categoryId: 5,
    image: 'chaobing.png',
    description: '饼丝 蒜苗 白菜',
  },
  {
    id: 505,
    name: '烧饼夹所有',
    price: 1,
    categoryId: 5,
    image: 'shaobingjiasuoyou.png',
    description: '烧饼 生菜 辣条 紫苹果',
  },
  {
    id: 502,
    name: '蛋炒饭',
    price: 1,
    categoryId: 5,
    image: 'danchaofan.png',
    description: '鸡蛋 米饭 葱花',
  },
  {
    id: 503,
    name: '打卤面',
    price: 1,
    categoryId: 5,
    image: 'dalumian.png',
    description: '手擀面 老家卤',
  },
  {
    id: 504,
    name: '饺子(10个)',
    price: 1,
    categoryId: 5,
    image: 'jiaozi.png',
    description: '猪肉大葱馅',
  },

  // ===== 饮品 =====
  {
    id: 601,
    name: '可乐',
    price: 1,
    categoryId: 6,
    image: 'kele.png',
    description: '450ml',
  },
  {
    id: 602,
    name: '雪碧',
    price: 1,
    categoryId: 6,
    image: 'xuebi.png',
    description: '450ml',
  },
  {
    id: 603,
    name: '酸梅汤',
    price: 1,
    categoryId: 6,
    image: 'suanmeitang.png',
    description: '自制冰镇酸梅汤',
  },
  {
    id: 604,
    name: '啤酒',
    price: 4.5,
    categoryId: 6,
    image: 'pijiu.png',
    description: '燕京啤酒（绿棒子）',
  },
]
