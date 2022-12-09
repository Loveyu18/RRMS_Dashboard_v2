
  let userData = null;
  let pages = "";
  let page_size = 5;
  var currentPage = 0;

  $.ajax({
	  url: "./assets/data/inconsistentList.json",
	  type: "get",
	  async: false,
	  success: function(users) {
		  userData = users.inconsistentList;
		  pages = paginate(userData, page_size);
      reloadPagination(pages);
	  }
  });
  
  // 拉出來方便刷新用
  function reloadPagination(pages) {
    let pageLi = "";
    // 總數<＝於４就原來的樣子
    if (pages.length <= 4) {
      pages.forEach((element, index) => {
            pageLi += '<a href="javascript:pageChange(' + index + ',\'.list_ofoperators_pages>div\')" id="page_' + index + '" class="page-item-link btn btn-icon btn-circle btn-sm border-0 btn-hover-success mr-2 my-1 '+(currentPage===index?'active':'')+' " id="page_' + index + '"> ' + (index+1) + ' </a>';
      }); 
    } else {
      // 總數>於４就寫死第一和最後 前後加點點和判斷
      pageLi += '<a href="javascript:pageChange(' + 0 + ',\'.list_ofoperators_pages>div\')" id="page_' + 0 + '" class="page-item-link btn btn-icon btn-circle btn-sm border-0 btn-hover-success mr-2 my-1 '+(currentPage===0?'active':'')+' " id="page_' + 0 + '"> ' + (0 + 1) + ' </a>';
      pageLi += `<a id="pageDotL" class="page-item-link" style="font-size: 22px;cursor: default; display: ${currentPage <= 2 ? 'none' : 'block'}"><span>...</span></a>`;
      for(let i = 1; i < pages.length - 1; i++) {
        pageLi += `<a href="javascript:pageChange(${i},\'.list_ofoperators_pages>div\')" style="display:${i < (currentPage + 2) && i > (currentPage - 2) ? 'inline-flex' : 'none'}" id="page_${i}" class="page-item-link btn btn-icon btn-circle btn-sm border-0 btn-hover-success mr-2 my-1 '${currentPage===i?'active':''}' " id="page_${i}"> ${i + 1} </a>`;
      }
      pageLi += `<a id="pageDotR" class="page-item-link" style="font-size: 22px;cursor: default; display: ${pages.length - 3 <= currentPage  ? 'none' : 'block'}"><span>...</span></a>`;
      pageLi += '<a href="javascript:pageChange(' + (pages.length - 1) + ',\'.list_ofoperators_pages>div\')" id="page_' + (pages.length - 1) + '" class="page-item-link btn btn-icon btn-circle btn-sm border-0 btn-hover-success mr-2 my-1 '+(currentPage===(pages.length - 1)?'active':'')+' " id="page_' + (pages.length - 1) + '"> ' + (pages.length - 1 + 1) + ' </a>';
    }
    // 刷新前先重置
	  $(".page-item-link").remove();
    $(".page-list").after(pageLi);
    let page = pages[currentPage];
    printRows(page);
  }
  
  function firstPage() {
	if (currentPage < pages.length && currentPage != 0)
		 pageChange(0);
}

function prePage() {
	if (currentPage < pages.length && currentPage != 0) {
	  let page = currentPage - 1;
	  pageChange(page);
  }
	
}

  function nextPage() {
	  if (pages.length - 1 > currentPage) {
		  let page = currentPage + 1;
      pageChange(page);
    }
  }

 
  function endPage() {
	if (pages.length - 1 > currentPage)
	pageChange("#page_".length);
}


  function pageChange(page) {
	
	  currentPage = page;
    // 頁碼調整
    reloadPagination(pages);
	  $(".page-item-link").removeClass("active");
	  $("#page_" + page).addClass("active");
	  $(".page-data").html("");
	  page = pages[page];
	  printRows(page);
  }



  function  printRows(operators) {
    let domElements = operators
    .map((item) => {
        return `
					<tr>
						<td class="py-5 pl-0">
							<div class="symbol symbol-45 symbol-light mr-2">
							${item.id}
							</div>
						</td>
						<td class="pl-0">
							<a href="#"
							class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">${item.company}</a>
							<span class="text-muted font-weight-bold d-block font_color_level_AA_with_white">${item.category}</span>
						</td>
						<td class="text-right">
							<span class="text-muted font-weight-bolder d-block font-size-lg font_color_level_AA_with_white">${item.number}</span>
						</td>
						<td class="text-right">
							<span class="text-muted font-weight-500 font_color_level_AA_with_white">${item.address}</span>
						</td>
						<td class="text-right">
							<span class="label label-lg label-light-success label-inline">${item.county}</span>
						</td>
					</tr>												
                              
    `
      })
      .join('')

    const list_of_operators = document.querySelector('.list_of_operators')
	$('.list_of_operators_count').text(' 共 '+ userData.length +' 家 ')
    list_of_operators.innerHTML = domElements
  }

  function paginate(arr, size) {
	  return arr.reduce((acc, val, i) => {
		  let idx = Math.floor(i / size)
		  let page = acc[idx] || (acc[idx] = [])
		  page.push(val)
		  return acc
	  }, [])
  }