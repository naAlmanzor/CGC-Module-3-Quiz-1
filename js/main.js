const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 
	window.innerWidth / window.innerHeight, 
	10, 
	1000 
);

camera.position.set(0, 70, 0);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(200, 500, 300);
scene.add(directionalLight); 

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

/*															DESIGNING																	*/ 

/*														  Room Creation 																*/
function createWall(){
	
	const wall = new THREE.Mesh( 
		new THREE.BoxGeometry(100, 20.30, 4),  
		new THREE.MeshLambertMaterial({color: 0x343434}) 
	);

	return wall;

}

function createShortWall(){

	const wall = new THREE.Mesh( 
		new THREE.BoxGeometry(60, 20.30, 4),  
		new THREE.MeshLambertMaterial({color: 0x343434}) 
	);

	return wall;

}

function createWindows(){
	const windowGrp = new THREE.Group();

	const wallWindowHolder = new THREE.Mesh( 
		new THREE.BoxGeometry(12.5, 6, 4),  
		new THREE.MeshLambertMaterial({color: 0xffffff}) 
	);
	wallWindowHolder.position.y = -7;
	windowGrp.add(wallWindowHolder);

	const wallWindow = new THREE.Mesh( 
		new THREE.BoxGeometry(12.5, 20.30, 0.2),  
		new THREE.MeshLambertMaterial({color: 0xffffff, opacity: 0.5, transparent: true}) 
	);
	windowGrp.add(wallWindow);

	return windowGrp;
}

function createWallRight(){

	const wallExtenstion = new THREE.Group(); 

	const topWall = new THREE.Mesh( 
		new THREE.BoxGeometry(10, 20.30, 4),  
		new THREE.MeshLambertMaterial({color: 0x343434}) 
	);
	topWall.position.set(24, 0, 0);
	wallExtenstion.add(topWall);
	
	const wallWindowsTop = new createWindows();
	wallWindowsTop.position.set(12.7, 0, 0);
	wallExtenstion.add(wallWindowsTop);
	
	const wallWindowsBottom = new createWindows();
	wallWindowsBottom.position.set(-14.5, 0, 0);
	wallExtenstion.add(wallWindowsBottom);

	const middleWall = new THREE.Mesh( 
		new THREE.BoxGeometry(15, 20.30, 4),  
		new THREE.MeshLambertMaterial({color: 0x343434}) 
	);
	middleWall.position.set(-1, 0, 0)
	wallExtenstion.add(middleWall);

	const bottomWall = new THREE.Mesh( 
		new THREE.BoxGeometry(8, 20.30, 4),  
		new THREE.MeshLambertMaterial({color: 0x343434}) 
	);
	bottomWall.position.set(-25, 0, 0);
	wallExtenstion.add(bottomWall);

	const coverWall = new THREE.Mesh(
		new THREE.BoxBufferGeometry(60, 2, 4),
		new THREE.MeshLambertMaterial({color: 0x343434})
	)
	coverWall.position.y = 9.2;
	wallExtenstion.add(coverWall);

	return wallExtenstion;
}

function createWallDetail(){
	const details = new THREE.Group();

	const detail = new THREE.Mesh(
		new THREE.BoxBufferGeometry( 10, 20, 2),
		new THREE.MeshLambertMaterial( {color: 0xD29C71} )
	)
	details.add(detail);

	return details;
}

function createRoom(){

	const room = new THREE.Group();

	const topWall = createWall();
	topWall.position.set(0, 3.6, -25)
	room.add(topWall);

	const leftWall = createShortWall();
	leftWall.rotateY(Math.PI/2);
	leftWall.position.set(-48, 3.6, 3);
	room.add(leftWall);

	const rightWall = createWallRight();
	rightWall.rotateY(Math.PI/2);
	rightWall.position.set(48, 3.6, 3);
	room.add(rightWall);

	const bottomWall = createWall();
	bottomWall.position.set(0, 3.6, 31)
	room.add(bottomWall);

	const details = new THREE.Group();

	const detail1 = createWallDetail();
	detail1.position.set(2, 4, 0)
	details.add(detail1);

	const detail2 = createWallDetail();
	detail2.position.set(16, 4, 0)
	details.add(detail2);

	const detail3 = createWallDetail();
	detail3.position.set(30, 4, 0)
	details.add(detail3);
	
	details.position.z = 28
	room.add(details);

	const doorGrp = new THREE.Group();
	const door = new THREE.Mesh(
		new THREE.BoxBufferGeometry( 8, 13, 2),
		new THREE.MeshLambertMaterial( {color: 0xD29C71} )
	)
	doorGrp.add(door);

	const knob = new THREE.Mesh(
		new THREE.BoxBufferGeometry( 1, 1, 2),
		new THREE.MeshLambertMaterial( {color: 0x343434} )
	)
	knob.position.set(2, -1, 0.4);
	doorGrp.add(knob);

	room.add(doorGrp);
	doorGrp.position.set(15, 0, -23.9)

	const floor = new THREE.Mesh( 
		new THREE.PlaneGeometry( 100, 56, 1, 1 ), 
		new THREE.MeshLambertMaterial( { color: 0xCD7672 } ) 
	);
	floor.material.side = THREE.DoubleSide;
	floor.rotation.x = 11;
	floor.position.z = 3;
	floor.position.y= -6.5;
	room.add(floor);

	return room;

}
const room = createRoom();
scene.add(room); 


/*													       TV Area Design																*/

/* Couch */ 
function createCouchSides(){
	
	const couchSide = new THREE.Mesh(
		new THREE.BoxBufferGeometry(3, 6, 6),
		new THREE.MeshLambertMaterial({ color: 0xffffff})
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
		new THREE.MeshLambertMaterial({ color: 0xffffff})
	);
	couchBtwnBack.position.set(0,-3,0);
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
		new THREE.MeshLambertMaterial({ color: 0xffffff})
	);
	couchLeftGrp.add(couchBackLeft);
	couchBackLeft.position.set(-8, -3, -0.2);

	const couchLeft = createCouchSides();
	couchLeft.position.set(-11.4, -6, 4.6);
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
		new THREE.MeshLambertMaterial({ color: 0xffffff})
	);
	couchRightGrp.add(couchBackRight);
	couchBackRight.position.set(12, -3, -0.2);
	
	const cushionRight = createCushion();
	cushionRight.position.set(10.8, -5, 4);
	couchRightGrp.add(cushionRight);

	const couchRight = createCouchSides();
	couchRight.position.set(14.5, -5, 4.9);
	couchRightGrp.add(couchRight);

	return couchRightGrp;
};

function createCouch() {

	const couch = new THREE.Group();

	const couchLeft  = createCouchLeft();
	couchLeft.position.x = 1;
	couch.add(couchLeft);

	const couchBtwn = createCouchBetween();
	couchBtwn.position.set(2.6, 0, -0.2);
	couch.add(couchBtwn);

	const couchRight  = createCouchRight();
	couch.add(couchRight);

	couch.position.set(-25, 0, 0);
	return couch;
}

/* Mat */ 
function createMat(){
	const mat = new THREE.Mesh(
		new THREE.BoxBufferGeometry(20, 2, 25),
		new THREE.MeshLambertMaterial({ color: 0xEEB462})
	);

	mat.position.set(-23, 0, 22);

	return mat;
}

/* TV Corner */ 
function createTV(){
	const tv = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 5, 0.6),
		new THREE.MeshLambertMaterial({color:0x4A4A4A})
	);
	
	tv.position.set(-25, 3, 47);
	return tv;
}

function createGlassTbl(){
	const glassTbl = new THREE.Group();

	const glass = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 1, 8),
		new THREE.MeshLambertMaterial({color:0xffffff, opacity: 0.8, transparent: true})
	);
	glassTbl.add(glass);

	return glassTbl;
}

function createTVtable(){
	const tvTbl = new THREE.Group();

	const table = new THREE.Mesh(
		new THREE.BoxBufferGeometry(20, 2, 8),
		new THREE.MeshLambertMaterial({color: 0xffffff})
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

	const glassTbl = createGlassTbl();
	glassTbl.position.set(-22, 2.9, 17);
	tvArea.add(glassTbl);

	return tvArea;
}

const tvArea = createTVarea();
tvArea.position.set(-5, 0, -19)
scene.add(tvArea);


/*													       	  Table Area Design																*/

/* Chairs */ 
function createRoundChair(){
	const roundChair = new THREE.Mesh(
		new THREE.CylinderGeometry( 3, 3, 2, 64 ),
		new THREE.MeshLambertMaterial( {color: 0x343434} )
	);

	return roundChair;
}

/* Table Area */
function createTblArea(){
	const tblArea = new THREE.Group();

	const roundChairTop = createRoundChair();
	roundChairTop.position.set(36, 0, 17);
	tblArea.add(roundChairTop);

	const roundChairBtm = createRoundChair();
	roundChairBtm.position.set(33, 0, 33);
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
tblArea.position.set(0, 0, -21)
scene.add(tblArea);

/*													       		Miscellaneous 																*/

/* Lamp */ 
function createLampStand (){

	const lampStand = new THREE.Group();

	const lampStandCylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( 1, 2, 2, 30 ),
		new THREE.MeshBasicMaterial( {color: 0x1A1E2A} )
	);
	lampStandCylinder.position.y = -6;
	lampStand.add(lampStandCylinder)

	const lampStick = new THREE.Mesh(
		new THREE.BoxBufferGeometry(0.2, 6),
		new THREE.MeshLambertMaterial({color:0x1A1E2A})
	);
	lampStick.position.y = -2;
	lampStand.add(lampStick)

	return lampStand;
}

function createLampCover(){

	const geometry = new THREE.CylinderGeometry( 1.5, 2, 4, 30 );
	const material = new THREE.MeshToonMaterial( {color: 0xF8E972} );
	const lampCover = new THREE.Mesh( geometry, material );
	lampCover.position.y = 4;
	return lampCover;
};

function createLamp(){
	const lamp = new THREE.Group();

	const lampStand = createLampStand();
	lamp.add(lampStand);

	const lampCover = createLampCover();
	lamp.add(lampCover);

	const light = new THREE.PointLight( 0xff0000, 2, 50 );
	lamp.add(light);

	return lamp;
}

const lamp = createLamp();
lamp.position.set(-12, 0, -21);
scene.add(lamp);

/* Plants */
function createPlant(){

	const plant = new THREE.Group();

	const pot = new THREE.Mesh(
		new THREE.CylinderGeometry(2, 1.5, 1.95, 30),
		new THREE.MeshToonMaterial({color: 0x664033})
	);
	plant.add(pot);

	const bush = new THREE.Mesh(
		new THREE.SphereGeometry( 2, 32, 16 ),
		new THREE.MeshBasicMaterial( { color: 0x518C4F	 } )
	);
	bush.position.y = 2 
	plant.add(bush);

	return plant;
}

const plant1 = createPlant();
plant1.position.set(42, 0, 26.2);
scene.add(plant1);

const plant2 = createPlant();
plant2.position.set(42, 0, -20);
scene.add(plant2);

/* Frame */
function createframe(){
	const frame = new THREE.Mesh(
		new THREE.BoxBufferGeometry(0.2,3,3.4),
		new THREE.MeshLambertMaterial({color: 0xffffff})
	)
	
	frame.position.set(40, 10, 3)
	return frame;
}

scene.add(createframe());

renderer.render(scene, camera);