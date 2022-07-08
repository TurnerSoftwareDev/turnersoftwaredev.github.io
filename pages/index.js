import Head from 'next/head'

export default function IndexPage() {
    return (
        <div>
            <Head>
                <title>Turner Software Development</title>
            </Head>
            <header>
                <div className="flex flex-row">
                    <div>Logo here</div>
                    <div>Contact Us button here</div>
                </div>
            </header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <main>
                <section>
                    <p>Hero section: large image, catchy saying (e.g. "Let's Get Coding"),
                        a sentence about my philosophy, and a Hire Me button.</p>
                </section>
                <section>
                    <p>Information about me: professional background, location, etc.</p>
                </section>
                <section>
                    <p>Services: website, API, and database development. Hosting setup. Linux administration.</p>
                </section>
                <section>
                    <p>Project examples</p>
                </section>
                <section>
                    <p>How to contact me</p>
                </section>
                <footer>
                    <p>Columns for each of the sections, copyright statement, maybe a newsletter signup,etc.</p>
                </footer>
            </main>
        </div>
    )
}
