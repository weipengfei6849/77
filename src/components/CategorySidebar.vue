<template>
  <aside class="sidebar">
    <div
      v-for="cat in categories"
      :key="cat.id"
      :class="['sidebar-item', { active: cat.id === activeCategoryId }]"
      @click="$emit('select', cat.id)"
    >
      <span class="sidebar-text">{{ cat.name }}</span>
      <span v-if="getCategoryCount(cat.id)" class="sidebar-badge">{{ getCategoryCount(cat.id) }}</span>
    </div>
  </aside>
</template>

<script setup>
import { categories } from '../data/menuData.js'

const props = defineProps({
  activeCategoryId: { type: Number, required: true },
  cartItems: { type: Array, default: () => [] },
})

defineEmits(['select'])

function getCategoryCount(catId) {
  const count = props.cartItems
    .filter(item => item.categoryId === catId)
    .reduce((sum, item) => sum + item.quantity, 0)
  return count || 0
}
</script>

<style scoped>
.sidebar {
  width: var(--sidebar-width);
  min-width: var(--sidebar-width);
  height: 100%;
  background: var(--bg-white);
  overflow-y: auto;
  border-right: 1px solid var(--border);
}

.sidebar-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
  background: #f8f8f8;
}

.sidebar-item:active {
  background: #f0f0f0;
}

.sidebar-item.active {
  background: var(--bg-white);
  border-left-color: var(--primary);
  font-weight: 600;
}

.sidebar-item.active .sidebar-text {
  color: var(--primary);
}

.sidebar-text {
  font-size: 13px;
  color: var(--text-secondary);
  transition: color 0.2s;
}

.sidebar-badge {
  position: absolute;
  top: 6px;
  right: 6px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background: var(--primary);
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}
</style>
