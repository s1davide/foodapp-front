/**
 * Use events to comunicate between components
 * @return Object
 */
export const eventBus = {
  /**
   *
   * @param {string} event
   * @param {Function} callback
   */
  on(event, callback) {
    document.addEventListener(
      event,
      (e) => e.stopImmediatePropagation() | callback(e.detail)
    );
  },
  /**
   *
   * @param {string} event
   * @param {*} data
   */
  dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  /**
   *
   * @param {string} event
   * @param {Function} callback
   */
  remove(event, callback) {
    document.removeEventListener(event, callback);
  },
};

/**
 * Get API JSON data
 */
export const getAPI = (url) => {
  return new Promise((resolve) =>
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => console.log(err) | resolve({}))
  );
};

/**
 * Allow update css var
 * @param {string} varName
 * @param {string} value
 */
export const updateCssVar = (varName, value) => {
  document.documentElement.style.setProperty(varName, value);
};

/**
 * Get css var value
 * @param {string} varName
 * @return string
 */
export const getCssVar = (varName) =>
  getComputedStyle(document.documentElement).getPropertyValue(varName);

/**
 * Allow select element by id or class
 * @param {string} el
 * @return HTMLElement
 */
export const sel = (el) => {
  return el.indexOf("#") > -1
    ? document.getElementById(el.replace("#", ""))
    : document.getElementsByClassName(el.replace(".", ""));
};
