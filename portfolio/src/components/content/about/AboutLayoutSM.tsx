import { Button } from "@mui/material";
import { motion } from "framer-motion";
import AddIcon from '@mui/icons-material/Add';
import {
    aboutTaglineStringPart1,
    aboutTaglineStringPart2,
    aboutTaglineStringPart3,
    btnContactMeString,
    aboutKeywordString1,
    aboutKeywordString2,
    aboutKeywordString3,
    aboutKeywordString4,
    aboutKeywordString5,
    aboutKeywordString6,
    aboutMeString,
    aboutMeEndingString
} from "../../../model/types";
import { LanguageContext, LanguageContextType } from "../../../model/LanguageContext";
import { useContext } from "react";
import { handleSectionClick } from "../../../model/functions";
import BulletPoint from "../../misc/BulletPoint";

export default function AboutLayoutSM() {
    const { language } = useContext<LanguageContextType>(LanguageContext);
    return (
        <>
            <div className='col-12 col-xl-7 d-flex align-content-center flex-column'>
                <h3 className='col-12 mb-5 mb-xl-0'>
                    <motion.p
                        className='mb-0'
                        initial={{ opacity: 0, translateX: -50 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {aboutTaglineStringPart1[language]}
                    </motion.p>

                    <motion.span
                        id='title-text-transform'
                        initial={{ opacity: 0, translateX: 100 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                    >


                        <p className='col-9 mb-0 flex-grow-1'>
                            {aboutTaglineStringPart2[language]}
                        </p>
                    </motion.span>
                    <motion.p
                        className='mb-0'
                        initial={{ opacity: 0, translateX: -50 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {aboutTaglineStringPart3[language]}
                    </motion.p>
                </h3>


                <div className='col-12 col-xl-5 px-xl-3 d-flex justify-content-center align-items-end' id='img-container'>
                    <motion.div
                        id='img-box'
                        className='col-10 col-sm-8 position-relative'
                        initial={{ opacity: 0, translateX: 200 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img
                            id='personal-img'
                            alt='Nicolae Tcacenco'
                            loading="lazy"
                            src='https://ik.imagekit.io/nvtcacenco/Portfolio/my_img2.webp?tr=w-600'
                            srcSet='https://ik.imagekit.io/nvtcacenco/Portfolio/my_img2.webp?tr=w-400 800w,
                                    https://ik.imagekit.io/nvtcacenco/Portfolio/my_img2.webp?tr=w-300 600w'
                        />
                        <motion.div
                            id='img-box-style'
                            initial={{ opacity: 0, rotate: 0 }}
                            whileInView={{ opacity: 1, rotate: 10 }}

                            transition={{ duration: 0.8, delay: 1 }}
                            viewport={{ once: true }} />
                    </motion.div>

                </div>

                <div className='d-flex' id='about-description-container'>
                    <motion.div
                        initial={{ opacity: 0, translateX: -100 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='col-12 '
                    >

                        <p className='col-11 col-sm-10 col-xl-8 mx-auto mx-xl-0' id='about-description'>
                            {aboutMeString[language]}
                            <br />
                            <br />
                            {aboutMeEndingString[language]}
                        </p>
                        <div className='col-12 d-flex' id='contact-me-btn-container'>
                            <Button className='col-11 col-sm-6 col-xl-5 mx-sm-auto mx-xl-0' id='contact-me-btn' onClick={() => handleSectionClick("footer")}>
                                <p>{btnContactMeString[language]}</p>
                            </Button>
                        </div>
                        <ul className='col-11 d-flex mt-5 gap-3 flex-wrap mx-auto mx-xl-0'>
                            <BulletPoint string1={aboutKeywordString1[language]} string2={aboutKeywordString2[language]} className={'about-bullet'}/>
                            <BulletPoint string1={aboutKeywordString3[language]} string2={aboutKeywordString4[language]} className={'about-bullet'}/>
                            <BulletPoint string1={aboutKeywordString5[language]} string2={aboutKeywordString6[language]} className={'about-bullet'}/>
                        </ul>
                    </motion.div>



                </div>
            </div>

        </>
    );
}