import './main.css'

const Main = () => {
    

   

    return (
       <div className="">

        <div className="div">Main</div>
        <br/>
        <div className="row">

            <div className="col-4 cols" style={{backgroundColor: "lightblue"}}>col-4</div>
            <div className="col-4" style={{backgroundColor: "Blue"}}>col-4</div>
            <div className="col-4" style={{backgroundColor: "Red"}}>col-4
                <div className="row">
                    <div className="col-3">col-3</div>
                    <div className="col-3">col-3</div>
                    <div className="col-3">col-3</div>
                    <div className="col-3">col-3</div>
                    <div className="col-3">col-3</div>
                </div> 
            </div>
            <div className="col-4" style={{backgroundColor: "Green"}}>col-4</div>
        </div>

       </div>

       


    );
}

export default Main;