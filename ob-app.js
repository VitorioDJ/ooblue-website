const state = {
  tabs: [
    "w1-tab",
    "w2-tab",
    "w3-tab",
    "w4-tab",
    "w5-tab",
    "w6-tab",
    "w7-tab",
    "w8-tab",
    "w9-tab",
    "w10-tab",
    "w11-tab",
    "w12-tab",
    "w13-tab",
    "w14-tab",
  ],
  index: 0,
  prevIndex: 0,
};

const tabContents = document.querySelector("#pill-myTabContent");
console.log(tabContents.children);
function changeTab(index) {
  state.index += index;
  if (state.index < 0) return;
  if (tabContents.children.length <= state.index) return;

  //update content
  ["active", "show"].forEach((className) => {
    tabContents.children[state.prevIndex].classList.remove(className);
    tabContents.children[state.index].classList.add(className);
  });
  state.prevIndex = state.index;
}
