const jsonUrl = "./assets/data/inconsistentList.json";
const content = document.getElementById("content");
const pageid = document.getElementById("pageid");
let jsonData = {};

fetch(jsonUrl, { method: "get" })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    jsonData = data.inconsistentList;
    console.log(jsonData);
    pagination(jsonData, 1);
  });

function pagination(jsonData, nowPage) {
  console.log(nowPage);
  // 取得全部資料長度
  const dataTotal = jsonData.length;

  // 設定要顯示在畫面上的資料數量
  // 預設每一頁只顯示 5 筆資料。
  const perpage = 5;

  // page 按鈕總數量公式 總資料數量 / 每一頁要顯示的資料
  // 這邊要注意，因為有可能會出現餘數，所以要無條件進位。
  const pageTotal = Math.ceil(dataTotal / perpage);

  // 當前頁數，對應現在當前頁數
  let currentPage = nowPage;

  // 因為要避免當前頁數筆總頁數還要多，假設今天總頁數是 3 筆，就不可能是 4 或 5
  // 所以要在寫入一個判斷避免這種狀況。
  // 當"當前頁數"比"總頁數"大的時候，"當前頁數"就等於"總頁數"
  // 注意這一行在最前面並不是透過 nowPage 傳入賦予與 currentPage，所以才會寫這一個判斷式，但主要是預防一些無法預期的狀況，例如：nowPage 突然發神經？！
  if (currentPage > pageTotal) {
    currentPage = pageTotal;
  }

  // 由前面可知 最小數字為 6 ，所以用答案來回推公式。
  const minData = currentPage * perpage - perpage + 1;
  const maxData = currentPage * perpage;

  // 先建立新陣列
  const data = [];
  // 這邊將會使用 ES6 forEach 做資料處理
  // 首先必須使用索引來判斷資料位子，所以要使用 index
  jsonData.forEach((item, index) => {
    // 獲取陣列索引，但因為索引是從 0 開始所以要 +1。
    const num = index + 1;
    // 這邊判斷式會稍微複雜一點
    // 當 num 比 minData 大且又小於 maxData 就push進去新陣列。
    if (num >= minData && num <= maxData) {
      data.push(item);
    }
  });
  // 用物件方式來傳遞資料
  const page = {
    pageTotal,
    currentPage,
    hasPage: currentPage > 1,
    hasNext: currentPage < pageTotal,
  };
  displayData(data);
  pageBtn(page);
}

function displayData(data) {
  let str = "";
  data.forEach((item) => {
    str += `<tr >
    <td class="py-5 pl-0">
      <div class="symbol symbol-45 symbol-light mr-2">
        <span class="symbol-label">${item.row}</span>
      </div>
    </td>
    <td class="pl-0">
      <a href="#"
        class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">${item.name}</a>
      <span class="text-muted font-weight-bold d-block">${item.category}</span>
    </td>
    <td class="text-right">
      <span
        class="text-muted font-weight-bolder d-block font-size-lg">${item.taxID}</span>
    </td>
    <td class="text-right">
      <span class="text-muted font-weight-500">${item.address}</span>
    </td>
    <td class="text-right">
      <span class="label label-xl label-gray-600 label-inline">${item.jurisdiction}</span>
    </td>
    </tr>`;
  });
  content.innerHTML = str;
}

function pageBtn(page) {
  let str = "";
  const total = page.pageTotal;

  if (page.currentPage === '1') {
    str += `<li class="page-item disabled"><span class="page-link">最前頁</span></li>`;
  } else {
    str += `<li class="page-item"><a class="page-link" href="#" data-page="1">最前頁</a></li>`;
  }

  if (page.hasPage) {
    str += `<li class="page-item"><a class="page-link" href="#" data-page="${
      Number(page.currentPage) - 1
    }">上一頁</a></li>`;
  } else {
    str += `<li class="page-item disabled"><span class="page-link">上一頁</span></li>`;
  }

  for (let i = 1; i <= total; i++) {
    if (Number(page.currentPage) === i) {
      str += `<li class="page-item active">
      <a class="page-link" href="#" data-page="${i}">${i}</a>
      </li>`;
    } else {
      str += `<li class="page-item">
      <a class="page-link" href="#" data-page="${i}">${i}</a>
      </li>`;
    }
  }
  if (page.hasNext) {
    str += `<li class="page-item"><a class="page-link" href="#" data-page="${
      Number(page.currentPage) + 1
    }">下一頁</a></li>`;
  } else {
    str += `<li class="page-item disabled"><span class="page-link">下一頁</span></li>`;
  }

  if (Number(page.currentPage) === total) {
    str += `<li class="page-item disabled"><span class="page-link">最後頁</span></li>`;
  } else {
    str += `<li class="page-item"><a class="page-link" href="#" data-page="${total}">最後頁</a></li>`;
  }

  pageid.innerHTML = str;
}

function switchPage(e) {
  e.preventDefault();
  if (e.target.nodeName !== "A") return;
  const page = e.target.dataset.page;
  pagination(jsonData, page);
}

pageid.addEventListener("click", switchPage);
