
let today = new Date();

exports.getDate = () => {
  let options = {
    day: 'numeric',
    weekday: 'long',
    year: 'numeric',
    month: 'long'
  };
  
  return today.toLocaleDateString('en-US', options);
};

exports.getFullYear = () => {
  let options = { 
    year: 'numeric'
  };
  
  return today.toLocaleDateString('en-US', options);
}

exports.getTime = () => {
  let options = {

  };
  return today.toLocaleDateString('en-US', options);
}