import React, {useEffect, useState} from 'react';
const ReactMarkdown = require('react-markdown')

const Report = ({match}) => {
    const week = match.params.week;
    const [report, setReport] = useState([]);
    console.log(match);

    useEffect(() => {
        console.log('fetch')
        fetch(`http://localhost:1337/reports/week/${week}`)
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
            </div>
        </main>
    );
};

export default Report;

