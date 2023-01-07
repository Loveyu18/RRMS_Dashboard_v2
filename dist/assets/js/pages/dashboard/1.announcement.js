axios
  .get("./assets/data/announcement.json")
  .then((res) => {
    createDomElement_system(
      res.data.system_announcement,
      "system_announcement",
      4
    );
    createDomElement_public(
      res.data.public_announcement,
      "public_announcement",
      4
    );

    function createDomElement_system(charge, elementName, limit = 0) {
      if (limit > 0) {
        charge = charge.filter((item, index) => index < limit);
      }
      let domElements_system = charge
        .map((item, index) => {
          return `
        <tr>
            <th scope="row">${index + 1}</th>
              <td> 
                <span class="label label-inline label-light-success font-weight-bold">${
                  item.date
                }</span>
              </td>
              <td class="text-left" id="announcement_text">${item.content}</td>
              <td>
                <span class="label label-lg label-inline label-light-primary font-weight-bold author">${
                  item.author
                }</span>
              </td>
        </tr>
      `;
        })
        .join("");
      const system_announcement = document.querySelector(
        ".system_announcement"
      );
      system_announcement.innerHTML = domElements_system;
    }

    function createDomElement_public(charge, elementName, limit = 0) {
      if (limit > 0) {
        charge = charge.filter((item, index) => index < limit);
      }
      let domElements_public = charge
        .map((item, index) => {
          return `
        <tr>
            <th scope="row">${index + 1}</th>
              <td> 
                <span class="label label-inline label-light-success font-weight-bold">${
                  item.date
                }</span>
              </td>
              <td class="text-left" id="announcement_text">${item.content}</td>
              <td>
                <span class="label label-lg label-inline label-light-primary font-weight-bold author">${
                  item.author
                }</span>
              </td>
        </tr>
      `;
        })
        .join("");
      const public_announcement = document.querySelector(
        ".public_announcement"
      );
      public_announcement.innerHTML = domElements_public;

      
    }

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
