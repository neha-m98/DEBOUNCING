let counter=0;

const getData=()=>{
    //calls an api and gets data
    console.log("fetching data",counter++)
}

const debounceMethod=function(fn,delay){
    let timer;
    return function(){
        let context=this;
        args=arguments;
     
        clearTimeout(timer)
        
        timer= setTimeout(()=>{
           getData.apply(context,arguments)
        },delay)
    }
}

const betterFunction=debounceMethod(getData,300)
