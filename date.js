let today = new Date();

exports.getDate = () => {
  var options = {
    day: 'numeric',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
  };

  return today.toLocaleDateString('en-UK', options);
}

exports.getDay = () => {
  var options = {
    weekday: 'long',
  };

  return today.toLocaleDateString('en-UK', options);
}