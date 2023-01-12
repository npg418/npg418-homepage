import ThemeToggleButton from '@/islands/ThemeToggleButton.tsx';
import { useState } from 'preact/hooks';
import { tx } from '@twind/core';
import { VscGithubAlt, VscTwitter } from 'react-icons/vsc';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const hamburgerRow =
        tx`w-6 h-0.5 bg-current rounded-full transition-transform duration-300 not-last-child:mb-2`;
    const onOpen = (c: string) => isOpen ? c : '';

    return (
        <header class='w-full bg(blue-200 dark:blue-900)'>
            <div class='mx-auto max-w-screen-lg p-4 bg(blue-200 dark:blue-900) relative z-10'>
                <div class='flex items-center'>
                    <button
                        class='flex flex-col items-center justify-center w-10 h-10 py-2 focus:outline-none'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span
                            class={`${hamburgerRow} ${
                                onOpen(tx`translate-y-2.5 rotate-45`)
                            }`}
                        />
                        <span
                            class={`${hamburgerRow} origin-right ${
                                onOpen(tx`scale-0`)
                            }`}
                        />
                        <span
                            class={`${hamburgerRow} ${
                                onOpen(tx`-translate-y-2.5 -rotate-45`)
                            }`}
                        />
                    </button>
                    <h1 class='text-3xl pl-2'>NPG418 Homepage</h1>
                    <ThemeToggleButton className='ml-auto' />
                </div>
            </div>
            <div
                class={`transition-[transform,height] duration-300 origin-top ease-in-out px-2 ${
                    isOpen
                        ? `translate-y-0 h-[3.75rem]`
                        : '-translate-y-[3.75rem] h-0'
                }`}
            >
                <div class='mx-auto max-w-screen-lg p-4'>
                    <ul class='flex text-xl ml-2 children:(not-first-child:(border-l-1 pl-1) pr-1)'>
                        <li>
                            <a
                                href='https://github.com/npg418'
                                target='_blank'
                                class='flex items-center text-current'
                            >
                                <VscGithubAlt class='mr-1' /> GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://github.com/npg418'
                                target='_blank'
                                class='flex items-center'
                            >
                                <VscTwitter class='mr-1' /> Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
