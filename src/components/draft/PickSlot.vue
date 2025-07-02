<script setup lang="ts">
import type {Champion} from "../../types.ts";
import {computed} from "vue";
import unknownImg from '@/assets/unknown_champion.png';

const ddragonUrl = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/";

const props = defineProps<{
  champion?: Champion,
  isBlueSide : boolean
}>();

const sideClass = computed(() => props.isBlueSide ? 'pick-slot-blue' : 'pick-slot-red')
</script>

<template>
  <div :class="['pick-slot', sideClass]">
    <div v-if="!champion" class="unknownImgContainer">
      <img :src="unknownImg" class="unknownImg"  alt="unknown champion"/>
    </div>

    <div v-else class="champion">
      <p class="championName">{{ champion.name }}</p>
      <img class="championImg" :src="ddragonUrl + champion.img" :alt="champion.name">
    </div>
  </div>
</template>

<style scoped>
.pick-slot {
  width: 100%;
  height: 100%;
  background-color: var(--color-surface);
  border-radius: 4px;
  box-shadow: var(--box-shadow);
  transition: height 0.5s ease;
}

.pick-slot:hover {
  cursor: pointer;
  height: 130%;
}

.unknownImgContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.unknownImg {
  width: 112px;
  height: 112px;
}

.pick-slot-blue {
  border-right: var(--color-blue-side) 4px solid;
}

.pick-slot-red {
  border-left: var(--color-red-side) 4px solid;
}

.champion {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.championImg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  z-index: 0;
}

.championName {
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 1;
  margin: 0;
  text-align: right;
  font-size: 16px;
  font-weight: 600;
  color: var(--font-color-white);
  text-shadow: var(--text-shadow);
}
</style>