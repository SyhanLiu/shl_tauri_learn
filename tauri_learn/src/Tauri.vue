<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";

const message = ref("");

async function jbvue() {
  message.value = await invoke("jbvue", { name: "this is jb vue" });
}
</script>


<template>
    <div @submit.prevent="jbvue">{{ message }}</div>
</template>
