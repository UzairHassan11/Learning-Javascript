
const func = (callBackFunction) =>{
    let value = 50;
    callBackFunction(50);
}

func(value => console.log(value));