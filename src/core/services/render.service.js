class RenderService {

    /**
	 * @param {string} html
	 * @param {Array} components
	 * @param {Object} [styles]
	 * @returns {HTMLElement}
	 */
    htmlElement(html, components = [], styles) {
        const template = document.createElement('template');
        template.innerHTML = html
        return template

    }

}

export default new RenderService;