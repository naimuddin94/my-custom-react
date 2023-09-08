const displayContainer = document.getElementById("root");

const myRender = (element, display) => {
  const elementCreate = document.createElement(element.type);
  elementCreate.innerHTML = element.children;
  for (const prop in element.props) {
    elementCreate.setAttribute(prop, element.props[prop]);
  }
  display.appendChild(elementCreate);
};

const myElement = {
  type: "a",
  props: {
    href: "http://www.google.com",
    target: "_blank",
  },
  children: "Visit google",
};

const myElement2 = {
    type: "button",
    props: {
        style: {
            padding: "20px",
        },
        onclick: "console.log('Ok click');"
    },
    children: "Click Me"
}

myRender(myElement, displayContainer);
myRender(myElement2, displayContainer);
