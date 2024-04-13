"use client"

import { fadeIn } from '@/utils/motion-transitions' // esto hace que el navbar permita overse
import {motion} from 'framer-motion'

interface MotionTransitionProps {
    children: React.ReactNode // ESto viene por defecto de react
    position: 'right' | 'bottom'
    className?: string
}

const MotionTransition = (props: MotionTransitionProps) => {

    const {children, position, className} = props

    return (
        <motion.div variants = {fadeIn(position)}
        initial = "hidden"
        animate = "visible"
        exit = "hidden" 
        className = {className}>
            {children}
        </motion.div>
    );
}

export default MotionTransition;