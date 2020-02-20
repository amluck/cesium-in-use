import { Viewer } from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import './css/main.css'

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
