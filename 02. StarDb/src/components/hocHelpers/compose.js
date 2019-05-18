export default (...funcs) => (comp) => {
  return funcs.reduceRight(
    (prevResult, f) => f(prevResult),
    comp
  );
};
