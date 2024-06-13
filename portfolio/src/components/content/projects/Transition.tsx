import {AnimatePresence, motion} from "framer-motion"
import { FC } from "react"

import './Transition.css'


export default function Transition(Component: FC<any>){
    return(
        
                <motion.div className="w-100 h-100">
                    <motion.div 
                        key={"in"}
                        className="slide-in d-flex justify-content-center align-items-center"
                        initial={{scaleX: 1}}
                        animate={{scaleX: 0}}
                        exit={{scaleX: 1, translateX: "0%"}}
                        transition={{ duration: 1.5, ease:[0.24, 1, 0.48, 1]}}
                    
                    >
                        {/* <div className="loading-icon">

                        </div> */}
                    </motion.div>
                    <Component />
                   
                </motion.div>
        
    );
}



