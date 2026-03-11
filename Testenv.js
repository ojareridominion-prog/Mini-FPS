// Testenv.js
function createTestEnv() {
    const envGroup = new THREE.Group();

    // Floor with a grid pattern so you can see movement
    const floorGeo = new THREE.PlaneGeometry(100, 100);
    const floorMat = new THREE.MeshStandardMaterial({ 
        color: 0x444444, 
        side: THREE.DoubleSide 
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    envGroup.add(floor);

    // Add a Grid Helper to make movement obvious
    const grid = new THREE.GridHelper(100, 50, 0x888888, 0x444444);
    envGroup.add(grid);

    // Brighter Walls
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x777777 });
    const wallGeo = new THREE.BoxGeometry(100, 15, 1);
    
    const backWall = new THREE.Mesh(wallGeo, wallMat);
    backWall.position.set(0, 7.5, -50);
    envGroup.add(backWall);

    const leftWall = new THREE.Mesh(wallGeo, wallMat);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-50, 7.5, 0);
    envGroup.add(leftWall);

    return envGroup;
}
