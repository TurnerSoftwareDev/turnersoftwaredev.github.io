import classNames from 'classnames';
import Head from 'next/head';
import Logo from './logo';
import Button from './button';

export default function PageLayout({title, className, children}) {
    return (
        <div className={classNames('pageLayout flex flex-col h-screen bg-slate-900', className)}>
            <Head>
                <title>{title}</title>
            </Head>
            <header className="bg-white">
                <div className="flex flex-row px-4 py-2 justify-between align-middle">
                    <Logo className="text-green-700"/>
                    <Button className="text-white bg-green-700">Contact Us</Button>
                </div>
            </header>
            <main className="bg-white">
                {children}
            </main>
            <footer className="p-4 bg-slate-900 text-white">
                <p>Columns for each of the sections, copyright statement, maybe a newsletter signup,etc.</p>
            </footer>
        </div>
    )
}