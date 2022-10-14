const get_inconsistentList_json = "./assets/data/inconsistentList.json"
const content = document.getElementById("content");
const pageid = document.getElementById("pageid");

axios
  .get(get_inconsistentList_json)
  .then((res) => {
    let inconsistentListData = res.data.inconsistentList


    
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("finally");
  });
