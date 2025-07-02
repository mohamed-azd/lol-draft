<script setup lang="ts">
import RolesTabs from "@/components/draft/RolesTabs.vue";
</script>

<template>
  <div id="championPicker">
    <div id="filterBar">
      <RolesTabs class="tabs" />
      <p>aaaa</p>
    </div>
  </div>
</template>

<style scoped>
#championPicker {
  width: 100%;
  height: 100%;
}

.tabs {
  width: 15vw;
}

#filterBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
}
</style>