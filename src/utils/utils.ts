const calcPagesCount = (resultsCounts: number) => {
  const PAGES_LIMIT = 10;
  const pagesCount = Math.round(resultsCounts / PAGES_LIMIT);
  return pagesCount ? pagesCount : 1;
};

export { calcPagesCount };
