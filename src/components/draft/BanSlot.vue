<script setup lang="ts">
import type {Champion} from "@/types.ts";
import {computed} from "vue";
import cross from '@/assets/croix.png';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const ddragonUrl = "https://ddragon.leagueoflegends.com/cdn/15.13.1/img/champion/";

const props = defineProps<{
  champion?: Champion,
  isBlueSide : boolean
}>();

const sideClass = computed(() => props.isBlueSide ? 'ban-slot-blue' : 'ban-slot-red')
</script>

<template>
  <div :class="['ban-slot', sideClass]">
    <div v-if="!champion" class="unknownImgContainer">
      <img :src="cross" class="unknownImg"  alt="unknown champion"/>
    </div>

    <div v-else class="champion">
      <img class="championImg" :src="ddragonUrl + champion.img" :alt="champion.name">
    </div>
  </div>
</template>

<style scoped>
.ban-slot {
  width: 100%;
  height: fit-content;
  aspect-ratio: 1 / 1;
  background-color: var(--color-surface);
  border-radius: 4px;
  box-shadow: var(--box-shadow);
}

.ban-slot-blue {
  border-bottom: var(--color-blue-side) 4px solid;
}

.ban-slot-red {
  border-bottom: var(--color-red-side) 4px solid;
}

.unknownImgContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.unknownImg {
  width: 40%;
  height: fit-content;
}

.champion {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.championImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>