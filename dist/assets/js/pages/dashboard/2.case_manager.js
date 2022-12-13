axios
  .get("./assets/data/case_manager.json")
  .then((res) => {
    // 取得 json 資料
    let getCase_manager = res.data.case_manager;
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
    let getid_local_total_states = document.querySelector(
      "#local_total_states"
    );
    getid_local_total_states.innerHTML = "共 " + local_total_states + " 件";
    let getid_sub_total_states = document.querySelector("#sub_total_states");
    getid_sub_total_states.innerHTML = "共 " + sub_total_states + " 件";
    let getid_local_total_early_warning = document.querySelector(
      "#local_total_early_warning"
    );
    getid_local_total_early_warning.innerHTML =
      "共 " + local_total_early_warning + " 件";
    let getid_sub_total_early_warning = document.querySelector(
      "#sub_total_early_warning"
    );
    getid_sub_total_early_warning.innerHTML =
      "共 " + sub_total_early_warning + " 件";
    // 取得 tag 並填入 dom :個別案件數
    // 地方 - 待審
    let getid_local_recycle_states_tab =
      document.querySelector("#kt_tab_mixed_1_1");
    let getid_local_deal_states_tab =
      document.querySelector("#kt_tab_mixed_1_2");
    getid_local_recycle_states_tab.innerHTML = `
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center justify-content-start">
        <a href="#" class="label label-light-secondary mr-3 label-case">
          NEW
        </a>
        <a href="https://rrms2.eri.com.tw/DNC/Factory_Data/Verify_Search?tp=1"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">新登記</a>
      </div>
      <div class="d-flex align-items-center">
        ${getCase_manager[0].states.new}
      </div>
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
      <a href="#" class="label label-light-secondary mr-3 label-case">
          CHANGE
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">變更登記</a>
      </div>
      <div class="d-flex align-items-center">
        ${getCase_manager[0].states.change}
      </div>
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
      <a href="#" class="label label-light-secondary mr-3 label-case">
          EXTEND
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">展延登記</a>
      </div>
      <div class="d-flex align-items-center">
        ${getCase_manager[0].states.extend}
      </div>
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
      <a href="#" class="label label-light-secondary mr-3 label-case">
        REVIEW
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">申請覆核</a>
      </div>
      <div class="d-flex align-items-center">
        ${getCase_manager[0].states.review}
      </div>
    </div>
    <!--end::Item-->
    `;
    getid_local_deal_states_tab.innerHTML = `
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
      <a href="#" class="label label-light-secondary mr-3 label-case">
      NEW
    </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">新登記</a>
      </div>
      <div class="d-flex align-items-center">
        ${getCase_manager[1].states.new}
      </div>
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
      <a href="#" class="label label-light-secondary mr-3 label-case">
      CHANGE
    </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">變更登記</a>
      </div>
      <div class="d-flex align-items-center">
      ${getCase_manager[1].states.change}
      </div>
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
      <a href="#" class="label label-light-secondary mr-3 label-case">
         EXTEND
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">展延登記</a>
      </div>
      <div class="d-flex align-items-center">
        ${getCase_manager[1].states.extend}
      </div>
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
      <a href="#" class="label label-light-secondary mr-3 label-case">
        REVIEW
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">申請覆核</a>
      </div>
      <div class="d-flex align-items-center">${getCase_manager[1].states.review}</div>
    </div>
    <!--end::Item-->
    `;
    // 地方 - 審查天數預警
    let getid_local_recycle_early_warning_tab =
      document.querySelector("#kt_tab_mixed_2_1");
    let getid_local_deal_early_warning_tab =
      document.querySelector("#kt_tab_mixed_2_2");
    getid_local_recycle_early_warning_tab.innerHTML = `
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-danger pulse pulse-danger mr-3">
          <i class="flaticon2-information"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">已逾期案件</a>
      </div>
      <!--begin::pulse-ring-->
      <span class="label label-xl pulse pulse-danger mr-0">
        <span class="position-relative">${getCase_manager[0].early_warning.expire}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-warning pulse pulse-warning mr-3">
          <i class="flaticon2-bell-5"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">7日內逾期案件</a>
      </div>
      <!--begin::pulse-ring-->
      <span class="label label-xl pulse pulse-warning mr-0">
        <span class="position-relative">${getCase_manager[0].early_warning.day7_to_0}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-success pulse pulse-success mr-3">
          <i class="flaticon2-bell-5"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">8~14日逾期案件</a>
      </div>
      <!--begin::pulse-ring-->
      <span class="label label-xl pulse pulse-success mr-0">
        <span class="position-relative">${getCase_manager[0].early_warning.day8_to_14}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-primary pulse pulse-primary mr-3">
          <i class="flaticon2-protected"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">15~30日逾期案件</a>
      </div>
      <!--begin::pulse-ring-->
      <span class="label label-xl pulse pulse-primary mr-0">
        <span class="position-relative">${getCase_manager[0].early_warning.day15_to_30}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    `;
    getid_local_deal_early_warning_tab.innerHTML = `
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-danger pulse pulse-danger mr-3">
          <i class="flaticon2-information"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">已逾期案件</a>
      </div>
      <!--begin::pulse-ring-->
      <span class="label label-xl pulse pulse-danger mr-0">
        <span class="position-relative">${getCase_manager[1].early_warning.expire}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-warning pulse pulse-warning mr-3">
          <i class="flaticon2-bell-5"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">7日內逾期案件</a>
      </div>
      <!--begin::pulse-ring-->
      <span class="label label-xl pulse pulse-warning mr-0">
        <span class="position-relative">${getCase_manager[1].early_warning.day7_to_0}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-success pulse pulse-success mr-3">
          <i class="flaticon2-bell-5"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">8~14日逾期案件</a>
      </div>
      <!--begin::pulse-ring-->
      <span class="label label-xl pulse pulse-success mr-0">
        <span class="position-relative">${getCase_manager[1].early_warning.day8_to_14}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-primary pulse pulse-primary mr-3">
          <i class="flaticon2-protected"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">15~30日逾期案件</a>
      </div>
      <!--begin::pulse-ring-->
      <span class="label label-xl pulse pulse-primary mr-0">
        <span class="position-relative">${getCase_manager[1].early_warning.day15_to_30}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    `;
    // 受補貼 - 待審
    let getid_sub_recycle_states_tab =
      document.querySelector("#kt_tab_mixed_3_1");
    let getid_sub_deal_states_tab = document.querySelector("#kt_tab_mixed_3_2");
    getid_sub_recycle_states_tab.innerHTML = `
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
      <a href="#" class="label label-light-secondary mr-3 label-case">
          NEW
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">新登記</a>
      </div>
      <div class="d-flex align-items-center">
        ${getCase_manager[2].states.new}
      </div>
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
      <a href="#" class="label label-light-secondary mr-3 label-case">
          CHANGE
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">變更登記</a>
      </div>
      <div class="d-flex align-items-center">${getCase_manager[2].states.change}</div>
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
      <a href="#" class="label label-light-secondary mr-3 label-case">
          EXTEND
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">展延登記</a>
      </div>
      <div class="d-flex align-items-center">${getCase_manager[2].states.extend}</div>
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
      <a href="#" class="label label-light-secondary mr-3 label-case">
          REVIEW
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">申請覆核</a>
      </div>
      <div class="d-flex align-items-center">${getCase_manager[2].states.review}</div>
    </div>
    <!--end::Item-->
    `;
    getid_sub_deal_states_tab.innerHTML = `
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
      <a href="#" class="label label-light-secondary mr-3 label-case">
          NEW
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">新登記</a>
      </div>
      <div class="d-flex align-items-center">${getCase_manager[3].states.new}</div>
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
      <a href="#" class="label label-light-secondary mr-3 label-case">CHANGE</a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">變更登記</a>
      </div>
      <div class="d-flex align-items-center">${getCase_manager[3].states.change}</div>
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
      <a href="#" class="label label-light-secondary mr-3 label-case">
          EXTEND
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">展延登記</a>
      </div>
      <div class="d-flex align-items-center">${getCase_manager[3].states.extend}</div>
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
      <a href="#" class="label label-light-secondary mr-3 label-case">
          REVIEW
        </a>
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">申請覆核</a>
      </div>
      <div class="d-flex align-items-center">${getCase_manager[3].states.review}</div>
    </div>
    <!--end::Item-->
    `;
    // 受補貼 - 審查天數預警
    let getid_sub_recycle_early_warning_tab =
      document.querySelector("#kt_tab_mixed_4_1");
    let getid_sub_deal_early_warning_tab =
      document.querySelector("#kt_tab_mixed_4_2");
    getid_sub_recycle_early_warning_tab.innerHTML = `
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-danger pulse pulse-danger mr-3">
          <i class="flaticon2-information"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">已逾期案件</a>
      </div>
      <!--begin::pulse-ring-->
      <span class="label label-xl pulse pulse-danger mr-0">
        <span class="position-relative">${getCase_manager[2].early_warning.expire}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-warning pulse pulse-warning mr-3">
          <i class="flaticon2-bell-5"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">7日內逾期案件</a>
      </div>
      <!--begin::pulse-ring-->
      <span class="label label-xl pulse pulse-warning mr-0">
        <span class="position-relative">${getCase_manager[2].early_warning.day7_to_0}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-success pulse pulse-success mr-3">
          <i class="flaticon2-bell-5"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">8~14日逾期案件</a>
      </div>
      <!--begin::pulse-ring-->
      <span class="label label-xl pulse pulse-success mr-0">
        <span class="position-relative">${getCase_manager[2].early_warning.day8_to_14}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-primary pulse pulse-primary mr-3">
          <i class="flaticon2-protected"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">15~30日逾期案件</a>
      </div>
      <!--begin::pulse-ring-->
      <span class="label label-xl pulse pulse-primary mr-0">
        <span class="position-relative">${getCase_manager[2].early_warning.day15_to_30}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    `;
    getid_sub_deal_early_warning_tab.innerHTML = `
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-danger pulse pulse-danger mr-3">
          <i class="flaticon2-information"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">已逾期案件</a>
      </div>
      <!--begin::pulse-ring-->
      <span class="label label-xl pulse pulse-danger mr-0">
        <span class="position-relative">${getCase_manager[3].early_warning.expire}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-warning pulse pulse-warning mr-3">
          <i class="flaticon2-bell-5"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">7日內逾期案件</a>
      </div>
      <!--begin::pulse-ring-->
      <span class="label label-xl pulse pulse-warning mr-0">
        <span class="position-relative">${getCase_manager[3].early_warning.day7_to_0}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-success pulse pulse-success mr-3">
          <i class="flaticon2-bell-5"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">8~14日逾期案件</a>
      </div>
      <!--begin::pulse-ring-->
      <span class="label label-xl pulse pulse-success mr-0">
        <span class="position-relative">${getCase_manager[3].early_warning.day8_to_14}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    <div class="d-flex align-items-center justify-content-between mb-6">
      <div class="d-flex align-items-center">
        <!--begin::未審案件提醒圖標-->
        <a href="#" class="btn btn-icon btn-light-primary pulse pulse-primary mr-3">
          <i class="flaticon2-protected"></i>
          <span class="pulse-ring"></span>
        </a>
        <!--end::未審案件提醒圖標-->
        <a href="#"
          class="text-dark-75 text-hover-primary mb-1 font-weight-bolder">15~30日逾期案件</a>
      </div>
      <!--begin::pulse-ring-->
      <span class="label label-xl pulse pulse-primary mr-0">
        <span class="position-relative">${getCase_manager[3].early_warning.day15_to_30}</span>
        <span class="pulse-ring"></span>
      </span>
      <!--end::pulse-ring-->
    </div>
    <!--end::Item-->
    `;
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("finally");
  });
