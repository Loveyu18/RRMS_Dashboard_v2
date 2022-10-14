axios
  .get("./assets/data/exception_notification.json")
  .then((res) => {
    let exception_notification_1 = res.data.exception_notification[0].total;
    let exception_notification_2 = res.data.exception_notification[1].total;
    let get_exception_notification_1 = document.querySelector(
      "#get_exception_notification_1"
    );
    let get_exception_notification_2 = document.querySelector(
      "#get_exception_notification_2"
    );
    get_exception_notification_1.innerHTML += exception_notification_1;
    get_exception_notification_2.innerHTML += exception_notification_2;
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("finally");
  });
