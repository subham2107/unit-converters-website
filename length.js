const input=document.querySelector('#input');
const output=document.querySelector('#output');
const iselect=document.querySelector('#iselect');
const oselect=document.querySelector('#oselect');
const button=document.querySelector('#convert-button');
const resetButton=document.querySelector('#reset-button');


function inchfoot(input)
{
  let ans=(input)/12 ;
  return ans
}

function inchcentimeter(input)
{
  let ans= (input)*2.54 ;
  return ans
}

function footinch(input)
{
  let ans=(input)*12 ;
  return ans
}

function footcentimeter(input)
{
  let ans=(input)*30.48 ;
  return ans
}

function centimeterinch(input)
{
  let ans= (input)/2.54 ;
  return ans
}

function centimeterfoot(input)
{
  let ans=(input)/30.48 ;
  return ans
}



button.addEventListener('click',()=>{

  if(iselect.value==='iinch' && oselect.value==='oinch')  
  output.value=(input.value);

  else if(iselect.value==='iinch' && oselect.value==='ofoot')  
  output.value=inchfoot(input.value);

  else if(iselect.value==='iinch' && oselect.value==='ocentimeter')  
  output.value=inchcentimeter(input.value);
  
  else if(iselect.value==='ifoot' && oselect.value==='ofoot')  
  output.value=(input.value);

  else if(iselect.value==='ifoot' && oselect.value==='oinch')  
  output.value=footinch(input.value);

  else if(iselect.value==='ifoot' && oselect.value==='ocentimeter')  
  output.value=footcentimeter(input.value);

  else if(iselect.value==='icentimeter' && oselect.value==='ocentimeter')  
  output.value=(input.value);

  else if(iselect.value==='icentimeter' && oselect.value==='ofoot')  
  output.value=centimeterfoot(input.value);

  else if(iselect.value==='icentimeter' && oselect.value==='oinch')  
  output.value=centimeterinch(input.value);

});

resetButton.addEventListener('click',()=>{
  input.value="";
  output.value="";
  });
