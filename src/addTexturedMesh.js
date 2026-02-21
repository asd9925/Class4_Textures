import * as THREE from 'three'

export function addTexturedMesh(){

    const tLoader = new THREE.TextureLoader()
    const color = tLoader.load('/color.png')

    const normal = tLoader.load('/normal.png')

    const displace = tLoader.load('/displace.png')

    const ao = tLoader.load('/ao.png')

    const gold = tLoader.load('/gold.png')

    const mat = tLoader.load('/mat.png')

    //radius and amount of segments as arguments
    const geometry = new THREE.SphereGeometry(1, 256, 256);

    geometry.setAttribute('uv2', new THREE.BufferAttribute(geometry.attributes.uv.array, 2))

    const material = new THREE.MeshPhysicalMaterial({
        map: color,
        // matMap: mat,
        // goldMap: gold,
        aoMap: ao,
        aoMapIntensity: 5,
        normalMap: normal,
        displacementMap: displace,
        displacementScale: 0.3,
        emissive: 0x0000ff,
        emissiveIntensity: 1,
        metalness: 0.1,
        roughness: 0,
        transmission: 0.5,
        ior: 2.33,
    })
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
}