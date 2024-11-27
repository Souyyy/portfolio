import Header from './Header';
import Footer from './Footer';


function Home() {

    const introduction = `Bonjour, je m'appelle Théo Disy, développeur web passionné par la création de sites et d’applications web modernes. <br/> Explorez mon portfolio pour découvrir mon savoir-faire et mes projets. N'hésitez surtout pas à me contacter !`;

    let anneeExpertise = Math.floor((new Date() - new Date('2018-01-01')) / (1000 * 60 * 60 * 24 * 365));
    let age = Math.floor((new Date() - new Date('2002-09-07')) / (1000 * 60 * 60 * 24 * 365));

    const lien_cv = "";
    const contact_whatsapp = "https://wa.me/33617880505";
    const contact_email = "mailto:pro.theodisy@gmail.com";
    const contact_telephone = "tel:+33617880505";
    const contact_linkedin = "https://www.linkedin.com/in/theo-disy/";

    const projets = "/projets";
    const profil_github = "https://github.com/Souyyy/";



    for (let i = 0; i <= 23; i++) {
        setTimeout(() => {
            document.getElementById("number_increment").innerHTML = "+" + i;
        }, i * 25);
    }

    for (let i = 0; i <= anneeExpertise; i++) {
        setTimeout(() => {
            document.getElementById("anneeexpeertise").innerHTML = i;
        }, i * 100);
    }

    return (
        <section className='h-full'>
            <main>
                <div className="flex w-full flex-col items-center justify-center rounded-lg p-6 dark:bg-slate-900">
                    <div className="box grid  gap-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">

                        {/* Introduction */}
                        <div className=" shadow p-6 rounded-xl col-span-2 md:col-span-3 lg:col-span-5 flex flex-col sm:flex-row ring-1 ring-zinc-900 gap-3">
                            <img src="./img.jpg" className='m-auto w-32 h-32 rounded-full' alt="Image de théo" />
                            <div className='sm:ml-6 sm:mt-2'>
                                <h3 className="font-semibold text-xl">Bienvenue sur mon Portfolio</h3>
                                <p className='mt-2 text-sm text-justify'>{introduction}</p>
                                <div className='flex mt-3 gap-2 flex-wrap justify-center sm:justify-start'>
                                    <div className='lt-box rounded-xl text-xs flex items-center justify px-2 py-1 ring-1 ring-zinc-800'>{age} ans</div>
                                    <div className='lt-box rounded-xl text-xs flex items-center justify px-2 py-1 ring-1 ring-zinc-800'>Île-de-France</div>
                                    <div className='relative flex lt-box rounded-xl items-center justify px-2 py-1 ring-1 ring-zinc-800'>
                                        <span className=" flex h-2 w-2 relative mr-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        <div className=' text-xs flex '>Disponible</div>
                                    </div>
                                    <a href={lien_cv} target="_blank" rel="noopener noreferrer">
                                        <div className='lt-box rounded-xl text-xs flex items-center justify px-3 py-1 ring-1 ring-zinc-800 transition hover:-rotate-3'>
                                            <p>Voir mon CV</p>
                                            <svg fill="#555555" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="ml-1.5 w-3 h-3 sm:w-3 sm:h-3">
                                                <path fillRule="evenodd" d="M3.47186258,13.4213562 L6.31457505,10.5786438 C6.70707174,10.1861471 7.3434346,10.1861471 7.73593129,10.5786438 C8.1003925,10.943105 8.12642544,11.5178385 7.81403012,11.9123387 L7.73593129,12 L4.89321881,14.8427125 C3.71572875,16.0202025 3.71572875,17.9292911 4.89321881,19.1067812 C6.02865566,20.242218 7.84436716,20.2827693 9.02839505,19.2284351 L9.15728753,19.1067812 L12,16.2640687 C12.3924967,15.871572 13.0288596,15.871572 13.4213562,16.2640687 C13.7858174,16.6285299 13.8118504,17.2032635 13.4994551,17.5977636 L13.4213562,17.6854249 L10.5786438,20.5281374 C8.61616033,22.4906209 5.43434601,22.4906209 3.47186258,20.5281374 C1.56102344,18.6172983 1.5107382,15.5504592 3.32100685,13.5787779 L3.47186258,13.4213562 Z M13.4213562,3.47186258 C15.3838397,1.50937914 18.565654,1.50937914 20.5281374,3.47186258 C22.4906209,5.43434601 22.4906209,8.61616033 20.5281374,10.5786438 L17.6854249,13.4213562 C17.2929283,13.8138529 16.6565654,13.8138529 16.2640687,13.4213562 C15.871572,13.0288596 15.871572,12.3924967 16.2640687,12 L19.1067812,9.15728753 C20.2842712,7.97979746 20.2842712,6.07070887 19.1067812,4.89321881 C17.9292911,3.71572875 16.0202025,3.71572875 14.8427125,4.89321881 L12,7.73593129 C11.6075033,8.12842798 10.9711404,8.12842798 10.5786438,7.73593129 C10.1861471,7.3434346 10.1861471,6.70707174 10.5786438,6.31457505 L13.4213562,3.47186258 Z M13.4213562,9.15728753 C13.8138529,8.76479084 14.4502158,8.76479084 14.8427125,9.15728753 C15.2352092,9.54978421 15.2352092,10.1861471 14.8427125,10.5786438 L10.5786438,14.8427125 C10.1861471,15.2352092 9.54978421,15.2352092 9.15728753,14.8427125 C8.76479084,14.4502158 8.76479084,13.8138529 9.15728753,13.4213562 L13.4213562,9.15728753 Z" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Projet */}
                        <div className=" shadow p-6 rounded-xl col-span-2 md:col-span-1 lg:col-span-1 flex flex-col justify-center items-center ring-1 ring-zinc-900">
                            <h3 id="number_increment" className="font-semibold text-6xl text-center mb-3 font-gradient animate-pulse">+20</h3>
                            <h4 className='text-center  text-md'>Projets</h4>
                        </div>


                        {/* Langage de programmation */}
                        <div className=" shadow p-6 rounded-xl col-span-2 md:col-span-2 md:row-span-2 ring-1 ring-zinc-900">
                            <h3 className="font-semibold text-xl mb-4">Langage de programmation</h3>
                            <table className='w-full text-sm text-center'>
                                <thead><tr className='font-semibold font-gradient'>
                                    <td>FrontEnd</td>
                                    <td>BackEnd</td>
                                    <td>Autres</td>
                                </tr></thead>
                                <tbody>
                                    <tr>
                                        <td>HTML</td>
                                        <td>PHP</td>
                                        <td>Java</td>
                                    </tr>
                                    <tr>
                                        <td>CSS, SASS</td>
                                        <td>SQL, NoSQL</td>
                                        <td>Python</td>
                                    </tr>
                                    <tr>
                                        <td>TailwindCSS</td>
                                        <td>Symphony</td>
                                        <td>C#</td>
                                    </tr>
                                    <tr>
                                        <td>Bootstrap</td>
                                        <td>Node.Js</td>
                                    </tr>
                                    <tr>
                                        <td>Javascript</td>
                                        <td>Express.js</td>
                                    </tr>
                                    <tr>
                                        <td>React, Vite</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Compétence */}
                        <div className=" shadow p-6 rounded-xl row-span-1 md:row-span-2 ring-1 ring-zinc-900">
                            <h3 className="font-semibold text-xl mb-4 sm:text-center">Compétences</h3>
                            <ul className='text-sm text-center'>
                                <li>Suite Office</li>
                                <li>PS / Illustrator</li>
                                <li>Docker, GLPI</li>
                                <li>Wordpress, Git</li>
                                <li>Fortinet</li>
                                <li>TraefixProxy</li>
                                <li>Nas Synology</li>
                                <li>VirtualBox</li>
                            </ul>
                        </div>

                        {/* Année d'expertise */}
                        <div className="flex justify-center  items-center flex-col shadow p-6 rounded-xl row-span-1 md:row-span-3 lg:row-span-2 ring-1 ring-zinc-900">
                            <h3 className="font-semibold text-8xl text-center mb-3 font-gradient animate-pulse" id='anneeexpeertise'></h3>
                            <h4 className='text-center text-sm'>années d'expertises</h4>
                        </div>

                        {/* Contact */}
                        <div className="shadow p-6 rounded-xl col-span-2 md:col-span-3 lg:col-span-2 ring-1 ring-zinc-900">
                            <h3 className="font-semibold text-xl mb-3">Contact</h3>
                            <div className='flex justify-evenly'>
                                <a href={contact_whatsapp}>
                                    <div className='lt-box hover:scale-110 hover:-rotate-3 transition flex justify-center items-center w-12 h-12  bg-gray-800 rounded-lg cursor-pointer'>
                                        <svg fill="#555555" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="hover:scale-110 transition w-8 h-8  jam jam-whatsapp"><path d='M9.516.012C4.206.262.017 4.652.033 9.929a9.798 9.798 0 0 0 1.085 4.465L.06 19.495a.387.387 0 0 0 .47.453l5.034-1.184a9.981 9.981 0 0 0 4.284 1.032c5.427.083 9.951-4.195 10.12-9.58C20.15 4.441 15.351-.265 9.516.011zm6.007 15.367a7.784 7.784 0 0 1-5.52 2.27 7.77 7.77 0 0 1-3.474-.808l-.701-.347-3.087.726.65-3.131-.346-.672A7.62 7.62 0 0 1 2.197 9.9c0-2.07.812-4.017 2.286-5.48a7.85 7.85 0 0 1 5.52-2.271c2.086 0 4.046.806 5.52 2.27a7.672 7.672 0 0 1 2.287 5.48c0 2.052-.825 4.03-2.287 5.481z' /><path d='M14.842 12.045l-1.931-.55a.723.723 0 0 0-.713.186l-.472.478a.707.707 0 0 1-.765.16c-.913-.367-2.835-2.063-3.326-2.912a.694.694 0 0 1 .056-.774l.412-.53a.71.71 0 0 0 .089-.726L7.38 5.553a.723.723 0 0 0-1.125-.256c-.539.453-1.179 1.14-1.256 1.903-.137 1.343.443 3.036 2.637 5.07 2.535 2.349 4.566 2.66 5.887 2.341.75-.18 1.35-.903 1.727-1.494a.713.713 0 0 0-.408-1.072z' /></svg>
                                    </div>
                                </a>
                                <a href={contact_email}>
                                    <div className='lt-box hover:scale-110 hover:-rotate-3 transition flex justify-center items-center w-12 h-12  bg-gray-800 rounded-lg cursor-pointer'>
                                        <svg fill="#555555" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className='hover:scale-110 transition w-8 h-8 '><title>mail</title><path d="M64 128Q64 113 73 105 81 96 96 96L416 96Q431 96 440 105 448 113 448 128L448 144 256 272 64 144 64 128ZM256 328L448 200 448 384Q448 416 416 416L96 416Q64 416 64 384L64 200 256 328Z" /></svg>
                                    </div>
                                </a>
                                <a href={contact_telephone}>
                                    <div className='lt-box hover:scale-110 hover:-rotate-3 transition flex justify-center items-center w-12 h-12  bg-slate-300 rounded-lg cursor-pointer'>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="hover:scale-110 transition w-8 h-8 " viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                                            <g>
                                                <path fill="#555555" d="M84.96,70.237c-0.167-1.032-0.814-1.914-1.783-2.438l-14.335-8.446l-0.118-0.066
		c-0.579-0.297-1.249-0.45-1.937-0.45c-1.201,0-2.348,0.455-3.144,1.253l-4.231,4.233c-0.181,0.172-0.771,0.421-0.95,0.43
		c-0.049-0.004-4.923-0.355-13.896-9.329c-8.957-8.955-9.337-13.844-9.34-13.844c0.005-0.25,0.251-0.838,0.426-1.02l3.608-3.607
		c1.271-1.274,1.652-3.386,0.898-5.022L32.19,16.938c-0.579-1.192-1.704-1.928-2.952-1.928c-0.883,0-1.735,0.366-2.401,1.031
		l-9.835,9.813c-0.943,0.938-1.755,2.578-1.932,3.898c-0.086,0.631-1.831,15.693,18.819,36.346
		C51.42,83.627,65.09,84.989,68.865,84.989l0,0c0.812,0,1.285-0.058,1.376-0.071c1.316-0.176,2.954-0.986,3.891-1.925l9.827-9.826
		C84.761,72.361,85.127,71.296,84.96,70.237z"/>
                                            </g>
                                        </svg>
                                    </div>
                                </a>
                                <a href={contact_linkedin}>
                                    <div className='lt-box hover:scale-110 hover:-rotate-3 transition flex justify-center items-center w-12 h-12 bg-slate-300 rounded-lg cursor-pointer'>
                                        <svg fill="#555555" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="hover:scale-110 transition w-6 h-6  jam jam-linkedin"><path d='M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z' /></svg>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Projet en cours de réalisation */}
                        <div className=" shadow p-6 rounded-xl col-span-2 md:row-span-2 lg:col-span-2 ring-1 ring-zinc-900 flex flex-col ">
                            <h3 className="font-semibold text-xl">En cours de réalisation</h3>
                            <div className='m-auto'>
                                <p className='text-md uppercase m-auto my-4'>Application mobile automobile.</p>
                                <div className='flex m-auto gap-2 flex-wrap justify-center sm:justify-start'>
                                    <div className='lt-box rounded-xl text-xs flex items-center justify px-2 py-1 ring-1 ring-zinc-800'>IOS</div>
                                    <div className='lt-box rounded-xl text-xs flex items-center justify px-2 py-1 ring-1 ring-zinc-800'>Android</div>
                                    <div className='lt-box rounded-xl text-xs flex items-center justify px-2 py-1 ring-1 ring-zinc-800'>React</div>
                                    <div className='lt-box rounded-xl text-xs flex items-center justify px-2 py-1 ring-1 ring-zinc-800'>NoSQL</div>
                                </div>
                                <p className='italic text-sm text-zinc-700 mt-4 text-center'>Estimation  ~ fin 2025.</p>
                            </div>
                        </div>

                        {/* Github */}
                        <a href={profil_github} target="_blank" rel="noopener noreferrer" className="abg shadow p-6 rounded-xl col-span-2 sm:col-span-1  md:col-span-2 ring-1 ring-zinc-900 group">
                            <div className='flex items-center justify-center h-full w-full transition group-hover:scale-110 group-hover:-rotate-3'>
                                <svg fill="#555555" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className='w-8 h-8 mr-2'><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" /></svg>
                                <p className='uppercase font-semibold'>Voir mon profil</p>
                            </div>
                        </a>
                        {/* Mes Projets */}
                        <a href={projets} rel="noopener noreferrer" className="abg shadow p-6 rounded-xl col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-2 flex justify-center items-center ring-1 ring-zinc-900 group">
                            <div className='cursor-pointer transition group-hover:scale-110 group-hover:-rotate-3 p-6 w-auto flex justify-center items-center rounded-xl m-auto'>
                                <p className='uppercase font-semibold underline'>Mes créations / projets</p>
                            </div>

                        </a>
                        {/* Stack preferer */}
                        <div className=" shadow p-6 rounded-xl col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-3 ring-1 ring-zinc-900">
                            <h3 className="font-semibold text-xl mb-3">Ma stack préférer</h3>
                            <div className='flex justify-content items-center m-auto justify-evenly	w-3/5 flex-wrap justify-center'>
                                <div>
                                    <svg fill="#444444" className='w-8 h-8 hover:fill-orange-600 cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><title>HTML</title>
                                        <path d="M3.1825,2.00012,4.78735,20.00079l7.20191,1.99933,7.22168-2.00207L20.8175,2.00012ZM17.32507,7.88739H8.87683l.20178,2.26074h8.04554l-.60584,6.778L12,18.17834v.00043l-.01013.00275L7.46753,16.92615,7.1582,13.45972H9.37439l.1571,1.76074,2.45874.66388.00208-.00049v-.00018l2.46228-.66461.25635-2.86323H7.05957L6.46411,5.67969h11.0586Z" />
                                    </svg>
                                </div>
                                <div>
                                    <svg fill="#444444" className='w-10 h-10 hover:fill-cyan-300 cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><title>React.JS</title>
                                        <path d="M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z" />
                                    </svg>
                                </div>
                                <div>
                                    <svg fill="#444444" className='w-8 h-8 hover:fill-pink-400 cursor-pointer' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>SASS</title>
                                        <path d="M16.171,18.7c-.481.221-1.008.509-2.063,1.088-.4.225-.818.45-1.207.662-.027-.027-.055-.061-.082-.089-2.087-2.23-5.947-3.805-5.783-6.8.061-1.091.436-3.955,7.413-7.433,5.742-2.83,10.311-2.046,11.1-.307C26.683,8.3,23.1,12.913,17.17,13.582a4.469,4.469,0,0,1-3.751-.948c-.314-.341-.361-.361-.477-.293-.191.1-.068.409,0,.586a3.5,3.5,0,0,0,2.141,1.684,11.4,11.4,0,0,0,6.956-.689c3.594-1.391,6.4-5.258,5.578-8.5-.825-3.287-6.281-4.371-11.443-2.537a26,26,0,0,0-8.79,5.047c-2.844,2.66-3.294,4.972-3.11,5.94.662,3.437,5.4,5.674,7.3,7.331-.1.055-.184.1-.259.143-.948.471-4.562,2.36-5.463,4.358-1.023,2.264.164,3.887.948,4.105a5.832,5.832,0,0,0,6.281-2.544,6.3,6.3,0,0,0,.559-5.8,5.03,5.03,0,0,1,.716-.477c.484-.286.945-.568,1.354-.786l0,0a10.475,10.475,0,0,1,4.475-.989c3.246.382,3.887,2.407,3.764,3.26a2.157,2.157,0,0,1-1.03,1.459c-.225.143-.3.191-.28.293.027.15.136.143.327.116a2.535,2.535,0,0,0,1.766-2.257c.1-2-1.807-4.194-5.183-4.174a7.753,7.753,0,0,0-2.946.587q-.225.093-.437.2Zm-4.825,7.839c-1.078,1.173-2.578,1.616-3.226,1.241-.7-.4-.423-2.135.9-3.376a17.18,17.18,0,0,1,2.53-1.889c.157-.1.389-.232.668-.4.048-.027.075-.041.075-.041l.164-.1A4.658,4.658,0,0,1,11.346,26.539Z" />
                                    </svg>
                                </div>
                                <div>
                                    <svg fill="#444444" className='w-8 h-8 hover:fill-blue-400 cursor-pointer' viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title>
                                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                                    </svg>
                                </div>
                                <div>
                                    <svg fill="#444444" className='w-12 h-12 hover:fill-indigo-300 cursor-pointer' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><title>PHP</title>
                                        <path d="M10.372 13.069h-3.967l-1.715 8.684h2.037l0.429-2.251h1.93c1.822 0.107 3.86-1.394 3.86-3.967 0-1.501-0.858-2.359-2.573-2.466zM8.871 17.894h-1.287l0.536-3.216h1.394c0.75 0 1.287 0.322 1.287 0.965-0.107 1.823-0.965 2.144-1.93 2.251zM17.555 13.069h-1.93l0.429-2.251h-2.037l-1.715 8.684h2.037l0.965-4.824h1.608c0.751 0 0.751 0.322 0.643 0.858l-0.75 3.967h2.144l0.75-4.396c0.214-1.072-0.429-1.93-2.144-2.037zM24.738 13.069h-3.967l-1.715 8.684h2.037l0.429-2.251h1.93c1.823 0.107 3.86-1.394 3.86-3.967 0-1.501-0.858-2.359-2.573-2.466zM23.237 17.894h-1.287l0.536-3.216h1.394c0.751 0 1.287 0.322 1.287 0.965-0.107 1.823-0.965 2.144-1.93 2.251z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <svg fill="#444444" className='w-8 h-8 hover:fill-lime-400 cursor-pointer' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>NodeJS</title>
                                        <path d="M16,30a2.151,2.151,0,0,1-1.076-.288L11.5,27.685c-.511-.286-.262-.387-.093-.446a6.828,6.828,0,0,0,1.549-.7.263.263,0,0,1,.255.019l2.631,1.563a.34.34,0,0,0,.318,0l10.26-5.922a.323.323,0,0,0,.157-.278V10.075a.331.331,0,0,0-.159-.283L16.158,3.875a.323.323,0,0,0-.317,0L5.587,9.794a.33.33,0,0,0-.162.281V21.916a.315.315,0,0,0,.161.274L8.4,23.814c1.525.762,2.459-.136,2.459-1.038V11.085a.3.3,0,0,1,.3-.3h1.3a.3.3,0,0,1,.3.3V22.777c0,2.035-1.108,3.2-3.038,3.2a4.389,4.389,0,0,1-2.363-.642L4.661,23.788a2.166,2.166,0,0,1-1.076-1.872V10.075A2.162,2.162,0,0,1,4.661,8.2L14.922,2.276a2.246,2.246,0,0,1,2.156,0L27.338,8.2a2.165,2.165,0,0,1,1.077,1.87V21.916a2.171,2.171,0,0,1-1.077,1.872l-10.26,5.924A2.152,2.152,0,0,1,16,30Z" />
                                        <path d="M14.054,17.953a.3.3,0,0,1,.3-.3h1.327a.3.3,0,0,1,.295.251c.2,1.351.8,2.032,3.513,2.032,2.161,0,3.082-.489,3.082-1.636,0-.661-.261-1.152-3.62-1.481-2.808-.278-4.544-.9-4.544-3.144,0-2.07,1.745-3.305,4.67-3.305,3.287,0,4.914,1.141,5.12,3.589a.3.3,0,0,1-.295.323H22.566a.3.3,0,0,1-.288-.232c-.319-1.421-1.1-1.875-3.2-1.875-2.36,0-2.634.822-2.634,1.438,0,.746.324.964,3.51,1.385,3.153.417,4.651,1.007,4.651,3.223,0,2.236-1.864,3.516-5.115,3.516C14.995,21.743,14.054,19.682,14.054,17.953Z" />
                                    </svg>
                                </div>

                            </div>

                        </div>

                        {/* Loisirs */}
                        <div className=" shadow p-6 rounded-xl col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-3 ring-1 ring-zinc-900 flex flex-col ">
                            <h3 className="font-semibold text-xl mb-3">Mes loisirs / centres d'intérets</h3>
                            <div className='flex m-auto gap-2 flex-wrap justify-center sm:justify-start'>
                                <div className='lt-box rounded-xl text-sm flex items-center justify px-2 py-1 ring-1 ring-zinc-800'>Mécanique</div>
                                <div className='lt-box rounded-xl text-sm flex items-center justify px-2 py-1 ring-1 ring-zinc-800'>Économie</div>
                                <div className='lt-box rounded-xl text-sm flex items-center justify px-2 py-1 ring-1 ring-zinc-800'>Voyage</div>
                                <div className='lt-box rounded-xl text-sm flex items-center justify px-2 py-1 ring-1 ring-zinc-800'>Biologie</div>
                                <div className='lt-box rounded-xl text-sm flex items-center justify px-2 py-1 ring-1 ring-zinc-800'>Santé</div>
                                <div className='lt-box rounded-xl text-sm flex items-center justify px-2 py-1 ring-1 ring-zinc-800'>Sport</div>
                            </div>

                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </section>


    )
}

export default Home
