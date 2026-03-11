// Testplayer.js
// This creates a placeholder 3D model for your soldier.
// Later, you will replace this code with a GLTFLoader to load your actual .glb soldier file.

function createTestPlayer() {
    // Create a group to hold all body parts together
    const playerGroup = new THREE.Group();

    // Material for the soldier (Desert camo color based on your image)
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x8b7355 });
    const gearMaterial = new THREE.MeshStandardMaterial({ color: 0x4a4a4a }); // Darker for vest/mask

    // 1. Torso
    const torsoGeometry = new THREE.BoxGeometry(1, 1.2, 0.5);
    const torso = new THREE.Mesh(torsoGeometry, bodyMaterial);
    torso.position.y = 1.6;
    playerGroup.add(torso);

    // 2. Head
    const headGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const head = new THREE.Mesh(headGeometry, gearMaterial);
    head.position.y = 2.6; // Sitting on top of torso
    playerGroup.add(head);

    // 3. Legs
    const legGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1);
    
    const leftLeg = new THREE.Mesh(legGeometry, bodyMaterial);
    leftLeg.position.set(-0.3, 0.5, 0);
    playerGroup.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeometry, bodyMaterial);
    rightLeg.position.set(0.3, 0.5, 0);
    playerGroup.add(rightLeg);

    // 4. Arms
    const armGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1);
    
    const leftArm = new THREE.Mesh(armGeometry, bodyMaterial);
    leftArm.position.set(-0.7, 1.6, 0);
    playerGroup.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, bodyMaterial);
    rightArm.position.set(0.7, 1.6, 0);
    playerGroup.add(rightArm);

    // Center the group so it rotates cleanly
    playerGroup.position.y = -1; 

    return playerGroup;
}
