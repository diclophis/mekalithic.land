//import * as THREE from './three.module.js';

console.log(THREE);

var camera, controls, scene, renderer;


function clientWidth() {
  //return document.documentElement.clientWidth;
  return document.body.clientWidth;
}

function clientHeight() {
  //return document.documentElement.clientHeight;
  return document.body.clientHeight;
}

function onWindowResize() {
	camera.aspect = clientWidth() / clientHeight();
	camera.updateProjectionMatrix();
	renderer.setSize( clientWidth(), clientHeight() );
	render();
}

function init() {

//let element = document.getElementById("top");
//while (element.firstChild) {
//  element.removeChild(element.firstChild);
//}

  document.body.style = "padding: 0; margin: 0; width: 100%; height: 100%; position: absolute; overflow: hidden; background: black;";

	camera = new THREE.PerspectiveCamera( 60, clientWidth() / clientHeight(), 100, 2000000 );

	scene = new THREE.Scene();

	var helper = new THREE.GridHelper( 10000, 4, 0xffffff, 0xffffff );
	scene.add( helper );

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( clientWidth(), clientHeight() );

  var sceneContainer = document.getElementById("scene-container");

	sceneContainer.appendChild( renderer.domElement );

	//controls = new OrbitControls( camera, renderer.domElement );
	//controls.addEventListener( 'change', render );
	////controls.maxPolarAngle = Math.PI / 2;
	//controls.enableZoom = false;
	//controls.enablePan = false;

	//initSky();

	window.addEventListener( 'resize', onWindowResize, false );
}

function render() {
	renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame( animate );

	camera.position.set( Math.sin(Date.now() * 0.001) * 1000.0, 10000, 20000 );
	camera.lookAt( 0, 0, 0 );

  render();
}

init();
animate();
