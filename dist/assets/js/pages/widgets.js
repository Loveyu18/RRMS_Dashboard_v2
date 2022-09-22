"use strict";

// begin::地方 - 業者現況分析
var caseOptions1 = {
  series: [
    {
      name: "今年(2022年)",
      data: [31, 40, 28, 51, 42, 109, 100, 0, 0, 0, 0, 0],
    },
    {
      name: "去年同期",
      data: [11, 32, 45, 32, 34, 52, 41, 55, 100, 89, 44, 10],
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

// begin::subsidyChart1 Scripts
var subsidyChartOptions1 = {
  series: [
    {
      data: [87, 35, 44, 56, 36, 10, 58, 72],
    },
  ],
  chart: {
    type: "bar",
    height: 320,
    width: 500,
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

// end::subsidyChart1 Scripts
// end::地方 - 業者現況分析

// begin::受補貼 - 業者現況分析
// begin::caseChart2 Scripts
var caseOptions2 = {
  series: [
    {
      name: "今年(2022年)",
      data: [21, 50, 70, 10, 30, 55, 75, 0, 0, 0, 0, 0],
    },
    {
      name: "去年同期",
      data: [20, 40, 30, 32, 34, 62, 81, 90, 100, 44, 30, 20],
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
// end::caseChart1 Scripts
// begin::subsidyChart2 Scripts
var subsidyChartOptions2 = {
  series: [
    {
      data: [20, 35, 44, 56, 36, 10, 58, 72],
    },
  ],
  chart: {
    type: "bar",
    height: 320,
    width: 500,
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
// end::subsidyChart1 Scripts
// end::受補貼 - 業者現況分析

// Class definition
var KTWidgets = (function () {
  // Private functions
  var _daterangepickerInit = function () {
    if ($("#kt_dashboard_daterangepicker").length == 0) {
      return;
    }

    var picker = $("#kt_dashboard_daterangepicker");
    var start = moment();
    var end = moment();

    function cb(start, end, label) {
      var title = "";
      var range = "";

      if (end - start < 100 || label == "Today") {
        title = "Today:";
        range = start.format("MMM D");
      } else if (label == "Yesterday") {
        title = "Yesterday:";
        range = start.format("MMM D");
      } else {
        range = start.format("MMM D") + " - " + end.format("MMM D");
      }

      picker.find("#kt_dashboard_daterangepicker_date").html(range);
      picker.find("#kt_dashboard_daterangepicker_title").html(title);
    }

    picker.daterangepicker(
      {
        direction: KTUtil.isRTL(),
        startDate: start,
        endDate: end,
        opens: "left",
        applyClass: "btn btn-sm btn-primary",
        cancelClass: "btn btn-sm btn-secondary",
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [
            moment().subtract(1, "days"),
            moment().subtract(1, "days"),
          ],
          "Last 7 Days": [moment().subtract(6, "days"), moment()],
          "Last 30 Days": [moment().subtract(29, "days"), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
          "Last Month": [
            moment().subtract(1, "month").startOf("month"),
            moment().subtract(1, "month").endOf("month"),
          ],
        },
      },
      cb
    );

    cb(start, end, "");
  };

  // Stats widgets
  var _initStatsWidget2_1 = function () {
    var element = document.getElementById("kt_stats_widget_2_1_chart");

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
            data: [35, 65],
            backgroundColor: [
              KTApp.getSettings()["colors"]["theme"]["base"]["danger"],
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
          //   backgroundColor:
          //     KTApp.getSettings()["colors"]["theme"]["base"]["primary"],
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
            data: [3500, 6500],
            backgroundColor: [
              KTApp.getSettings()["colors"]["theme"]["base"]["danger"],
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

  var _initStatsWidget3 = function () {
    var element = document.getElementById("kt_stats_widget_3_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [
        {
          name: "Net Profit",
          data: [30, 36, 32.5],
        },
      ],
      chart: {
        type: "area",
        height: 100,
        toolbar: {
          show: false,
        },
        style: {
          borderradiusbottom: "$card-border-radius",
        },
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 1,
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [KTApp.getSettings()["colors"]["theme"]["base"]["primary"]],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
        crosshairs: {
          show: false,
          position: "front",
          stroke: {
            color: KTApp.getSettings()["colors"]["gray"]["gray-300"],
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: KTApp.getSettings()["font-family"],
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
      },
      colors: [KTApp.getSettings()["colors"]["theme"]["light"]["primary"]],
      markers: {
        colors: [KTApp.getSettings()["colors"]["theme"]["light"]["primary"]],
        strokeColor: [
          KTApp.getSettings()["colors"]["theme"]["base"]["primary"],
        ],
        strokeWidth: 3,
      },
    };

    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initStatsWidget4 = function () {
    var element = document.getElementById("kt_stats_widget_4_chart");
    var height = parseInt(KTUtil.css(element, "height"));
    var color = KTUtil.hasAttr(element, "data-color")
      ? KTUtil.attr(element, "data-color")
      : "primary";

    if (!element) {
      return;
    }

    var options = {
      series: [
        {
          name: "Net Profit",
          data: [39, 36.5, 40, 36, 41, 37, 42],
        },
      ],
      chart: {
        type: "area",
        height: height,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 1,
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [KTApp.getSettings()["colors"]["theme"]["base"][color]],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Avg"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
        crosshairs: {
          show: false,
          position: "front",
          stroke: {
            color: KTApp.getSettings()["colors"]["gray"]["gray-300"],
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: KTApp.getSettings()["font-family"],
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
      },
      colors: [KTApp.getSettings()["colors"]["theme"]["light"][color]],
      markers: {
        colors: [KTApp.getSettings()["colors"]["theme"]["light"][color]],
        strokeColor: [KTApp.getSettings()["colors"]["theme"]["base"][color]],
        strokeWidth: 3,
      },
    };

    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initStatsWidget5 = function () {
    var element = document.getElementById("kt_stats_widget_5_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [
        {
          name: "Net Profit",
          data: [42, 36.5, 43, 36, 41.5, 37, 41],
        },
      ],
      chart: {
        type: "area",
        height: 120,
        toolbar: {
          show: false,
        },
        style: {
          borderradiusbottom: "$card-border-radius",
        },
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 1,
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [KTApp.getSettings()["colors"]["theme"]["base"]["gray-600"]],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Avg"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
        crosshairs: {
          show: false,
          position: "front",
          stroke: {
            color: KTApp.getSettings()["colors"]["gray"]["gray-300"],
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: KTApp.getSettings()["font-family"],
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
      },
      colors: [KTApp.getSettings()["colors"]["gray"]["gray-200"]],
      markers: {
        colors: [KTApp.getSettings()["colors"]["gray"]["gray-200"]],
        strokeColor: [KTApp.getSettings()["colors"]["gray"]["gray-500"]],
        strokeWidth: 3,
      },
    };

    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initStatsWidget6 = function () {
    var element = document.getElementById("kt_stats_widget_6_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [
        {
          name: "Net Profit",
          data: [37.5, 35.5, 38, 35, 36.5, 35, 36],
        },
      ],
      chart: {
        type: "area",
        height: 120,
        toolbar: {
          show: false,
        },
        style: {
          borderradiusbottom: "$card-border-radius",
        },
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 1,
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [KTApp.getSettings()["colors"]["gray"]["gray-400"]],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Avg"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
        crosshairs: {
          show: false,
          position: "front",
          stroke: {
            color: KTApp.getSettings()["colors"]["gray"]["gray-300"],
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: KTApp.getSettings()["font-family"],
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
      },
      colors: [KTApp.getSettings()["colors"]["theme"]["light"]["light"]],
      markers: {
        colors: [KTApp.getSettings()["colors"]["theme"]["light"]["light"]],
        strokeColor: [KTApp.getSettings()["colors"]["gray"]["gray-300"]],
        strokeWidth: 3,
      },
    };

    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initStatsWidget7 = function () {
    var element = document.getElementById("kt_stats_widget_7_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [
        {
          name: "Net Profit",
          data: [39, 36.5, 40, 36, 41, 37, 42],
        },
      ],
      chart: {
        type: "area",
        height: 120,
        toolbar: {
          show: false,
        },
        style: {
          borderradiusbottom: "$card-border-radius",
        },
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 1,
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [KTApp.getSettings()["colors"]["theme"]["base"]["white"]],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Avg"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
        crosshairs: {
          show: false,
          position: "front",
          stroke: {
            color: KTApp.getSettings()["colors"]["gray"]["gray-300"],
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: KTApp.getSettings()["font-family"],
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
      },
      colors: [KTApp.getSettings()["colors"]["theme"]["base"]["primary"]],
      markers: {
        colors: [KTApp.getSettings()["colors"]["theme"]["light"]["primary"]],
        strokeColor: [KTApp.getSettings()["colors"]["theme"]["base"]["white"]],
        strokeWidth: 3,
      },
    };

    var chart = new ApexCharts(element, options);
    chart.render();
  };

  // Mixed widgets
  var _initMixedWidget3 = function () {
    var sparklineChart = function (element, data, color) {
      var options = {
        series: [
          {
            data: data,
          },
        ],
        colors: [color],
        chart: {
          type: "line",
          width: 100,
          height: 40,
          sparkline: {
            enabled: true,
          },
        },
        yaxis: {
          min: 0,
          max: 30,
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
      };

      var chart = new ApexCharts(element, options, color);
      chart.render();
    };

    sparklineChart(
      document.getElementById("kt_mixed_widget_3_sparkline_1"),
      [16, 13, 22, 12, 21, 14],
      KTApp.getSettings()["colors"]["theme"]["base"]["danger"]
    );
    sparklineChart(
      document.getElementById("kt_mixed_widget_3_sparkline_2"),
      [16, 13, 22, 12, 21, 14],
      KTApp.getSettings()["colors"]["theme"]["base"]["success"]
    );
    sparklineChart(
      document.getElementById("kt_mixed_widget_3_sparkline_3"),
      [16, 13, 22, 12, 21, 14],
      KTApp.getSettings()["colors"]["theme"]["base"]["info"]
    );
    sparklineChart(
      document.getElementById("kt_mixed_widget_3_sparkline_4"),
      [16, 13, 22, 12, 21, 14],
      KTApp.getSettings()["colors"]["theme"]["base"]["danger"]
    );
    sparklineChart(
      document.getElementById("kt_mixed_widget_3_sparkline_5"),
      [16, 13, 22, 12, 21, 14],
      KTApp.getSettings()["colors"]["theme"]["base"]["primary"]
    );
    sparklineChart(
      document.getElementById("kt_mixed_widget_3_sparkline_6"),
      [16, 13, 22, 12, 21, 14],
      KTApp.getSettings()["colors"]["theme"]["base"]["warning"]
    );
  };

  var _initMixedWidget4 = function () {
    var element = document.getElementById("kt_mixed_widget_4_chart");
    var height = parseInt(KTUtil.css(element, "height"));

    if (!element) {
      return;
    }

    var options = {
      series: [
        {
          name: "Net Profit",
          data: [30, 30, 43, 43, 34, 34, 26, 26, 47, 47],
        },
      ],
      chart: {
        type: "area",
        height: height,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 1,
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [KTApp.getSettings()["colors"]["theme"]["base"]["primary"]],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
        crosshairs: {
          show: false,
          position: "front",
          stroke: {
            color: KTApp.getSettings()["colors"]["gray"]["gray-300"],
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      yaxis: {
        min: 0,
        max: 60,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: KTApp.getSettings()["font-family"],
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
      },
      colors: [KTApp.getSettings()["colors"]["theme"]["light"]["primary"]],
      markers: {
        colors: [KTApp.getSettings()["colors"]["theme"]["light"]["primary"]],
        strokeColor: [
          KTApp.getSettings()["colors"]["theme"]["base"]["primary"],
        ],
        strokeWidth: 3,
      },
    };

    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initMixedWidget5 = function () {
    var element = document.getElementById("kt_mixed_widget_5_chart");
    var height = parseInt(KTUtil.css(element, "height"));

    if (!element) {
      return;
    }

    var options = {
      series: [
        {
          name: "Net Profit",
          data: [30, 30, 43, 43, 34, 34, 26, 26, 47, 47],
        },
      ],
      chart: {
        type: "area",
        height: height,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 1,
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [KTApp.getSettings()["colors"]["theme"]["base"]["success"]],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
        crosshairs: {
          show: false,
          position: "front",
          stroke: {
            color: KTApp.getSettings()["colors"]["gray"]["gray-300"],
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      yaxis: {
        min: 0,
        max: 60,
        labels: {
          show: false,
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: KTApp.getSettings()["font-family"],
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
      },
      colors: [KTApp.getSettings()["colors"]["theme"]["light"]["success"]],
      markers: {
        colors: [KTApp.getSettings()["colors"]["theme"]["light"]["success"]],
        strokeColor: [
          KTApp.getSettings()["colors"]["theme"]["base"]["success"],
        ],
        strokeWidth: 3,
      },
    };

    var chart = new ApexCharts(element, options);
    chart.render();
  };

  // Charts widgets
  var _initChartsWidget1 = function () {
    var element = document.getElementById("kt_charts_widget_1_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [
        {
          name: "Net Profit",
          data: [20, 30, 50, 20, 60, 40, 70, 50, 55, 45],
        },
      ],
      chart: {
        type: "area",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 1,
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [KTApp.getSettings()["colors"]["theme"]["base"]["primary"]],
      },
      xaxis: {
        categories: [
          "1 Aug",
          "2 Aug",
          "3 Aug",
          "4 Aug",
          "5 Aug",
          "6 Aug",
          "7 Aug",
          "8 Aug",
          "9 Aug",
          "10 Aug",
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
        crosshairs: {
          position: "front",
          stroke: {
            color: KTApp.getSettings()["colors"]["theme"]["base"]["primary"],
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      yaxis: {
        min: 0,
        max: 90,
        labels: {
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: KTApp.getSettings()["font-family"],
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
      },
      colors: [KTApp.getSettings()["colors"]["theme"]["light"]["primary"]],
      grid: {
        borderColor: KTApp.getSettings()["colors"]["gray"]["gray-200"],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      markers: {
        //size: 5,
        //colors: [KTApp.getSettings()['colors']['theme']['light']['danger']],
        strokeColor: KTApp.getSettings()["colors"]["theme"]["base"]["primary"],
        strokeWidth: 3,
      },
    };

    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget2 = function () {
    var element = document.getElementById("kt_charts_widget_2_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [
        {
          name: "Net Profit",
          data: [30, 40, 60, 50, 70, 50, 70],
        },
        {
          name: "Revenue",
          data: [35, 45, 65, 55, 75, 55, 75],
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ["30%"],
          endingShape: "rounded",
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "1 Aug",
          "2 Aug",
          "3 Aug",
          "4 Aug",
          "5 Aug",
          "6 Aug",
          "7 Aug",
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      fill: {
        opacity: 1,
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: KTApp.getSettings()["font-family"],
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
      },
      colors: [
        KTApp.getSettings()["colors"]["theme"]["base"]["primary"],
        KTApp.getSettings()["colors"]["theme"]["light"]["primary"],
      ],
      grid: {
        borderColor: KTApp.getSettings()["colors"]["gray"]["gray-200"],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
    };

    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget3 = function () {
    var element = document.getElementById("kt_charts_widget_3_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [
        {
          name: "Net Profit",
          data: [30, 40, 40, 90, 60, 70, 50],
        },
      ],
      chart: {
        type: "area",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 1,
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [KTApp.getSettings()["colors"]["theme"]["base"]["danger"]],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
        crosshairs: {
          position: "front",
          stroke: {
            color: KTApp.getSettings()["colors"]["theme"]["base"]["danger"],
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: KTApp.getSettings()["font-family"],
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
      },
      colors: [KTApp.getSettings()["colors"]["theme"]["light"]["danger"]],
      grid: {
        borderColor: KTApp.getSettings()["colors"]["gray"]["gray-200"],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      markers: {
        //size: 5,
        //colors: [KTApp.getSettings()['colors']['theme']['light']['danger']],
        strokeColor: KTApp.getSettings()["colors"]["theme"]["base"]["info"],
        strokeWidth: 3,
      },
    };

    var chart = new ApexCharts(element, options);
    chart.render();
  };

  var _initChartsWidget4 = function () {
    var element = document.getElementById("kt_charts_widget_4_chart");

    if (!element) {
      return;
    }

    var options = {
      series: [
        {
          name: "Net Profit",
          data: [60, 50, 80, 40, 100, 60],
        },
        {
          name: "Revenue",
          data: [70, 60, 110, 40, 50, 70],
        },
      ],
      chart: {
        type: "area",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 1,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
        crosshairs: {
          position: "front",
          stroke: {
            color: KTApp.getSettings()["colors"]["theme"]["light"]["primary"],
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: KTApp.getSettings()["colors"]["gray"]["gray-500"],
            fontSize: "12px",
            fontFamily: KTApp.getSettings()["font-family"],
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: KTApp.getSettings()["font-family"],
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
      },
      colors: [
        KTApp.getSettings()["colors"]["theme"]["light"]["primary"],
        KTApp.getSettings()["colors"]["theme"]["light"]["success"],
      ],
      grid: {
        borderColor: KTApp.getSettings()["colors"]["gray"]["gray-200"],
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      markers: {
        colors: [
          KTApp.getSettings()["colors"]["theme"]["light"]["primary"],
          KTApp.getSettings()["colors"]["theme"]["light"]["success"],
        ],
        strokeColor: [
          KTApp.getSettings()["colors"]["theme"]["light"]["primary"],
          KTApp.getSettings()["colors"]["theme"]["light"]["success"],
        ],
        strokeWidth: 3,
      },
    };

    var chart = new ApexCharts(element, options);
    chart.render();
  };

  // Public functions
  return {
    init: function () {
      // Init Daterangepicker
      _daterangepickerInit();

      // Init Stats Widgets
      _initStatsWidget2_1();
      _initStatsWidget2_2();
      _initStatsWidget3();
      _initStatsWidget4();
      _initStatsWidget5();
      _initStatsWidget6();
      _initStatsWidget7();

      // Init MIxed Widgets
      _initMixedWidget3();
      _initMixedWidget4();
      _initMixedWidget5();

      // Init Charts Widgets
      _initChartsWidget1();
      _initChartsWidget2();
      _initChartsWidget3();
      _initChartsWidget4();
    },
  };
})();

// Webpack support
if (typeof module !== "undefined") {
  module.exports = KTWidgets;
}

jQuery(document).ready(function () {
  KTWidgets.init();
});
