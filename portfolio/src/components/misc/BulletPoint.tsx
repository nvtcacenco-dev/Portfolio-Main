import AddIcon from '@mui/icons-material/Add';
import './BulletPoint.css'
interface BulletPointProps{
    string1: string,
    string2?: string,
    className: string
}

export default function BulletPoint({string1, string2, className}:BulletPointProps) {

    
    return (
        <li className={`${className} flex-xxl-grow-0 bullet-point`}>
            <div className='col-4'>
                <AddIcon fontSize='large' />
            </div>
            <p className='mb-0 flex-grow-1'>
                {string1}
                {string2 && (<br />)}
                
                {string2}
            </p>
        </li>
    )
}