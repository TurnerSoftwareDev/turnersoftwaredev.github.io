import classNames from 'classnames';
import partition from '../lib/partition';

const servicesData = [
    {
        id: "web-development",
        name: "Web",
        description: "Develop everything from basic websites to complex web applications."
    },
    {
        id: "database-management",
        name: "Databases",
        description: "Design, modify, and query popular relational and document-based database systems."
    },
    {
        id: "api-development",
        name: "APIs",
        description: "Implement reliable, standards-compliant, scalable REST APIs."
    },
    {
        id: "cloud-management",
        name: "Cloud",
        description: "Set up and maintain AWS cloud environments."
    },
    {
        id: "browser-extensions",
        name: "Browser Extensions",
        description: "Develop add ons for Chrome and Firefox."
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
            <h3 className="md:text-center">{name}</h3>
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
                {partition(servicesData, 2).map((services, i) => (
                    <ServiceGroup key={`group-${i}`} className={`flex flex-col md:w-1/3`} services={services}/>
                ))}
            </div>
        </section>
    )
}
