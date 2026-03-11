function createTestPry() {
    const rifle = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: 0x222222 });
    
    const barrel = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 1), mat);
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.2, 0.5), mat);
    body.position.z = -0.3;
    
    rifle.add(barrel, body);
    return rifle;
}
