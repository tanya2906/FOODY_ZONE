
import '../components/Header.css';
import Button from './Button';

const Header=(props)=>{
    const click=(e)=>{
        const a=document.getElementById('all');
        const b=document.getElementById('breakfast');
        const l=document.getElementById('lunch');
        const d=document.getElementById('dinner');
        if(e.target.id=='all'){
            e.target.style.backgroundColor="green";
            b.style.backgroundColor="#FF4343";
            l.style.backgroundColor="#FF4343";
            d.style.backgroundColor="#FF4343";
        }
        else if(e.target.id=='breakfast'){
            e.target.style.backgroundColor="green";
            a.style.backgroundColor="#FF4343";
            l.style.backgroundColor="#FF4343";
            d.style.backgroundColor="#FF4343";
        }
        else if(e.target.id=='lunch'){
            e.target.style.backgroundColor="green";
            b.style.backgroundColor="#FF4343";
            a.style.backgroundColor="#FF4343";
            d.style.backgroundColor="#FF4343";
        }
        else if(e.target.id=='dinner'){
            e.target.style.backgroundColor="green";
            b.style.backgroundColor="#FF4343";
            l.style.backgroundColor="#FF4343";
            a.style.backgroundColor="#FF4343";
        }
    }
    return(
        <main className='header'>
            <div className='topDiv'>
                <h2>F<span className='o'>oo</span>dy Z<span className='o'>o</span>ne</h2>
                <input type="search" name="" id="search" placeholder='Search Food....' onChange={props.onChange}/>
            </div>
            <div className='foodOption' onClick={click}>
                <Button text="All" onClick={props.all} id='all'/>
                <Button text="Breakfast" onClick={props.breakfast} id='breakfast'/>
                <Button text="Lunch" onClick={props.lunch} id='lunch'/>
                <Button text="Dinner" onClick={props.dinner} id='dinner'/>
            </div>
            
        </main>
    );
}
export default Header;