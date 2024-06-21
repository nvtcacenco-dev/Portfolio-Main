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
    aboutKeywordString6
} from "../../../model/types";
import { LanguageContext, LanguageContextType } from "../../../model/LanguageContext";
import { useContext } from "react";

export default function AboutLayoutMD() {
    const { language } = useContext<LanguageContextType>(LanguageContext);
    return (
        <>
            <div className='col-12 d-flex align-content-center justify-content-center flex-wrap'>
                <h2 className='col-12 mb-5'>
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
                </h2>

                <div className='col-5 d-flex justify-content-center align-items-end mt-3 me-auto' id='img-container'>
                    <motion.div
                        id='img-box'
                        className='col-12 position-relative'
                        initial={{ opacity: 0, translateX: -200 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div id='personal-img'></div>
                        <motion.div
                            id='img-box-style'
                            initial={{ opacity: 0, rotate: 0 }}
                            whileInView={{ opacity: 1, rotate: 5 }}

                            transition={{ duration: 0.8, delay: 1 }}
                            viewport={{ once: true }} />
                    </motion.div>

                </div>
                <motion.div
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="col-6 ms-auto align-self-end"
                >
                    <h3 id="about-me-heading" className="mb-1">About Me</h3>
                    <p className='col-12 ' id='about-description'>
                        Lorem ipsum dolor sit amet,
                        consetur adipiscing elit.
                        In rhoncus leo sed rutrum elementum.
                        Aenean lectus nisi, feugiat in egestas sed,
                        blandit sit amet nulla. Sed at mattis arcu,
                        id luctus tortor. Phasellus ut eros at lectus suscipit rutrum vel a felis.
                        Nullam convallis lorem neque, at tincidunt odio tempus nec.
                        Duis pharetra et libero sit amet pharetra. Sed euismod at magna nec ultricies.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                    </p>
                    <div className='col-12 d-flex mt-3 ms-auto z-3' id='contact-me-btn-container'>
                        <Button className='col-12 z-3' id='contact-me-btn'>
                            <p>{btnContactMeString[language]}</p>
                        </Button>
                    </div>
                </motion.div>

                <div className='d-flex col-12' id='about-description-container'>
                    <motion.div
                        initial={{ opacity: 0, translateY: 100 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='col-12 '
                    >
                        <ul className='col-12 d-flex mt-5 gap-3 flex-wrap mx-auto'>
                            <li className='col-lg-3 flex-grow-0 flex-sm-grow-1'>
                                <div className='col-4'>
                                    <AddIcon fontSize='large' />
                                </div>
                                <p className='mb-0 flex-grow-1'>
                                    {aboutKeywordString1[language]}
                                    <br />
                                    {aboutKeywordString2[language]}
                                </p>
                            </li>
                            <li className='col-lg-3 flex-grow-0 flex-sm-grow-1'>
                                <div className='col-4'>
                                    <AddIcon fontSize='large' />
                                </div>
                                <p className='mb-0 flex-grow-1'>
                                    {aboutKeywordString3[language]}
                                    <br />
                                    {aboutKeywordString4[language]}
                                </p>
                            </li>
                            <li className='col-lg-3 flex-grow-0 flex-sm-grow-1'>
                                <div className='col-4'>
                                    <AddIcon fontSize='large' />
                                </div>
                                <p className='mb-0 flex-grow-1'>
                                    {aboutKeywordString5[language]}
                                    <br />
                                    {aboutKeywordString6[language]}
                                </p>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>


        </>
    );
}