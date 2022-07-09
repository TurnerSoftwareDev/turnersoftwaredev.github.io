import Head from 'next/head'
import HeroUnit from '../heroUnit';
import Logo from '../logo';

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Turner Software Development</title>
            </Head>
            <header>
                <div className="flex flex-row mb-4 justify-between">
                    <Logo />
                    <div>Contact Us button here</div>
                </div>
            </header>
            <nav className="mb-4">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <main>
                <HeroUnit className="mb-4" />
                <section className="about mb-4">
                    <p>Information about me: professional background, location, etc.</p>
                </section>
                <section className="services mb-4">
                    <p>Services: website, API, and database development. Hosting setup. Linux administration.</p>
                </section>
                <section className="portfolio mb-4">
                    <p>Project examples</p>
                </section>
                <section className="contact">
                    <p>How to contact me</p>
                </section>
                <footer>
                    <p>Columns for each of the sections, copyright statement, maybe a newsletter signup,etc.</p>
                </footer>
            </main>
        </div>
    )
}
