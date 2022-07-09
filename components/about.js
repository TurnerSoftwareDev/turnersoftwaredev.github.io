import classNames from 'classnames';

export default function About({className}) {
    return (
        <section className={classNames('about p-4', className)}>
            <p>Information about me: professional background, location, etc.</p>
        </section>
    )
}