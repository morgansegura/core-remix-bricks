/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  tailwind: true,
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
  optimize: {
    bundle: {
      external: {
        include: ['@fontsource-variable/open-sans/wght.css'],
      },
    },
  },
}
