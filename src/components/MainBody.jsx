import '../components/MainBody.css';
import List from './List';

function MainBody(props) {
    return (
        <main className='mainBody' >
            <List  foodItems={props.foodItems}/>
        </main>
    );
}
export default MainBody;