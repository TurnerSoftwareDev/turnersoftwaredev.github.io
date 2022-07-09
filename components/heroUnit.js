import classNames from 'classnames';

export default function HeroUnit({className}) {
    return (
        <section className={classNames('hero p-20 bg-hero-800 md:bg-hero-1200 bg-cover bg-fixed text-white', className)}>
            <h1 className="text-white font-bold">Custom Software Development to Give You an Edge</h1>
            <p>The right software can make your business stand out from the competition.
                Together we can help you reach your goals.</p>
        </section>
    )
}
