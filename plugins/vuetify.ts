import { createVuetify } from "vuetify";
import {
  VLayout,
  VAppBar,
  VNavigationDrawer,
  VMain,
  VCard,
  VSwitch,
  VAlert,
  VBtn,
} from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: {
      VLayout,
      VAppBar,
      VNavigationDrawer,
      VMain,
      VCard,
      VSwitch,
      VAlert,
      VBtn,
    },
    directives,
    theme: {
      themes: {
        light: {
          colors: {
            primary: "#41b883",
            background: "#35495e",
            error: "#d63031",
            info: "#0984e3",
            secondary: "#fdcb6e",
            success: "#00cec9",
            surface: "#6c5ce7",
            warning: "#2d3436",
          },
          dark: false,
          variables: {},
        },
      },
    },
    locale: {},
    ssr: false,
  });

  nuxtApp.vueApp.use(vuetify);
});
