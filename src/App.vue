<template>
  <div class="app-container">
    <!-- 头部 -->
    <HeaderBar />

    <!-- 主体内容区：左侧分类 + 右侧菜品 -->
    <div class="main-content">
      <CategorySidebar
        :activeCategoryId="activeCategoryId"
        :cartItems="cartItems"
        @select="activeCategoryId = $event"
      />
      <DishList
        :activeCategoryId="activeCategoryId"
        @add="openSkuModal"
      />
    </div>

    <!-- SKU 选择弹框 -->
    <SkuModal
      :visible="skuModalVisible"
      :dish="currentDish"
      @close="skuModalVisible = false"
      @add-to-cart="addToCart"
    />

    <!-- 底部购物车栏 -->
    <CartBar
      :totalCount="totalCount"
      :totalPrice="totalPrice"
      @toggle-detail="cartDetailVisible = !cartDetailVisible"
      @settle="handleSettle"
    />

    <!-- 购物车详情 -->
    <CartDetail
      :visible="cartDetailVisible"
      :items="cartItems"
      @close="cartDetailVisible = false"
      @clear="clearCart"
      @increase="increaseItem"
      @decrease="decreaseItem"
    />

    <!-- Toast 通知 -->
    <Transition name="fade">
      <div v-if="toastMsg" class="toast">{{ toastMsg }}</div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import HeaderBar from './components/HeaderBar.vue'
import CategorySidebar from './components/CategorySidebar.vue'
import DishList from './components/DishList.vue'
import SkuModal from './components/SkuModal.vue'
import CartBar from './components/CartBar.vue'
import CartDetail from './components/CartDetail.vue'

// Dynamically import all dish images for SKU modal
const imageModules = import.meta.glob('./assets/dishes/*.png', { eager: true })
const dishImages = {}
for (const path in imageModules) {
  const filename = path.split('/').pop()
  dishImages[filename] = imageModules[path].default
}

// ===== 状态 =====
const activeCategoryId = ref(1)
const skuModalVisible = ref(false)
const cartDetailVisible = ref(false)
const currentDish = ref({})
const cartItems = ref([])
const toastMsg = ref('')
let cartIdCounter = 0

// ===== 计算属性 =====
const totalCount = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
)

const totalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

// ===== 方法 =====
function openSkuModal(dish) {
  currentDish.value = {
    ...dish,
    resolvedImage: dish.image ? dishImages[dish.image] : null,
  }
  skuModalVisible.value = true
}

function addToCart(item) {
  // Check if same dish + same spice exists
  const existing = cartItems.value.find(
    c => c.dishId === item.dishId && c.spice === item.spice
  )
  if (existing) {
    existing.quantity += item.quantity
  } else {
    cartItems.value.push({
      ...item,
      cartId: ++cartIdCounter,
    })
  }
  skuModalVisible.value = false
  showToast(`已加入 ${item.name}(${item.spiceLabel}) x${item.quantity}`)
}

function increaseItem(cartId) {
  const item = cartItems.value.find(c => c.cartId === cartId)
  if (item) item.quantity++
}

function decreaseItem(cartId) {
  const idx = cartItems.value.findIndex(c => c.cartId === cartId)
  if (idx === -1) return
  if (cartItems.value[idx].quantity > 1) {
    cartItems.value[idx].quantity--
  } else {
    cartItems.value.splice(idx, 1)
    if (cartItems.value.length === 0) {
      cartDetailVisible.value = false
    }
  }
}

function clearCart() {
  cartItems.value = []
  cartDetailVisible.value = false
}

async function handleSettle() {
  if (cartItems.value.length === 0) return

  // 构建订单内容
  const orderLines = cartItems.value.map(
    item => `${item.name}(${item.spiceLabel}) x${item.quantity} ¥${item.price * item.quantity}`
  )
  const orderText = [
    `🍜 77饭店 - 新订单`,
    `━━━━━━━━━━━━━━━━`,
    ...orderLines,
    `━━━━━━━━━━━━━━━━`,
    `合计: ¥${totalPrice.value}`,
    `下单时间: ${new Date().toLocaleString('zh-CN')}`,
  ].join('\n')

  // 调用 Server酱（方糖）API 发送微信通知
  try {
    // TODO: 替换为你的 Server酱 SendKey（在 https://sct.ftqq.com 登录后获取）
    const SENDKEY = 'SCT329484TZvMO4v4YBQraF38VnvHq7sFi'

    const res = await fetch(`https://sctapi.ftqq.com/${SENDKEY}.send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: '🍜 77饭店 - 新订单',
        desp: orderText.replace(/\n/g, '\n\n'),
      }),
    })

    const data = await res.json()
    if (data.code === 0) {
      showToast('✅ 订单已发送到微信！')
    } else {
      showToast('⚠️ 发送失败，请检查SendKey')
      console.warn('Server酱 response:', data)
    }
  } catch (err) {
    showToast('⚠️ 通知发送失败')
    console.error('Server酱 error:', err)
  }

  // 清空购物车
  cartItems.value = []
  cartDetailVisible.value = false
}

function showToast(msg) {
  toastMsg.value = msg
  setTimeout(() => {
    toastMsg.value = ''
  }, 2000)
}
</script>

<style scoped>
.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  margin-top: var(--header-height);
  height: calc(100vh - var(--header-height));
  overflow: hidden;
}

/* Toast */
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 10px 24px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  pointer-events: none;
  white-space: nowrap;
  backdrop-filter: blur(4px);
}
</style>
