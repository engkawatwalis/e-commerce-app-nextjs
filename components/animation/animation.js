export const staggerContainer = {

    hidden: {
        
    },
    visible: {
        transition:{
            staggerChildren: 0.2
        }
    }
} 

export const animatedStaggerContainer = {

    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition:{
            duration: 0.5,
            ease: 'easeInOut',
            staggerChildren: 0.2
        }
    }
} 

export const fadeIn = {

    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition:{
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

export const translateXFromLeft = {

    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition:{
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

export const translateUp = {

    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition:{
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

export const translateDown = {

    hidden: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition:{
            duration: 0.5,
            ease: 'easeInOut'
        }
    },
    exit: {
        y: -100,
        opacity: 0,
        transition:{
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}