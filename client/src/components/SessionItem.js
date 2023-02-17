
import { motion, LayoutGroup } from 'framer-motion';
import { useState } from 'react';

const SessionItem = ({ item, setSession, removeSession}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // <div className="session-item">
        //     <div className="item-header">
        //         <h4>Note: {item.title}</h4>
        //     </div>
        //     <div className="item-detail" onClick={() => setSession(item)}>
        //         <p>Title: {item.title}</p>
        //         <p>Duration: {item.duration}</p>
        //         <p>Notes: {item.worked_on}</p>
        //     </div>
        //     <div className="del-btn-container">
        //         <button id={item._id} className="del-btn" onClick={() => removeSession(item._id)}> X </button>
        //     </div>
        // </div>
        <motion.div 
            layout 
            initial={{ y: +500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            onHoverStart={() => setIsOpen(!isOpen)}
            onHoverEnd={() => setIsOpen(!isOpen)}
            style={{ height: isOpen ? "175px" : "100px" }}
            onClick={() => setIsOpen(!isOpen)} 
            className="session-item">
            <div className="item-header">
                <h4>Note: {item.title}</h4>
            </div>
            { isOpen && (
                <LayoutGroup>
                    <motion.div
                        className="item-detail" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileInView={{ opacity: 1 }}
                        // exit={{ x: 500, opacity: 0 }}
                        // transition={{ duration: 1 }}
                        onClick={() => setSession(item)}>
                        <p>Title: {item.title}</p>
                        <p>Duration: {item.duration}</p>
                        <p>Notes: {item.worked_on}</p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileInView={{ opacity: 1 }}
                        className="del-btn-container">
                        <motion.button 
                            id={item._id}
                            whileHover={{ scale: 1.2 }} 
                            className="del-btn" 
                            onClick={() => removeSession(item._id)}> X </motion.button>
                    </motion.div>
                </LayoutGroup>
            )}
        </motion.div>
    )
}

export default SessionItem;