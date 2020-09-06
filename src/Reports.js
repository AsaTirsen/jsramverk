import React from 'react'
import {
    Route,
    Link,
} from 'react-router-dom'
import reports from "./ReportSegments";

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
            <p>{report.content}</p>
        </div>
    )
}

export default Reports;
