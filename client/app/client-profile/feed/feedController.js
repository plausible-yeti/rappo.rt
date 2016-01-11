angular.module('client-recon.client-profile.feed', [])
  .controller('FeedController', function ($scope, AppState, $state, ClientsApi) {
    this.fakeFeedData = {
      'weather':{
          "coord":{"lon":-122.42,"lat":37.77},
          "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
          "base":"cmc stations",
          "main":{"temp":285.15,"pressure":1023,"humidity":81,"temp_min":284.15,"temp_max":286.15},
          "wind":{"speed":2.6,"deg":80},"clouds":{"all":75},"dt":1452470622,
          "sys":{"type":1,"id":478,"message":0.0092,"country":"US","sunrise":1452525898,"sunset":1452561019},
          "id":5391959,
          "name":"San Francisco",
          "cod":200
        },
      'news': [
        {
          "__metadata":{
            "uri":"https://api.datamarket.azure.com/Data.ashx/Bing/Search/v1/News?Query='Adobe'&NewsSortBy='Date'&NewsCategory='rt_Business'&$skip=3&$top=1",
            "type":"NewsResult"
          },
          "ID":"a2f61661-9242-43e3-b86f-d4d97f110260",
          "Title":"Adobe Systems Incorporated (ADBE) Stake Reduced by Capital Investment Services of America",
          "Url":"http://www.tickerreport.com/banking-finance/1202773/adobe-systems-incorporated-adbe-stake-reduced-by-capital-investment-services-of-america/",
          "Source":"Ticker Report",
          "Description":"Capital Investment Services of America lowered its position in Adobe Systems Incorporated (NASDAQ:ADBE) by 0.7% during the fourth quarter, according to its most recent 13F filing with the SEC. The institutional investor owned 175,415 shares of the software ...",
          "Date":"2016-01-09T18:31:48Z"
        },
        {"__metadata":{"uri":"https://api.datamarket.azure.com/Data.ashx/Bing/Search/v1/News?Query='Adobe'&NewsSortBy='Date'&NewsCategory='rt_Business'&$skip=4&$top=1","type":"NewsResult"},"ID":"f15bcaaf-9267-4e8b-bd37-b9c729b63f04","Title":"Adobe preparing fixes for the Windows and OS X versions of Acrobat and Reader","Url":"http://betanews.com/2016/01/08/adobe-preparing-fixes-for-the-windows-and-os-x-versions-of-acrobat-and-reader/","Source":"Beta News","Description":"If you're an advanced user utilizing Adobe products then you likely know the inherent perils of some of the company's platforms. Adobe has gone as far as to instigate its own version of Patch Tuesday, and that will be rolling around in just a few days.","Date":"2016-01-08T20:34:40Z"},
        {"__metadata":{"uri":"https://api.datamarket.azure.com/Data.ashx/Bing/Search/v1/News?Query='Adobe'&NewsSortBy='Date'&NewsCategory='rt_Business'&$skip=5&$top=1","type":"NewsResult"},"ID":"d12fd518-5d5c-42fc-98b3-9f47bb2a7874","Title":"Web Standards Evolution Drives Hybrid Apps: IDC Study","Url":"http://www.eweek.com/developer/web-standards-evolution-drives-hybrid-apps-idc-study.html","Source":"eWeek","Description":"Indeed, Hilwa points out that HTML5 is finally taking off as browser vendors support the standard more completely and as the industry, particularly advertisers, accelerates its shift from Adobe's Flash technology. \"These moves will open pathways for more ...","Date":"2016-01-10T16:43:14Z"},
        {"__metadata":{"uri":"https://api.datamarket.azure.com/Data.ashx/Bing/Search/v1/News?Query='Adobe'&NewsSortBy='Date'&NewsCategory='rt_Business'&$skip=6&$top=1","type":"NewsResult"},"ID":"92e4e5cd-ab75-4360-a0ce-59a1dcdcdfb8","Title":"Spirit Air’s Ousted CEO Walks Away With $1 Million and Free Flights for Life","Url":"http://skift.com/2016/01/09/spirit-airs-ousted-ceo-walks-away-with-1-million-and-free-flights-for-life/","Source":"Skift","Description":"Video: Adobe’s Head of Industry Strategy on Creating the Next Golden Age of Travel Sponsored This content is created collaboratively with one of our sponsors. Michael Klein, Adobe’s Head of Industry Strategy, Travel & Retail spoke about the need to ...","Date":"2016-01-09T04:19:58Z"},
        {"__metadata":{"uri":"https://api.datamarket.azure.com/Data.ashx/Bing/Search/v1/News?Query='Adobe'&NewsSortBy='Date'&NewsCategory='rt_Business'&$skip=7&$top=1","type":"NewsResult"},"ID":"ffb31841-abe9-4012-8ad5-332a1f11a819","Title":"Adobe Flash has begun to die","Url":"http://www.businessinsider.com/adobe-flash-has-begun-to-die-2015-12","Source":"The Business Insider","Description":"Deaths are rarely to be celebrated, but there is one passing that certainly won’t be widely mourned: that of Adobe’s Flash. 2015 was the year the bug ridden security flaw finally went into terminal decline. Once the darling of the new interactive web ...","Date":"2015-12-29T05:37:26Z"}
        ],
        'message': 'His birthday is in 9 days.'
    };

    this.fakeFeedData.weather.main.temp = (this.fakeFeedData.weather.main.temp - 273) * 1.8 + 32;
    this.fakeFeedData.weather.main.convertedTemp =  this.fakeFeedData.weather.main.temp.toString().split('.')[0];
    this.fakeFeedData.weather.weather[0].iconUrl = 'http://openweathermap.org/img/w/' + this.fakeFeedData.weather.weather[0].icon + '.png';
    /*
    ClientsApi.getFeed(1,this.data.currentClient.client_id)
    .then(function(feed){
      this.feed = feed;
    });
    */
  });

