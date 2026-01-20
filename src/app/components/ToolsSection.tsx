import { motion } from 'motion/react';

const tools = {
  daw: [
    'Ableton Live',
    'Logic Pro',
    'Pro Tools',
    
  ],
  plugins: [
    'FabFilter Pro-Q 4',
    'Valhalla VintageVerb',
    'Soundtoys Bundle',
    'iZotope RX',
    'Waves Ultimate'
  ],
  synths: [
    'Serum',
    'Vital',
    'Omnisphere',
    'Arturia MiniFreak',
    'Analog Lab'
  ],
  tech: [
    'Max/MSP',
    'Pure Data',
    'SuperCollider',
    'JUCE Framework',
    'Web Audio API'
  ]
};

export function ToolsSection() {
  return (
    <section id="tools" className="py-32 px-6 bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-500 mb-4 block">Technical Stack</span>
          <h2 className="text-4xl md:text-5xl text-white">Tools & Technology</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* DAW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-950 border border-zinc-800 p-6"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
              <div className="w-2 h-2 bg-emerald-500" />
              <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-400">DAW</h3>
            </div>
            <ul className="space-y-3">
              {tools.daw.map((item, i) => (
                <li key={i} className="text-sm text-zinc-500 hover:text-emerald-500 transition-colors cursor-default font-mono">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Plugins */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-zinc-950 border border-zinc-800 p-6"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
              <div className="w-2 h-2 bg-blue-500" />
              <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-400">Plugins</h3>
            </div>
            <ul className="space-y-3">
              {tools.plugins.map((item, i) => (
                <li key={i} className="text-sm text-zinc-500 hover:text-blue-500 transition-colors cursor-default font-mono">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Synths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-950 border border-zinc-800 p-6"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
              <div className="w-2 h-2 bg-purple-500" />
              <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-400">Synthesizers</h3>
            </div>
            <ul className="space-y-3">
              {tools.synths.map((item, i) => (
                <li key={i} className="text-sm text-zinc-500 hover:text-purple-500 transition-colors cursor-default font-mono">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-zinc-950 border border-zinc-800 p-6"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
              <div className="w-2 h-2 bg-orange-500" />
              <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-400">Technology</h3>
            </div>
            <ul className="space-y-3">
              {tools.tech.map((item, i) => (
                <li key={i} className="text-sm text-zinc-500 hover:text-orange-500 transition-colors cursor-default font-mono">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            { label: 'Processing Power', value: 'M4 Max', unit: 'CPU' },
            { label: 'Audio Interface', value: 'Scalett 18i20 3 Gen', unit: 'I/O' },
            { label: 'Monitoring', value: 'KRK Rokit 7, JVC WoodCone', unit: 'Studio' }
          ].map((spec, i) => (
            <div key={i} className="bg-zinc-950 border border-zinc-800 p-6">
              <div className="text-xs uppercase tracking-wider text-zinc-600 mb-2">{spec.label}</div>
              <div className="text-xl text-white font-mono mb-1">{spec.value}</div>
              <div className="text-xs text-emerald-500 uppercase tracking-wider">{spec.unit}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
