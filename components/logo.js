import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/">
            <a className="logo inline-block hover:no-underline font-semibold text-sm md:text-2xl p-2 md:p-5 text-green-700">
                Turner Software Development
            </a>
        </Link>
    )
}