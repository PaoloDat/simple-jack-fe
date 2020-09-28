import MainLayout from "../src/containers/MainLayout";
import Sidebar from "../src/components/Sidebar/Sidebar";
import DrawResultsInput from "../src/components/DrawResultsInput/DrawResultsInput";

const Result = () => {
    return (
        <MainLayout title="Home">
            <div>
                <Sidebar />
                <DrawResultsInput />
            </div>
        </MainLayout>
    )
};

export default Result;
