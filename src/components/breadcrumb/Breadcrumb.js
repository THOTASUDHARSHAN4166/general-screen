import React from 'react';
import data from './data';
import './Breadcrumb.css';

export default function Breadcrumb() {
    return (

        <>
            <main>
                <div className="breadcrumb-division">
                    <h3>Welcome to Onboard</h3>
                    <h5>You are just 5 Steps away to create <br/> your own account ...</h5>

                    <div>
                        {
                            data.map((check) => {
                                const { id, photo, text, logo, sublogo } = check;
                                return <div className="selection-division" key={ id }>
                                    <label className="icon">{ photo }</label>
                                    <div className="namedivision">
                                        <label className='label'>{ text }<label className="sublabel">{ sublogo }</label></label></div>
                                    <label className="checklogo">{ logo }</label>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="products-screen">
                    <h3>Welcome</h3>
                </div>
            </main>
        </>
    )
}
