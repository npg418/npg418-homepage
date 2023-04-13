import NavButton from '@/islands/NavButton.tsx';

export default function Header() {
    return (
        <header class='w-full border(b gray-400) h-16 flex items-center'>
            <nav class='w-screen-md mx-auto'>
                <ul class='list-none flex'>
                    <NavButton href='/'>Home</NavButton>
                    <NavButton href='/posts'>Posts</NavButton>
                    <NavButton href='/works'>Works</NavButton>
                    <NavButton href='/links'>Links</NavButton>
                </ul>
            </nav>
        </header>
    );
}
