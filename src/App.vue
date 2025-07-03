<script setup lang="ts">
import PickSlot from "./components/draft/PickSlot.vue";
import type {Champion} from "@/types.ts";
import BanSlot from "@/components/draft/BanSlot.vue";
import ChampionPicker from "@/components/draft/ChampionPicker.vue";

const aatroxSplash: Champion = {
  name: "Aatrox",
  role: "TOP",
  img: "Aatrox_0.jpg"
}

const aatroxBan: Champion = {
  name: "Aatrox",
  role: "TOP",
  img: "Aatrox.png"
}
</script>

<template>
  <div class="side">
    <div class="picks">
      <PickSlot :champion="aatroxSplash" :is-blue-side="true"/>
      <PickSlot :is-blue-side="true"/>
      <PickSlot :is-blue-side="true"/>
      <PickSlot :is-blue-side="true"/>
      <PickSlot :is-blue-side="true"/>
    </div>
    <div class="bans">
      <BanSlot :is-blue-side="true"/>
      <BanSlot :is-blue-side="true"/>
      <BanSlot :is-blue-side="true"/>
      <BanSlot :is-blue-side="true"/>
      <BanSlot :is-blue-side="true"/>
    </div>
  </div>

  <div id="champSelect">
    <div class="teamsInfos">
      <p id="teamA">Team A</p>
      <p id="timer">30</p>
      <p id="teamB">Team B</p>
    </div>

    <ChampionPicker />
  </div>

  <div class="side">
    <div class="picks">
      <PickSlot :is-blue-side="false"/>
      <PickSlot :is-blue-side="false"/>
      <PickSlot :is-blue-side="false"/>
      <PickSlot :is-blue-side="false"/>
      <PickSlot :is-blue-side="false"/>
    </div>
    <div class="bans">
      <BanSlot :champion="aatroxBan" :is-blue-side="false"/>
      <BanSlot :is-blue-side="false"/>
      <BanSlot :is-blue-side="false"/>
      <BanSlot :is-blue-side="false"/>
      <BanSlot :is-blue-side="false"/>
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
  display: flex;
  flex-direction: column;
  padding: 0 56px;
}

.picks {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 85vh;
}

.bans {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 15vh;
}

.teamsInfos {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  font-weight: 600;

  p {
    margin: 0;
    text-shadow: var(--text-shadow);
  }
}

#teamA {
  color: var(--color-blue-side);
}

#teamB {
  color: var(--color-red-side);
}

#timer {
  color: var(--font-color-white);
}
</style>
