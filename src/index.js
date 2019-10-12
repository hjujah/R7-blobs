import * as THREE from 'three';

// import Stats from './jsm/libs/stats.module.js';
// import { GUI } from './jsm/libs/dat.gui.module.js';
// import { OrbitControls } from './jsm/controls/OrbitControls.js';
// import { MarchingCubes } from './jsm/objects/MarchingCubes.js';
// import { ToonShader1, ToonShader2, ToonShaderHatching, ToonShaderDotted } from './jsm/shaders/ToonShader.js';
// import cameraControlsFactory from 'camera-controls';
// const CameraControls = cameraControlsFactory(THREE);


export default function R7Blobs(config) {
    this.config = config;

    this.init = () => {
        // ------------------------------------------------
        // BASIC SETUP
        // ------------------------------------------------

        // Create an empty scene
        var scene = new THREE.Scene();

        // Create a basic perspective camera
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 4;

        // Create a renderer with Antialiasing
        var renderer = new THREE.WebGLRenderer({ antialias: true });

        // Configure renderer clear color
        renderer.setClearColor("#000000");

        // Configure renderer size
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Append Renderer to DOM
        document.body.appendChild(renderer.domElement);

        // ------------------------------------------------
        // FUN STARTS HERE
        // ------------------------------------------------

        // Create a Cube Mesh with basic material
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: "#433F81" });
        var cube = new THREE.Mesh(geometry, material);

        // Add cube to Scene
        scene.add(cube);

        // Render Loop
        var render = function() {
            requestAnimationFrame(render);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            // Render the scene
            renderer.render(scene, camera);
        };

        render();
    }

    return this;
   
}
