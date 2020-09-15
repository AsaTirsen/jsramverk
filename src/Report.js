import React, {useEffect, useState} from 'react';

const Report = ({match}) => {
        const week = match.params.week;
        const [report, setReport] = useState([]);

        useEffect(() => {
            console.log('fetch')
            fetch(`http://localhost:1337/reports/week/${week}`)
                .then(res => res.json())
                .then(res => setReport(res.data));
        });

        return (
            <main>
                <div className='main'>
                    <div>
                        {report}
                    </div>
                </div>
            </main>
        );
    }
;

export default Report;

