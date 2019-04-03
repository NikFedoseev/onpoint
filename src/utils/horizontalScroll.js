const horizontalScroll = () => {
  const options = {
    container: '.slides-wrapper',
    section: '.horizontal-slide',
    initial: 0,
    position: 0,
    step: 1024,
    easing: "ease",
		animationTime: 1000,
  }

  const container = document.querySelector(options.container);
  const sections = document.querySelectorAll(options.section);
  const qtySections = sections.length;

  const hasClass = (el, cls) => {
    return el.classList.contains(cls);
  }

  const addClass = (el, cls) => {
    if (!hasClass(el, cls)) {
      el.classList.add(cls);
    }
  }

  const removeClass = (el, cls) => {
    if (hasClass(el, cls)) {
      el.classList.remove(cls);
    }
    if (el.classList.item(0) === null) {
			el.removeAttribute("class");
		}
  }

  addClass(sections[options.initial], 'active-slide');

  for(let i = 0; i < qtySections; i++) {
		sections[i].dataset.index = i;
  }
  
  let pos = options.position;

  const transformSection = (index, nextIndex) => {
    if (index < nextIndex) pos+= -options.step;
    else pos+= options.step;

    const transform = `transform: translateX(${pos}px); transition: transform ${options.animationTime}ms ${options.easing};`
    container.style.cssText = transform;
  }

  const moveRight = () => {
		const index = document.querySelector(`${options.section}.active-slide`).dataset.index;
		const current = document.querySelector(`${options.section}[data-index='${index}']`);
		const next = document.querySelector(`${options.section}[data-index='${parseInt(index)+1}']`);
		if (!next) {
			return
    }
    
		const nextIndex = next.dataset.index;
		removeClass(current, "active-slide");
		addClass(next, "active-slide");
		transformSection(index, nextIndex);
  }
  
  const moveLeft = () => {
    const index = document.querySelector(`${options.section}.active-slide`).dataset.index;
		const current = document.querySelector(`${options.section}[data-index='${index}']`);
    const next = document.querySelector(`${options.section}[data-index='${parseInt(index)-1}']`);
    
		if (!next) {
			return
    }
    
		const nextIndex = next.dataset.index;
		removeClass(current, "active-slide");
		addClass(next, "active-slide");
		transformSection(index, nextIndex);
  }
  
  const moveTo = (current, next) => {
    let delta = Math.abs(current-next);
    if(current < next) {
      pos = - delta * options.step;
    }
    if(current > next) {
      pos =  delta * options.step;
    }
    const transform = `transform: translateX(${pos}px); transition: transform ${options.animationTime}ms ${options.easing};`
    container.style.cssText = transform;
  }

  return {
    moveLeft, moveRight, moveTo
  }
}

export default horizontalScroll;