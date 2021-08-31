import "./style.css"

function Developer({name, age, country}){
    return(
        <div id= "dev">
                <p>Dev: {name}</p>
                <p>Idade: {age}</p>
                <p>Pais: {country}</p>
        </div>
    )   
}

export default Developer