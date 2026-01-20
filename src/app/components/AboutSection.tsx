import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-500">About / Approach</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl mb-8 text-white">
              Sound as a <span className="text-emerald-500">systematic discipline</span>
            </h2>
            
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>
                I approach audio as an engineering discipline—where sound is not just created, 
                but designed, measured, and optimized through systematic workflows and technical precision.
              </p>
              
              <p>
                My work spans from music production to complex audio systems design, 
                treating each project as a technical challenge requiring both creative vision 
                and rigorous implementation.
              </p>
              
              <p>
                Every sound is intentional. Every frequency is controlled. 
                Every system is built to perform.
              </p>

              <div className="pt-6">
                <button className="group flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors">
                  <span className="uppercase tracking-wider text-sm">View Full Methodology</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Signal Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-black border border-zinc-800 p-8 rounded-sm">
              <div className="space-y-6">
                {/* Signal Flow Steps */}
                {[
                  { label: 'INPUT', detail: 'Signal Acquisition', color: 'emerald-500' },
                  { label: 'PROCESS', detail: 'DSP Chain', color: 'blue-500' },
                  { label: 'MIX', detail: 'Spatial Design', color: 'purple-500' },
                  { label: 'MASTER', detail: 'Final Processing', color: 'orange-500' },
                  { label: 'OUTPUT', detail: 'Delivery', color: 'emerald-500' }
                ].map((step, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: `var(--${step.color})` }} />
                        <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">{step.label}</span>
                      </div>
                      <span className="text-xs text-zinc-600 font-mono">{step.detail}</span>
                    </div>
                    
                    {/* Signal Bar */}
                    <div className="relative h-8 bg-zinc-900 border border-zinc-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${60 + Math.random() * 40}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
                        className="h-full border-r-2"
                        style={{
                          background: step.color === 'emerald-500' 
                            ? 'linear-gradient(to right, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.05))'
                            : step.color === 'blue-500'
                            ? 'linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))'
                            : step.color === 'purple-500'
                            ? 'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.05))'
                            : 'linear-gradient(to right, rgba(249, 115, 22, 0.2), rgba(249, 115, 22, 0.05))',
                          borderColor: step.color === 'emerald-500'
                            ? 'rgb(16, 185, 129)'
                            : step.color === 'blue-500'
                            ? 'rgb(59, 130, 246)'
                            : step.color === 'purple-500'
                            ? 'rgb(168, 85, 247)'
                            : 'rgb(249, 115, 22)'
                        }}
                      />
                      <div className="absolute inset-0 flex items-center px-3">
                        <div className="flex gap-[1px]">
                          {[...Array(20)].map((_, j) => (
                            <div
                              key={j}
                              className="w-[2px] bg-zinc-700"
                              style={{ height: `${Math.random() * 100}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {i < 4 && (
                      <div className="flex justify-center my-2">
                        <div className="w-[1px] h-4 bg-zinc-700" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Technical Annotation */}
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <div className="text-xs text-zinc-600 uppercase tracking-wider mb-2">Signal Path</div>
                <div className="text-xs text-zinc-500 font-mono">
                  Analog → Digital → Processing → Mixing → Mastering → Distribution
                </div>
              </div>
            </div>

            {/* Corner Markers (blueprint style) */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-500/30" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-500/30" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-500/30" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-500/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}