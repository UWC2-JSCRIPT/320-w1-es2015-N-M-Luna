// Import HTMLElement here
import { HTMLElement } from './HTMLElement.js';

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}

// Export class here
export { DivElement };
