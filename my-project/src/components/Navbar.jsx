import React from "react";



export default function Navbar() {

    // Obtenir la date actuelle
    const today = new Date();
    // Options pour le formatage de la date
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };

    // Formater la date en utilisant toLocaleDateString
    const theDate = today.toLocaleDateString('en-EN', options);
    return(


        <div className={''}>
            <nav className={'flex flex-col gap-2'}>
                <p>{theDate}</p>
                <h1 className={'text-4xl font-semibold my-4 mb-14'}>Manage your daily tasks</h1>
            </nav>
            <nav className={'grid grid-cols-2 sm:grid-cols-3 gap-2 '}>

                <p className={'bg-red-400 rounded-lg py-6 px-2 flex flex-wrap gap-2 shadow-[0_0_15px_rgba(248,113,113,0.7)]'}>
                    <img src={'https://cdn-icons-png.freepik.com/512/7854/7854857.png'} className={'w-6'}/>
                    <a>For school</a>

                </p>
                <p className={'bg-green-500 rounded-lg py-6 px-2 flex flex-wrap gap-2 shadow-[0_0_15px_rgba(34,197,94,0.7)]'}>
                    <img src={'https://cdn-icons-png.freepik.com/512/7854/7854995.png'} className={'w-6'}/>
                    <a>Work</a>

                </p>
                <p className={'bg-blue-400 rounded-lg py-6 px-2 flex flex-wrap gap-2 shadow-[0_0_15px_rgba(96,165,250,0.7)]'}>
                    <img src={'https://cdn-icons-png.freepik.com/512/16076/16076056.png'} className={'w-6'}/>
                    <a>Daily routine</a>

                </p>

            </nav>
        </div>
    );
}