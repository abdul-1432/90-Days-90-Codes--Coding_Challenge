const $$ = document.querySelectorAll.bind(document);
const projects = $$(".project");

class HandleModal {
  constructor() {
    this.closeCallback = null;
    this.modalElement = null;
  }
  setCloseCallback(callback) {this.closeCallback = callback;}
  setModalElement(element) {this.modalElement = element;}
  getCloseCallback() {return this.closeCallback;}
  getModalElement() {return this.modalElement;}
}
const handleModal = new HandleModal();

const handleExpand = e => {
  const parent = e.target.closest(".project");
  const offsetTop = parent.offsetTop;
  const svgCollapse = e.target.firstChild;
  const svgExpand = e.target.firstChild.nextElementSibling;
  // create a temp element to fill the space of the expanded project to prevent layout shift
  const getFillAbsent = () => {
    const fillAbsent = document.createElement("div");
    fillAbsent.classList.add("project-filler");
    return fillAbsent;
  };

  const open = () => {
    parent.classList.add("project-expanded");
    parent.style.top = `${offsetTop}px`;
    svgCollapse.classList.add("hide");
    svgExpand.classList.remove("hide");
    projects.forEach((proj) => {
      if (proj !== parent) {
        proj.classList.add("inactive-project");
      }
    });
    parent.parentElement.insertBefore(
      getFillAbsent(),
      parent.nextElementSibling
    );
  };

  const close = () => {
    parent.classList.remove("project-expanded");
    parent.removeAttribute("style");
    svgCollapse.classList.remove("hide");
    svgExpand.classList.add("hide");
    parent.nextElementSibling.remove();
    projects.forEach((proj) => {
      proj.classList.remove("inactive-project");
    });
    handleModal.setModalElement(null);
    handleModal.setCloseCallback(null);
  };

  // provide a way to close modal on click outside
  handleModal.setModalElement(parent);
  handleModal.setCloseCallback(close);

  if (parent.classList.contains("project-expanded")) {
    close();
  } else {
    open();
  }
};

const delegate = e => {
  const getProject = e.target.closest(".project");
  const getExpand = e.target.closest(".expand-close");
  const getCurrent = handleModal.getModalElement();
  const closeCallback = handleModal.getCloseCallback();

  if (getExpand) {
    if (getCurrent !== null && getProject !== getCurrent) {
      closeCallback();
    }
    handleExpand(e);
    return;
  }
  
  if (getCurrent !== null && getProject !== getCurrent) {
    closeCallback();
    return;
  }
};

document.body.onclick = delegate;