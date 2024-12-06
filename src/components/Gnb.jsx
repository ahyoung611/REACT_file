import React from 'react';

function Gnb() {
    const menuDate = ['Home', 'Project', 'Work', 'UX/UI', 'About']
    return (
        <div>
            <ul>
                {
                    menuDate.map((item,i) => {
                        return (
                            <li key={i}>{item}</li>
                        )

                    })
                }
            </ul>
        </div>
    );
}

export default Gnb;
