import About from '../about';
import Contact from '../contact';
import HeroUnit from '../heroUnit';
import PageLayout from '../pageLayout';
import Portfolio from '../portfolio';
import Services from '../services';

export default function HomePage() {
    return (
        <PageLayout title="Home - Turner Software Development">
            <HeroUnit className="mb-2"/>
            <Services className="mb-2" />
            <About className="mb-2 bg-slate-200"/>
            <Portfolio className="mb-2" />
            <Contact className="mb-2" />
        </PageLayout>
    )
}
