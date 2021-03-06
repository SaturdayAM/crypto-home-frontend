function generateGoogleDisplay () {
  // access the correct div
  let mainDiv = document.getElementById("mainDiv");
  // add Google form with image
  mainDiv.innerHTML =  "<center id='googleCenter'><img id='google-image' src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'><form action='http://www.google.com/search' class='searchform' method='get' name='searchform' target='_blank'><input autocomplete='on' class='form-controls search' name='q' placeholder='Search via Google' required='required'  type='text'><button id='google-button' type='submit'>Search</button></form></center>"

};

function clearMainDiv() {
  mainDiv.innerHTML = "<div id='historyDivOptions'><span>Interval: </span><select class='divOptions' id='historyInterval'><option value='Daily'>Daily</option><option value='Hourly'>Hourly</option></select><span>Cryto Currency: </span><select class='divOptions' id='historyCrypto'><option value='BTC'>Bitcoin</option><option value='ETH'>Ethereum</option><option value='XRP'>Ripple</option></select><br><span>Displayed in Fiat Currency: </span><select class='divOptions' id='historyFiat'><option value='USD'>USD</option><option value='EUR'>EUR</option><option value='GBP'>GBP</option></select><span>Intervals To Graph: </span><input class='divOptions' id='historyIntervalNum'><button id='historyDivButton'>Update Chart</button></div><div id='historyDiv' style='display: inline-block;'></div><div id='volumeDivOptions'><span>Interval: </span><select class='divOptions' id='volumeInterval'><option value='Daily'>Daily</option><option value='Hourly'>Hourly</option></select><span>Cryto Currency: </span><select class='divOptions' id='volumeCrypto'><option value='BTC'>Bitcoin</option><option value='ETH'>Ethereum</option><option value='XRP'>Ripple</option></select><br><span>Displayed in Fiat Currency: </span><select class='divOptions' id='volumeFiat'><option value='USD'>USD</option><option value='EUR'>EUR</option><option value='GBP'>GBP</option></select><span>Intervals To Graph: </span><input class='divOptions' id='volumeIntervalNum'><button id='volumeDivButton'>Update Chart</button></div><div id='volumeDiv' style='display: inline-block;'></div>"

  initializeCustomGraphOptions();
}
