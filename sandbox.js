
const func = (callBackFunction) =>{
    let value = 50;
    callBackFunction(50);
}

func(function(value)
{
    console.log(value);
});