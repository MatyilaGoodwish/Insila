addEventListener('message', 

function(url)
{
    fetch(url.data).then(function(response)
    {
        let template = response.body;

        function view(stream)
        {
            return function(viewTemplate)
            {
                return stream(viewTemplate)
            }
        }
        view((postMessage)(template))

    }).catch(function(error)
    {
        console.warn(error);
    })
})



 
