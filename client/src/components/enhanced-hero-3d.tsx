import { useEffect, useRef, useState } from 'react';
import { useLanguage } from "./language-provider";
import logoImage from "@assets/logo-blanc_1755211740901.png";

export function EnhancedHero3D() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [is3DSupported, setIs3DSupported] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Check for WebGL support and device performance
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    const isDesktop = window.innerWidth > 1024;
    const hasGoodPerformance = navigator.hardwareConcurrency >= 4;
    
    setIs3DSupported(!!gl && isDesktop && hasGoodPerformance);

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Only load Three.js after component is visible and conditions are met
    if (!isVisible || !is3DSupported || prefersReducedMotion || !canvasRef.current) return;

    let animationId: number;
    let renderer: any;

    // Lazy load Three.js
    import('three').then(({ Scene, PerspectiveCamera, WebGLRenderer, SphereGeometry, MeshBasicMaterial, Mesh, Group, Vector3, Clock }) => {
      if (!canvasRef.current) return;

      const scene = new Scene();
      const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new WebGLRenderer({ 
        canvas: canvasRef.current, 
        alpha: true, 
        antialias: false, // Disable for better performance
        powerPreference: "low-power"
      });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Create service elements group
      const group = new Group();
      const clock = new Clock();
      
      // Service elements with optimized geometry
      const services = [
        { color: '#FF6A00', position: new Vector3(3, 0, 0), name: 'Website' },
        { color: '#FFC700', position: new Vector3(-1.5, 2.6, 0), name: 'App' },
        { color: '#FF8C42', position: new Vector3(-1.5, -2.6, 0), name: 'BackOffice' }
      ];

      const meshes: any[] = [];
      
      services.forEach((service, index) => {
        const geometry = new SphereGeometry(0.4, 16, 12); // Reduced segments for performance
        const material = new MeshBasicMaterial({ 
          color: service.color,
          transparent: true,
          opacity: 0.8
        });
        const mesh = new Mesh(geometry, material);
        
        mesh.position.copy(service.position);
        group.add(mesh);
        meshes.push({ mesh, originalPosition: service.position.clone(), service });
      });

      scene.add(group);
      camera.position.z = 6;

      // Optimized animation loop
      const animate = () => {
        animationId = requestAnimationFrame(animate);

        const elapsed = clock.getElapsedTime();
        
        // Slow rotation of the entire group
        group.rotation.y = elapsed * 0.1;
        group.rotation.x = Math.sin(elapsed * 0.05) * 0.1;

        // Individual orbit animations
        meshes.forEach(({ mesh, originalPosition }, index) => {
          const speed = 0.3 + index * 0.1;
          const radius = 3;
          
          mesh.position.x = Math.cos(elapsed * speed) * radius;
          mesh.position.y = Math.sin(elapsed * speed) * radius;
          mesh.position.z = Math.sin(elapsed * speed * 2) * 0.5;
          
          // Subtle scale animation
          mesh.scale.setScalar(1 + Math.sin(elapsed * 2 + index) * 0.1);
        });

        renderer.render(scene, camera);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        if (!renderer) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (animationId) cancelAnimationFrame(animationId);
        if (renderer) {
          renderer.dispose();
          renderer = null;
        }
      };
    }).catch(() => {
      setIs3DSupported(false);
    });
  }, [isVisible, is3DSupported, prefersReducedMotion]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700"
    >
      {/* Progressive 3D Canvas */}
      {is3DSupported && !prefersReducedMotion && isVisible && (
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
          style={{ filter: 'blur(0.5px)' }}
        />
      )}

      {/* Enhanced fallback with CSS animations */}
      {(!is3DSupported || prefersReducedMotion) && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-secondary-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary-400/20 rounded-full blur-3xl animate-float-slow"></div>
          
          {/* Orbiting elements fallback */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 border border-primary-500/20 rounded-full animate-spin-slow"></div>
              <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-1/2 -translate-y-2 animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary-500 rounded-full animate-pulse delay-700"></div>
              <div className="absolute left-0 top-1/2 w-5 h-5 bg-primary-400 rounded-full transform -translate-y-1/2 -translate-x-2 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* Logo with enhanced animations */}
        <div className="mb-8 md:mb-12">
          <div className="relative inline-block">
            <img 
              src={logoImage} 
              alt="SAMEATS"
              className="h-20 md:h-28 w-auto mx-auto drop-shadow-2xl animate-fadeInScale hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-tight">
          <span className="block mb-4 animate-slideInUp">
            <span className="text-white">{t("Votre solution complète", "Your complete solution")}</span>
          </span>
          <span className="gradient-text block animate-slideInUp delay-200">
            {t("de commande en ligne", "for online ordering")}
          </span>
        </h1>

        {/* Enhanced value proposition */}
        <div className="mb-8 animate-slideInUp delay-300">
          <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 font-semibold mb-4">
            {t("Sans commission — vous gardez vos marges", "No commission — you keep your margins")}
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t(
              "Site web + Apps + Back-office complet pour digitaliser votre restaurant",
              "Website + Apps + Complete back-office to digitize your restaurant"
            )}
          </p>
        </div>

        {/* Enhanced CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slideInUp delay-400">
          <button className="group relative btn-primary text-lg px-8 py-4 rounded-2xl font-semibold hover-lift overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              <i className="fas fa-rocket"></i>
              {t("Démarrer à 500 €", "Start at €500")}
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group btn-secondary text-lg px-8 py-4 rounded-2xl font-semibold hover-lift">
            <span className="flex items-center gap-3">
              <i className="fas fa-play"></i>
              {t("Demander une démo", "Request a demo")}
              <i className="fas fa-external-link-alt group-hover:scale-110 transition-transform"></i>
            </span>
          </button>
        </div>

        {/* Enhanced benefits banner */}
        <div className="animate-fadeInScale delay-500">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-6 bg-dark-600/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 md:p-8 hover:border-primary-500/30 transition-colors duration-500">
            <div className="flex items-center gap-3 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">{t("Installation 500 €", "€500 setup")}</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-3 text-primary-400">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse delay-200"></div>
              <span className="font-medium">{t("1 mois gratuit", "1 month free")}</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-3 text-secondary-400">
              <div className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse delay-400"></div>
              <span className="font-medium">{t("0% commission", "0% commission")}</span>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scroll-indicator"></div>
            </div>
            <span className="text-xs text-gray-500 font-medium">{t("Défiler", "Scroll")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}