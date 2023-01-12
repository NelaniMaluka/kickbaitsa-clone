
import './Header.css'

function head(){
    return(
    <div className="Container">
         <div className="header-container ">
            <div className="Logo-Box">
            <a href=""> {/*Put In Link*/}
                <img src={require ("./Header-img/KickbaitLogo.png")} alt="Logo image"/>
            </a>
            <div class="Logo-Name">
                <a href=""> {/*Put In Link*/}
                    <span><em class="kick"> KICK</em>BAIT</span>
                </a> 
            </div>


            </div>
         </div>
    </div>
    );
}

export default head;