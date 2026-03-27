<template>
  <header class="header-bar">
    <div class="header-inner">
      <span class="header-icon">🍜</span>
      <h1 class="header-title">77饭店</h1>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--header-height);
  max-width: 768px;
  margin: 0 auto;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 100%;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  padding: 0 16px;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
}

.header-icon {
  font-size: 22px;
  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
}

.header-title {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 2px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.15);
}
</style>
