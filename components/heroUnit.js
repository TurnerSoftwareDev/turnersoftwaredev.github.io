import classNames from 'classnames';

export default function HeroUnit({className}) {
    return (
        <section
            className={classNames('hero p-4 md:p-20 lg:p-36 bg-hero-800 md:bg-hero-1200 bg-cover bg-fixed text-white', className)}>
            <div className="flex flex-col lg:justify-center lg:text-center">
                <h1 className="text-white font-bold">Custom Software Development to Give You an Edge</h1>
                <p>The right software can make your business stand out.
                    We can help you with that.</p>
            </div>
        </section>
    )
}
