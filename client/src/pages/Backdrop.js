import { motion } from "framer-motion";

const Backdrop = ({children, onClick}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            onClick={onClick} 
            className="backdrop">
                {children}
        </motion.div>
    )
}


export default Backdrop;