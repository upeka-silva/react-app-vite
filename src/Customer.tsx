
interface CustomerType{

    id:string,
    avatar:string,
    customerName:string,
    description:string,
    userProfile:string

}


const Customer=(props:CustomerType)=>{

    return (

        <div className="card" key={props.id } >
            <img src={props.avatar} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.customerName}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary">{props.userProfile}</a>
                </div>
        </div>

    )

}



export default Customer;


