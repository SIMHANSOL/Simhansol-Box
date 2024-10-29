export interface ObserverOptions {
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number;
  callbackOnce?: boolean;
}

export default function Observer(
  elements: HTMLElement[] | HTMLElement,
  callback: (_element: Element, _observer: IntersectionObserver) => void,
  options?: ObserverOptions
) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) {
        callback(target, observer);

        if (options != null && options.callbackOnce) {
          observer.unobserve(target);
        }
      }
    });
  }, options);

  if (elements instanceof Array) {
    elements.forEach((element) => observer.observe(element));
  } else {
    observer.observe(elements);
  }

  return observer;
}
