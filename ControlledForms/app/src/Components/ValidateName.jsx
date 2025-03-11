export const ValidateName = name => {
    return String(name).match(/^[A-Za-zÀ-ÿ]+([-'\s][A-Za-zÀ-ÿ]+)*$/);
};
