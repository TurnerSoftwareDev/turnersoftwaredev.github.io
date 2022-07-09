import About from '../about';
import HeroUnit from '../heroUnit';
import PageLayout from '../pageLayout';
import Services from '../services';
import Calendly from '../calendly';

export default function HomePage() {
    return (
        <PageLayout title="Home - Turner Software Development">
            <HeroUnit className="mb-2"/>
            <Services className="mb-2" />
            <About className="mb-2 bg-slate-200"/>
            <Calendly />
        </PageLayout>
    )
}
