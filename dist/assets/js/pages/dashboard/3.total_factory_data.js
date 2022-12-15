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

    // brgin:: 業者現況分析 - 登記家數的圓餅圖
    var KTWidgets = (function () {
      var _initStatsWidget2_1 = function () {
        var element = document.getElementById("kt_stats_widget_2_1_chart");
        if (!element) {
          return;
        }
        var config = {
          type: "doughnut",
          data: {
            datasets: [
              {
                //串接資料放這邊
                data: [localRecycleQuantity_Data, localDealQuantity_Data],
                backgroundColor: [
                  KTApp.getSettings()["colors"]["theme"]["base"]["success"],
                  KTApp.getSettings()["colors"]["theme"]["base"]["primary"],
                ],
              },
            ],
            labels: ["回收業", "處理業"],
          },
          options: {
            cutoutPercentage: 75,
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
              position: "top",
            },
            title: {
              display: false,
              text: "Technology",
            },
            animation: {
              animateScale: true,
              animateRotate: true,
            },
            tooltips: {
              enabled: true,
              intersect: false,
              mode: "nearest",
              bodySpacing: 5,
              yPadding: 10,
              xPadding: 10,
              caretPadding: 0,
              displayColors: false,
              // backgroundColor:
              //   KTApp.getSettings()["colors"]["theme"]["base"]["dark"],
              titleFontColor: "#ffffff",
              cornerRadius: 4,
              footerSpacing: 0,
              titleSpacing: 0,
            },
          },
        };
        var ctx = element.getContext("2d");
        var myDoughnut = new Chart(ctx, config);
      };
      var _initStatsWidget2_2 = function () {
        var element = document.getElementById("kt_stats_widget_2_2_chart");

        if (!element) {
          return;
        }

        var randomScalingFactor = function () {
          return Math.round(Math.random() * 100);
        };

        var config = {
          type: "doughnut",
          data: {
            datasets: [
              {
                //串接資料放這邊
                data: [subRecycleQuantity_Data, subDealQuantity_Data],
                backgroundColor: [
                  KTApp.getSettings()["colors"]["theme"]["base"]["success"],
                  KTApp.getSettings()["colors"]["theme"]["base"]["primary"],
                ],
              },
            ],
            labels: ["回收業", "處理業"],
          },
          options: {
            cutoutPercentage: 75,
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
              position: "bottom",
            },
            title: {
              display: false,
              text: "Technology",
            },
            animation: {
              animateScale: true,
              animateRotate: true,
            },
            tooltips: {
              enabled: true,
              intersect: false,
              mode: "nearest",
              bodySpacing: 5,
              yPadding: 10,
              xPadding: 10,
              caretPadding: 0,
              displayColors: false,
              //   backgroundColor:
              //     KTApp.getSettings()["colors"]["theme"]["base"]["danger"],
              titleFontColor: "#ffffff",
              cornerRadius: 4,
              footerSpacing: 0,
              titleSpacing: 0,
            },
          },
        };

        var ctx = element.getContext("2d");
        var myDoughnut = new Chart(ctx, config);
      };

      return {
        init: function () {
          _initStatsWidget2_1();
          _initStatsWidget2_2();
        },
      };
    })();
    if (typeof module !== "undefined") {
      module.exports = KTWidgets;
    }
    jQuery(document).ready(function () {
      KTWidgets.init();
    });
    // end:: 業者現況分析 - 登記家數的圓餅圖

    // brgin:: 業者現況分析 - 業者材質分佈
    // 1. 宣告資料指向材質material
    let local_recycle_material = totalFactory_Data[0].industryResult.material;
    let local_deal_material = totalFactory_Data[1].industryResult.material;
    // 地方 - 業者材質分佈
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
        height: 400,
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
      colors: ["#a6e9d5"],
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#3F4254"],
          fontSize:'1.1rem'
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + " " + val;
        },
        offsetX: 10,
        offsetY: 9,
        dropShadow: {
          enabled: false,
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      legend: {
        show: false,
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
        height: 400,
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
      colors: ["#B7E2FF"],
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#3F4254"],
          fontSize:'1.1rem'
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + " " + val;
        },
        offsetX: 10,
        offsetY: 9,
        dropShadow: {
          enabled: false,
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      legend: {
        show: false,
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
    // end:: 業者現況分析 - 業者材質分佈

    // 地方 - 案件趨勢系統
    var caseOptions1 = {
      series: [
        {
          name: "去年同期(" + case_history[0].year + ")",
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
          name: "今年(" + case_history[1].year + ")",
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
        height: 400,
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
              filename: "案件趨勢圖",
            },
            csv: {
              filename: "案件趨勢統計表",
              columnDelimiter: ",",
              headerCategory: "category",
              headerValue: "value",
              dateFormatter(timestamp) {
                return new Date(timestamp).toDateString();
              },
            },
            png: {
              filename: "案件趨勢圖",
            },
          },
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#CED4DC", "#00E396"],
      stroke: {
        curve: "smooth",
        width: [3, 3],
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

    // 受補貼 - 案件趨勢系統
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
        height: 400,
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
              filename: "案件趨勢圖",
            },
            csv: {
              filename: "案件趨勢統計表",
              columnDelimiter: ",",
              headerCategory: "category",
              headerValue: "value",
              dateFormatter(timestamp) {
                return new Date(timestamp).toDateString();
              },
            },
            png: {
              filename: "案件趨勢圖",
            },
          },
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#CED4DC", "#008FFB"],
      stroke: {
        curve: "smooth",
        width: [3, 3],
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
