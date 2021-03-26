import uuid from 'react-uuid';

export default function DrawIdx({type}) {
    const digits = [1,2,3,4,5,6,7,8,9,10];

    return (
    <div className={'battlefield-'+type}>
    { digits.map( item =>
        <span   className='idx'
                key={uuid()}
                style={type === 'digits' ? {gridColumn: item} : {gridRow: item}}>
            { type === 'digits' ? item : String.fromCharCode(item+1039) }
        </span>
    ) }
    </div>
    )
}