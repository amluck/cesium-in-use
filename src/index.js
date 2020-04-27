import { Viewer, Cartographic, UrlTemplateImageryProvider } from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import './css/main.css'
import viewerCesiumNavigationMixin from '@znemz/cesium-navigation'
import '@znemz/cesium-navigation/dist/index.css'

var viewer = new Viewer('cesiumContainer', {
  baseLayerPicker: false,
  fullscreenButton: false,
  geocoder: false,
  homeButton: false,
  navigationHelpButton: false,
  sceneModePicker: false,
  timeline: false,
  animation: false,
  scene3DOnly: true,
  imageryProvider: googleMapProvider,
})

var googleMapProvider = new UrlTemplateImageryProvider({
  url: 'http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali',
})
viewer._cesiumWidget._creditContainer.style.display = 'none'
//地面大气效果
viewer.scene.globe.showGroundAtmosphere = false
//FPS 帧率显示
// viewer.scene.debugShowFramesPerSecond = true;

var options = {}
options.defaultResetView = Cartographic.fromDegrees(116.39, 39.9, 5000000.0)
options.enableCompass = true
options.enableZoomControls = true
options.enableDistanceLegend = true
options.enableCompassOuterRing = true
viewerCesiumNavigationMixin(viewer, options)
