import MainLayout from "../src/containers/MainLayout";
import Sidebar from "../src/components/Sidebar/Sidebar";
import WorkArea from "../src/containers/WorkArea/WorkArea";

export default function Home({ countries, criteria }) {

    return (
        <MainLayout title="Home">
            <div>
                <Sidebar />
                <WorkArea countries={countries} criteria={criteria}/>
            </div>
        </MainLayout>
    )
}


export async function getStaticProps(context) {
    const responseCountries = await fetch('http://localhost:8082/info/countries');
    const countries = await responseCountries.json();

    const responseCriteria = await fetch('http://localhost:8082/info/criteria');
    const criteria = await responseCriteria.json();


    return {
        props: { countries, criteria }
    }
}
