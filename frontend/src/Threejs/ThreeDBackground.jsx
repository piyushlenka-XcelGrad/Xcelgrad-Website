import React, { useEffect, useRef } from "react";

const ThreeDBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, particles, animationFrameId;
    let count = 0;
    const SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

    const initThree = () => {
      if (!window.THREE || !mountRef.current) return;
      const THREE = window.THREE;

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );

      camera.position.set(0, 300, 1000);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mountRef.current.appendChild(renderer.domElement);

      const numParticles = AMOUNTX * AMOUNTY;
      const positions = new Float32Array(numParticles * 3);
      const scales = new Float32Array(numParticles);

      let i = 0, j = 0;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          positions[i + 1] = 0;
          positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
          scales[j] = 1;
          i += 3;
          j++;
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color(0x5B47F5) },
        },
        vertexShader: `
          attribute float scale;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = scale * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          void main() {
            if (length(gl_PointCoord - vec2(0.5)) > 0.475) discard;
            gl_FragColor = vec4(color, 0.6);
          }
        `,
        transparent: true,
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        const positions = particles.geometry.attributes.position.array;
        const scales = particles.geometry.attributes.scale.array;

        let i = 0, j = 0;

        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            positions[i + 1] =
              Math.sin((ix + count) * 0.3) * 50 +
              Math.sin((iy + count) * 0.5) * 50;

            scales[j] =
              (Math.sin((ix + count) * 0.3) + 1) * 10 +
              (Math.sin((iy + count) * 0.5) + 1) * 10;

            i += 3;
            j++;
          }
        }

        particles.geometry.attributes.position.needsUpdate = true;
        particles.geometry.attributes.scale.needsUpdate = true;

        renderer.render(scene, camera);
        count += 0.05;
      };

      animate();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };

    if (!window.THREE) {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
      script.onload = initThree;
      document.head.appendChild(script);
    } else {
      initThree();
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (renderer && mountRef.current)
        mountRef.current.removeChild(renderer.domElement);
      if (scene) scene.clear();
    };
  }, []);

  return (
    <>
      {/* Three.js Canvas */}
      <div
        ref={mountRef}
        className="absolute top-0 left-0 w-full h-[120vh] z-0 pointer-events-none overflow-hidden mix-blend-multiply opacity-40"
      />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] opacity-40 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-violet-400 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "4s" }} />
        <div className="absolute top-40 right-10 w-96 h-96 bg-violet-400 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "6s", animationDelay: "2s" }} /> 
        {/* <div className="absolute top-60 left-1/3 w-96 h-96 bg-pink-300 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} /> */} 
      </div>
    </>
  );
};

export default ThreeDBackground;