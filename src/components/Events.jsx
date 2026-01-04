import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, User, Calendar, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Section from './Section';

// Import Event Images
import paperPres from '../assets/images/paper presentation.png';
import projectPres from '../assets/images/imageposter.png'; // Using poster image for Project Pres
import circuitDebug from '../assets/images/imagecircuit.png';
import wiring from '../assets/images/imagewiring.png';
import connections from '../assets/images/imageconnection.png';
import techQuiz from '../assets/images/imagequiz.png'; // Using quiz image
import ecad from '../assets/images/cad.avif'; // Need a placeholder or reuse, trying to find one. 
// If `cad.avif` exists? I saw it in file list? Yes `cad.avif` exists!
import pubg from '../assets/images/imagepubg.png';
import photo from '../assets/images/imagephotpo.png';
import uiux from '../assets/images/imageuiux.png';
import videoEdit from '../assets/images/imagevideo.png';
import debate from '../assets/images/imagedebate.png';
import meme from '../assets/images/imagememe.png';

const eventsData = {
    technical: [
        {
            id: 1,
            title: 'Paper Presentation',
            image: paperPres,
            desc: 'Showcase your innovative ideas and research.',
            details: 'Present your technical papers on cutting-edge technologies. A platform to share knowledge and innovations.',
            coordinators: [
                { name: 'Jerauld Alwin', contact: '9498350881' },
                { name: 'Amirtha', contact: '7871003979' },
                { name: 'Sushmitha', contact: '9445913824' },
                { name: 'Roseni', contact: '7305108002' },
                { name: 'Alfred John', contact: '8610933220' }
            ],
            rules: [
                'Maximum 3 members per team.',
                'Abstract must be submitted before the deadline.',
                'Presentation time: 7 mins + 3 mins Q&A.',
                'Judges decision is final.'
            ]
        },
        {
            id: 2,
            title: 'Project Presentation',
            image: projectPres,
            desc: 'Visualise your technical concepts creatively.',
            details: 'Demonstrate your engineering projects and prototypes. Impress the judges with your practical implementation.',
            coordinators: [
                { name: 'Kamaleshwaran', contact: '' },
                { name: 'Vishal Rajju', contact: '' },
                { name: 'Rohit K S', contact: '' },
                { name: 'Theeran', contact: '' },
                { name: 'Kavin Aravind', contact: '6382863773' },
                { name: 'Sudharsan', contact: '8050024271' }
            ],
            rules: [
                'Maximum 3 members per team.',
                'Prototype must be working.',
                'Power supply will be provided.',
                'Judges decision is final.'
            ]
        },
        {
            id: 3,
            title: 'Circuit Debugging',
            image: circuitDebug,
            desc: 'Find the faults and fix the circuits.',
            details: 'Test your electronics skills by identifying and fixing faults in complex circuits within a time limit.',
            coordinators: [
                { name: 'Madan Prakash', contact: '9840215374' },
                { name: 'Yoga Prasanna', contact: '9444858213' },
                { name: 'Rasikka', contact: '' },
                { name: 'Pragadhi', contact: '' },
                { name: 'Sai Sundar', contact: '9360245815' }
            ],
            rules: [
                'Individual participation or team of 2.',
                'Debugging tools will be provided.',
                'Time limit: 45 minutes.',
                'Judges decision is final.'
            ]
        },
        {
            id: 4,
            title: 'Wiring Wits',
            image: wiring,
            desc: 'Master the art of electrical connections.',
            details: 'A competition to test your speed and accuracy in electrical wiring and circuit connections.',
            coordinators: [
                { name: 'Divalny', contact: '8072513973' },
                { name: 'Rajameena', contact: '7397318090' },
                { name: 'Dharshini', contact: '6383345731' },
                { name: 'Kaushik', contact: '' },
                { name: 'Suganya', contact: '' },
                { name: 'Sai SUNDAR', contact: '9360245815' }
            ],
            rules: [
                'Team of 2 members.',
                'Safety gear (gloves) must be worn.',
                'Circuit diagram will be provided.',
                'Judges decision is final.'
            ]
        },
        {
            id: 5,
            title: 'Tech Quiz',
            image: techQuiz,
            desc: 'Test your technical knowledge.',
            details: 'Battle of brains! Answer technical questions and prove your expertise in various engineering domains.',
            coordinators: [
                { name: 'Ashwin Singh', contact: '91763 83300' },
                { name: 'Nithish', contact: '63834 79068' },
                { name: 'Vigneshwar', contact: '' },
                { name: 'Rakesh', contact: '' },
                { name: 'Yeswanth R', contact: '' },
                { name: 'Vimal Deep', contact: '9629791556' },
                { name: 'Kihore', contact: '6369902036' }
            ],
            rules: [
                'Team of 2 members.',
                'No electronic gadgets allowed.',
                'Quiz specific rules will be announced on spot.',
                'Judges decision is final.'
            ]
        },
        {
            id: 6,
            title: 'E-Cadathon',
            image: ecad,
            desc: 'Design complex electrical systems.',
            details: 'Showcase your CAD skills by designing electrical layouts and systems efficiently.',
            coordinators: [
                { name: 'Bragadeeshwaran', contact: '90428 51602' }
            ],
            rules: [
                'Individual participation.',
                'Software provided: AutoCAD/Eagle.',
                'Time limit: 1 hour.',
                'Judges decision is final.'
            ]
        },
        {
            id: 7,
            title: 'Connections',
            image: connections,
            desc: 'Connect the dots in this technical puzzle.',
            details: 'Identify technical terms and concepts by connecting related images and clues.',
            coordinators: [],
            rules: [
                'Team of 2 members.',
                'Preliminary round will be conducted.',
                'Final round on stage.',
                'Judges decision is final.'
            ]
        },
    ]
};

const EventDetailsModal = ({ event, onClose }) => {
    const navigate = useNavigate();

    if (!event) return null;

    const handleRegister = () => {
        navigate('/register', {
            state: {
                eventName: event.title,
                category: 'Event',
                rules: event.rules // Pass rules here
            }
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-4xl bg-navy-900 border border-electric-500/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(45,212,191,0.2)] flex flex-col md:flex-row max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-electric-500 hover:text-navy-950 transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Image Section */}
                <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-3/5 p-8 overflow-y-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-electric-300 to-white">
                        {event.title}
                    </h2>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                        {event.details || event.desc}
                    </p>

                    {/* Basic Info Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Calendar className="text-electric-400" size={18} />
                            <span>Feb 2026</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <Clock className="text-electric-400" size={18} />
                            <span>10:00 AM</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 col-span-2">
                            <MapPin className="text-electric-400" size={18} />
                            <span>CIT Campus</span>
                        </div>
                    </div>

                    {/* Coordinators */}
                    {event.coordinators && event.coordinators.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-electric-300 mb-4 flex items-center gap-2">
                                <User size={20} /> Event Coordinators
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {event.coordinators.map((coord, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-3 flex justify-between items-center hover:border-electric-500/30 transition-colors">
                                        <span className="font-medium text-gray-200">{coord.name}</span>
                                        {coord.contact && (
                                            <a href={`tel:${coord.contact} `} className="flex items-center gap-1 text-xs text-electric-400 hover:text-electric-300 bg-electric-500/10 px-2 py-1 rounded">
                                                <Phone size={12} /> {coord.contact}
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Register Button */}
                    <button
                        onClick={handleRegister}
                        className="w-full py-4 bg-gradient-to-r from-electric-600 to-electric-400 text-navy-950 font-black text-lg uppercase tracking-widest rounded-xl hover:shadow-[0_0_30px_#2dd4bf] hover:scale-[1.02] transition-all"
                    >
                        Register Now
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

const EventCard = ({ event, onClick }) => (
    <motion.div
        className="group relative overflow-hidden rounded-xl bg-navy-900/40 border border-electric-500/20 shadow-lg hover:shadow-[0_0_30px_rgba(45,212,191,0.3)] transition-all duration-300 cursor-pointer"
        whileHover={{ y: -10, scale: 1.02 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={() => onClick(event)}
    >
        {/* Image Container */}
        <div className="h-48 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity" />
            <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
        </div>

        {/* Content */}
        <div className="p-6 relative z-20">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-300 transition-colors duration-300 font-orbitron">
                {event.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-gray-300">
                {event.desc}
            </p>
            <span className="text-xs font-bold tracking-wider text-electric-400 uppercase border border-electric-500/30 px-3 py-1 rounded group-hover:bg-electric-500 group-hover:text-navy-950 transition-all">
                View Details
            </span>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 border border-transparent group-hover:border-electric-500/50 rounded-xl transition-all duration-300 pointer-events-none" />
    </motion.div>
);

const Events = ({ previewMode = false }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const displayedEvents = previewMode ? eventsData.technical.slice(0, 3) : eventsData.technical;

    return (
        <Section id="events" className="py-24">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4 font-orbitron"
                >
                    EVENTS
                </motion.h2>
                <div className="h-1 w-24 bg-electric-500 mx-auto rounded-full shadow-[0_0_20px_#2dd4bf]" />
            </div>

            {/* Tabs */}
            {/* Removed Tab buttons UI */}

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedEvents.map((event) => (
                    <EventCard key={event.id} event={event} onClick={setSelectedEvent} />
                ))}
            </div>

            {/* View More Button */}
            {previewMode && (
                <div className="mt-12 text-center">
                    <button
                        onClick={() => window.location.href = '/events'}
                        className="px-8 py-3 bg-transparent border border-electric-500 text-electric-400 font-bold rounded-lg uppercase tracking-wider hover:bg-electric-500 hover:text-navy-950 transition-all shadow-[0_0_15px_rgba(45,212,191,0.2)]"
                    >
                        View More Events
                    </button>
                </div>
            )}

            {/* Modal */}
            <AnimatePresence>
                {selectedEvent && (
                    <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
                )}
            </AnimatePresence>
        </Section>
    );
};

export default Events;
