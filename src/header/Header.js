import './header.css'
import Sidebar from './headercomponents/Sidebar'
import Logo from './headercomponents/Logo'
import Hireme from './headercomponents/Hireme'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

const Header =() =>{
 return(
 <>
 <div className='header'>
    <div className='header__left'>
        <Sidebar/>
        <Logo/>
        
    </div>
    <div className='header__right'>
    <Hireme />
    </div>
 </div>
 </>
 )
}


export default Header;