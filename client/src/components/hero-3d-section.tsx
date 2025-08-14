import { useEffect, useRef, useState } from 'react';
import { useLanguage } from "./language-provider";
import logoImage from "@assets/logo-blanc_1755211740901.png";

export function Hero3DSection() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [is3DSupported, setIs3DSupported] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Check for WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    setIs3DSupported(!!gl);

    // Only load Three.js on desktop with WebGL support and no reduced motion preference
    if (gl && !mediaQuery.matches && window.innerWidth > 768) {
      import('three').then(({ Scene, PerspectiveCamera, WebGLRenderer, CircleGeometry, MeshBasicMaterial, Mesh, Group, Vector3 }) => {
        if (!canvasRef.current) return;

        const scene = new Scene();
        const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new WebGLRenderer({ 
          canvas: canvasRef.current, 
          alpha: true, 
          antialias: true,
          powerPreference: "low-power"
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Create orbiting elements representing our services
        const group = new Group();
        
        // Create simple geometric shapes representing: Website, Mobile App, Back-office
        const elements = [
          { color: '#FF6A00', radius: 0.3, distance: 3, speed: 0.01 }, // Website (orange)
          { color: '#FFC700', radius: 0.25, distance: 2.5, speed: 0.015 }, // Mobile App (yellow)
          { color: '#FF8C42', radius: 0.35, distance: 3.5, speed: 0.008 } // Back-office (orange-yellow)
        ];

        const meshes: any[] = [];
        
        elements.forEach((element, index) => {
          const geometry = new CircleGeometry(element.radius, 32);
          const material = new MeshBasicMaterial({ 
            color: element.color,
            transparent: true,
            opacity: 0.8
          });
          const mesh = new Mesh(geometry, material);
          
          const angle = (index / elements.length) * Math.PI * 2;
          mesh.position.x = Math.cos(angle) * element.distance;
          mesh.position.y = Math.sin(angle) * element.distance;
          mesh.position.z = Math.sin(angle * 2) * 0.5;
          
          group.add(mesh);
          meshes.push(mesh);
        });

        scene.add(group);
        camera.position.z = 6;

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);

          // Rotate the entire group slowly
          group.rotation.y += 0.005;
          group.rotation.x += 0.002;

          // Individual element animation
          meshes.forEach((mesh, index) => {
            const element = elements[index];
            const time = Date.now() * element.speed;
            
            mesh.position.x = Math.cos(time) * element.distance;
            mesh.position.y = Math.sin(time) * element.distance;
            mesh.position.z = Math.sin(time * 2) * 0.5;
            
            mesh.rotation.z += 0.01;
          });

          renderer.render(scene, camera);
        };

        animate();

        // Handle resize
        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
          renderer.dispose();
        };
      }).catch(() => {
        setIs3DSupported(false);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
      {/* 3D Canvas for desktop */}
      {is3DSupported && !prefersReducedMotion && (
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-30"
          style={{ pointerEvents: 'none' }}
        />
      )}

      {/* Fallback background for mobile or reduced motion */}
      {(!is3DSupported || prefersReducedMotion) && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/5 to-primary-600/10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-secondary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8 md:mb-12 animate-fadeInScale">
          <img 
            src={logoImage} 
            alt="SAMEATS"
            className="h-20 md:h-24 w-auto mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-tight animate-slideInUp">
          <span className="block mb-4">
            {t("Votre solution complète", "Your complete solution")}
          </span>
          <span className="gradient-text block">
            {t("de commande en ligne", "for online ordering")}
          </span>
        </h1>

        {/* Subtitle with key value prop */}
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed animate-slideInUp" style={{ animationDelay: '0.2s' }}>
          {t(
            "Sans commission — vous gardez vos marges",
            "No commission — you keep your margins"
          )}
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-slideInUp" style={{ animationDelay: '0.3s' }}>
          {t(
            "Site web + Apps + Back-office complet pour digitaliser votre restaurant",
            "Website + Apps + Complete back-office to digitize your restaurant"
          )}
        </p>

        {/* Main CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slideInUp" style={{ animationDelay: '0.4s' }}>
          <button 
            className="btn-primary text-lg px-8 py-4 rounded-2xl font-semibold hover-lift group"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center gap-3">
              <i className="fas fa-rocket"></i>
              {t("Démarrer à 500 €", "Start at €500")}
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </span>
          </button>
          
          <button 
            className="btn-secondary text-lg px-8 py-4 rounded-2xl font-semibold hover-lift group"
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center gap-3">
              <i className="fas fa-play"></i>
              {t("Demander une démo", "Request a demo")}
              <i className="fas fa-external-link-alt group-hover:scale-110 transition-transform"></i>
            </span>
          </button>
        </div>

        {/* Key benefits banner */}
        <div className="animate-fadeInScale" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex flex-wrap items-center justify-center gap-6 md:gap-8 bg-dark-600/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 text-green-400">
              <i className="fas fa-check-circle text-lg"></i>
              <span className="font-medium">{t("Installation 500 €", "€500 setup")}</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-3 text-primary-400">
              <i className="fas fa-gift text-lg"></i>
              <span className="font-medium">{t("1 mois gratuit", "1 month free")}</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-3 text-secondary-400">
              <i className="fas fa-percentage text-lg"></i>
              <span className="font-medium">{t("0% commission", "0% commission")}</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-gray-400 text-xl"></i>
        </div>
      </div>
    </section>
  );
}