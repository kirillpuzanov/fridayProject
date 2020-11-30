import React from 'react';



const Modal = ()=>{
    return (
       <div>
            <div className="modal-container">
                <div className="modal-background">
                    <div className="modal">
                        <h2>I'm a Modal</h2>
                        <p>Hear me roar.</p>
                        <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                             preserveAspectRatio="none">
                            <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="content">
                <h1>Modal Animations</h1>
                <div className="buttons">
                    <div id="one" className="button">Unfolding</div>

                </div>
            </div>

       </div>



    )
}

export  default 1;