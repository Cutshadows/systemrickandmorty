import React from 'react';
import '../App.css'
import loader from '../images/loading.gif';
function Loader(){
    return(
        <div >{/* className="Loader" style={{backgroundImage:`url(${'../images/loading.gif'})`}} */}
             <img src={loader} alt=""/>
        </div>
    )
}



export default Loader;