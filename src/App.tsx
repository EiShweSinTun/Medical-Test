import Abdominal from "./Abdominal";
import Finger from "./Finger";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-1">
            <h1 className="text-3xl font-bold mb-8">Medical Interaction</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-40 select-none">
                <Abdominal />
                <Finger />
            </div>
    </div>
    )
}

export default App;