<script setup lang="ts">
import PickSlot from "./components/draft/PickSlot.vue";
import type {Champion} from "@/types.ts";

const aatrox: Champion = {
  name: "Aatrox",
  role: "TOP",
  img: "Aatrox_0.jpg"
}
</script>

<template>
  <div class="side">
    <div class="picks">
      <PickSlot :champion="aatrox" :is-blue-side="true" />
      <PickSlot :is-blue-side="true" />
      <PickSlot :is-blue-side="true" />
      <PickSlot :is-blue-side="true" />
      <PickSlot :is-blue-side="true" />
    </div>
    <div class="bans">

    </div>
  </div>

  <div id="champSelect">

  </div>

  <div class="side">
    <div class="picks">
      <PickSlot :is-blue-side="false" />
      <PickSlot :is-blue-side="false" />
      <PickSlot :is-blue-side="false" />
      <PickSlot :is-blue-side="false" />
      <PickSlot :is-blue-side="false" />
    </div>
    <div class="bans">

    </div>
  </div>
</template>

<style scoped>
.side {
  display: flex;
  flex-direction: column;
  width: 20vw;
  gap: 24px;
}

#champSelect {
  width: 60vw;
}

.picks {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.bans {
  height: 15vh;
}
</style>
