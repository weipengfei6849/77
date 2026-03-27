<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="visible" class="sku-overlay" @click.self="$emit('close')">
        <Transition name="slide-up">
          <div v-if="visible" class="sku-panel">
            <div class="sku-header">
              <div class="sku-dish-info">
                <div class="sku-dish-img-wrap">
                  <img v-if="dish.resolvedImage" :src="dish.resolvedImage" :alt="dish.name" class="sku-dish-img" />
                  <div v-else class="sku-dish-emoji">{{ getEmoji(dish.categoryId) }}</div>
                </div>
                <div class="sku-dish-meta">
                  <div class="sku-dish-name">{{ dish.name }}</div>
                  <div class="sku-dish-price">
                    <span class="price-symbol">¥</span>{{ dish.price }}
                  </div>
                </div>
              </div>
              <button class="sku-close" @click="$emit('close')">✕</button>
            </div>

            <div class="sku-section">
              <div class="sku-label">选择口味</div>
              <div class="sku-options">
                <button
                  v-for="opt in spiceOptions"
                  :key="opt.id"
                  :class="['sku-option', { active: selectedSpice === opt.id }]"
                  @click="selectedSpice = opt.id"
                >
                  {{ opt.label }}
                </button>
              </div>
            </div>

            <div class="sku-section">
              <div class="sku-label">数量</div>
              <div class="sku-quantity">
                <button class="qty-btn" :disabled="quantity <= 1" @click="quantity--">−</button>
                <span class="qty-num">{{ quantity }}</span>
                <button class="qty-btn" @click="quantity++">+</button>
              </div>
            </div>

            <button class="sku-submit" @click="handleAdd">
              加入购物车 · ¥{{ dish.price * quantity }}
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'
import { spiceOptions } from '../data/menuData.js'

const props = defineProps({
  visible: { type: Boolean, default: false },
  dish: { type: Object, default: () => ({}) },
})

const emit = defineEmits(['close', 'add-to-cart'])

const selectedSpice = ref('natural')
const quantity = ref(1)

watch(() => props.visible, (val) => {
  if (val) {
    selectedSpice.value = 'natural'
    quantity.value = 1
  }
})

function handleAdd() {
  const spiceLabel = spiceOptions.find(s => s.id === selectedSpice.value)?.label || ''
  emit('add-to-cart', {
    dishId: props.dish.id,
    name: props.dish.name,
    price: props.dish.price,
    categoryId: props.dish.categoryId,
    spice: selectedSpice.value,
    spiceLabel,
    quantity: quantity.value,
  })
}

function getEmoji(catId) {
  const map = { 1: '🍛', 2: '🥗', 3: '🍲', 4: '🍚', 5: '🥤' }
  return map[catId] || '🍽️'
}
</script>

<style scoped>
.sku-overlay {
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  backdrop-filter: blur(2px);
}

.sku-panel {
  width: 100%;
  max-width: 768px;
  background: var(--bg-white);
  border-radius: 16px 16px 0 0;
  padding: 20px 16px;
  padding-bottom: calc(20px + env(safe-area-inset-bottom));
}

.sku-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
}

.sku-dish-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sku-dish-img-wrap {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  flex-shrink: 0;
}

.sku-dish-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sku-dish-emoji {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #fff3ed 0%, #ffe0cc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}

.sku-dish-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.sku-dish-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.sku-dish-price {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary);
}

.sku-dish-price .price-symbol {
  font-size: 13px;
}

.sku-close {
  background: none;
  border: none;
  font-size: 18px;
  color: var(--text-light);
  cursor: pointer;
  padding: 4px 8px;
}

.sku-section {
  margin-bottom: 20px;
}

.sku-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.sku-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.sku-option {
  padding: 8px 20px;
  border-radius: 20px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text-secondary);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sku-option.active {
  border-color: var(--primary);
  background: #fff3ed;
  color: var(--primary);
  font-weight: 600;
}

.sku-quantity {
  display: flex;
  align-items: center;
  gap: 16px;
}

.qty-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--bg-white);
  color: var(--text-primary);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s;
}

.qty-btn:active {
  background: var(--bg);
}

.qty-btn:disabled {
  color: var(--text-light);
  border-color: var(--border);
  cursor: not-allowed;
}

.qty-num {
  font-size: 16px;
  font-weight: 600;
  min-width: 24px;
  text-align: center;
}

.sku-submit {
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 22px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s;
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.35);
}

.sku-submit:active {
  opacity: 0.85;
}
</style>
