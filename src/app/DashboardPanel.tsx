import { motion } from 'framer-motion';

interface DashboardPanelProps {
  open: boolean;
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  buttonText: string;
  image: string;
  onClose: () => void;
}

export default function DashboardPanel({
  open,
  title,
  subtitle,
  description,
  phone,
  buttonText,
  image,
  onClose,
}: DashboardPanelProps) {
  if (!open) return null;
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden relative"
        initial={{ scale: 0.95, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 40 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Left: Info */}
        <div className="flex-1 p-8 flex flex-col justify-center bg-white/90">
          <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-[var(--foreground)] hover:text-gray-700 transition">&times;</button>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">{title}</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">{subtitle}</h3>
          <p className="mb-6 text-base md:text-lg text-gray-700">{description}</p>
          <div className="text-xl font-semibold mb-2">How can we assist you today?</div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg text-lg mb-6 transition">{buttonText}</button>
          <div className="text-lg font-bold mb-2">For Quick Assistance: <span className="text-gray-800">{phone}</span></div>
          <div className="text-sm text-gray-600">Available 24/7, our experts are here to provide you with accurate answers and effective solutions. They undergo a strict verification process and are carefully selected to ensure you receive the best help possible.</div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 hidden md:flex items-center justify-center bg-gray-50">
          <img src={image} alt="Dashboard" className="object-cover w-full h-full max-h-[500px]" />
        </div>
      </motion.div>
    </motion.div>
  );
} 