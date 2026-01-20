import { motion } from 'motion/react';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { AudioPlayer } from './AudioPlayer';

export function CaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-emerald-500 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="uppercase tracking-wider">Back to Projects</span>
        </motion.a>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">Music Production</span>
          </div>
          <h1 className="text-5xl md:text-6xl mb-6">Nocturnal Synthesis</h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
            A systematic exploration of modular synthesis techniques combined with field recordings, 
            creating an immersive sonic landscape that bridges organic and synthetic sound sources.
          </p>
        </motion.div>

        {/* Audio Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <AudioPlayer title="Nocturnal Synthesis" />
        </motion.div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { label: 'Duration', value: '3:00' },
            { label: 'Release Date', value: 'Jan 2026' },
            { label: 'Genre', value: 'Experimental / Ambient' }
          ].map((detail, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-zinc-950 border border-zinc-800 p-6"
            >
              <div className="text-xs uppercase tracking-wider text-zinc-600 mb-2">{detail.label}</div>
              <div className="text-lg text-white">{detail.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Concept */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-emerald-500" />
            Sonic Concept
          </h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              The project began with the concept of temporal duality—exploring the contrast between 
              precise, digital synthesis and unpredictable, organic field recordings captured during 
              nocturnal urban exploration.
            </p>
            <p>
              The sonic palette deliberately juxtaposes crystalline modular tones with textural 
              environmental sounds, creating a sonic narrative that oscillates between control and chaos, 
              structure and spontaneity.
            </p>
          </div>
        </motion.section>

        {/* Sound Design Techniques */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-blue-500" />
            Sound Design & Techniques
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Modular Synthesis',
                description: 'West Coast synthesis techniques using Make Noise system, focusing on waveshaping and complex FM algorithms.',
                tech: 'Make Noise 0-Coast, Maths, Morphagene'
              },
              {
                title: 'Field Recording',
                description: 'Binaural field recordings captured in various urban environments between 2-4 AM, emphasizing spatial characteristics.',
                tech: 'Zoom H6, Rode NT4, contact microphones'
              },
              {
                title: 'Granular Processing',
                description: 'Custom Max/MSP granular engine for time-stretching and pitch manipulation of source materials.',
                tech: 'Max/MSP, custom patches'
              },
              {
                title: 'Spectral Design',
                description: 'Frequency domain processing using spectral freeze and morphing techniques to blend organic and synthetic elements.',
                tech: 'iZotope RX, SPEAR, custom processing'
              }
            ].map((technique, i) => (
              <div key={i} className="bg-zinc-950 border border-zinc-800 p-6">
                <h3 className="text-lg text-white mb-3">{technique.title}</h3>
                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{technique.description}</p>
                <div className="text-xs text-zinc-600 font-mono">{technique.tech}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Processing & Mix */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-2xl mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-purple-500" />
            Processing & Mix Approach
          </h2>

          <div className="bg-zinc-950 border border-zinc-800 p-8">
            <div className="space-y-6">
              {[
                { stage: 'Signal Chain', process: 'High-pass filtering at 30Hz, minimal compression to maintain dynamic range' },
                { stage: 'Spatial Design', process: 'Binaural panning, reverb sends (Valhalla VintageVerb), stereo widening on synth elements' },
                { stage: 'Frequency Balance', process: 'Subtractive EQ approach, surgical cuts in mid-range for clarity' },
                { stage: 'Dynamics', process: 'Parallel compression on field recordings, gentle limiting on master bus' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 pb-6 border-b border-zinc-800 last:border-0">
                  <div className="text-sm uppercase tracking-wider text-emerald-500 w-32 flex-shrink-0">
                    {item.stage}
                  </div>
                  <div className="text-sm text-zinc-400 leading-relaxed flex-1">
                    {item.process}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Output & Deliverables */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-orange-500" />
            Output & Deliverables
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <h3 className="text-sm uppercase tracking-wider text-zinc-600 mb-4">Master Files</h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-center justify-between">
                  <span>WAV 24-bit / 48kHz (Stereo)</span>
                  <Download className="w-4 h-4" />
                </li>
                <li className="flex items-center justify-between">
                  <span>WAV 24-bit / 96kHz (Archival)</span>
                  <Download className="w-4 h-4" />
                </li>
                <li className="flex items-center justify-between">
                  <span>MP3 320kbps (Distribution)</span>
                  <Download className="w-4 h-4" />
                </li>
              </ul>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <h3 className="text-sm uppercase tracking-wider text-zinc-600 mb-4">Additional Assets</h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>Stem exports (8 groups)</li>
                <li>Session files (Ableton Live)</li>
                <li>Technical documentation</li>
                <li>Metadata & credits</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* External Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap gap-4"
        >
          <button className="px-6 py-3 bg-emerald-500 text-black uppercase tracking-wider text-sm hover:bg-emerald-400 transition-all flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            Listen on Bandcamp
          </button>
          <button className="px-6 py-3 border border-zinc-800 text-zinc-300 uppercase tracking-wider text-sm hover:border-emerald-500/50 transition-all flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            View on SoundCloud
          </button>
        </motion.div>
      </div>
    </div>
  );
}
