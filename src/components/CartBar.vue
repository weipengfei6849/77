<template>
  <div class="cart-bar-wrap" v-if="totalCount > 0 || isSettling">
    <div class="cart-bar" @click="$emit('toggle-detail')">
      <div class="cart-left">
        <div class="cart-icon-wrap">
          <span class="cart-icon">🛒</span>
          <span class="cart-count-badge">{{ totalCount }}</span>
        </div>
        <div class="cart-total">
          <span class="cart-total-symbol">¥</span>
          <span class="cart-total-price">{{ totalPrice }}</span>
        </div>
      </div>
      <button
        class="cart-settle-btn"
        :class="{ settling: isSettling }"
        @click.stop="handleSettle"
        :disabled="isSettling"
      >
        {{ isSettling ? '发送中...' : '结算' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  totalCount: { type: Number, default: 0 },
  totalPrice: { type: Number, default: 0 },
})

const emit = defineEmits(['toggle-detail', 'settle'])

const isSettling = ref(false)

async function handleSettle() {
  if (props.totalCount === 0) return
  isSettling.value = true
  emit('settle')
  // Parent will handle the async settle, we just show loading state
  setTimeout(() => {
    isSettling.value = false
  }, 2000)
}
</script>

<style scoped>
.cart-bar-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 300;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 10px;
  padding-bottom: calc(8px + env(safe-area-inset-bottom));
}

.cart-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--cart-bar-height);
  background: #2a2a2a;
  border-radius: 28px;
  padding: 0 6px 0 12px;
  box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

.cart-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cart-icon-wrap {
  position: relative;
}

.cart-icon {
  font-size: 24px;
  filter: drop-shadow(0 1px 3px rgba(0,0,0,0.3));
}

.cart-count-badge {
  position: absolute;
  top: -6px;
  right: -8px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: var(--primary);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.cart-total {
  color: #fff;
}

.cart-total-symbol {
  font-size: 13px;
  font-weight: 500;
}

.cart-total-price {
  font-size: 20px;
  font-weight: 700;
}

.cart-settle-btn {
  height: 40px;
  padding: 0 24px;
  border: none;
  border-radius: 20px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.35);
}

.cart-settle-btn:active {
  opacity: 0.85;
}

.cart-settle-btn.settling {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
