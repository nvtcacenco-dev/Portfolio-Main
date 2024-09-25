import { EffectCreative, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectsSliderProps } from "./ProjectSliderProps";
import { projectStrings } from "../../../model/types";
import { useContext } from "react";
import { LanguageContext, LanguageContextType } from "../../../model/LanguageContext";

export default function ProjectSliderSM({ isProjectClicked, setIsProjectClicked, handleProjectClick }: ProjectsSliderProps) {
    const { language } = useContext<LanguageContextType>(LanguageContext);
    return (
        

        <Swiper
        grabCursor={true}
        effect={'creative'}
        keyboard={{
            enabled: true,
        }}
        pagination={{
            enabled: true,
           
          }}
        creativeEffect={{
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ['100%', 0, 0],
            },
        }}
        modules={[EffectCreative, Keyboard, Pagination]}
        onActiveIndexChange={() => setIsProjectClicked([false, false, false])}
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
                    src={`${project.pictureURL}?tr=w-1900`}

                    loading="lazy"
                />
                <div className="swiper-lazy-preloader"></div>
                <div className="box-down"></div>
            </SwiperSlide>
        ))}
    </Swiper>
    )
    /* <Swiper
            grabCursor={true}
            effect={'creative'}
            keyboard={{
                enabled: true,
            }}
            pagination={{
                enabled: true,
               
              }}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }}
            modules={[EffectCreative, Keyboard, Pagination]}
            onActiveIndexChange={() => setIsProjectClicked([false, false, false])}
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
                        src={`${project.pictureURL}?tr=w-1900`}

                        loading="lazy"
                    />
                    <div className="swiper-lazy-preloader"></div>
                    <div className="box-down"></div>
                </SwiperSlide>
            ))}
        </Swiper> */
}