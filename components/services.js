import classNames from 'classnames';
import partition from '../lib/partition';

const servicesData = [
    {
        id: "web-development",
        name: "Web Development",
        description: "Everything from basic websites to complex web applications."
    },
    {
        id: "api-development",
        name: "API Development",
        description: "Develop performant, scalable REST APIs."
    },
    {
        id: "database-management",
        name: "Database Management",
        description: "Design, modify, and query PostgreSQL and Mongodb databases."
    },
    {
        id: "cloud-management",
        name: "Cloud Management",
        description: "Set up and maintain AWS cloud environments."
    },
    {
        id: "linux-administration",
        name: "Linux Administration",
        description: "Install, configure, and administer Linux servers."
    }
];

function Service({name, description, className}) {
    return (
        <div className={classNames('service md:p-2 md:h-40', className)}>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

function ServiceGroup({services, className}) {
    return (
        <div className={classNames("serviceGroup", className)}>
            {services.map((service) => (<Service key={service.id} {...service} />))}
        </div>
    )
}

export default function Services({className}) {
    return (
        <section className={classNames('services flex flex-col md:items-center', className)}>
            <div className="flex flex-col md:flex-row px-4 max-w-4xl">
                {partition(servicesData,2).map((services, i) => (
                    <ServiceGroup key={`group-${i}`} className={`flex flex-col md:w-1/3`} services={services} />
                ))}
            </div>
        </section>
    )
}
