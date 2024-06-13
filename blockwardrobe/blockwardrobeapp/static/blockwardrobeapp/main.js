import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
const loader = new GLTFLoader();

renderer.setSize( window.innerWidth/3, window.innerHeight/3 );
renderer.setAnimationLoop( animate );
document.getElementById('3dcanvas').appendChild(renderer.domElement);


const controls = new OrbitControls( camera, renderer.domElement);

controls.autoRotate = true;
controls.autoRotateSpeed = 10.0;
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
const clock = new THREE.Clock(true);
const light = new THREE.AmbientLight( 0x404040, 10 ); // soft white light
scene.add( light );
loader.load('/static/blockwardrobeapp/model.gltf', function(gltf) {
    const textureLoader = new THREE.TextureLoader();
    let newTexture = textureLoader.load('/media/skins/default.png');
    newTexture.magFilter = THREE.NearestFilter;
    newTexture.flipY = false;
    let mesh = gltf.scene;
    mesh.traverse(function(node) {
        console.log("Traverse");
        if(node.isMesh) {
            console.log(node);            
            node.material.map = newTexture;
            node.material.needsUpdate = true;
        }
    });
    scene.add(mesh);
    console.log("Added");
}, undefined, function (error) {
    console.error(error);
});

camera.position.z = 100;

controls.update();
console.log(document.getElementById('data').textContent);
function animate() {
    requestAnimationFrame(animate);
    let t = clock.getDelta();
    controls.update(t);
	renderer.render( scene, camera );
}
animate();