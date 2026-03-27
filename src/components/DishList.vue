<template>
  <div class="dish-list" ref="listRef">
    <div v-for="dish in filteredDishes" :key="dish.id" class="dish-card">
      <div class="dish-img-wrap">
        <img v-if="dish.image && dishImages[dish.image]" :src="dishImages[dish.image]" :alt="dish.name" class="dish-img" />
        <div v-else class="dish-img-placeholder">
          <span class="dish-emoji">{{ getEmoji(dish.categoryId) }}</span>
        </div>
      </div>
      <div class="dish-info">
        <div class="dish-name">{{ dish.name }}</div>
        <div class="dish-desc">{{ dish.description }}</div>
        <div class="dish-bottom">
          <span class="dish-price">
            <span class="price-symbol">¥</span>{{ dish.price }}
          </span>
          <button class="dish-add-btn" @click="$emit('add', dish)">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="11" fill="currentColor"/>
              <path d="M11 6V16M6 11H16" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div v-if="filteredDishes.length === 0" class="dish-empty">
      暂无菜品
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { dishes } from '../data/menuData.js'

// Dynamically import all dish images
const imageModules = import.meta.glob('../assets/dishes/*.png', { eager: true })
const dishImages = {}
for (const path in imageModules) {
  const filename = path.split('/').pop()
  dishImages[filename] = imageModules[path].default
}

const props = defineProps({
  activeCategoryId: { type: Number, required: true },
})

defineEmits(['add'])

const filteredDishes = computed(() => {
  return dishes.filter(d => d.categoryId === props.activeCategoryId)
})

function getEmoji(catId) {
  const emojiMap = {
    1: '🍛',
    2: '🥗',
    3: '🍲',
    4: '🍚',
    5: '🥤',
  }
  return emojiMap[catId] || '🍽️'
}
</script>

<style scoped>
.dish-list {
  flex: 1;
  height: 100%;
  overflow-y: auto;
  padding: 8px 10px;
  padding-bottom: 20px;
}

.dish-card {
  display: flex;
  background: var(--bg-white);
  border-radius: var(--radius-sm);
  padding: 12px;
  margin-bottom: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  transition: transform 0.15s ease;
}

.dish-card:active {
  transform: scale(0.98);
}

.dish-img-wrap {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  margin-right: 12px;
}

.dish-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dish-img-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #fff3ed 0%, #ffe0cc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dish-emoji {
  font-size: 36px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

.dish-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
}

.dish-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.dish-desc {
  font-size: 12px;
  color: var(--text-light);
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dish-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
}

.dish-price {
  font-size: 18px;
  font-weight: 700;
  color: var(--primary);
}

.price-symbol {
  font-size: 12px;
  font-weight: 600;
}

.dish-add-btn {
  border: none;
  background: none;
  color: var(--primary);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, color 0.15s;
}

.dish-add-btn:active {
  transform: scale(0.85);
  color: var(--primary-dark);
}

.dish-empty {
  text-align: center;
  padding: 40px 0;
  color: var(--text-light);
  font-size: 14px;
}
</style>
