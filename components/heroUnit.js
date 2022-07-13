import classNames from 'classnames';

export default function HeroUnit({className}) {
    return (
        <section
            className={classNames('hero p-4 md:p-20 lg:p-36 bg-hero-500 md:bg-hero-800 lg:bg-hero-1200 xl:bg-hero-1600 bg-cover bg-fixed text-white', className)}>
            <div className="flex flex-col lg:justify-center lg:text-center">
                <h1 className="h1 text-white font-bold">Custom Software Development to Give You an Edge</h1>
                <p className="h3 text-white">Great software can make your business stand out. I can help you with that.</p>
            </div>
        </section>
    )
}
