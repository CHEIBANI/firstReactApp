import React from 'react';

const ArretDetail = (props) => {
     if(!props.lines){
        return <div>Loading...</div>
    }
    const lines = props.lines.map((line) => {
        return    <li key={line.numLigne} className="list-group-item justify-content-between">
                        <span>Ligne {line.ligne.numLigne} Vers </span>
                        <span>{line.terminus}</span>
                        <span className="badge badge-default badge-pill">{line.temps}</span>
                    </li>
    });

    return (
       <ul className="col-md-8 list-group">
                {lines}
        </ul>
    );

}

export default ArretDetail;


