// Testenv.js
function createTestEnv() {
    const envGroup = new THREE.Group();

    // Materials
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x333333 }); // Dark concrete
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x444444 });

    // 1. Floor
    const floorGeo = new THREE.PlaneGeometry(50, 50);
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2; // Lay it flat
    envGroup.add(floor);

    // 2. Basic Walls (Simple Warehouse Box)
    const wallGeo = new THREE.BoxGeometry(50, 10, 1);
    
    const backWall = new THREE.Mesh(wallGeo, wallMat);
    backWall.position.set(0, 5, -25);
    envGroup.add(backWall);

    const leftWall = new THREE.Mesh(wallGeo, wallMat);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-25, 5, 0);
    envGroup.add(leftWall);

    const rightWall = new THREE.Mesh(wallGeo, wallMat);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(25, 5, 0);
    envGroup.add(rightWall);

    return envGroup;
}
