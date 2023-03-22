import NavButton from '@/islands/NavButton.tsx';

export default function Header() {
    return (
        <header class='sticky w-[100vw] border(b gray-400)'>
            <div class='max-w-screen-md flex items-center mx-auto'>
                <h1 class='text-4xl m-4 mr-10'>NPG418</h1>
                <nav>
                    <ul class='list-none flex'>
                        <NavButton href='/'>Home</NavButton>
                        <NavButton href='/posts'>Posts</NavButton>
                        <NavButton href='/works'>Works</NavButton>
                        <NavButton href='/links'>Links</NavButton>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
