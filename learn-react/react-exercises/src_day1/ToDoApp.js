function ToDoApp(props) {

    console.log(props.toDos)

    return(
        <div>
        <h1>"Welcome to {props.name}'s To-Do List".</h1>
        <h2>The weather in {props.weather.currentCity} is {props.weather.description} with a temperature of {props.weather.temperature} degrees fahrenheit.".</h2>
        </div>
    )
}

export default ToDoApp;