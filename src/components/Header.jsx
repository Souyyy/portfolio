import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className='border rounded-full max-w-96 m-auto mt-6'>
            <nav className='flex justify-evenly p-2'>
                <NavLink className='font-semibold text-sm sm:text-md' to='/'>Accueil</NavLink>
                <NavLink className='font-semibold text-sm sm:text-md' to='/projets'>Projets</NavLink>
                <NavLink className='font-semibold text-sm sm:text-md' to='/contacts'>Contacts</NavLink>
            </nav>
        </header>
    );
}

export default Header;