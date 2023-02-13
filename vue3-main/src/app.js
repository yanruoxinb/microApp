import { registerMicroApps, start } from "qiankun";

const apps = [
  {
    name: "antd-pro-umi",
    entry: "//localhost:8888",
    container: "#root",
    activeRule: "/antd-pro",
  },
  {
    name: "main-app",
    entry: "//localhost:10086",
    container: "#app",
    activeRule: "/main",
  },
  {
    name: "react-vite",
    entry: "//localhost:5173",
    container: "#root",
    activeRule: "/react-vite",
  },
  {
    name: "vue",
    entry: "//localhost:10000",
    container: "#app",
    activeRule: "/vue3",
  },
];

const lifeCycles = {
  beforeLoad: [
    (app) => {
      console.log("[LifeCycle] before load %c%s", "color: green;", app.name);
    },
  ],
  beforeMount: [
    (app) => {
      console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
    },
  ],
  afterUnmount: [
    (app) => {
      console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
    },
  ],
};

registerMicroApps(apps, lifeCycles);
start();

function render() {}

export function mount(props) {
  render();
}

export function unmount(props) {}
