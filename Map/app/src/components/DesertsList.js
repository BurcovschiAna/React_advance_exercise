function DessertsList(props) {
    let lowCalories;
    if(props.lowCal){
      lowCalories = props.data.filter(desert => desert.calories < 500);
      lowCalories.sort((a, b) => a.calories - b.calories); 
      
    } else{
      lowCalories = props.data
      
    }
         
      return (
        <div className="desert-container">
          {lowCalories.map(desert => {
            return (
            <div key={desert.name} className="desert-item">
              <img src={desert.image} alt={desert.description} />
                <p className="description">
                  {desert.name}  - {desert.calories} cal
                </p>
                <p className="description">
                  {desert.description}
                </p>
              </div>
            )})}
        </div>
      );
    }
    
    export default DessertsList;
    