import React,{ useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './Dropdown.css'

function Dropdown() {
    const [click, setclick] = useState(false);
    

    const handleclick =()=>setclick(!click);
    
    return(
        <>
        <ul onClick={handleclick} className={click ? 'dropdown-menu clicked':'dropdown-menu'}>
            {  MenuItems.map((item,index) =>{
                    return(
                        <li key={index}>
                        <Link 
                        className={item.cname} 
                        to={item.path} 
                        onClick={()=>{setclick(false)}}>
                            {item.title}
                        </Link>
                        </li>
                    );
            })}
        </ul>
        </>
    )
}
export default Dropdown;