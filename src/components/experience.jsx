
import { motion } from "framer-motion";
import Experience from "./experiencetimeline";

export default function WorkExperience() {
    return (
        <div className="flex flex-col items-center justify-center pt-20 pb-28 px-4 md:px-8 lg:px-20 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-indigo-500 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/6 w-72 h-72 bg-purple-600 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <motion.div 
                className="flex flex-col items-center gap-8 relative z-10 max-w-6xl w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {/* Header */}
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-4">
                        My Work Experience
                    </h1>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                        Discover the journey through different organizations where I&apos;ve contributed to innovative projects, 
                        developed cutting-edge solutions, and collaborated with amazing teams to bring ideas to life.
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <motion.div 
                    className="w-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Experience />
                </motion.div>
            </motion.div>
        </div>
    );
}