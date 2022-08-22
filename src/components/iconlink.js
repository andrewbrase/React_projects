import './iconlink.css';

function IconLink (props) {
    return (
        <div className='icon-back'>
            <a href={props.url}><img className='iconimg' src={props.img}></img></a>
        </div>
    )
}

export default IconLink;