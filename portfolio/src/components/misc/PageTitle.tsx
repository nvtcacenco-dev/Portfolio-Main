
import './PageTitle.css'


interface PageTitleProps{
    title: string;
    dir: string;
}

export default function PageTitle({title, dir}: PageTitleProps){
    
    const titleDir = dir === 'right' ? 'title-right' : 'title-left'

    return (
        <h2 className={`${titleDir} section-title`} id={`${title}-section-title`} >{title}</h2>
    )
}