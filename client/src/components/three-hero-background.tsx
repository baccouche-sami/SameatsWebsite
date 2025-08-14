import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeHeroBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = window.innerWidth < 768 ? 800 : 1500;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 100;
      posArray[i + 1] = (Math.random() - 0.5) * 100;
      posArray[i + 2] = (Math.random() - 0.5) * 100;

      // Color gradient from orange to yellow
      const t = Math.random();
      colorArray[i] = 1; // R
      colorArray[i + 1] = 0.4 + t * 0.4; // G
      colorArray[i + 2] = t * 0.2; // B
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    // Particle material
    const particlesMaterial = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 0.8 : 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Floating geometric shapes
    const shapes: THREE.Mesh[] = [];
    const shapeCount = window.innerWidth < 768 ? 8 : 15;
    
    for (let i = 0; i < shapeCount; i++) {
      const geometries = [
        new THREE.BoxGeometry(2, 2, 2),
        new THREE.SphereGeometry(1, 8, 6),
        new THREE.ConeGeometry(1, 2, 6),
        new THREE.OctahedronGeometry(1.5)
      ];
      
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.1 + Math.random() * 0.1, 0.8, 0.6),
        transparent: true,
        opacity: 0.3,
        wireframe: true
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      scene.add(mesh);
      shapes.push(mesh);
    }

    // Animation
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      // Rotate particles
      particlesMesh.rotation.y += 0.002;
      particlesMesh.rotation.x += 0.001;

      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.005 + index * 0.001;
        shape.rotation.y += 0.003 + index * 0.001;
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.02;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!rendererRef.current) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      camera.position.x = mouseX * 2;
      camera.position.y = mouseY * 2;
      camera.lookAt(scene.position);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      
      // Dispose geometries and materials
      shapes.forEach(shape => {
        shape.geometry.dispose();
        (shape.material as THREE.Material).dispose();
      });
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 -z-10 opacity-60"
      style={{ pointerEvents: 'none' }}
    />
  );
}