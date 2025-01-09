import { Link, useLocation } from "react-router-dom";
import '@styles/Breadcrumb.css'

const Breadcrumb = () => {
  const { pathname } = useLocation();
  // Could probably make this simpler by just extracting the index of the "/" and slicing accordingly 
  const paths = pathname
  .split("/")
  .slice(1)
  .filter((val) => !!val) // filter empty strings
  .map((val, idx, arr) => { // get appropriate path for each subpath
    if (idx > 0) {
      let acc = '';
      for (let i = 0; i < idx; i++) {
        acc += "/" + arr[i];
      }
      return acc + "/" + val;
    } else {
      return "/" + val;
    }
  });

  return (
    <div className="breadcrumb">
      {/* First breadcrumb will always be home */}
      <Link to={"/"}><h4>Home &gt;&nbsp;</h4></Link>
      
      {paths.map((link, idx) => {
        const name = link.split("/").pop();
        if (idx == paths.length - 1) {
          return <h4>{name![0].toLocaleUpperCase() + name!.slice(1)}</h4>
        }

        return ( 
          <Link to={link} key={idx}>
            <h4>
              {name![0].toLocaleUpperCase() + name!.slice(1)}
              &nbsp;
              {">"}
              &nbsp;
            </h4>
          </Link>
        )
      })}
    </div>
  )
}

export default Breadcrumb;