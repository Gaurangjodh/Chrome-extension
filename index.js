async function sayHello(params) {
    let [tab] = await chrome.tabs.query({active: true}); // select the active tab on chrome
    chrome.scripting.executeScript({
        target : {tabId: tab.id},
        func : () => {
            document.body.style.background = "red";
            alert('Hello from my first extension!!');
        }
    });
}

document.getElementById('myButton').addEventListener("click", sayHello);