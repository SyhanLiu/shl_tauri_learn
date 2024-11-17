import { createApp } from "vue";
import App from "./App.vue";
import Tauri from "./Tauri.vue";

const app = createApp(App);
const tauri = createApp(Tauri);

app.mount("#app");
tauri.mount("#tauri");
