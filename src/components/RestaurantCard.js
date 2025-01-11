const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {imgUrl,resName,cuisine,rating,delivaryTime} = resData
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src={imgUrl}/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{delivaryTime}</h4>
        </div>
    )
}

export default RestaurantCard;