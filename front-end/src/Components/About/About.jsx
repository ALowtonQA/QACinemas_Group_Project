import { Container } from 'reactstrap';
import AboutTable from './AboutTable';
import ScrumSection from './ScrumSection';
const About = () => {
    return (
        <Container>
            <h1><center> <u> About </u> </center> </h1>
            <AboutTable />
            <ScrumSection />

        </Container>
    )
}
export default About;