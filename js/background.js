//监听页面url
chrome.webNavigation.onCompleted.addListener(function() {
	chrome.notifications.create(null, {
		type: 'basic',
		iconUrl: 'img/pkq2.jpeg',
		title: '北京交通提醒您:',
		message: '道路千万条,发版第一条,抄送不及时,亲人两行泪!'
	});
}, {url: [{urlMatches : 'mail.coohua.com'}]});


chrome.runtime.onInstalled.addListener(function(){
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'mail.coohua.com'}})
				],
				actions: [new chrome.declarativeContent.ShowPageAction()]
			}
		]);
	});
});
