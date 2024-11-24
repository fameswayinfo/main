'use client'
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useLayoutEffect(() => {
        const handleMouseMove = (e: any) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.div
            className="fixed w-2.5 h-2.5 bg-black  rounded-full pointer-events-none z-[99999999999] md:block hidden"
            animate={{
                x: mousePosition.x - 5,
                y: mousePosition.y - 5
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.2
            }}
        />
    );
};

export default Cursor;