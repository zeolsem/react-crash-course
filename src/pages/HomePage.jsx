import Hero from "../components/Hero.jsx";
import HomeCards from "../components/HomeCards.jsx";
import JobListings from "../components/JobListings.jsx";
import ViewAllJobs from "../components/ViewAllJobs.jsx";

const HomePage = () => {
    return (
        <>
            <Hero title="Become a React Dev" subtitle="Find the React job that fits your skill set."/>
            <HomeCards />
            <JobListings />
            <ViewAllJobs />
        </>
    )
}
export default HomePage
