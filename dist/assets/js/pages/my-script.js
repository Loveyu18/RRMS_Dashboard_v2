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
// end::ajax
