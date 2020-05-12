var opts = {
  lines: 12, 
  angle: 0.00,
  lineWidth: 0.20,
  
 
  pointer: {
    length: 0.55,
    strokeWidth: 0.035,
    color: 'red'
  },
  
  limitMax: false, 
  colorStart: 'blue',
  colorStop: 'Green',   
  strokeColor: 'grey',  
  generateGradient: true
};
var target = document.getElementById('speedometer'); 
var gauge = new Gauge(target).setOptions(opts);
gauge.maxValue = 200; 
gauge.animationSpeed = 10;

function setVal(valor){
  valor=document.getElementById("speedInput").value;
  gauge.set(valor); 
}