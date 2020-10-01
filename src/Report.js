import {Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {baseUrl} from "./base";

const ReactMarkdown = require('react-markdown')

const Report = ({match}) => {
    const week = match.params.week;
    const [report, setReport] = useState([]);
    console.log(match);

    useEffect(() => {
        console.log('fetch')
        fetch(baseUrl() + `reports/week/${week}`)
            .then(res => res.json())
            .then(res => {
                console.log(res.data[0].longtext)
                setReport(res.data[0].longtext)
    });
    });


    return (
        <main>
            <div className='main'>
                <div>
                    <ReactMarkdown source={report} />
                </div>
                <Link to={`/reports/week/${week}/edit`}>Redigera</Link>
            </div>
        </main>
    );
};

export default Report;

