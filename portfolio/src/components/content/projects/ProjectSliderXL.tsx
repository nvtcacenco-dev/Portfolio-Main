import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectsSliderProps } from "./ProjectSliderProps";
import { projectStrings } from "../../../model/types";
import { useContext } from "react";
import { LanguageContext, LanguageContextType } from "../../../model/LanguageContext";

export default function ProjectSliderXL({ isProjectClicked, setIsProjectClicked, handleProjectClick }: ProjectsSliderProps) {
    const { language } = useContext<LanguageContextType>(LanguageContext);
    return (
        <Swiper
            grabCursor={true}
            slidesPerView={'auto'}
            spaceBetween={30}
            dir="rtl"
            /* loop={true} */
            
            keyboard={{
                enabled: true,
            }}
            slideToClickedSlide
            navigation={true}
            onActiveIndexChange={() => setIsProjectClicked([false, false, false])}
            modules={[Keyboard, Navigation]}
            className="mySwiper"
        >
            {projectStrings.map((project, index) => (
                <SwiperSlide className={`${isProjectClicked[index] ? 'project-active' : ''}`} key={index} onClick={() => handleProjectClick(index)}>
                    <div className="box-up"></div>
                    <p className="project-title col-12">
                        {project.title[language]}
                    </p>

                    <img
                        className="project-img"
                        src={`${project.pictureURL}?tr=w-1920`}

                        loading="lazy"
                    />
                    <div className="swiper-lazy-preloader"></div>
                    <div className="box-down"></div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}