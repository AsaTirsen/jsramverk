import React from 'react'
import {
    Route,
    Link,
} from 'react-router-dom'


const reports = [
    {
        name: 'Redovisning vecka 1',
        id:1,
        description: 'Redovisningstexter',
        url: 'week/1'
    },
    {
        name: 'Redovisning vecka 1',
        id:2,
        description: 'Redovisningstexter2',
        url: 'week/2'
    },
]

function Reports() {
    return (
        <div className='main'>
            <h1>Redovisningar</h1>
            <ul>
                {reports.map(({name, id}) => (
                    <li key={id}>
                        <Link className='reportlink' to={`/reports/week/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            <hr />
            <Route path={`/reports/week/:reportId`} component={Report}/>
        </div>
    )
}


function Report({match}) {
    console.log(match)
    const report = reports.find(({id}) => id.toString() === match.params.reportId)

    return (
        <div>
            <h2>{report.name}</h2>
            <p>{report.description}</p>
        </div>
    )
}

export default Reports;
