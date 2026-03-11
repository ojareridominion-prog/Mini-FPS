
function createTestPlayer() {
    const group = new THREE.Group();
    
    // Materials
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xffcc99, roughness: 0.4, metalness: 0.1 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: 0x2244aa, roughness: 0.6 });
    const torsoMat = new THREE.MeshStandardMaterial({ color: 0xcc3333, roughness: 0.5 }); // red
    const armMat = new THREE.MeshStandardMaterial({ color: 0xcc3333, roughness: 0.5 });
    const handMat = new THREE.MeshStandardMaterial({ color: 0xffcc99, roughness: 0.4 });

    // Head (rounded cube or cylinder)
    const headGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.5, 16);
    const head = new THREE.Mesh(headGeo, skinMat);
    head.position.y = 2.0;
    head.castShadow = true;
    head.receiveShadow = true;
    group.add(head);

    // Torso
    const torsoGeo = new THREE.BoxGeometry(0.8, 1.0, 0.4);
    const torso = new THREE.Mesh(torsoGeo, torsoMat);
    torso.position.y = 1.25;
    torso.castShadow = true;
    torso.receiveShadow = true;
    group.add(torso);

    // Hips
    const hipsGeo = new THREE.BoxGeometry(0.7, 0.3, 0.4);
    const hips = new THREE.Mesh(hipsGeo, pantsMat);
    hips.position.y = 0.65;
    hips.castShadow = true;
    hips.receiveShadow = true;
    group.add(hips);

    // Legs
    const legGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.9, 8);
    const leftLeg = new THREE.Mesh(legGeo, pantsMat);
    leftLeg.position.set(-0.25, 0.0, 0);
    leftLeg.castShadow = true;
    leftLeg.receiveShadow = true;
    group.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeo, pantsMat);
    rightLeg.position.set(0.25, 0.0, 0);
    rightLeg.castShadow = true;
    rightLeg.receiveShadow = true;
    group.add(rightLeg);

    // Arms
    const armGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.8, 8);
    const leftArm = new THREE.Mesh(armGeo, armMat);
    leftArm.position.set(-0.6, 1.4, 0);
    leftArm.rotation.z = 0.2; // slight angle
    leftArm.castShadow = true;
    leftArm.receiveShadow = true;
    group.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, armMat);
    rightArm.position.set(0.6, 1.4, 0);
    rightArm.rotation.z = -0.2;
    rightArm.castShadow = true;
    rightArm.receiveShadow = true;
    group.add(rightArm);

    // Hands (small spheres)
    const handGeo = new THREE.SphereGeometry(0.15, 8);
    const leftHand = new THREE.Mesh(handGeo, handMat);
    leftHand.position.set(-0.8, 1.0, 0);
    leftHand.castShadow = true;
    group.add(leftHand);

    const rightHand = new THREE.Mesh(handGeo, handMat);
    rightHand.position.set(0.8, 1.0, 0);
    rightHand.castShadow = true;
    group.add(rightHand);

    return group;
                                             }
