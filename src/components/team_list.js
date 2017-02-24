import React from 'react';

const TeamList = (props) => {
    const teamClassements = props.teams.map((team) =>{
        return <tr key={team.id}>
                <td>{team.name}</td>
                <td>{team.mj}</td>
                <td>{team.g}</td>
                <td>{team.n}</td>
                <td>{team.pts}</td>
        </tr>
    });

    return (

        <table className="table">
                <tbody>
                            {teamClassements}
                </tbody>

        </table>
    );

}

export default TeamList;