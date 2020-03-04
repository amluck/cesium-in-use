<template>
  <div>
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
import { Viewer, Cartographic, UrlTemplateImageryProvider } from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import viewerCesiumNavigationMixin from '@znemz/cesium-navigation'
import '@znemz/cesium-navigation/dist/index.css'

export default {
  mounted() {
    this.initViewer()
  },
  methods: {
    initViewer() {
      const viewer = (this.$viewer = new Viewer('cesiumContainer', {
        baseLayerPicker: false,
        fullscreenButton: false,
        geocoder: false,
        homeButton: false,
        navigationHelpButton: false,
        sceneModePicker: false,
        timeline: false,
        animation: false,
        imageryProvider: googleMapProvider
      }))
      viewer._cesiumWidget._creditContainer.style.display = 'none'
      viewer.scene.globe.showGroundAtmosphere = false

      let googleMapProvider = new UrlTemplateImageryProvider({
        url: 'http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali'
      })

      this.initNavgationBar(viewer)
    },
    initNavgationBar(viewer) {
      var options = {}
      options.defaultResetView = Cartographic.fromDegrees(116.39, 39.9, 5000000.0)
      options.enableCompass = true
      options.enableZoomControls = true
      options.enableDistanceLegend = true
      options.enableCompassOuterRing = true
      viewerCesiumNavigationMixin(viewer, options)
    }
  }
}
</script>

<style scoped>
#cesiumContainer {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
