import { createVuetify } from "vuetify";
import { VExpandTransition } from "vuetify/components/transitions";
import { VAlert } from "vuetify/components/VAlert";
import { VApp } from "vuetify/components/VApp";
import { VAppBar } from "vuetify/components/VAppBar";
import { VAvatar } from "vuetify/components/VAvatar";
import { VBtn } from "vuetify/components/VBtn";
import {
  VCard,
  VCardTitle,
  VCardSubtitle,
  VCardText,
  VCardActions,
  VCardItem,
} from "vuetify/components/VCard";
import { VCheckbox, VCheckboxBtn } from "vuetify/components/VCheckbox";
import { VChip } from "vuetify/components/VChip";
import { VCombobox } from "vuetify/components/VCombobox";
import { VDivider } from "vuetify/components/VDivider";
import {
  VExpansionPanels,
  VExpansionPanel,
  VExpansionPanelTitle,
  VExpansionPanelText,
} from "vuetify/components/VExpansionPanel";
import { VForm } from "vuetify/components/VForm";
import { VContainer, VRow, VCol, VSpacer } from "vuetify/components/VGrid";
import { VIcon } from "vuetify/components/VIcon";
import { VImg } from "vuetify/components/VImg";
import { VInput } from "vuetify/components/VInput";
import { VLayout } from "vuetify/components/VLayout";
import { VList, VListItem, VListItemTitle } from "vuetify/components/VList";
import { VMain } from "vuetify/components/VMain";
import { VMenu } from "vuetify/components/VMenu";
import { VNavigationDrawer } from "vuetify/components/VNavigationDrawer";
import { VRadio } from "vuetify/components/VRadio";
import { VRadioGroup } from "vuetify/components/VRadioGroup";
import { VSelect } from "vuetify/components/VSelect";
import { VSheet } from "vuetify/components/VSheet";
import { VSwitch } from "vuetify/components/VSwitch";
import { VTextField } from "vuetify/components/VTextField";
import { VTooltip } from "vuetify/components/VTooltip";
import * as directives from "vuetify/directives";
// import { mdi, aliases } from "vuetify/iconsets/mdi";
import { mdi, aliases } from "vuetify/iconsets/mdi-svg";
// import { createCssTransition } from "vuetify/lib/components/transitions/createTransition.mjs";
import colors from "vuetify/lib/util/colors.mjs";
import { en } from "vuetify/locale";

// console.log(JSON.stringify(colors.grey, null, 2));

// const fade1Transition = createCssTransition("fade1-transition");

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    defaults: {
      global: {
        // ripple: false,
      },
    },
    components: {
      VApp,
      VLayout,
      VAppBar,
      VNavigationDrawer,
      VMain,
      VCard,
      VCardText,
      VCardTitle,
      VCardSubtitle,
      VCardActions,
      VCardItem,
      VSwitch,
      VAlert,
      VBtn,
      VIcon,
      VContainer,
      VRow,
      VCol,
      VSelect,
      VSheet,
      VMenu,
      VList,
      VListItem,
      VListItemTitle,
      VExpansionPanels,
      VExpansionPanel,
      VExpansionPanelTitle,
      VExpansionPanelText,
      VAvatar,
      VImg,
      VChip,
      VSpacer,
      VExpandTransition,
      VDivider,
      VCheckbox,
      VCheckboxBtn,
      VTooltip,
      VTextField,
      VCombobox,
      VForm,
      VInput,
      VRadioGroup,
      VRadio,
    },
    directives,
    theme: {
      defaultTheme: "myCustomTheme",
      themes: {
        myCustomTheme: {
          colors: {
            primary: "#41b883",
            background: "#fff",
            "on-background": "#35495e",
            error: "#d63031",
            info: "#0984e3",
            secondary: "#fdcb6e",
            success: "#00cec9",
            // surface: "#6c5ce7",
            surface: "#fff",
            warning: "#2d3436",
            something: "#00ff00",
            grey: colors.grey.base,
            "grey-lighten-2": colors.grey.lighten2,
            "grey-lighten-1": colors.grey.lighten1,
            "grey-darken-1": colors.grey.darken2,
            "grey-darken-2": colors.grey.darken2,
            ...colors.shades,
          },
          dark: false,
          variables: {},
        },
      },
      variations: {
        colors: ["primary", "secondary"],
        lighten: 1,
        darken: 2,
      },
    },

    display: {
      // mobileBreakpoint: "sm",
      // thresholds: {
      //   xs: 0,
      //   sm: 340,
      //   md: 540,
      //   lg: 800,
      //   xl: 1280,
      // },
    },
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
    locale: {
      locale: "en",
      fallback: "en",
      messages: { en },
    },
    ssr: false,
  });

  nuxtApp.vueApp.use(vuetify);
  // nuxtApp.vueApp.component("fade1-transition", fade1Transition);
});
