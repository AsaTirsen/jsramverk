import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {baseUrl} from "./base";

const ReportLink = () => {
        const [reports, setReports] = useState([]);

        useEffect(() => {
            console.log('fetch')
            fetch(baseUrl() + "reports/")
                .then(res => res.json())
                .then(res => {
                    console.log(res.data)
                    setReports(res.data)
                    console.log(setReports(res.data))
                });
        }, []);

        return (
            <main>
                <div className='main'>
                    <h1>Redovisningar</h1>
                    <ul>
                        {reports.map(({title, week}) => (
                            week && week < 11 &&
                            <li key={title}>
                                <Link className='reportlink' to={`reports/week/${week}`}>{title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        );
    }
;

export default ReportLink;
