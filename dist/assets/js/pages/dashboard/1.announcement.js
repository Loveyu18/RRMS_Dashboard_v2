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
    <td> <span class="label label-xl label-inline label-light-success  font-weight-bold">
    ${get_system_data[0].date.year}/${get_system_data[0].date.month}/${get_system_data[0].date.day}
      </span></td>
    <td class="text-left">
    <span id="announcement_text">${get_system_data[0].content}</span>
    </td>
    <td>
      <span class="label label-xl label-inline label-light-gray-600 font-weight-bold">
      ${get_system_data[0].source}
      </span>
    </td>
  </tr>
  <tr>
    <th scope="row">${get_system_data[1].row}</th>
    <td> <span class="label label-xl label-inline label-light-success font-weight-bold">
        ${get_system_data[1].date.year}/${get_system_data[1].date.month}/${get_system_data[1].date.day}
      </span></td>
    <td class="text-left">
    <span id="announcement_text">${get_system_data[1].content}</span>
    </td>
    <td>
      <span class="label label-xl label-inline label-light-gray-600 font-weight-bold">
      ${get_system_data[1].source}
      </span>
    </td>
  </tr>
  <tr>
    <th scope="row">${get_system_data[2].row}</th>
    <td> <span class="label label-xl label-inline label-light-success font-weight-bold">
    ${get_system_data[2].date.year}/${get_system_data[2].date.month}/${get_system_data[2].date.day}
      </span></td>
    <td class="text-left">
    <span id="announcement_text">${get_system_data[2].content}</span>
    </td>
    <td>
      <span class="label label-xl label-inline label-light-gray-600 font-weight-bold">
      ${get_system_data[2].source}
      </span>
    </td>
  </tr>
  <tr>
    <th scope="row">${get_system_data[3].row}</th>
    <td> <span class="label label-xl label-inline label-light-success font-weight-bold">
    ${get_system_data[3].date.year}/${get_system_data[3].date.month}/${get_system_data[3].date.day}
      </span></td>
    <td class="text-left">
    <span id="announcement_text">${get_system_data[3].content}</span>
    </td>
    <td>
      <span class="label label-xl label-inline label-light-gray-600 font-weight-bold">
      ${get_system_data[3].source}
      </span>
    </td>
  </tr>
    `;
    system_announcement_2.innerHTML = `
    <tr>
    <th scope="row">${get_public_data[0].row}</th>
    <td> <span class="label label-xl label-inline label-light-primary font-weight-bold">
    ${get_public_data[0].date.year}/${get_public_data[0].date.month}/${get_public_data[0].date.day}
      </span></td>
    <td class="text-left">
    <span id="announcement_text">${get_public_data[0].content}</span>
    </td>
    <td>
      <span class="label label-xl label-inline label-light-gray-600 font-weight-bold">
      ${get_public_data[0].source}
      </span>
    </td>
  </tr>
    <tr>
    <th scope="row">${get_public_data[1].row}</th>
    <td> <span class="label label-xl label-inline label-light-primary font-weight-bold">
    ${get_public_data[1].date.year}/${get_public_data[1].date.month}/${get_public_data[1].date.day}
      </span></td>
    <td class="text-left">
    <span id="announcement_text">${get_public_data[1].content}</span>
    </td>
    <td>
      <span class="label label-xl label-inline label-light-gray-600 font-weight-bold">
      ${get_public_data[1].source}
      </span>
    </td>
  </tr>
    <tr>
    <th scope="row">${get_public_data[2].row}</th>
    <td> <span class="label label-xl label-inline label-light-primary font-weight-bold">
    ${get_public_data[2].date.year}/${get_public_data[2].date.month}/${get_public_data[2].date.day}
      </span></td>
    <td class="text-left">
    <span id="announcement_text">${get_public_data[2].content}</span>
    </td>
    <td>
      <span class="label label-xl label-inline label-light-gray-600 font-weight-bold">
      ${get_public_data[2].source}
      </span>
    </td>
  </tr>
    <tr>
    <th scope="row">${get_public_data[3].row}</th>
    <td> <span class="label label-xl label-inline label-light-primary font-weight-bold">
    ${get_public_data[3].date.year}/${get_public_data[3].date.month}/${get_public_data[3].date.day}
      </span></td>
    <td class="text-left">
    <span id="announcement_text">${get_public_data[3].content}</span>
    </td>
    <td>
      <span class="label label-xl label-inline label-light-gray-600 font-weight-bold">
      ${get_public_data[3].source}
      </span>
    </td>
  </tr>
  
    `;

    // begin:: 判斷超過 35 字元，斷句變 ...more
    const len = 20;
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