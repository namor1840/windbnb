import Logo from "./img/logo.png"
import React, {useState} from "react"
import Modal from 'react-modal'



export default function Nav (){

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modal2IsOpen, setModal2IsOpen] = useState(false)

    
    return(

        <div className="nav">

            <div className="logo">
                <img src={Logo} />
           </div>

           <div className="buscador">
               <div className="input-group">
                   <input className="input1" type="text" aria-label="First name" class="form-control" onClick={() => setModalIsOpen(true)}/>
                   <input className="input2" type="text" aria-label="Last name" class="form-control" onClick={() => setModal2IsOpen(true)} placeholder="Add guests" />
                   <button className="btn search"><i clasName="lupa" class="bi bi-search"></i></button>
                   </div>
        
        <Modal className="modal" isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)} >  
            {
                <div className="buscador">
                 <div className="input-group">
                 <input className="input1" type="text" aria-label="First name" class="form-control" onClick={() => setModalIsOpen(true)}/>
                 <input className="input2" type="text" aria-label="Last name" class="form-control" onClick={() => setModal2IsOpen(true)} placeholder="Add guests" />
                 <button className="btn search"><i clasName="lupa" class="bi bi-search"></i></button>
                 </div></div>
}
            
        </Modal>
        
    


            </div>

        


      </div>



    )
}