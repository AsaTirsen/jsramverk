import React from 'react'
import {
    Route,
    Link,
} from 'react-router-dom'


const reports = [
    {
        name: 'week1',
        id:1,
        description: 'Redovisningstexter',
        url: 'week/1'
    },
    {
        name: 'week2',
        id:2,
        description: 'Redovisningstexter2',
        url: 'week/2'
    },
]

function Reports() {
    return (
        <div>
            <h1>Redovisningar</h1>
            <ul>
                {reports.map(({name, id}) => (
                    <li key={id}>
                        <Link to={`/reports/week/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            <hr/>

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
