import './Flower.css'

function Flower(props){
    return(
                <div className='FlowerDiv'>
                    <img src={props.image} className='flowerImage' alt='FlowerImageHere'/>
                    <h5>{props.name}</h5>
                    <p>${props.price}</p>
                    <li className='flowerLi'>{props.tags.join('  ')}</li>
                </div>
    );
}

export default Flower;