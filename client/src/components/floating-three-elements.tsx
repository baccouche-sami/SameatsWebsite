import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function FloatingThreeElements() {
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
    camera.position.z = 20;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: window.innerWidth > 768,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes optimized for mobile
    const shapes: THREE.Mesh[] = [];
    const shapeCount = window.innerWidth < 768 ? 5 : 12;
    
    for (let i = 0; i < shapeCount; i++) {
      // Simple geometries for better performance
      const geometries = [
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.SphereGeometry(0.8, 8, 6),
        new THREE.ConeGeometry(0.8, 1.5, 6),
        new THREE.OctahedronGeometry(1)
      ];
      
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.08 + Math.random() * 0.15, 0.7, 0.5),
        transparent: true,
        opacity: 0.4,
        wireframe: true
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      scene.add(mesh);
      shapes.push(mesh);
    }

    // Reduced particle count for mobile performance
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = window.innerWidth < 768 ? 200 : 500;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 80;
      posArray[i + 1] = (Math.random() - 0.5) * 80;
      posArray[i + 2] = (Math.random() - 0.5) * 60;

      // Orange to yellow gradient
      const t = Math.random();
      colorArray[i] = 1;
      colorArray[i + 1] = 0.4 + t * 0.4;
      colorArray[i + 2] = t * 0.2;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 0.5 : 0.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Optimized animation loop
    let lastTime = 0;
    const targetFPS = 30; // Reduced FPS for mobile
    const interval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      animationRef.current = requestAnimationFrame(animate);

      if (currentTime - lastTime < interval) return;
      lastTime = currentTime;

      // Slow, smooth animations
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.002 + index * 0.0005;
        shape.rotation.y += 0.001 + index * 0.0005;
        shape.position.y += Math.sin(currentTime * 0.0005 + index) * 0.01;
      });

      renderer.render(scene, camera);
    };

    animate(0);

    // Handle resize
    const handleResize = () => {
      if (!rendererRef.current) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };

    window.addEventListener('resize', handleResize);

    // Subtle mouse/touch interaction
    const handlePointerMove = (event: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in event ? event.touches[0]?.clientX : event.clientX;
      const clientY = 'touches' in event ? event.touches[0]?.clientY : event.clientY;
      
      if (clientX === undefined || clientY === undefined) return;
      
      const mouseX = (clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(clientY / window.innerHeight) * 2 + 1;
      
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      
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
      className="fixed inset-0 -z-20 opacity-30 pointer-events-none"
    />
  );
}