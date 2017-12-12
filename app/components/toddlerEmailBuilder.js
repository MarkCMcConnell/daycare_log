module.exports = function(data) {
  console.log(data);
  let itemsToBring = [];
  let itemsToBringHtml = '';

  let bringItems = data.bringItems.map((item) => {
    if(item.isChecked) {
      itemsToBring.push(item.type);
    }
  });

  for(let i = 0; i < itemsToBring.length; i++) {
    itemsToBringHtml += '<span> -' + itemsToBring[i] + '</span>';
  }

  if(data.other) {
    itemsToBringHtml += '</tr><tr><td>Other: ' + data.other + '</td></tr>';
  }

  return (
    '<html>\n\
    <body>\n\
    <table>\n\
    <tr>\n\
    <td>Name: ' + data.name + '</td>\n\
    <td>Date: ' + data.today + '</td>\n\
    </tr>\n\
    <tr>\n\
    <td>How was my day? ' + data.day + '</td>\n\
    </tr>\n\
    <tr>\n\
    <td>Meals</td>\n\
    </tr>\n\
    <tr>\n\
    <td>Breakfast: ' + data.meals[0].food + '</td>\n\
    <td>AM Snack: ' + data.meals[1].food + '</td>\n\
    </tr>\n\
    <tr>\n\
    <td>Lunch: ' + data.meals[2].food + '</td>\n\
    <td>PM Snack: ' + data.meals[3].food + '</td>\n\
    </tr>\n\
    <tr>\n\
    <td>Bathroom: ' + data.bathroom.times + ' times, and they were ' + data.bathroom.type + '</td>\n\
    </tr>\n\
    <tr>\n\
    <td>Activities: ' + data.activities + '</td>\n\
    </tr>\n\
    <tr>\n\
    <td>Please bring the follow tomorrow:</td>\n\
    </tr>\n\
    <tr>\n\
    ' + itemsToBringHtml + '\n\
    </table></body></html>'
  );
}
