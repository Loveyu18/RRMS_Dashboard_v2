$("#alertDownload").click((e) => {
  Swal.fire({
    title: "<strong>下載查登王APP</strong>",
    html:
    '<a href="https://drive.google.com/file/d/1YvcM3IOPfHtxw-ND5cUIrBE6zlOWPYd4/view">點我下載</a>',
    imageUrl: "./assets/media/alertDownload/210412112932.svg",
    imageWidth: 300,
    imageHeight: 300,
    padding:'0rem',
    imageAlt: "下載查登王APP",
  });
});
