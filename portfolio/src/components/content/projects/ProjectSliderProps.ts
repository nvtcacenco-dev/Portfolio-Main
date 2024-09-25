
export interface ProjectsSliderProps{
    isProjectClicked: boolean[];
    handleProjectClick: (index: number) => void;
    setIsProjectClicked: React.Dispatch<React.SetStateAction<boolean[]>>;
}