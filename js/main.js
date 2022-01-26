const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 
	window.innerWidth / window.innerHeight, 
	10, 
	1000 
);

camera.position.set(0, 90, 0);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(200, 500, 300);
scene.add(directionalLight); 

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

function createWall(){

	const wall = new THREE.Mesh( 
		new THREE.BoxGeometry(100, 20.30, 4),  
		new THREE.MeshLambertMaterial({color: 0xDC8665}) );
	return wall;

}

function createRoom(){

	const room = new THREE.Group();

	const topWall = createWall();
	topWall.position.set(0, 3.6, -50)
	room.add(topWall);

	const leftWall = createWall();
	leftWall.rotateY(Math.PI/2);
	leftWall.position.set(-48, 3.6);
	room.add(leftWall);

	const rightWall = createWall();
	rightWall.rotateY(Math.PI/2);
	rightWall.position.set(48, 3.6);
	room.add(rightWall);

	const bottomWall = createWall();
	bottomWall.position.set(0, 3.6, 50)
	room.add(bottomWall	);

	const floor = new THREE.Mesh( 
		new THREE.PlaneGeometry( 100, 100, 1, 1 ), 
		new THREE.MeshLambertMaterial( { color: 0xCD7672 } ) 
	);
	floor.material.side = THREE.DoubleSide;
	floor.rotation.x = 11;
	floor.position.y= -6.5;
	room.add(floor);

	return room;

}
const room = createRoom();
scene.add(room); 

renderer.render(scene, camera);