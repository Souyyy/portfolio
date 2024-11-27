let year = new Date().getFullYear()

function Footer() {
    return (
        <footer className='m-auto mt-6 pb-6'>
            <p className='text-center text-sm text-zinc-500 font-semibold'>🕹 Théo DISY - Tous droits réservés © {year}. </p>
        </footer>
    );
}

export default Footer;