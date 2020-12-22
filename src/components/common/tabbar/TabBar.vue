<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
.tab-bar {
  display: flex;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: -1px;
  right: 0;
  background-color: #f2f2f2;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
}
</style>
