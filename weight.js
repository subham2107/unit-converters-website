const input=document.querySelector('#input');
const output=document.querySelector('#output');
const iselect=document.querySelector('#iselect');
const oselect=document.querySelector('#oselect');
const button=document.querySelector('#convert-button');
const resetButton=document.querySelector('#reset-button');


function gramkilogram(input)
{
  let ans=(input)/1000;
  return ans
}

function grampound(input)
{
  let ans=input/454;
  return ans
}

function kilogramgram(input)
{
  let ans=(input)*1000;
  return ans
}

function kilogrampound(input)
{
  let ans=input * 2.205;
  return ans
}

function poundgram(input)
{
  let ans=input*454;
  return ans
}

function poundkilogram(input)
{
  let ans=input / 2.205;
  return ans
}



button.addEventListener('click',()=>{

  if(iselect.value==='igram' && oselect.value==='ogram')  
  output.value=(input.value);

  else if(iselect.value==='igram' && oselect.value==='okilogram')  
  output.value=gramkilogram(input.value);

  else if(iselect.value==='igram' && oselect.value==='opound')  
  output.value=grampound(input.value);
  
  else if(iselect.value==='ipound' && oselect.value==='opound')  
  output.value=(input.value);

  else if(iselect.value==='ipound' && oselect.value==='okilogram')  
  output.value=poundkilogram(input.value);

  else if(iselect.value==='ipound' && oselect.value==='ogram')  
  output.value=poundgram(input.value);

  else if(iselect.value==='ikilogram' && oselect.value==='okilogram')  
  output.value=(input.value);

  else if(iselect.value==='ikilogram' && oselect.value==='ogram')  
  output.value=kilogramgram(input.value);

  else if(iselect.value==='ikilogram' && oselect.value==='opound')  
  output.value=kilogrampound(input.value);

});

resetButton.addEventListener('click',()=>{
  input.value="";
  output.value="";
  });
