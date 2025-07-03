<script setup lang="ts">
import type {Champion} from "@/types.ts";

const ddragonUrl = "https://ddragon.leagueoflegends.com/cdn/15.13.1/img/champion/";

defineProps<{
  champion: Champion
}>();
</script>

<template>
  <div class="championCard">
    <img :src="ddragonUrl + champion.img" />
    <p>{{ champion.name }}</p>
  </div>
</template>

<style scoped>
.championCard {
  display: flex;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.5s ease;

  img {
    display: block;
    width: 100%;
    border-radius: 8px 8px 0 0;
  }

  p {
    padding: 4px 0px;
    color: var(--font-color-white);
    text-align: center;
    margin: 0;
    font-size: 14px;
    text-shadow: var(--text-shadow);
  }
}

.championCard:hover {
  box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.66);
}
</style>