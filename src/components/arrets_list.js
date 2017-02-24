import React from 'react';
import ArretDetail from './arret_detail';

const ArretList = (props) => {
    if(!props.arrets){
        return <div>Loading...</div>
    }
        const arretsBrowse = props.arrets.map((arret) => {
            return (
                <li onClick={() => props.onArretSelect(arret.codeLieu)} key={arret.codeLieu} className="list-group-item">
                    <span className="tag tag-default tag-pill float-xs-right"></span>
                    {arret.libelle}
                </li>
                )
        });

        return (
            <div>
                <ul className="list-group col-md-4">
                        {arretsBrowse}
                </ul>
                 
            </div>
        );
        
};


export default ArretList;