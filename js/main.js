const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 
	window.innerWidth / window.innerHeight, 
	10, 
	1000 
);

const renderer = new THREE.WebGLRenderer();
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

renderer.render(scene, camera);