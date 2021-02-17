const input=document.querySelector('#input');
const output=document.querySelector('#output');
const iselect=document.querySelector('#iselect');
const oselect=document.querySelector('#oselect');
const button=document.querySelector('#convert-button');
const resetButton=document.querySelector('#reset-button');


function kelvincelsius(input)
{
  let ans=(input)-273.15 ;
  return ans
}

function kelvinfahrenheit(input)
{
  let ans=((input-273.15) * (9/5)) + 32;
  return ans
}

function celsiuskelvin(input)
{
  let ans=(input)+273.15 ;
  return ans
}

function celsiusfahrenheit(input)
{
  let ans=(input * 9/5) + 32;
  return ans
}

function fahrenheitkelvin(input)
{
  let ans=((input-32) * 5/9) + 273.15;
  return ans
}

function fahrenheitcelsius(input)
{
  let ans=(input-32) * 5/9;
  return ans
}



button.addEventListener('click',()=>{

  if(iselect.value==='ikelvin' && oselect.value==='okelvin')  
  output.value=(input.value);

  else if(iselect.value==='ikelvin' && oselect.value==='ocelsius')  
  output.value=kelvincelsius(input.value);

  else if(iselect.value==='ikelvin' && oselect.value==='ofahrenheit')  
  output.value=kelvinfahrenheit(input.value);
  
  else if(iselect.value==='icelsius' && oselect.value==='ocelsius')  
  output.value=(input.value);

  else if(iselect.value==='icelsius' && oselect.value==='okelvin')  
  output.value=celsiuskelvin(input.value);

  else if(iselect.value==='icelsius' && oselect.value==='ofahrenheit')  
  output.value=celsiusfahrenheit(input.value);

  else if(iselect.value==='ifahrenheit' && oselect.value==='ofahrenheit')  
  output.value=(input.value);

  else if(iselect.value==='ifahrenheit' && oselect.value==='okelvin')  
  output.value=fahrenheitkelvin(input.value);

  else if(iselect.value==='ifahrenheit' && oselect.value==='ocelsius')  
  output.value=fahrenheitcelsius(input.value);

});

resetButton.addEventListener('click',()=>{
  input.value="";
  output.value="";
  });
