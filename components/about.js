import classNames from 'classnames';
import Image from 'next/image';

export default function About({className}) {
    return (
        <section className={classNames('about flex flex-col items-center p-4 md:p-8', className)}>
            <div className="flex flex-row items-center max-w-2xl">
                <Image className="rounded-lg"
                       src="/images/eric_on_boat.jpg"
                       alt="Eric Turner on a boat"
                       width={384/3}
                       height={466/3} />

                <p className="ml-4 w-5/6">Eric Turner has {new Date().getFullYear()-1998} years of software development
                    and IT experience, has worked in the defense, intelligence, and publishing industries, holds B.S. Computer Science and B.A. Spanish degrees from Western Washington University,
                and lives near Annapolis, Maryland.</p>
            </div>
        </section>
    )
}