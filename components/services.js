import classNames from 'classnames';

export default function Services({className}) {
    return (
        <section className={classNames('services p-4', className)}>
            <p>Services: website, API, and database development. Hosting setup. Linux administration.</p>
        </section>
    )
}
