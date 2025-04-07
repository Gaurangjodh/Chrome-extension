chrome.action.onClicked.addListener(tab => { //Chrome API
    chrome.scripting.executeScript( 
        {
            target: {tabId: tab.id},
            func: () => {
                alert('Hello from my first extension.👋');
            }
            }
    );
});