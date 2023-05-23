import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const AppFooter = () => {

    const history = useHistory();

    return (
        <div className="layout-footer">
            <div className="grid">
            
                <div className="col-12">
                    <div className="footer-bottom" >
                        <div style={{textAlign:"ceneter",alingItems:"center"}}>
                        <div className='card'>footer</div>
                        </div>
                      
                    </div>

                </div>
            </div>
        </div>

    )
}

export default AppFooter;