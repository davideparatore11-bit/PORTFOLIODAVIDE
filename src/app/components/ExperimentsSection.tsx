import { motion } from 'motion/react';
import { Cpu, Radio, Zap } from 'lucide-react';

const experiments = [
  {
    title: 'Granular Time Stretching Algorithm',
    description: 'Custom DSP implementation for real-time granular synthesis with temporal manipulation',
    tech: 'C++ / JUCE',
    status: 'Active Development',
    visual: 'granular'
  },
  {
    title: 'AI-Driven Sound Morphing',
    description: 'Machine learning model for interpolating between audio timbres in latent space',
    tech: 'Python / TensorFlow',
    status: 'Research Phase',
    visual: 'neural'
  },
  {
    title: 'Spatial Audio Engine',
    description: '3D audio rendering system with HRTF processing and room simulation',
    tech: 'Max/MSP / Ambisonics',
    status: 'Prototype',
    visual: 'spatial'
  }
];

export function ExperimentsSection() {
  return (
    <section id="experiments" className="py-32 px-6 bg-zinc-950 border-t border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-500 mb-4 block">R&D</span>
          <h2 className="text-4xl md:text-5xl text-white mb-4">Experiments & Systems</h2>
          <p className="text-zinc-500 max-w-2xl">
            Exploring the boundaries of audio technology through research, prototyping, and systematic experimentation.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiments.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-black border border-zinc-800 hover:border-emerald-500/30 transition-all"
            >
              <div className="grid lg:grid-cols-3 gap-6 p-8">
                {/* Content */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500/50 transition-all">
                      {exp.visual === 'granular' && <Zap className="w-6 h-6 text-emerald-500" />}
                      {exp.visual === 'neural' && <Cpu className="w-6 h-6 text-blue-500" />}
                      {exp.visual === 'spatial' && <Radio className="w-6 h-6 text-purple-500" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl text-white mb-2 group-hover:text-emerald-500 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div>
                          <span className="text-zinc-600 uppercase tracking-wider text-xs">Technology: </span>
                          <span className="text-zinc-500 font-mono">{exp.tech}</span>
                        </div>
                        <div>
                          <span className="text-zinc-600 uppercase tracking-wider text-xs">Status: </span>
                          <span className="text-emerald-500 font-mono">{exp.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Representation */}
                <div className="relative h-40 lg:h-auto bg-zinc-900 border border-zinc-800 overflow-hidden">
                  {/* Animated Visual Pattern */}
                  {exp.visual === 'granular' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-8 gap-1">
                        {[...Array(64)].map((_, j) => (
                          <motion.div
                            key={j}
                            className="w-2 h-2 bg-emerald-500/20"
                            animate={{
                              opacity: [0.2, 0.8, 0.2],
                              scale: [1, 1.5, 1]
                            }}
                            transition={{
                              duration: 2,
                              delay: j * 0.02,
                              repeat: Infinity
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {exp.visual === 'neural' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[...Array(5)].map((_, layer) => (
                        <div key={layer} className="flex flex-col gap-2 mx-2">
                          {[...Array(4)].map((_, node) => (
                            <motion.div
                              key={node}
                              className="w-3 h-3 rounded-full bg-blue-500/30 border border-blue-500/50"
                              animate={{
                                boxShadow: [
                                  '0 0 0 0 rgba(59, 130, 246, 0)',
                                  '0 0 10px 2px rgba(59, 130, 246, 0.3)',
                                  '0 0 0 0 rgba(59, 130, 246, 0)'
                                ]
                              }}
                              transition={{
                                duration: 2,
                                delay: (layer + node) * 0.1,
                                repeat: Infinity
                              }}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  {exp.visual === 'spatial' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[...Array(5)].map((_, ring) => (
                        <motion.div
                          key={ring}
                          className="absolute rounded-full border border-purple-500/20"
                          style={{
                            width: `${(ring + 1) * 30}px`,
                            height: `${(ring + 1) * 30}px`
                          }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.6, 0.2]
                          }}
                          transition={{
                            duration: 3,
                            delay: ring * 0.2,
                            repeat: Infinity
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Scan Line */}
                  <motion.div
                    className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ top: ['0%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
              </div>

              {/* Glitch Corner Effect */}
              <motion.div
                className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-emerald-500/0 group-hover:border-emerald-500/50 transition-all"
                animate={{
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 5
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Technical Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 p-8 bg-gradient-to-r from-emerald-950/20 to-transparent border-l-4 border-emerald-500"
        >
          <div className="text-xs uppercase tracking-wider text-emerald-500 mb-2">Experimental Philosophy</div>
          <p className="text-zinc-400 leading-relaxed max-w-3xl">
            Sound is a programmable medium. Through systematic exploration of DSP algorithms, 
            machine learning, and spatial audio techniques, we push the boundaries of what's 
            technically achievable while maintaining musical and aesthetic coherence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}