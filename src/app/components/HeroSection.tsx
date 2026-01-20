import { motion } from 'motion/react';
import { Play, Activity } from 'lucide-react';

export function HeroSection() {
  return (
          <section className="relative min-h-screen min-h-[100dvh] flex items-start md:items-center justify-center bg-gradient-to-b from-black via-zinc-950 to-zinc-900 overflow-hidden pt-safe">

          
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Animated Waveform Visualization */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="flex items-center gap-[2px] h-64">
          {[...Array(100)].map((_, i) => {
            const height = Math.sin(i * 0.2) * 50 + Math.random() * 30;
            const delay = i * 0.01;
            
            return (
              <motion.div
                key={i}
                className="w-[4px] bg-gradient-to-t from-emerald-500/50 to-emerald-400/20 rounded-full"
                initial={{ height: 4 }}
                animate={{ 
                  height: [4, height, 4],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 2,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 border border-emerald-500/20 rounded-full mb-8">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-wider text-zinc-400">Available for Projects</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl mb-6 tracking-tight"
        >
          <span className="text-white uppercase">Davide Paratore</span>
          <span className="text-zinc-600 mx-4">·</span>
          <span className="text-zinc-400 uppercase">Music Producer</span>
          <span className="text-zinc-600 mx-4">·</span>
          <span className="text-zinc-500 uppercase">Audio Engineer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto tracking-wide"
        >
          Designing sound systems, music and audio experiences
        </motion.p>

        {/* CTAs */}
        
        {/* Technical Specs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { label: 'Sample Rate', value: '48000 kHz' },
            { label: 'Bit Depth', value: '32-bit' },
            { label: 'Processing', value: 'Real-time' }
          ].map((spec, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl text-emerald-500 mb-1 font-mono">{spec.value}</div>
              <div className="text-xs uppercase tracking-wider text-zinc-600">{spec.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
