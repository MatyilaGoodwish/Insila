/**
 * @author Goodwish Matyila
 * @param {worker} worker thread
 */
const viewThread = new Worker('dist/helper.js');

function requestView(viewMessenger)
{
    return function(messageStream)
    {
        return viewMessenger(messageStream);
    }
}

addEventListener('hashchange', function()
{
    if(document.getElementById('root') !== null)
    {
        let part = location.hash.split('#').join('').split('');
        part.push('.html');
        const viewDirectory = '../views' + part.join('');
        console.warn(viewDirectory);
        requestView((viewThread.postMessage)(viewDirectory));
        console.log('retrieve view template from views/');
    }else{
        RunError()
    }
})

function RunError()
{
    document.write(`
    <h2 style="color: red">Error</h2>
    <pre>Missing root element with id 'root'</pre>
    <pre>
       ${new Date().getMilliseconds()} - Exception: HtmlAttribute is null 
    </pre>
`) 
}

viewThread.addEventListener('message', function(view)
{
     console.log(view)
})
