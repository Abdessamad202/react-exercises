export default function Product(params) {
  const products = [
    {
      id: 1,
      title: "PC Portable Gamer HP VICTUS",
      price: "7490 DH",
      thumbnail: "https://www.cdiscount.com/pdt2/9/5/9/1/700x700/hua6901443442959/rw/pc-portable-huawei-matebook-b3-410-14-fhd-c.jpg",
    },
    {
      id: 2,
      title: "PC Portable Gamer HP VICTUS",
      price: "2190 DH",
      thumbnail: "https://www.cdiscount.com/pdt2/3/e/a/1/700x700/hp14424u3ea/rw/pc-portable-hp-14s-dq0045nf-14-hd-intel-celer.jpg",
    },
    {
      id: 3,
      title: "Pc Portable Chromebook Acer",
      price: "3640 DH",
      thumbnail: "https://yo-crypto.com/wp-content/uploads/2023/10/NXATHEF002.jpg",
    },
    {
      id: 4,
      title: "PC Portable - HUAWEI",
      price: "1270 DH",
      thumbnail: "https://www.cdiscount.com/pdt2/9/5/9/1/700x700/hua6901443442959/rw/pc-portable-huawei-matebook-b3-410-14-fhd-c.jpg",
    },
  ];
  return <>
  <div className="container my-4">
    <div className="row">
      <div className="col-md-3 mb-4" >
        <div className="card">
          <img
          src={ products[0].thumbnail }
          className="card-img-top" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{ products[0].title }</h5>
            <p className="card-text">{products[0].price}</p>
            <a href="link" className="btn btn-primary" >Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
}