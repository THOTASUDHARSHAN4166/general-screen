import React from 'react';
import data from './Data';
import styles from './Breadcrumb.module.css'

export default function Breadcrumb() {

    return (

        <>
            <main>
            <div className={styles['breadcrumb-division']}>
            <h3 className={styles['breadcrumb-heading']}>Welcome to Onboard</h3>
            <h5 className={styles['breadcrumb-subheading']}>You are just 5 Steps away to create <br/> your own account ...</h5>
               {
                            data.map((check) => {
                                const { id, photo, text, logo, sublogo, active, completed } = check;
                                return <div key={ id } className={ `${styles['selection-division']}  ${active && styles.activeSelection} `}>
                                    <label className={ `${styles.icon} ${!active ? completed ? styles.completedicon : styles.notactiveicon : styles.activeicon}`}>{ photo }</label>
                                    <div className={styles.namedivision}>
                                        <label className={ `${styles.label}  ${!active ? completed ? styles.completedlabel : styles.notactivelabel : styles.activelabel}`}>{ text }<label className={styles.sublabel}>{ sublogo }</label></label></div>
                                    <label className={` ${styles.checklogo} ${!active ? completed ? styles.completedcheck : styles.notactivecheck : styles.activecheck}` }>{ logo }</label>
                                </div>
                            })
                        }
            </div>
            <div className={styles['products-screen']}>
            <h3>Products screen</h3>
            </div>
            </main>
        </>
    )
}
