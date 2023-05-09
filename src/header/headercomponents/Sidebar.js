
import { AiOutlineMenu } from 'react-icons/ai';
import './sidebar.css'

function Sidebar() {
   return( 
    <>
<button id='sbbtn' class="btn " type="button" data-bs-toggle="offcanvas"  data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><AiOutlineMenu /></button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>lorem lorem lorem</p>
  </div>
</div>
   </>
   );
 
}


export default Sidebar;