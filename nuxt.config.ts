import { fileURLToPath } from "node:url";

// import vuetifyPlugin from "vite-plugin-vuetify";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false,
    tsConfig: {
      compilerOptions: {
        paths: {
          "#ok": ["./src"],
          "ok/*": ["./src/*"],
        },
        types: ["vuetify"],
      },
    },
    // typeCheck: "build",
  },
  telemetry: false,
  builder: "vite",
  // css: [
  //   "vuetify/lib/styles/main.sass",
  //   // "@mdi/font/css/materialdesignicons.min.css",
  // ],

  css: ["@/styles/main.scss", "@/styles/my-styles.scss"],

  // build: {
  //   analyze: true,
  // },

  build: {
    transpile: [
      (transpileOptions: any) => {
        console.log("ok, ok");

        console.log(JSON.stringify(transpileOptions));

        const { isDev } = transpileOptions;
        return isDev ? undefined : "vuetify";
      },
    ],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    resolve: {
      extensions: [".mjs", ".js", ".ts", ".json", ".vue"],
    },
  },
  // target: 'static'
  // globals: {
  //   id: () => "__app",
  //   context: () => "__DATA__",
  // },

  alias: {
    "@styles": fileURLToPath(new URL("./styles", import.meta.url)),
  },

  components: {
    dirs: ["shared", "icons"].map((dir) => ({
      path: "@/components/" + dir,
      global: true,
    })),
  },

  sourcemap: {
    client: false,
  },

  srcDir: "src/",

  // devServer: {
  //   port: 8080,
  //   host: "localhost",
  //   url: "http://localhost:8080",
  // },

  // khong duoc
  // modules: [
  //   async (options, nuxt) => {
  //     nuxt.hooks.hook("vite:extendConfig", (config) => {
  //       config.plugins.push(
  //         vuetifyPlugin({
  //           styles: {
  //             configFile: "styles/main.scss",
  //           },
  //         })
  //       );
  //     });
  //   },
  // ],

  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap",
        },
      ],
    },
  },
});
