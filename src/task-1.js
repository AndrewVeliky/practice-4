
function status(response) {
    if (response.ok) {
        // console.log(response.status);
        return response;
    }
    throw new Error(response.statusText);
}

function json(response) {

    if (response.headers.get("Content-Type").includes("application/json")) {
        return response.json();
    }
    
    return response;
}

function getJSON(url) {
    return window.fetch(url)
        .then(status)
        .then(json);
}


export { status, json, getJSON };
