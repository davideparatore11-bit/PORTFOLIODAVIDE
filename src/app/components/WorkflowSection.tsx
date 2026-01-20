import { motion } from 'motion/react';
import { Lightbulb, Mic, Music, Sliders, Radio } from 'lucide-react';

const workflowSteps = [
  {
    icon: Lightbulb,
    label: 'Concept',
    description: 'Sonic ideation & research',
    detail: 'Define audio objectives, reference analysis, creative direction'
  },
  {
    icon: Mic,
    label: 'Sound Design',
    description: 'Synthesis & processing',
    detail: 'Source material, synthesis, field recording, foley creation'
  },
  {
    icon: Music,
    label: 'Production',
    description: 'Composition & arrangement',
    detail: 'Musical structure, harmonic design, rhythmic development'
  },
  {
    icon: Sliders,
    label: 'Mix',
    description: 'Balance & spatial design',
    detail: 'Level optimization, EQ, dynamics, spatial positioning'
  },
  {
    icon: Radio,
    label: 'Final Output',
    description: 'Mastering & delivery',
    detail: 'Format conversion, quality control, distribution prep'
  }
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-32 px-6 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-500 mb-4 block">Production Pipeline</span>
          <h2 className="text-4xl md:text-5xl text-white">Workflow & Process</h2>
        </motion.div>

        {/* Workflow Diagram */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-16 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-emerald-500/20 hidden lg:block" />

          {/* Steps */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-2 text-6xl font-mono text-zinc-900 select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon Container */}
                <div className="relative z-10 w-32 h-32 mx-auto mb-6 bg-black border-2 border-zinc-800 flex items-center justify-center group hover:border-emerald-500/50 transition-all">
                  <step.icon className="w-12 h-12 text-zinc-700 group-hover:text-emerald-500 transition-colors" />
                  
                  {/* Corner Markers */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-500/0 group-hover:border-emerald-500 transition-all" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-emerald-500/0 group-hover:border-emerald-500 transition-all" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-emerald-500/0 group-hover:border-emerald-500 transition-all" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-500/0 group-hover:border-emerald-500 transition-all" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg uppercase tracking-wider text-white mb-2">{step.label}</h3>
                  <p className="text-sm text-zinc-500 mb-3">{step.description}</p>
                  <p className="text-xs text-zinc-700 leading-relaxed">{step.detail}</p>
                </div>

                {/* Arrow (desktop) */}
                {i < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 z-20">
                    <div className="w-8 h-[2px] bg-gradient-to-r from-emerald-500/50 to-transparent" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-emerald-500/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-6 bg-black border border-zinc-800"
        >
          <div className="flex items-start gap-4">
            <div className="w-1 h-full bg-emerald-500" />
            <div>
              <div className="text-xs uppercase tracking-wider text-zinc-600 mb-2">Technical Approach</div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Every project follows a systematic methodology combining creative experimentation 
                with engineering precision. Each phase is documented, measured, and optimized 
                for technical excellence and artistic coherence.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}