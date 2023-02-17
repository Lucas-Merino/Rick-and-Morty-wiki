import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';


const Pagination = ({ setPageNumber, pageNumber, info }) => {
  let [width, setWidth] = useState(window.innerWidth)

  let updateDimension = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() =>{
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension)
  }, []);

  return (
    <>
      
      <style jsx="true">
        {`
          @media (max-width: 768px){
            .next, .prev{
              display: none
            }
            .pagination {
              font-size: 14px
            }
          }
        `}
      </style>
      <ReactPaginate 
        pageCount={info?.pages}
        className='pagination justify-content-center gap-4 my-4'
        nextLabel="Next"
        previousLabel="Prev"
        pageLinkClassName='page-link'
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageClassName='page-item'
        nextLinkClassName="btn btn-primary next"s
        previousLinkClassName="btn btn-primary prev"
        onPageChange={data => setPageNumber(data.selected + 1)}
        activeclassname="active"
        forcePage={pageNumber===1 ? 0 : pageNumber-1 }
      />
      
    </>
  )
}

export default Pagination
