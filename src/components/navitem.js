import './navitem.css'

function Nav(props) {

    return (
        <div className='navback'>
            <div className='flexitem-title'>{props.projtitle}</div>
            <div>{props.desc}</div>
        </div>
    );
}

export default Nav;