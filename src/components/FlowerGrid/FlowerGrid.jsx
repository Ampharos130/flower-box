import Flower from "../Flower/Flower";
import './FlowerGrid.css'

function FlowerGrid(){
    return(
        <div>
            <Flower />
            <Flower name ="pink perfection" image = "https://i.imgur.com/XoEClf7.png" price = "15" tag = "pink" tag2 = "gerbera daisy" tag3 = "singular" tag4 = "decor"/>
            <Flower name ="" image = "" price = "" tag = " " tag2 = " " tag3 = " " tag4 = " "/>
            <Flower name ="" image = "" price = "" tag = " " tag2 = " " tag3 = " " tag4 = " "/>
            <Flower name ="" image = "" price = "" tag = " " tag2 = " " tag3 = " " tag4 = " "/>
            <Flower name ="" image = "" price = "" tag = " " tag2 = " " tag3 = " " tag4 = " "/>
            <Flower name ="" image = "" price = "" tag = " " tag2 = " " tag3 = " " tag4 = " "/>
            <Flower name ="" image = "" price = "" tag = " " tag2 = " " tag3 = " " tag4 = " "/>
            <Flower name ="" image = "" price = "" tag = " " tag2 = " " tag3 = " " tag4 = " "/>
        </div>
    );
}

export default FlowerGrid;