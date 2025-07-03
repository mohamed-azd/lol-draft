<script setup lang="ts">
import {Tabs} from '@ark-ui/vue/tabs'
import topIcon from "@/assets/top.png";
import jungleIcon from "@/assets/jungle.png";
import midIcon from "@/assets/mid.png";
import adcIcon from "@/assets/adc.png";
import supportIcon from "@/assets/support.png";
import allRoles from "@/assets/all_roles.png";
import {ref} from "vue";

const value = ref('all')
</script>

<template>
  <Tabs.Root orientation="horizontal" v-model="value">
    <Tabs.List orientation="horizontal">
      <Tabs.Trigger value="all">
        <img class="roleIcon" :src="allRoles" alt="all">
      </Tabs.Trigger>
      <Tabs.Trigger value="top">
        <img class="roleIcon" :src="topIcon" alt="top">
      </Tabs.Trigger>
      <Tabs.Trigger value="jungle">
        <img class="roleIcon" :src="jungleIcon" alt="jungle">
      </Tabs.Trigger>
      <Tabs.Trigger value="mid">
        <img class="roleIcon" :src="midIcon" alt="mid">
      </Tabs.Trigger>
      <Tabs.Trigger value="adc">
        <img class="roleIcon" :src="adcIcon" alt="adc">
      </Tabs.Trigger>
      <Tabs.Trigger value="support">
        <img class="roleIcon" :src="supportIcon" alt="support">
      </Tabs.Trigger>
      <Tabs.Indicator/>
    </Tabs.List>
  </Tabs.Root>
</template>

<style scoped>
[data-scope='tabs'][data-part='root'] {
  border-radius: 4px;
}

[data-scope='tabs'][data-part='list'] {
  display: flex;
  flex-direction: row;
  overflow: visible;
  gap: 16px;
  box-shadow: var(--box-shadow);
  border-radius: 4px;
  background: var(--color-surface);
  padding: 0px 8px
}

[data-scope='tabs'][data-part='trigger'] {
  position: relative;
  margin: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  transition: border-color 300ms ease;
  box-shadow: none;
  background: var(--color-surface);
  cursor: pointer;
}

[data-scope='tabs'][data-part='trigger']:hover,
[data-scope='tabs'][data-part='trigger']:focus,
[data-scope='tabs'][data-part='trigger']:active {
  border-bottom: 4px solid var(--font-color-white);
}

[data-scope='tabs'][data-part='trigger']:hover::before,
[data-scope='tabs'][data-part='trigger']:focus::before {
  border-color: transparent;
}

.roleIcon {
  width: 100%;
}
</style>