
interface CustomerType{

    id:'',
    avatar:'',
    customerName:'',
    description:'',
    userProfile:''

}




const Customer:React.FC=(props:CustomerType)=>{

    return (

        <div className="card" key={} >
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


