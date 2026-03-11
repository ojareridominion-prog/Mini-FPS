function createTestSec() {
    const pistol = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: 0x111111 });
    
    const slide = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.1, 0.3), mat);
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.2, 0.08), mat);
    grip.position.y = -0.15;
    
    pistol.add(slide, grip);
    return pistol;
}
