import { Viewer, Cartographic } from 'cesium'
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
  scene3DOnly: true
})
viewer._cesiumWidget._creditContainer.style.display = 'none'
//地面大气效果
viewer.scene.globe.showGroundAtmosphere = false
//FPS 帧率显示
// viewer.scene.debugShowFramesPerSecond = true;

var options = {}
// 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是Cesium.Cartographic 和 Cesium.Rectangle.
options.defaultResetView = Cartographic.fromDegrees(116.39, 39.9, 5000000.0)
// 用于启用或禁用罗盘。true是启用罗盘，false是禁用罗盘。默认值为true。如果将选项设置为false，则罗盘将不会添加到地图中。
options.enableCompass = true
// 用于启用或禁用缩放控件。true是启用，false是禁用。默认值为true。如果将选项设置为false，则缩放控件将不会添加到地图中。
options.enableZoomControls = true
// 用于启用或禁用距离图例。true是启用，false是禁用。默认值为true。如果将选项设置为false，距离图例将不会添加到地图中。
options.enableDistanceLegend = true
// 用于启用或禁用指南针外环。true是启用，false是禁用。默认值为true。如果将选项设置为false，则该环将可见但无效。
options.enableCompassOuterRing = true
viewerCesiumNavigationMixin(viewer, options)
