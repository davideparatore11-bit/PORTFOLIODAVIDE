import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Activity } from 'lucide-react';
import { AudioPlayer } from './AudioPlayer';

const projects = [
  {
    title: 'Nocturnal Simbol',
    category: 'Music Production',
    colorClass: 'emerald',
    waveform: [...Array(40)].map(() => Math.random() * 100),
    audioSrc: '/audio/Breath.mp3'
  },
  {
    title: 'Urban Frequencies',
    category: 'Music Production',
    colorClass: 'blue',
    waveform: [...Array(40)].map(() => Math.random() * 100),
    audioSrc: '/audio/jersei.wav'
  },
  {
    title: 'Noise Textures Vol. 1',
    category: 'Music Production',
    colorClass: 'purple',
    waveform: [...Array(40)].map(() => Math.random() * 100),
    audioSrc: '/audio/saxmaster.wav'
  },
  {
    title: 'Hip Hop - Style',
    category: 'Music Production',
    colorClass: 'orange',
    waveform: [...Array(40)].map(() => Math.random() * 100),
    audioSrc: '/audio/mfdoom.wav'
  },
  {
    title: 'Raw Nation',
    category: 'Music Production',
    colorClass: 'emerald',
    waveform: [...Array(40)].map(() => Math.random() * 100),
    audioSrc: '/audio/boombapseria.wav'
  },
  {
    title: 'Ethernal',
    category: 'Music Production',
    colorClass: 'purple',
    waveform: [...Array(40)].map(() => Math.random() * 100),
    audioSrc: '/audio/vibe.wav'
  }
];

const getColorStyles = (colorClass: string) => {
  const colors = {
    emerald: { dot: 'rgb(16,185,129)' },
    blue: { dot: 'rgb(59,130,246)' },
    purple: { dot: 'rgb(168,85,247)' },
    orange: { dot: 'rgb(249,115,22)' }
  };
  return colors[colorClass as keyof typeof colors] || colors.emerald;
};

export function ProjectsGrid() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-white mb-16">Audio Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const isOpen = activeProject === i;
            const colors = getColorStyles(project.colorClass);

            return (
              <motion.div
                key={i}
                className="bg-zinc-950 border border-zinc-800 p-6"
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors.dot }}
                  />
                  <span className="text-xs text-zinc-500 uppercase">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl text-white mb-4">
                  {project.title}
                </h3>

                {/* Buttons */}
                <div className="flex gap-4 mb-4">
                  <button
                    onClick={() =>
                      setActiveProject(isOpen ? null : i)
                    }
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-500"
                  >
                    <Play className="w-4 h-4" />
                    LISTEN
                  </button>

                  <button className="flex items-center gap-2 text-sm text-zinc-400">
                    <Activity className="w-4 h-4" />
                    BREAKDOWN
                  </button>
                </div>

                {/* AUDIO PLAYER */}
                {isOpen && (
                  <AudioPlayer
                    title={project.title}
                    src={project.audioSrc}
                    autoPlay
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
