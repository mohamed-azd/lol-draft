<script setup lang="ts">
import RolesTabs from "@/components/draft/RolesTabs.vue";
import SearchChampion from "@/components/draft/SearchChampion.vue";
import ChampionCard from "@/components/draft/ChampionCard.vue";
import type {Champion} from "@/types.ts";
import ValidateButton from "@/components/draft/ValidateButton.vue";

const aatrox: Champion = {
  name: "Aatrox",
  role: "TOP",
  img: "Aatrox.png"
}
</script>

<template>
  <div id="championPicker">
    <div id="filterBar">
      <RolesTabs class="tabs" />
      <SearchChampion />
    </div>
    <div id="champions">
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
      <ChampionCard :champion="aatrox" />
    </div>
  </div>
</template>

<style scoped>
#championPicker {
  width: 100%;
  height: 74vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around
}

.tabs {
  width: 17vw;
}

#filterBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#champions {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  overflow-y: auto;
  max-height: 64vh;
  max-width: 100%;
  padding: 8px 8px;
}

#champions::-webkit-scrollbar {
  width: 8px;
}

#champions::-webkit-scrollbar-track {
  background: var(--color-surface);
  border-radius: 8px;
}

#champions::-webkit-scrollbar-thumb {
  background-color: var(--font-color-white);
  border-radius: 8px;
  border: 2px solid var(--color-surface)
}

.btnContainer {
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>