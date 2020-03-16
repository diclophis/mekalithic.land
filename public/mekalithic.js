//import * as THREE from './three.module.js';

console.log(THREE);

var camera, controls, scene, renderer;

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	render();
}

function init() {
	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 100, 2000000 );

	scene = new THREE.Scene();

	var helper = new THREE.GridHelper( 10000, 4, 0xffffff, 0xffffff );
	scene.add( helper );

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

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
