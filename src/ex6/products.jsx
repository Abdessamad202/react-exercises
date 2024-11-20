export default function Products(params) {
  const products = [
    {
      id: 1,
      title: "PC Portable Gamer HP VICTUS",
      price: "7490 DH",
      thumbnail: "https://www.cdiscount.com/pdt2/5/n/f/1/700x700/hp16d0195nf/rw/pc-portable-gamer-hp-victus-16-d0195nf-16-1-fhd.jpg",
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
        {products.map(element => {
          return <div className="col-md-3 mb-4" >
            <div className="card">
              <img
                src={element.thumbnail}
                className="card-img-top" alt="" />
              <div className="card-body">
                <h6 className="card-title fs-14">{element.title}</h6>
                <p className="card-text">{element.price}</p>
                <a href="link" className="btn btn-primary" >Add to Cart</a>
              </div>
            </div>
          </div>

        })}
      </div>
    </div>
  </>
}