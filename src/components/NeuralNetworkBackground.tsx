import { motion } from 'framer-motion';

interface NeuralNetworkBackgroundProps {
  darkMode: boolean;
}

const NeuralNetworkBackground: React.FC<NeuralNetworkBackgroundProps> = ({ darkMode }) => {
  // Helper function to generate neural network connections (lines)
  const generateConnections = () => {
    const connections: { x1: number; y1: number; x2: number; y2: number }[] = [];
    const nodes = 5; // Number of nodes per layer
    const layers = 5; // Number of layers

    // Loop to create connections between each layer
    for (let layer = 0; layer < layers - 1; layer++) {
      for (let from = 0; from < nodes; from++) {
        for (let to = 0; to < nodes; to++) {
          const x1 = (layer + 1) * 100;
          const y1 = from * 100 + 50;
          const x2 = (layer + 2) * 100;
          const y2 = to * 100 + 50;
          connections.push({ x1, y1, x2, y2 });
        }
      }
    }
    return connections;
  };

  const connections = generateConnections();

  return (
    <svg className="absolute top-9 left-11 w-full h-full z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
      {/* Generate network connections */}
      {connections.map((connection, index) => (
        <motion.line
          key={index}
          x1={connection.x1}
          y1={connection.y1}
          x2={connection.x2}
          y2={connection.y2}
          stroke={darkMode ? '#ffffff' : '#000000'}
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ strokeDasharray: 0, strokeDashoffset: 100, opacity: 0.1 }}
          animate={{
            strokeDasharray: [0, 100],
            strokeDashoffset: [100, 0],
            opacity: [0.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: index * 0.1,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Generate nodes (neurons) */}
      {Array.from({ length: 5 }).map((_, layerIndex) =>
        Array.from({ length: 5 }).map((_, nodeIndex) => (
          <motion.circle
            key={`node-${layerIndex}-${nodeIndex}`}
            cx={(layerIndex + 1) * 100}
            cy={nodeIndex * 100 + 50}
            r="8"
            fill={darkMode ? '#ffffff' : '#1E3A8A'}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 1.5,
              delay: nodeIndex * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))
      )}
    </svg>
  );
};

export default NeuralNetworkBackground;
