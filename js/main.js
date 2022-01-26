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

function createCouchSides(){
	
	const couchSide = new THREE.Mesh(
		new THREE.BoxBufferGeometry(3, 6, 6),
		new THREE.MeshLambertMaterial({ color: 0x8C8C8C})
	);

	return couchSide;
}

function createCushion(){
	
	const cushion = new THREE.Mesh(
		new THREE.BoxBufferGeometry(5.6, 5, 8),
		new THREE.MeshLambertMaterial({ color: 0x343434})
	);

	return cushion;
}

function createCouchBetween(){
	const couchBtwnGrp = new THREE.Group();

	const couchBtwnBack = new THREE.Mesh(
		new THREE.BoxBufferGeometry(10, 10, 4),
		new THREE.MeshLambertMaterial({ color: 0x8C8C8C})
	);
	couchBtwnGrp.add(couchBtwnBack);

	const cushionBtwn = new THREE.Mesh(
		new THREE.BoxBufferGeometry(10, 5, 8),
		new THREE.MeshLambertMaterial({ color: 0x343434})
	);
	cushionBtwn.position.set(-0.3, -5, 4.1);
	couchBtwnGrp.add(cushionBtwn);

	return couchBtwnGrp;
}

function createCouchLeft(){
	const couchLeftGrp = new THREE.Group();
	const couchBackLeft = new THREE.Mesh(
		new THREE.BoxBufferGeometry(8, 10, 4),
		new THREE.MeshLambertMaterial({ color: 0x8C8C8C})
	);
	couchLeftGrp.add(couchBackLeft);
	couchBackLeft.position.set(-8, 0, -0.2);

	const couchLeft = createCouchSides();
	couchLeft.position.set(-12, -2, 5);
	couchLeftGrp.add(couchLeft);

	const cushionLeft = createCushion();
	cushionLeft.position.set(-7, -5, 4);
	couchLeftGrp.add(cushionLeft);

	return couchLeftGrp;
};

function createCouchRight(){
	const couchRightGrp = new THREE.Group();

	const couchBackRight = new THREE.Mesh(
		new THREE.BoxBufferGeometry(8, 10, 4),
		new THREE.MeshLambertMaterial({ color: 0x8C8C8C})
	);
	couchRightGrp.add(couchBackRight);
	couchBackRight.position.set(12, 0, -0.2);
	
	const cushionRight = createCushion();
	cushionRight.position.set(10.2, -5, 4);
	couchRightGrp.add(cushionRight);

	const couchRight = createCouchSides();
	couchRight.position.set(14.5, -2, 5);
	couchRightGrp.add(couchRight);

	return couchRightGrp;
};

function createCouch() {

	const couch = new THREE.Group();

	const couchLeft  = createCouchLeft();
	couch.add(couchLeft);

	const couchBtwn = createCouchBetween();
	couchBtwn.position.set(2, 0, -0.2);
	couch.add(couchBtwn);

	const couchRight  = createCouchRight();
	couch.add(couchRight);
	
	const couchBox = new THREE.Mesh(
		new THREE.BoxBufferGeometry(8, 5, 8),
		new THREE.MeshLambertMaterial({ color: 0x8C8C8C})
	);
	couchBox.position.set(5,0,15);
	couch.add(couchBox);

	couch.position.set(-25, 0, 0);
	return couch;
}

function createMat(){
	const mat = new THREE.Mesh(
		new THREE.BoxBufferGeometry(20, 2, 25),
		new THREE.MeshLambertMaterial({ color: 0xEEB462})
	);

	mat.position.set(-23, 0, 22);

	return mat;
}

function createTV(){
	const tv = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 5, 0.6),
		new THREE.MeshLambertMaterial({color:0x4A4A4A})
	);
	
	tv.position.set(-25, 3, 47);
	return tv;
}

function createTVtable(){
	const tvTbl = new THREE.Group();

	const table = new THREE.Mesh(
		new THREE.BoxBufferGeometry(20, 2, 8),
		new THREE.MeshLambertMaterial({color:0xffffff})
	);	
	table.position.set(-26, -4, 46.6);
	tvTbl.add(table);

	const remote = new THREE.Mesh(
		new THREE.BoxBufferGeometry(2, 1, 3),
		new THREE.MeshLambertMaterial({color:0x4A4A4A})
	)
	remote.position.set(-21, -3, 45);
	remote.rotation.y = 2;
	tvTbl.add(remote);

	return tvTbl;
}

function createTVarea(){
	const tvArea = new THREE.Group();

	const mat = createMat();
	tvArea.add(mat); 

	const tv = createTV();
	tvArea.add(tv);

	const tvTbl = createTVtable();
	tvArea.add(tvTbl);

	const couch = createCouch();
	couch.position.y = 6;
	tvArea.add(couch);

	return tvArea;
}

const tvArea = createTVarea();
scene.add(tvArea);

function createRoundChair(){
	const roundChair = new THREE.Mesh(
		new THREE.CylinderGeometry( 3, 3, 2, 64 ),
		new THREE.MeshLambertMaterial( {color: 0xffffff} )
	);

	return roundChair;
}

function createTblArea(){
	const tblArea = new THREE.Group();

	const roundChairTop = createRoundChair();
	roundChairTop.position.set(32, 0, 15);
	tblArea.add(roundChairTop);

	const roundChairBtm = createRoundChair();
	roundChairBtm.position.set(39, 0, 33);
	tblArea.add(roundChairBtm);

	const tblAreaDesk = new THREE.Mesh(
		new THREE.BoxBufferGeometry(20, 2.5, 9),
		new THREE.MeshLambertMaterial({color:0xffffff})
	);	
	tblAreaDesk.position.set(35, -4, 25);
	tblArea.add(tblAreaDesk);

	return tblArea;
};

const tblArea = createTblArea();
scene.add(tblArea);

renderer.render(scene, camera);