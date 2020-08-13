export const loadState = () => {
  try {
    const stringifiedState = localStorage.getItem("state");
    if (!stringifiedState) {
      return undefined;
    }
    return JSON.parse(stringifiedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const stringifiedState = JSON.stringify(state);
    localStorage.setItem("state", stringifiedState);
  } catch (err) {
    // ignore
  }
};
