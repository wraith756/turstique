import React, { Suspense, useRef, useEffect, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
function ParticlesBackground() {
  const particlesCount = 2500;
  const positions = useMemo(() => {
    const arr = new Float32Array(particlesCount * 3);
    for (let i = 0; i < arr.length; i++) {
      if (i % 3 === 0) arr[i] = (Math.random() - 0.5) * 15;
      else if (i % 3 === 1) arr[i] = (Math.random() - 0.5) * 10;
      else arr[i] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  return (
    <group>
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#0ef2e6"
          size={0.01}
          sizeAttenuation
          depthWrite={false}
          opacity={0.9}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function HeroSection() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );
  const [reloadKey, setReloadKey] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    const vid = videoRef.current;
    const tryPlay = async () => {
      try {
        await vid.play();
      } catch (err) {
        console.warn("Autoplay blocked:", err);
      }
    };
    tryPlay();
  }, [reloadKey]);

  const videoSources = [
    { src: "/videos/hero.mp4", type: "video/mp4" },
    { src: "/videos/hero.webm", type: "video/webm" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  const reloadContent = () => {
    setVideoError(false);
    setIsVideoLoaded(false);
    setReloadKey((prev) => prev + 1);
  };
  const handleConsultationClick = () => {
    navigate("/contact");
  };
  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-black"
      ref={ref}
      key={reloadKey}
    >
      {/* 1) CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          className={`relative z-[30] flex flex-col justify-center px-6 md:px-20 text-white h-full ${
            isMobile ? "w-full pb-[25%]" : "w-1/2"
          }`}
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 60, delay: 0.3 },
          }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          key={`content-${reloadKey}`}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            variants={itemVariants}
          >
            <motion.span
              className="text-cyan-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Driving Growth
            </motion.span>{" "}
            with Smarter Software
            <br /> & Stronger Security
          </motion.h1>

          <motion.p
            className="mt-4 max-w-lg text-gray-300"
            variants={itemVariants}
          >
            At <span className="text-cyan-400">Trustique Assist</span>,we blend
            innovation in software with strong security expertise, we create
            solutions that are both powerful and dependable.
          </motion.p>

          <motion.div className="mt-6 flex gap-4" variants={itemVariants}>
            <motion.button
              className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg font-semibold"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={handleConsultationClick}
            >
              Get Started
            </motion.button>
            <motion.button
              className="border border-white px-5 py-3 rounded-lg hover:bg-white hover:text-black"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={reloadContent}
            >
              Reload Animation
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* 2) VIDEO - HIDDEN ON MOBILE */}
      {!isMobile && (
        <AnimatePresence mode="wait">
          <motion.div
            className="absolute right-0 top-1/4 -translate-y-1/2 w-[50%] h-[50%] overflow-visible"
            style={{ zIndex: 10 }}
            initial={{ x: 150, opacity: 0, scale: 0.9 }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 50,
                delay: 0.5,
                scale: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            exit={{ x: 150, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            key={`video-${reloadKey}`}
          >
            <div className="relative w-full h-full">
              {/* Border frame */}
              <div className="absolute inset-0 rounded-l-[40px] border-l-2 border-t-2 border-b-2 border-cyan-400/20 pointer-events-none z-20" />

              {/* Video element */}
              <div className="absolute inset-0 overflow-hidden rounded-l-[40px]">
                <div className="absolute inset-0 -left-[5%] -right-[5%] -top-[5%] -bottom-[5%]">
                  {!videoError ? (
                    <>
                      <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        poster="/fallback-image.jpg"
                        className={`w-full h-full object-cover transition-opacity duration-1000 ${
                          isVideoLoaded ? "opacity-100" : "opacity-0"
                        }`}
                        onLoadedData={() => setIsVideoLoaded(true)}
                        onError={() => setVideoError(true)}
                      >
                        {videoSources.map((s) => (
                          <source key={s.src} src={s.src} type={s.type} />
                        ))}
                        Your browser does not support the video tag.
                      </video>

                      {!isVideoLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 to-black/90 flex items-center justify-center">
                          <motion.span
                            className="text-gray-300 text-lg"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            Loading video...
                          </motion.span>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-900/90 to-black flex items-center justify-center text-white">
                      <div className="text-center p-6">
                        <p className="mb-4 text-lg">Video unavailable</p>
                        <motion.button
                          onClick={reloadContent}
                          className="px-5 py-2.5 bg-cyan-600 rounded-lg hover:bg-cyan-700 text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Try Again
                        </motion.button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/15 to-cyan-500/10 pointer-events-none rounded-l-[40px]" />

              {/* Corner accent */}
              <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-cyan-400/30 pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* 3) PARTICLES CANVAS */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Canvas
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 1.5]}
          onCreated={({ gl }) => {
            gl.setClearColor(new THREE.Color(0, 0, 0), 0);
          }}
          style={{ width: "100%", height: "100%", background: "transparent" }}
        >
          <Suspense fallback={null}>
            <ParticlesBackground />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.3}
              rotateSpeed={0.5}
            />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      {/* 4) Enhanced gradient overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-900/40 to-transparent animate-gradient-flow" />
      </motion.div>
    </section>
  );
}
