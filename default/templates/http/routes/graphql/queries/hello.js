module.exports = {
  type: GraphqlString,
  args: {
    text: {
      type: GraphqlString,
    },
  },
  resolve: async (root, {text}) => {
    let result;
    if (text) {
      result = await Promise.resolve(text);
    } else {
      result = "world";
    }
    return `hello ${result}`;
  }
};
