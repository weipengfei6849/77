<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="visible" class="cart-detail-overlay" @click.self="$emit('close')">
        <Transition name="slide-up">
          <div v-if="visible" class="cart-detail-panel">
            <div class="cart-detail-header">
              <h3 class="cart-detail-title">已选菜品</h3>
              <button class="cart-clear-btn" @click="$emit('clear')">
                <span>🗑️</span> 清空
              </button>
            </div>

            <div class="cart-detail-list">
              <div v-for="item in items" :key="item.cartId" class="cart-detail-item">
                <div class="cart-item-info">
                  <span class="cart-item-name">{{ item.name }}</span>
                  <span class="cart-item-spice">{{ item.spiceLabel }}</span>
                </div>
                <div class="cart-item-actions">
                  <button class="cart-qty-btn" @click="$emit('decrease', item.cartId)">−</button>
                  <span class="cart-qty-num">{{ item.quantity }}</span>
                  <button class="cart-qty-btn" @click="$emit('increase', item.cartId)">+</button>
                </div>
                <div class="cart-item-price">¥{{ item.price * item.quantity }}</div>
              </div>
            </div>

            <div v-if="items.length === 0" class="cart-empty">
              购物车是空的~
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  visible: { type: Boolean, default: false },
  items: { type: Array, default: () => [] },
})

defineEmits(['close', 'clear', 'increase', 'decrease'])
</script>

<style scoped>
.cart-detail-overlay {
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  backdrop-filter: blur(2px);
}

.cart-detail-panel {
  width: 100%;
  max-width: 768px;
  max-height: 60vh;
  background: var(--bg-white);
  border-radius: 16px 16px 0 0;
  display: flex;
  flex-direction: column;
  padding-bottom: calc(var(--cart-bar-height) + env(safe-area-inset-bottom));
}

.cart-detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 12px;
  border-bottom: 1px solid var(--border);
}

.cart-detail-title {
  font-size: 15px;
  font-weight: 600;
}

.cart-clear-btn {
  background: none;
  border: none;
  color: var(--text-light);
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
}

.cart-detail-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
}

.cart-detail-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
}

.cart-item-info {
  flex: 1;
  min-width: 0;
}

.cart-item-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
}

.cart-item-spice {
  font-size: 11px;
  color: var(--text-light);
  margin-left: 6px;
  background: var(--bg);
  padding: 1px 6px;
  border-radius: 4px;
}

.cart-item-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 16px;
}

.cart-qty-btn {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--bg-white);
  color: var(--text-primary);
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.cart-qty-btn:active {
  background: var(--bg);
}

.cart-qty-num {
  font-size: 14px;
  font-weight: 600;
  min-width: 18px;
  text-align: center;
}

.cart-item-price {
  font-size: 14px;
  font-weight: 600;
  color: var(--primary);
  min-width: 50px;
  text-align: right;
}

.cart-empty {
  text-align: center;
  padding: 40px 0;
  color: var(--text-light);
  font-size: 14px;
}
</style>
