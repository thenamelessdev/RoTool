export default function SetRobux(){

    async function handleRobuxUpdate(robux:string) {
        try{
            const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
            if(!tab.id) return console.warn("error while getting tab");

            await chrome.scripting.executeScript({
                target: {tabId: tab.id},
                args: [robux],
                func: (robux) => {
                    try{
                        const element = document.getElementById("nav-robux-amount");
                        if(!element) return console.warn("error while setting robux: robux element doesn't exists");
                        element.textContent = robux;
                    }
                    catch{
                        console.warn("error while setting robux");
                    }
                }
            });
        }
        catch{
            console.warn("error while setting robux");
        }
    }

    return(<div>
        <p><b>Set Robux</b></p>
        <input type="text" className="form-control w-75" placeholder="Robux" onChange={(e) => handleRobuxUpdate(e.target.value)} />
    </div>);
}