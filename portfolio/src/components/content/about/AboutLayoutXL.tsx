import { Button } from "@mui/material";
import { motion } from "framer-motion";

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

export default function AboutLayoutXL() {
    const { language } = useContext<LanguageContextType>(LanguageContext);
    return (
        <>
            <div className='col-xl-7 d-flex align-content-center flex-column'>
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
                        <div className='col-2' id='title-text-dash' />

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

                <div className='d-flex' id='about-description-container'>
                    <motion.div
                        initial={{ opacity: 0, translateX: -100 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='col-12 '
                    >

                        <p className='col-xl-8 mx-auto mx-xl-0' id='about-description'>
                            {aboutMeString[language]}
                            <br />
                            <br />
                            {aboutMeEndingString[language]}
                        </p>
                        <div className='col-12 d-flex' id='contact-me-btn-container'>
                            <Button className='col-xl-5 mx-xl-0' id='contact-me-btn' onClick={() => handleSectionClick("footer")}>
                                <p>{btnContactMeString[language]}</p>
                            </Button>
                        </div>
                        <ul className='col-12 d-flex mt-5 gap-3 flex-wrap mx-xl-0'>
                            <BulletPoint string1={aboutKeywordString1[language]} string2={aboutKeywordString2[language]} className={'about-bullet'} />
                            <BulletPoint string1={aboutKeywordString3[language]} string2={aboutKeywordString4[language]} className={'about-bullet'} />
                            <BulletPoint string1={aboutKeywordString5[language]} string2={aboutKeywordString6[language]} className={'about-bullet'} />
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                        viewport={{ once: true }}
                        className='col-5' id='about-description-arrow-container'
                    >


                        <div id='about-description-arrow' />


                    </motion.div>


                </div>
            </div>

            <div className='col-xl-5 px-0 px-xxl-3 d-flex justify-content-center align-items-start align-items-xl-center' id='img-container'>
                <motion.div
                    id='img-box'
                    className='col-10 position-relative'
                    initial={{ opacity: 0, translateX: 300 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <img
                        id='personal-img'
                        alt='Nicolae Tcacenco'
                        loading="lazy"
                        src='https://ik.imagekit.io/nvtcacenco/Portfolio/my_img2.webp?tr=w-800'
                        srcSet='https://ik.imagekit.io/nvtcacenco/Portfolio/my_img2.webp?tr=w-960 1920w,
                        https://ik.imagekit.io/nvtcacenco/Portfolio/my_img2.webp?tr=w-700 1400w
                        https://ik.imagekit.io/nvtcacenco/Portfolio/my_img2.webp?tr=w-600 1200w'
                    />
                    <motion.div
                        id='img-box-style'
                        initial={{ opacity: 0, rotate: 0 }}
                        whileInView={{ opacity: 1, rotate: 5 }}

                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }} />
                </motion.div>
            </div>
        </>
    )
}