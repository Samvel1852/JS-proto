// Write Pagination object that will get an array and pageSize, then will return the following.
// prevPage
// nextPage
// firstPage
// lastPage
// goToPage
// getPageItems

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

const Pagination = {
  myArray: [],
  currentPage: 0,
  nextCount: this.currentPage,
  init: function (array, separator) {
    let tempArr = [];
    array.forEach((element, index) => {
      if (tempArr.length < separator) {
        if (index === array.length - 1) {
          tempArr.push(element);
          this.myArray.push(tempArr);
        } else {
          tempArr.push(element);
        }
      } else {
        this.myArray.push(tempArr);
        tempArr = [element];
      }
    });
    this.currentPage = 0;
    array = this.myArray;
    return array;
  },
  nextPage: function () {
    this.currentPage += 1;
    return Pagination;
  },
  prevPage: function () {
    this.currentPage = this.currentPage - 1;
    return this.myArray[this.currentPage];
  },
  getPageItems: function () {
    return this.myArray[this.currentPage];
  },
  firstPage: function () {
    this.currentPage = 0;
    return this.myArray[this.currentPage];
  },
  lastPage: function () {
    this.currentPage = this.myArray.length - 1;
    return this.myArray[this.currentPage];
  },
  goToPage: function (page) {
    this.currentPage = page - 1;
    return this.myArray[this.currentPage];
  },
};

console.log(Pagination.init(alphabetArray, 4));
console.log(Pagination.nextPage());
console.log(Pagination.getPageItems());
console.log(Pagination.nextPage());
// console.log(Pagination.prevPage());
// console.log(Pagination.getPageItems());
console.log(Pagination.firstPage());
console.log(Pagination.lastPage());
console.log(Pagination.goToPage(3));
// console.log(Pagination.nextPage());
console.log(Pagination.getPageItems());
Pagination.nextPage().nextPage();
console.log(Pagination.getPageItems());
