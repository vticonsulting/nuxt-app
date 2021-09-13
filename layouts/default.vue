<template>
  <div :class="['min-h-screen flex flex-col', collapsed ? 'ml-12' : 'ml-66']">
    <header-component></header-component>
    <main class="flex-1">
      <nuxt />
    </main>
    <menu-component @toggle-collapse="onToggleCollapsed"></menu-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
export default {
  name: 'VueLayoutComponent',
  data: () => ({
    collapsed: false,
    isOnMobile: false,
  }),
  head: {
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      if (window.innerWidth <= 767) {
        this.isOnMobile = false;
        this.collapsed = true;
      } else {
        this.isOnMobile = false;
        this.collapsed = false;
      }
    },
    onToggleCollapsed() {
      this.collapsed = !this.collapsed;
    }
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
