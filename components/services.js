import classNames from 'classnames';
import partition from '../lib/partition';

function Service({name, description, className}) {
    return (
        <div className={classNames('service md:p-2', className)}>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}

function ServiceGroup({services, className}) {
    return (
        <div className={classNames("serviceRow", className)}>
            {services.map((service) => (<Service {...service} />))}
        </div>
    )
}

const services = [
    {
        name: "Web Development",
        description: "Everything from basic websites to complex web applications."
    },
    {
        name: "API Development",
        description: "Develop performant, scalable REST APIs."
    },
    {
        name: "Database Management",
        description: "Design, modify, and query databases."
    },
    {
        name: "Cloud Management",
        description: "Set up and maintain AWS cloud environments."
    },
    {
        name: "Linux Administration",
        description: "Install, configure, and administer Linux servers."
    }
];

export default function Services({className}) {
    return (
        <section className={classNames('services flex flex-col md:items-center', className)}>
            <div className="flex flex-col md:flex-row px-4 max-w-4xl">
                {partition(services,2).map((group) => (
                    <ServiceGroup className="flex flex-col" services={group} />
                ))}
            </div>
        </section>
    )
}
