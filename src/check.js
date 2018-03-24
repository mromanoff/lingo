const LingoCheck = data => {
  if (!data) return;

  let keys = shouldParse(isMeta(data));
  let lingos = keys.map(item => this.parseData(item));

  function isMeta(data) {
    if (!data.meta) return;
    return data.meta;
  }

  function shouldParse(data) {
    if (Array.isArray(data.smartContent) && !data.smartContent) return;
    return data.smartContent;
  }

  function parseData(propName) {
    return data[propName];
  }
};

export default LingoCheck;
