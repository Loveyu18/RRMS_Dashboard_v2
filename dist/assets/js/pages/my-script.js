"use strict";

// sweetalert2
// Swal.fire({
// 		title: '<strong>審查案件提醒</strong>',
// 		icon: 'warning',
// 		html:
// 			'<b>地方登記</b>已逾期共<a href="https://rrms2.eri.com.tw/DNC/Factory_Data/Verify_Search?tp=1">10</a>件，7日內逾期共<a href="//sweetalert2.github.io">20</a>件</br>' +
// 			'<b>受補貼</b>已逾期共<a href="https://rrms2.eri.com.tw/DNC/Factory_Data/Verify_Search?tp=2">5</a>件，7日內逾期共<a href="//sweetalert2.github.io">15</a>件',
// 		showCloseButton: true,
// 		showCancelButton: false,
// 		focusConfirm: true,
// 		confirmButtonText:
// 			'我知道了',
// 		confirmButtonAriaLabel: '我知道了',
// 	})
// end::sweetalert2

// begin::ajax test

fetch("./assets/data/totalFactoryData.json")
  .then((res) => {
    return res.json();
  })
  .then(
    // begin::業者現況分析
    function Verify_Quantity(totalFactoryData)  {
      // begin::地方
      // begin::完成登記家數
      let localVerifyQuantity = document.querySelector("#localVerifyQuantity");
      let localRecycleQuantity = document.querySelector(
        "#localRecycleQuantity"
      );
      let localDealQuantity = document.querySelector("#localDealQuantity");
      let localRecycleQuantityData =
        totalFactoryData[0].industryResult.totalQuantity;
      let localDealQuantityData =
        totalFactoryData[1].industryResult.totalQuantity;
      let localVerifyQuantityData =
        localRecycleQuantityData + localDealQuantityData;
      localRecycleQuantity.innerHTML +=
        "回收業 " + localRecycleQuantityData + " 家";
      localDealQuantity.innerHTML += "處理業" + localDealQuantityData + " 家";
      localVerifyQuantity.innerHTML += localVerifyQuantityData + " 家";
      // end::完成登記家數
      // end::地方
      // begin::受補貼
      // begin::完成登記家數
      let subsidyVerifyQuantity = document.querySelector(
        "#subsidyVerifyQuantity"
      );
      let subsidyRecycleQuantity = document.querySelector(
        "#subsidyRecycleQuantity"
      );
      let subsidyDealQuantity = document.querySelector("#subsidyDealQuantity");
      let subsidyRecycleQuantityData =
        totalFactoryData[2].industryResult.totalQuantity;
      let subsidyDealQuantityData =
        totalFactoryData[3].industryResult.totalQuantity;
      let subsidyVerifyQuantityData =
        subsidyRecycleQuantityData + subsidyDealQuantityData;
      subsidyRecycleQuantity.innerHTML +=
        "回收業 " + subsidyRecycleQuantityData + " 家";
      subsidyDealQuantity.innerHTML +=
        "處理業 " + subsidyDealQuantityData + " 家";
      subsidyVerifyQuantity.innerHTML += subsidyVerifyQuantityData + " 家";
      // end::完成登記家數
      // end::受補貼
      // end::業者現況分析
    }
    
  );
// end::ajax test
