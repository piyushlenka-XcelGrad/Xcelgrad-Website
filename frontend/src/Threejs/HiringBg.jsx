import { useEffect, useRef } from "react";

export const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, particlesMesh, linesMesh, animationFrameId;
    const particlesCount = 120; // Fewer particles, but with connecting lines
    const maxDistance = 2.5; // Distance to draw connecting lines

    const initThree = () => {
      const THREE = window.THREE;
      if (!THREE || !mountRef.current) return;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.z = 8;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mountRef.current.appendChild(renderer.domElement);

      // --- Geometry Setup ---
      const particlesGeometry = new THREE.BufferGeometry();
      const posArray = new Float32Array(particlesCount * 3);
      const velocities = [];

      for(let i = 0; i < particlesCount * 3; i += 3) {
        // Spread particles
        posArray[i] = (Math.random() - 0.5) * 20;     // x
        posArray[i+1] = (Math.random() - 0.5) * 20;   // y
        posArray[i+2] = (Math.random() - 0.5) * 10;   // z

        velocities.push({
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        });
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

      // --- Materials ---
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.06,
        color: 0x5B47F5, // Brand Purple
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });

      const linesMaterial = new THREE.LineBasicMaterial({
        color: 0x5B47F5,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending
      });

      // --- Meshes ---
      particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      // Lines geometry will be updated every frame
      const linesGeometry = new THREE.BufferGeometry();
      linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
      scene.add(linesMesh);

      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      // --- Animation Loop ---
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        // Smooth mouse follow
        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;
        scene.rotation.y += 0.05 * (targetX - scene.rotation.y);
        scene.rotation.x += 0.05 * (targetY - scene.rotation.x);

        const positions = particlesMesh.geometry.attributes.position.array;
        
        // Move particles
        let vIdx = 0;
        for(let i = 0; i < particlesCount * 3; i += 3) {
          positions[i] += velocities[vIdx].x;
          positions[i+1] += velocities[vIdx].y;
          positions[i+2] += velocities[vIdx].z;

          // Bounce off invisible walls
          if(Math.abs(positions[i]) > 10) velocities[vIdx].x *= -1;
          if(Math.abs(positions[i+1]) > 10) velocities[vIdx].y *= -1;
          if(Math.abs(positions[i+2]) > 5) velocities[vIdx].z *= -1;
          vIdx++;
        }
        particlesMesh.geometry.attributes.position.needsUpdate = true;

        // Calculate and draw connecting lines
        const linePositions = [];
        for (let i = 0; i < particlesCount; i++) {
          for (let j = i + 1; j < particlesCount; j++) {
            const dx = positions[i * 3] - positions[j * 3];
            const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
            const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < maxDistance) {
              linePositions.push(
                positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
              );
            }
          }
        }
        linesMesh.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

        renderer.render(scene, camera);
      };

      animate();

      // --- Event Listeners ---
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      const handleMouseMove = (event) => {
        mouseX = event.clientX - window.innerWidth / 2;
        mouseY = event.clientY - window.innerHeight / 2;
      };

      window.addEventListener('resize', handleResize);
      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
      };
    };

    if (!window.THREE) {
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
      script.onload = initThree;
      document.head.appendChild(script);
    } else {
      initThree();
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (renderer && mountRef.current) mountRef.current.removeChild(renderer.domElement);
      if (scene) scene.clear();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-[0.35]"
      style={{ background: 'radial-gradient(circle at center, #ffffff 0%, #f8fafc 100%)' }}
    />
  );
};