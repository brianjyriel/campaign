/**
 * Created by brianjyriel on 9/22/15.
 */


var testData = campaignContributions;


function currencyToNum(currencyString)
{
  return Number(currencyString.replace(/[^0-9\.]+/g,""));
}

function contributionsByParty(data)
{

  console.log("Calling contributionsByParty..");
  console.log("");
  return _.groupBy(data, function(val) {
        return val["Party"];}
  );

  return _.mapObject(contributionsByParty(data), function(val) {
    return _.reduce(val, function(memo, num) {
      return currencyToNum(num["Amount"]) + memo;
    }, 0)
  })

}


console.log(contributionsByParty(testData));

console.log("Testing out Function: maxContributions");