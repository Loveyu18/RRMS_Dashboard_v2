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

// begin::ajax
axios
  .get("./assets/data/totalFactoryData.json")
  .then(function (response) {
    // 取得 JSON 資料
    let totalFactory_Data = response.data.totalFactoryData;
    let case_history = response.data.case_history;
    // 業者現況分析 - 地方 - 完成登記家數
    // 1. 取得 tag
    let localVerify_Quantity = document.querySelector("#localVerify_Quantity");
    let localRecycle_Quantity = document.querySelector(
      "#localRecycle_Quantity"
    );
    let localDeal_Quantity = document.querySelector("#localDeal_Quantity");
    // 2. 處理資料
    let localRecycleQuantity_Data =
      totalFactory_Data[0].industryResult.totalQuantity;
    let localDealQuantity_Data =
      totalFactory_Data[1].industryResult.totalQuantity;
    let localVerifyQuantity_Data =
      localRecycleQuantity_Data + localDealQuantity_Data;
    // 3. 放入頁面
    localRecycle_Quantity.innerHTML +=
      "回收業 " + localRecycleQuantity_Data + " 家";
    localDeal_Quantity.innerHTML += "處理業 " + localDealQuantity_Data + " 家";
    localVerify_Quantity.innerHTML += localVerifyQuantity_Data + " 家";
    // 業者現況分析 - 受補貼 - 完成登記家數
    // 1. 取得 tag
    let subVerify_Quantity = document.querySelector("#subVerify_Quantity");
    let subRecycle_Quantity = document.querySelector("#subRecycle_Quantity");
    let subDeal_Quantity = document.querySelector("#subDeal_Quantity");
    // 2. 處理資料
    let subRecycleQuantity_Data =
      totalFactory_Data[2].industryResult.totalQuantity;
    let subDealQuantity_Data =
      totalFactory_Data[3].industryResult.totalQuantity;
    let subVerifyQuantity_Data = subRecycleQuantity_Data + subDealQuantity_Data;
    // 3. 放入頁面
    subRecycle_Quantity.innerHTML +=
      "回收業 " + subRecycleQuantity_Data + " 家";
    subDeal_Quantity.innerHTML += "處理業 " + subDealQuantity_Data + " 家";
    subVerify_Quantity.innerHTML += subVerifyQuantity_Data + " 家";
    // 地方 - 業者材質分佈
    // 1. 宣告資料指向材質material
    let local_recycle_material = totalFactory_Data[0].industryResult.material;
    let local_deal_material = totalFactory_Data[1].industryResult.material;
    var subsidyChartOptions1 = {
      series: [
        {
          data: [
            local_recycle_material.cars + local_deal_material.cars,
            local_recycle_material.plasticContainer +
              local_deal_material.plasticContainer,
            local_recycle_material.nonPlasticContainer +
              local_deal_material.nonPlasticContainer,
            local_recycle_material.informationItems +
              local_deal_material.informationItems,
            local_recycle_material.tire + local_deal_material.tire,
            local_recycle_material.ieadStorageBattery +
              local_deal_material.ieadStorageBattery,
            local_recycle_material.battery + local_deal_material.battery,
            local_recycle_material.lightingSource +
              local_deal_material.lightingSource,
          ],
        },
      ],
      chart: {
        type: "bar",
        // height: 320,
        // width: 500,
      },
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      colors: [
        "#33b2df",
        "#546E7A",
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        "#f9a3a4",
        "#f48024",
      ],
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + " " + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: true,
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      xaxis: {
        categories: [
          "廢機動車輛",
          "廢塑膠容器",
          "廢非塑膠容器",
          "廢電子電器暨廢資訊物品",
          "廢輪胎",
          "廢鉛蓄電池",
          "廢乾電池",
          "廢照明光源",
        ],
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return "";
            },
          },
        },
      },
    };
    var subsidyChart1 = new ApexCharts(
      document.querySelector("#subsidyChart1"),
      subsidyChartOptions1
    );
    subsidyChart1.render();
    // 受補貼 - 業者材質分佈
    // 1. 宣告資料指向材質material
    // 1. 宣告資料指向材質material
    let sub_recycle_material = totalFactory_Data[2].industryResult.material;
    let sub_deal_material = totalFactory_Data[3].industryResult.material;
    var subsidyChartOptions2 = {
      series: [
        {
          data: [
            sub_recycle_material.cars + sub_deal_material.cars,
            sub_recycle_material.plasticContainer +
              sub_deal_material.plasticContainer,
            sub_recycle_material.nonPlasticContainer +
              sub_deal_material.nonPlasticContainer,
            sub_recycle_material.informationItems +
              sub_deal_material.informationItems,
            sub_recycle_material.tire + sub_deal_material.tire,
            sub_recycle_material.ieadStorageBattery +
              sub_deal_material.ieadStorageBattery,
            sub_recycle_material.battery + sub_deal_material.battery,
            sub_recycle_material.lightingSource +
              sub_deal_material.lightingSource,
          ],
        },
      ],
      chart: {
        type: "bar",
        // height: 320,
        // width: 500,
      },
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      colors: [
        "#33b2df",
        "#546E7A",
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        "#f9a3a4",
        "#f48024",
      ],
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + " " + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: true,
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      xaxis: {
        categories: [
          "廢機動車輛",
          "廢塑膠容器",
          "廢非塑膠容器",
          "廢電子電器暨廢資訊物品",
          "廢輪胎",
          "廢鉛蓄電池",
          "廢乾電池",
          "廢照明光源",
        ],
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return "";
            },
          },
        },
      },
    };
    var subsidyChart2 = new ApexCharts(
      document.querySelector("#subsidyChart2"),
      subsidyChartOptions2
    );
    subsidyChart2.render();
    // 地方 - 案件決策支援系統
    var caseOptions1 = {
      series: [
        {
          name: "今年(" + case_history[0].year + ")",
          data: [
            case_history[0].month.Jan,
            case_history[0].month.Feb,
            case_history[0].month.Mar,
            case_history[0].month.Apr,
            case_history[0].month.May,
            case_history[0].month.Jun,
            case_history[0].month.Jul,
            case_history[0].month.Aug,
            case_history[0].month.Sep,
            case_history[0].month.Oct,
            case_history[0].month.Nov,
            case_history[0].month.Dec,
          ],
        },
        {
          name: "去年同期(" + case_history[1].year + ")",
          data: [
            case_history[1].month.Jan,
            case_history[1].month.Feb,
            case_history[1].month.Mar,
            case_history[1].month.Apr,
            case_history[1].month.May,
            case_history[1].month.Jun,
            case_history[1].month.Jul,
            case_history[1].month.Aug,
            case_history[1].month.Sep,
            case_history[1].month.Oct,
            case_history[1].month.Nov,
            case_history[1].month.Dec,
          ],
        },
      ],
      chart: {
        height: 300,
        type: "area",
        toolbar: {
          show: true,

          tools: {
            download: true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false | '<img src="/static/icons/reset.png" width="20">',
            customIcons: [],
          },
          export: {
            svg: {
              filename: "案件決策支援圖",
            },
            csv: {
              filename: "案件決策支援統計表",
              columnDelimiter: ",",
              headerCategory: "category",
              headerValue: "value",
              dateFormatter(timestamp) {
                return new Date(timestamp).toDateString();
              },
            },
            png: {
              filename: "案件決策支援圖",
            },
          },
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        type: "date",
        categories: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM",
        },
      },
    };
    var caseChart1 = new ApexCharts(
      document.querySelector("#caseChart1"),
      caseOptions1
    );
    caseChart1.render();

    // 受補貼 - 案件決策支援系統
    var caseOptions2 = {
      series: [
        {
          name: "今年(" + case_history[2].year + ")",
          data: [
            case_history[2].month.Jan,
            case_history[2].month.Feb,
            case_history[2].month.Mar,
            case_history[2].month.Apr,
            case_history[2].month.May,
            case_history[2].month.Jun,
            case_history[2].month.Jul,
            case_history[2].month.Aug,
            case_history[2].month.Sep,
            case_history[2].month.Oct,
            case_history[2].month.Nov,
            case_history[2].month.Dec,
          ],
        },
        {
          name: "去年同期(" + case_history[3].year + ")",
          data: [
            case_history[3].month.Jan,
            case_history[3].month.Feb,
            case_history[3].month.Mar,
            case_history[3].month.Apr,
            case_history[3].month.May,
            case_history[3].month.Jun,
            case_history[3].month.Jul,
            case_history[3].month.Aug,
            case_history[3].month.Sep,
            case_history[3].month.Oct,
            case_history[3].month.Nov,
            case_history[3].month.Dec,
          ],
        },
      ],
      chart: {
        height: 300,
        type: "area",
        toolbar: {
          show: true,

          tools: {
            download: true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false | '<img src="/static/icons/reset.png" width="20">',
            customIcons: [],
          },
          export: {
            svg: {
              filename: "案件決策支援圖",
            },
            csv: {
              filename: "案件決策支援統計表",
              columnDelimiter: ",",
              headerCategory: "category",
              headerValue: "value",
              dateFormatter(timestamp) {
                return new Date(timestamp).toDateString();
              },
            },
            png: {
              filename: "案件決策支援圖",
            },
          },
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        type: "date",
        categories: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM",
        },
      },
    };
    var caseChart2 = new ApexCharts(
      document.querySelector("#caseChart2"),
      caseOptions2
    );
    caseChart2.render();
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("finally");
  });

axios
  .get("./assets/data/announcement.json")
  .then((res) => {
    let get_system_data = res.data.system_announcement;
    let get_public_data = res.data.public_announcement;
    const system_announcement_1 = document.querySelector(
      "#system_announcement_1"
    );
    const system_announcement_2 = document.querySelector(
      "#system_announcement_2"
    );

    system_announcement_1.innerHTML = `
    <tr>
    <th scope="row">${get_system_data[0].row}</th>
    <td> <span class="label label-inline label-light-success font-weight-bold">
    ${get_system_data[0].date.year}/${get_system_data[0].date.month}/${get_system_data[0].date.day}
      </span></td>
    <td class="text-left">
    <span id="announcement_text">${get_system_data[0].content}</span>
    </td>
    <td>
      <span class="label label-inline label-light-primary font-weight-bold">
      ${get_system_data[0].source}
      </span>
    </td>
  </tr>
  <tr>
    <th scope="row">${get_system_data[1].row}</th>
    <td> <span class="label label-inline label-light-success font-weight-bold">
        ${get_system_data[1].date.year}/${get_system_data[1].date.month}/${get_system_data[1].date.day}
      </span></td>
    <td class="text-left">
    <span id="announcement_text">${get_system_data[1].content}</span>
    </td>
    <td>
      <span class="label label-inline label-light-primary font-weight-bold">
      ${get_system_data[1].source}
      </span>
    </td>
  </tr>
  <tr>
    <th scope="row">${get_system_data[2].row}</th>
    <td> <span class="label label-inline label-light-success font-weight-bold">
    ${get_system_data[2].date.year}/${get_system_data[2].date.month}/${get_system_data[2].date.day}
      </span></td>
    <td class="text-left">
    <span id="announcement_text">${get_system_data[2].content}</span>
    </td>
    <td>
      <span class="label label-inline label-light-primary font-weight-bold">
      ${get_system_data[2].source}
      </span>
    </td>
  </tr>
  <tr>
    <th scope="row">${get_system_data[3].row}</th>
    <td> <span class="label label-inline label-light-success font-weight-bold">
    ${get_system_data[3].date.year}/${get_system_data[3].date.month}/${get_system_data[3].date.day}
      </span></td>
    <td class="text-left">
    <span id="announcement_text">${get_system_data[3].content}</span>
    </td>
    <td>
      <span class="label label-inline label-light-primary font-weight-bold">
      ${get_system_data[3].source}
      </span>
    </td>
  </tr>
    `;
    system_announcement_2.innerHTML = `
    <tr>
    <th scope="row">${get_public_data[0].row}</th>
    <td> <span class="label label-inline label-light-danger font-weight-bold">
    ${get_public_data[0].date.year}/${get_public_data[0].date.month}/${get_public_data[0].date.day}
      </span></td>
    <td class="text-left">
    <span id="announcement_text">${get_public_data[0].content}</span>
    </td>
    <td>
      <span class="label label-inline label-light-warning font-weight-bold">
      ${get_public_data[0].source}
      </span>
    </td>
  </tr>
    <tr>
    <th scope="row">${get_public_data[1].row}</th>
    <td> <span class="label label-inline label-light-danger font-weight-bold">
    ${get_public_data[1].date.year}/${get_public_data[1].date.month}/${get_public_data[1].date.day}
      </span></td>
    <td class="text-left">
    <span id="announcement_text">${get_public_data[1].content}</span>
    </td>
    <td>
      <span class="label label-inline label-light-warning font-weight-bold">
      ${get_public_data[1].source}
      </span>
    </td>
  </tr>
    <tr>
    <th scope="row">${get_public_data[2].row}</th>
    <td> <span class="label label-inline label-light-danger font-weight-bold">
    ${get_public_data[2].date.year}/${get_public_data[2].date.month}/${get_public_data[2].date.day}
      </span></td>
    <td class="text-left">
    <span id="announcement_text">${get_public_data[2].content}</span>
    </td>
    <td>
      <span class="label label-inline label-light-warning font-weight-bold">
      ${get_public_data[2].source}
      </span>
    </td>
  </tr>
    <tr>
    <th scope="row">${get_public_data[3].row}</th>
    <td> <span class="label label-inline label-light-danger font-weight-bold">
    ${get_public_data[3].date.year}/${get_public_data[3].date.month}/${get_public_data[3].date.day}
      </span></td>
    <td class="text-left">
    <span id="announcement_text">${get_public_data[3].content}</span>
    </td>
    <td>
      <span class="label label-inline label-light-warning font-weight-bold">
      ${get_public_data[3].source}
      </span>
    </td>
  </tr>
  
    `;

    // begin:: 判斷超過 35 字元，斷句變 ...more
    const len = 35;
    const announcement_text = document.querySelectorAll("#announcement_text");
    announcement_text.forEach((item) => {
      if (item.innerHTML.length > len) {
        let txt = item.innerHTML.substring(0, len) + "...more";
        item.innerHTML = txt;
      }
    });
    // end:: 判斷超過 35 字元，斷句變 ...more
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("finally");
  });

axios
  .get("./assets/data/case_manager.json")
  .then((res) => {
    // 取得 json 資料
    let getCase_manager = res.data.case_manager;
    console.log(getCase_manager);
    // 案件數量加總
    let local_total_states =
      getCase_manager[0].states.new +
      getCase_manager[0].states.change +
      getCase_manager[0].states.extend +
      getCase_manager[0].states.review +
      getCase_manager[1].states.new +
      getCase_manager[1].states.change +
      getCase_manager[1].states.extend +
      getCase_manager[1].states.review;
    let sub_total_states =
      getCase_manager[2].states.new +
      getCase_manager[2].states.change +
      getCase_manager[2].states.extend +
      getCase_manager[2].states.review +
      getCase_manager[3].states.new +
      getCase_manager[3].states.change +
      getCase_manager[3].states.extend +
      getCase_manager[3].states.review;
    let local_total_early_warning =
      getCase_manager[0].early_warning.expire +
      getCase_manager[0].early_warning.day7_to_0 +
      getCase_manager[0].early_warning.day8_to_14 +
      getCase_manager[0].early_warning.day15_to_30 +
      getCase_manager[1].early_warning.expire +
      getCase_manager[1].early_warning.day7_to_0 +
      getCase_manager[1].early_warning.day8_to_14 +
      getCase_manager[1].early_warning.day15_to_30;
    let sub_total_early_warning =
      getCase_manager[2].early_warning.expire +
      getCase_manager[2].early_warning.day7_to_0 +
      getCase_manager[2].early_warning.day8_to_14 +
      getCase_manager[2].early_warning.day15_to_30 +
      getCase_manager[3].early_warning.expire +
      getCase_manager[3].early_warning.day7_to_0 +
      getCase_manager[3].early_warning.day8_to_14 +
      getCase_manager[3].early_warning.day15_to_30;
    // 取得 tag 並填入 dom :案件總數
    let getid_local_total_states = document.querySelector('#local_total_states')
    getid_local_total_states.innerHTML = "共 "+local_total_states+" 件"
    let getid_sub_total_states = document.querySelector('#sub_total_states')
    getid_sub_total_states.innerHTML = "共 "+sub_total_states+" 件"
    let getid_local_total_early_warning = document.querySelector('#local_total_early_warning')
    getid_local_total_early_warning.innerHTML = "共 "+local_total_early_warning+" 件"
    let getid_sub_total_early_warning = document.querySelector('#sub_total_early_warning')
    getid_sub_total_early_warning.innerHTML = "共 "+sub_total_early_warning+" 件"
    // 取得 tag 並填入 dom :個別案件數
    // 地方 - 待審 
    let getid_local_recycle_states_tab = document.querySelector('#kt_tab_mixed_1_1')
    let getid_local_deal_states_tab = document.querySelector('#kt_tab_mixed_1_2')
    getid_local_recycle_states_tab.innerHTML=`
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <a href="#" class="btn btn-light-success pulse pulse-primary mr-5">
          &nbsp;&nbsp;&nbsp;&nbsp;NEW&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
        <a href="https://rrms2.eri.com.tw/DNC/Factory_Data/Verify_Search?tp=1"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">新登記</a>
      </div>
      <!--end::Text-->
      <!--begin::text-->
      <div class="d-flex align-items-center">
        <span class="label pulse pulse-success mr-10">
          <span class="position-relative">${getCase_manager[0].states.new}</span>
          <span class="pulse-ring"></span>
        </span>
      </div>
      <!--end::text-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <a href="#" class="btn  btn-light-warning pulse pulse-primary mr-5">
          CHANGE
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">變更登記</a>
      </div>
      <!--end::Text-->
      <!--begin::text-->
      <div class="d-flex align-items-center">
        <span class="label pulse pulse-warning mr-10">
          <span class="position-relative">${getCase_manager[0].states.change}</span>
          <span class="pulse-ring"></span>
        </span>
      </div>
      <!--end::text-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <a href="#" class="btn  btn-light-danger pulse pulse-primary mr-6">
          &nbsp;EXTEND&nbsp;
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">展延登記</a>
      </div>
      <!--end::Text-->
      <!--begin::text-->
      <div class="d-flex align-items-center">
        <span class="label pulse pulse-danger mr-10">
          <span class="position-relative">${getCase_manager[0].states.extend}</span>
          <span class="pulse-ring"></span>
        </span>
      </div>
      <!--end::text-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <a href="#" class="btn  btn-light-primary pulse pulse-primary mr-5">
          &nbsp;REVIEW&nbsp;
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">申請覆核</a>
      </div>
      <!--end::Text-->
      <!--begin::text-->
      <div class="d-flex align-items-center">
        <span class="label pulse pulse-primary mr-10">
          <span class="position-relative">${getCase_manager[0].states.review}</span>
          <span class="pulse-ring"></span>
        </span>
      </div>
      <!--end::text-->
    </div>
    <!--end::Item-->
    `
    getid_local_deal_states_tab.innerHTML=`
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <a href="#" class="btn btn-light-success pulse pulse-primary mr-5">
          &nbsp;&nbsp;&nbsp;&nbsp;NEW&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">新登記</a>
      </div>
      <!--end::Text-->
      <!--begin::text-->
      <div class="d-flex align-items-center">
        <span class="label pulse pulse-success mr-10">
          <span class="position-relative">${getCase_manager[1].states.new}</span>
          <span class="pulse-ring"></span>
        </span>
      </div>
      <!--end::text-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <a href="#" class="btn  btn-light-warning pulse pulse-primary mr-5">
          CHANGE
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">變更登記</a>
      </div>
      <!--end::Text-->
      <!--begin::text-->
      <div class="d-flex align-items-center">
        <span class="label pulse pulse-warning mr-10">
          <span class="position-relative">${getCase_manager[1].states.change}</span>
          <span class="pulse-ring"></span>
        </span>
      </div>
      <!--end::text-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <a href="#" class="btn  btn-light-danger pulse pulse-primary mr-6">
          &nbsp;EXTEND&nbsp;
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">展延登記</a>
      </div>
      <!--end::Text-->
      <!--begin::text-->
      <div class="d-flex align-items-center">
        <span class="label pulse pulse-danger mr-10">
          <span class="position-relative">${getCase_manager[1].states.extend}</span>
          <span class="pulse-ring"></span>
        </span>
      </div>
      <!--end::text-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <a href="#" class="btn  btn-light-primary pulse pulse-primary mr-5">
          &nbsp;REVIEW&nbsp;
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">申請覆核</a>
      </div>
      <!--end::Text-->
      <!--begin::text-->
      <div class="d-flex align-items-center">
        <span class="label pulse pulse-primary mr-10">
          <span class="position-relative">${getCase_manager[1].states.review}</span>
          <span class="pulse-ring"></span>
        </span>
      </div>
      <!--end::text-->
    </div>
    <!--end::Item-->
    `
    // 地方 - 預警 
    let getid_local_recycle_early_warning_tab = document.querySelector('#kt_tab_mixed_2_1')
    let getid_local_deal_early_warning_tab = document.querySelector('#kt_tab_mixed_2_2')
    getid_local_recycle_early_warning_tab.innerHTML=`
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-danger pulse pulse-danger mr-5">
          <i class="flaticon2-information"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">已逾期案件</a>
      </div>
      <!--end::Text-->
      <!--begin::pulse-ring-->
      <span class="label pulse pulse-danger mr-10">
        <span class="position-relative">${getCase_manager[0].early_warning.expire}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">

      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-warning pulse pulse-warning mr-5">
          <i class="flaticon2-bell-5"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">7日內逾期案件</a>
      </div>
      <!--end::Text-->
      <!--begin::pulse-ring-->
      <span class="label pulse pulse-warning mr-10">
        <span class="position-relative">${getCase_manager[0].early_warning.day7_to_0}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">

      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-success pulse pulse-success mr-5">
          <i class="flaticon2-bell-5"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">8~14日逾期案件</a>
      </div>
      <!--end::Text-->
      <!--begin::pulse-ring-->
      <span class="label pulse pulse-success mr-10">
        <span class="position-relative">${getCase_manager[0].early_warning.day8_to_14}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">

      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-primary pulse pulse-primary mr-5">
          <i class="flaticon2-protected"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">15~30日逾期案件</a>
      </div>
      <!--end::Text-->
      <!--begin::pulse-ring-->
      <span class="label pulse pulse-primary mr-10">
        <span class="position-relative">${getCase_manager[0].early_warning.day15_to_30}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    `
    getid_local_deal_early_warning_tab.innerHTML=`
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-danger pulse pulse-danger mr-5">
          <i class="flaticon2-information"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">已逾期案件</a>
      </div>
      <!--end::Text-->
      <!--begin::pulse-ring-->
      <span class="label pulse pulse-danger mr-10">
        <span class="position-relative">${getCase_manager[1].early_warning.expire}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">

      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-warning pulse pulse-warning mr-5">
          <i class="flaticon2-bell-5"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">7日內逾期案件</a>
      </div>
      <!--end::Text-->
      <!--begin::pulse-ring-->
      <span class="label pulse pulse-warning mr-10">
        <span class="position-relative">${getCase_manager[1].early_warning.day7_to_0}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">

      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-success pulse pulse-success mr-5">
          <i class="flaticon2-bell-5"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">8~14日逾期案件</a>
      </div>
      <!--end::Text-->
      <!--begin::pulse-ring-->
      <span class="label pulse pulse-success mr-10">
        <span class="position-relative">${getCase_manager[1].early_warning.day8_to_14}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">

      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-primary pulse pulse-primary mr-5">
          <i class="flaticon2-protected"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">15~30日逾期案件</a>
      </div>
      <!--end::Text-->
      <!--begin::pulse-ring-->
      <span class="label pulse pulse-primary mr-10">
        <span class="position-relative">${getCase_manager[1].early_warning.day15_to_30}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    `
    // 受補貼 - 待審 
    let getid_sub_recycle_states_tab = document.querySelector('#kt_tab_mixed_3_1')
    let getid_sub_deal_states_tab = document.querySelector('#kt_tab_mixed_3_2')
    getid_sub_recycle_states_tab.innerHTML=`
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <a href="#" class="btn btn-light-success pulse pulse-primary mr-5">
          &nbsp;&nbsp;&nbsp;&nbsp;NEW&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">新登記</a>
      </div>
      <!--end::Text-->
      <!--begin::text-->
      <div class="d-flex align-items-center">
        <span class="label pulse pulse-success mr-10">
          <span class="position-relative">${getCase_manager[2].states.new}</span>
          <span class="pulse-ring"></span>
        </span>
      </div>
      <!--end::text-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <a href="#" class="btn  btn-light-warning pulse pulse-primary mr-5">
          CHANGE
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">變更登記</a>
      </div>
      <!--end::Text-->
      <!--begin::text-->
      <div class="d-flex align-items-center">
        <span class="label pulse pulse-warning mr-10">
          <span class="position-relative">${getCase_manager[2].states.change}</span>
          <span class="pulse-ring"></span>
        </span>
      </div>
      <!--end::text-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <a href="#" class="btn  btn-light-danger pulse pulse-primary mr-6">
          &nbsp;EXTEND&nbsp;
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">展延登記</a>
      </div>
      <!--end::Text-->
      <!--begin::text-->
      <div class="d-flex align-items-center">
        <span class="label pulse pulse-danger mr-10">
          <span class="position-relative">${getCase_manager[2].states.extend}</span>
          <span class="pulse-ring"></span>
        </span>
      </div>
      <!--end::text-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <a href="#" class="btn  btn-light-primary pulse pulse-primary mr-5">
          &nbsp;REVIEW&nbsp;
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">申請覆核</a>
      </div>
      <!--end::Text-->
      <!--begin::text-->
      <div class="d-flex align-items-center">
        <span class="label pulse pulse-primary mr-10">
          <span class="position-relative">${getCase_manager[2].states.review}</span>
          <span class="pulse-ring"></span>
        </span>
      </div>
      <!--end::text-->
    </div>
    <!--end::Item-->
    `
    getid_sub_deal_states_tab.innerHTML=`
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <a href="#" class="btn btn-light-success pulse pulse-primary mr-5">
          &nbsp;&nbsp;&nbsp;&nbsp;NEW&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">新登記</a>
      </div>
      <!--end::Text-->
      <!--begin::text-->
      <div class="d-flex align-items-center">
        <span class="label pulse pulse-success mr-10">
          <span class="position-relative">${getCase_manager[3].states.new}</span>
          <span class="pulse-ring"></span>
        </span>
      </div>
      <!--end::text-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <a href="#" class="btn  btn-light-warning pulse pulse-primary mr-5">
          CHANGE
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">變更登記</a>
      </div>
      <!--end::Text-->
      <!--begin::text-->
      <div class="d-flex align-items-center">
        <span class="label pulse pulse-warning mr-10">
          <span class="position-relative">${getCase_manager[3].states.change}</span>
          <span class="pulse-ring"></span>
        </span>
      </div>
      <!--end::text-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <a href="#" class="btn  btn-light-danger pulse pulse-primary mr-6">
          &nbsp;EXTEND&nbsp;
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">展延登記</a>
      </div>
      <!--end::Text-->
      <!--begin::text-->
      <div class="d-flex align-items-center">
        <span class="label pulse pulse-danger mr-10">
          <span class="position-relative">${getCase_manager[3].states.extend}</span>
          <span class="pulse-ring"></span>
        </span>
      </div>
      <!--end::text-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <a href="#" class="btn  btn-light-primary pulse pulse-primary mr-5">
          &nbsp;REVIEW&nbsp;
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">申請覆核</a>
      </div>
      <!--end::Text-->
      <!--begin::text-->
      <div class="d-flex align-items-center">
        <span class="label pulse pulse-primary mr-10">
          <span class="position-relative">${getCase_manager[3].states.review}</span>
          <span class="pulse-ring"></span>
        </span>
      </div>
      <!--end::text-->
    </div>
    <!--end::Item-->
    `
    // 受補貼 - 預警 
    let getid_sub_recycle_early_warning_tab = document.querySelector('#kt_tab_mixed_4_1')
    let getid_sub_deal_early_warning_tab = document.querySelector('#kt_tab_mixed_4_2')
    getid_sub_recycle_early_warning_tab.innerHTML=`
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">

      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-danger pulse pulse-danger mr-5">
          <i class="flaticon2-information"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">已逾期案件</a>
      </div>
      <!--end::Text-->
      <!--begin::pulse-ring-->
      <span class="label pulse pulse-danger mr-10">
        <span class="position-relative">${getCase_manager[2].early_warning.expire}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">

      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-warning pulse pulse-warning mr-5">
          <i class="flaticon2-bell-5"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">7日內逾期案件</a>
      </div>
      <!--end::Text-->
      <!--begin::pulse-ring-->
      <span class="label pulse pulse-warning mr-10">
        <span class="position-relative">${getCase_manager[2].early_warning.day7_to_0}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">

      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-success pulse pulse-success mr-5">
          <i class="flaticon2-bell-5"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">8~14日逾期案件</a>
      </div>
      <!--end::Text-->
      <!--begin::pulse-ring-->
      <span class="label pulse pulse-success mr-10">
        <span class="position-relative">${getCase_manager[2].early_warning.day8_to_14}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">

      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-primary pulse pulse-primary mr-5">
          <i class="flaticon2-protected"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">15~30日逾期案件</a>
      </div>
      <!--end::Text-->
      <!--begin::pulse-ring-->
      <span class="label pulse pulse-primary mr-10">
        <span class="position-relative">${getCase_manager[2].early_warning.day15_to_30}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    `
    getid_sub_deal_early_warning_tab.innerHTML=`
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-danger pulse pulse-danger mr-5">
          <i class="flaticon2-information"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">已逾期案件</a>
      </div>
      <!--end::Text-->
      <!--begin::pulse-ring-->
      <span class="label pulse pulse-danger mr-10">
        <span class="position-relative">${getCase_manager[3].early_warning.expire}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">

      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-warning pulse pulse-warning mr-5">
          <i class="flaticon2-bell-5"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">7日內逾期案件</a>
      </div>
      <!--end::Text-->
      <!--begin::pulse-ring-->
      <span class="label pulse pulse-warning mr-10">
        <span class="position-relative">${getCase_manager[3].early_warning.day7_to_0}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">

      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-success pulse pulse-success mr-5">
          <i class="flaticon2-bell-5"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">8~14日逾期案件</a>
      </div>
      <!--end::Text-->
      <!--begin::pulse-ring-->
      <span class="label pulse pulse-success mr-10">
        <span class="position-relative">${getCase_manager[3].early_warning.day8_to_14}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <!--begin::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">

      <!--begin::Text-->
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-primary pulse pulse-primary mr-5">
          <i class="flaticon2-protected"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg">15~30日逾期案件</a>
      </div>
      <!--end::Text-->
      <!--begin::pulse-ring-->
      <span class="label pulse pulse-primary mr-10">
        <span class="position-relative">${getCase_manager[3].early_warning.day15_to_30}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    `



  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("finally");
  });

axios
  .get("./assets/data/3.local_operator_status.json")
  .then((res) => {
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("finally");
  });
// end::ajax
