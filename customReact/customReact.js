function createElement(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type);
    for(let prop in reactElement.props) {
            if(prop === 'children') continue;
            domElement.setAttribute(prop, reactElement.props[prop]);
    }
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    domElement.innerHTML = reactElement.children;

    mainContainer.appendChild(domElement);

}

const reactElement = {
    type : 'a',
    props : {
        href : "https://github.com/priyanshukumarsinha/react-new",
        target : '_blank'
    },
    children : "Click Here to Visit my Github",
}

const mainContainer = document.querySelector('#root');

createElement(reactElement, mainContainer);

