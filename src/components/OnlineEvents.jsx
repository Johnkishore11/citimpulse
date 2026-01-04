import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const OnlineEvents = () => {
    return (
        <Section id="online-events" className="py-24 min-h-screen flex items-center justify-center">
            <div className="text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-white mb-4 font-orbitron"
                >
                    ONLINE EVENTS
                </motion.h2>
                <div className="h-1 w-24 bg-electric-500 mx-auto rounded-full shadow-[0_0_20px_#2dd4bf] mb-8" />
                <p className="text-gray-300 text-lg">Coming Soon...</p>
            </div>
        </Section>
    );
};

export default OnlineEvents;
