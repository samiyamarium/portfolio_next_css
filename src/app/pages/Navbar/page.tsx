
import Home from '../Home/page';
import About from '../About/page'
import Contact from '../Contact/page'



const Navbar=()=>{
    return(<div>
        <div className="hom"><a className="hom" href="#H" target='blank'>Home</a><a className="hom" href="#A" target='blank'>About</a><a className="hom"  href="#C" target='blank'>Contact</a></div>
<div ><h1 className="dis" id="H"><Home/></h1><h1 className="dis" id="A"><About/></h1><h1 className="dis" id="C"><Contact/></h1>
</div>
</div>
    )
}
export default Navbar;