// mainly function basics
//mdn webdocs function playing with scope exercise
// let x = 1;

//     function a() {
//       let y = 2;
//       // output(y);
//       //output(x);
//       output(z);

//     }

//     function b() {
//       let z = 3;
//       // output(z);
//       //output(x);
//       output(y);
//     }

//     function output(value) {
//       const para = document.createElement('p');
//       document.body.appendChild(para);
//       para.textContent = 'Value: ' + value;
//     }

//functions inside functions
  // function myBigFunction(){
  //   let myValue1 = 1;
  //   let myValue2 = 2;
  //   let myValue3 = 3;

  //   subFunction1(myValue1);
  //   subFunction2(myValue2);
  //   subFunction3(myValue3);
  // }

  // function subFunction1(value){
  //   console.log(value);
  //   document.getElementById('bob1').innerHTML = `The value of bob1 is: ${value}`;
  // }
  // function subFunction2(value){
  //   console.log(value);
  //   document.getElementById('bob2').innerHTML = `The value of bob2 is: ${value}`;
  // }
  // function subFunction3(value){
  //   console.log(value);
  //   document.getElementById('bob3').innerHTML = `The value of bob3 is: ${value}`;
  // }

  //   myBigFunction();

    // Let's build a function - why not?

    const btn = document.querySelector('button');  //used to get the message box to appear when the user clicks the button
    // btn.onclick = displayMessage;                  //and no parenthesis so that function not called until button clicked    
    btn.onclick = function(){                           //update1 to enable various messages with onclick
      //displayMessage('This is a different message');
      //displayMessage('This is another different message');  //only the second message displayed but no error
      //displayMessage('Your inbox is almost full — delete some mails', 'warning');
      displayMessage('Brian: Hi there, how are you today?','chat');
    };
    
    function displayMessage(msgText, msgType){                        //update1 with parameters
      const html = document.querySelector('html');

const panel = document.createElement('div');
panel.setAttribute('class', 'msgBox');
html.appendChild(panel);

const msg = document.createElement('p');
//msg.textContent = 'This is a message box';
msg.textContent = msgText;                  //update1 to incorporate various messages
panel.appendChild(msg);



const closeBtn = document.createElement('button');
closeBtn.textContent = 'x';
panel.appendChild(closeBtn);

closeBtn.onclick = function() {
  panel.parentNode.removeChild(panel);
}

if (msgType === 'warning') {
  msg.style.backgroundImage = '/warning.png';
  panel.style.backgroundColor = 'red';
} else if (msgType === 'chat'){
  msg.style.backgroundImage = '/chat.png';
  panel.style.backgroundColor = 'aqua';
} else{
  msg.style.paddingLeft = '20px';
}
    }
    
      //displayMessage();

//Improving the function with parameters see update1 above
//A more complex parameter see more update2 above
