import './header.css'
import Sidebar from './headercomponents/Sidebar'
import Logo from './headercomponents/Logo'
import Hireme from './headercomponents/Hireme'


const Header =() =>{
 return(
 <>
 <div className='header'>
    <div className='header__left'>
        <div className='btn'><Sidebar/></div>
        
        <Logo/>
        
    </div>
    <div className='header__right'>
        <div className='btn'><Hireme/></div>
    
    </div>
 </div>
 </>
 )
}


export default Header;