import CreateSection from '../Components/Create';
import Header from '../Components/Header';

function Create() {
    return (
        <div className='px-6'>
            <Header isCreatePage={true}/>
            <CreateSection />
        </div>
    );
}

export default Create;