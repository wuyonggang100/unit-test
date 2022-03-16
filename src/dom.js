const addNode = (node, parent) => {
  parent.appendChild(node);
};

const removeNode = (node) => {
  node.remove();
  // node.parentNode.remove(node);
};

export { addNode, removeNode };
