// 菜品分类
export const categories = [
  { id: 1, name: '热菜' },
  { id: 2, name: '凉菜' },
  { id: 3, name: '汤类' },
  { id: 4, name: '主食' },
  { id: 5, name: '饮品' },
]

// 口味选项
export const spiceOptions = [
  { id: 'no_spice', label: '不辣' },
  { id: 'mild', label: '微辣' },
  { id: 'natural', label: '自然' },
]

// 菜品列表
export const dishes = [
  // ===== 热菜 =====
  {
    id: 101,
    name: '宫保鸡丁',
    price: 38,
    categoryId: 1,
    image: 'kung_pao_chicken.png',
    description: '花生米 鸡丁 干辣椒',
  },
  {
    id: 102,
    name: '鱼香肉丝',
    price: 36,
    categoryId: 1,
    image: 'yuxiang_rousi.png',
    description: '猪肉丝 木耳 胡萝卜',
  },
  {
    id: 103,
    name: '麻婆豆腐',
    price: 28,
    categoryId: 1,
    image: 'mapo_tofu.png',
    description: '嫩豆腐 肉末 花椒',
  },
  {
    id: 104,
    name: '回锅肉',
    price: 42,
    categoryId: 1,
    image: 'huiguo_rou.png',
    description: '五花肉 青椒 蒜苗',
  },
  {
    id: 105,
    name: '红烧肉',
    price: 48,
    categoryId: 1,
    image: 'hongshao_rou.png',
    description: '五花肉 冰糖 八角',
  },
  {
    id: 106,
    name: '水煮鱼',
    price: 58,
    categoryId: 1,
    image: '',
    description: '草鱼 豆芽 花椒',
  },
  {
    id: 107,
    name: '酸菜鱼',
    price: 52,
    categoryId: 1,
    image: '',
    description: '黑鱼 酸菜 泡椒',
  },
  {
    id: 108,
    name: '糖醋排骨',
    price: 46,
    categoryId: 1,
    image: '',
    description: '猪小排 糖醋汁',
  },

  // ===== 凉菜 =====
  {
    id: 201,
    name: '拍黄瓜',
    price: 12,
    categoryId: 2,
    image: '',
    description: '黄瓜 蒜末 香醋',
  },
  {
    id: 202,
    name: '凉拌木耳',
    price: 16,
    categoryId: 2,
    image: '',
    description: '黑木耳 香菜 辣椒油',
  },
  {
    id: 203,
    name: '皮蛋豆腐',
    price: 18,
    categoryId: 2,
    image: '',
    description: '皮蛋 嫩豆腐 酱油',
  },
  {
    id: 204,
    name: '口水鸡',
    price: 32,
    categoryId: 2,
    image: '',
    description: '鸡肉 花生 红油',
  },

  // ===== 汤类 =====
  {
    id: 301,
    name: '西红柿蛋汤',
    price: 15,
    categoryId: 3,
    image: '',
    description: '西红柿 鸡蛋 香菜',
  },
  {
    id: 302,
    name: '紫菜蛋花汤',
    price: 12,
    categoryId: 3,
    image: '',
    description: '紫菜 鸡蛋 虾皮',
  },
  {
    id: 303,
    name: '酸辣汤',
    price: 18,
    categoryId: 3,
    image: '',
    description: '豆腐 木耳 胡椒',
  },

  // ===== 主食 =====
  {
    id: 401,
    name: '米饭',
    price: 3,
    categoryId: 4,
    image: '',
    description: '东北大米',
  },
  {
    id: 402,
    name: '蛋炒饭',
    price: 15,
    categoryId: 4,
    image: '',
    description: '鸡蛋 米饭 葱花',
  },
  {
    id: 403,
    name: '手工面条',
    price: 18,
    categoryId: 4,
    image: '',
    description: '手擀面 浇头',
  },
  {
    id: 404,
    name: '饺子(10个)',
    price: 22,
    categoryId: 4,
    image: '',
    description: '猪肉大葱馅',
  },

  // ===== 饮品 =====
  {
    id: 501,
    name: '可乐',
    price: 5,
    categoryId: 5,
    image: '',
    description: '330ml 罐装',
  },
  {
    id: 502,
    name: '雪碧',
    price: 5,
    categoryId: 5,
    image: '',
    description: '330ml 罐装',
  },
  {
    id: 503,
    name: '酸梅汤',
    price: 8,
    categoryId: 5,
    image: '',
    description: '自制冰镇酸梅汤',
  },
  {
    id: 504,
    name: '啤酒',
    price: 8,
    categoryId: 5,
    image: '',
    description: '青岛啤酒 500ml',
  },
]
