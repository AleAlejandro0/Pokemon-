const Pagination = ({postsPerPage, totalPosts, paginate, currentPage, setCurrentPage, 
  pageNumberLimit, maxPageNumberLimit, setmaxPageNumberLimit, minPageNumberLimit, setminPageNumberLimit}) => {
  
 const pageNumbers = [];

 for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
   pageNumbers.push(i);
 }

// Handle next page 
 const handleNext = () => {
  setCurrentPage(currentPage + 1)
   
  if(currentPage + 1 > maxPageNumberLimit ){
    setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
    setminPageNumberLimit(minPageNumberLimit + pageNumberLimit ) 
  }
 }
// Hangle previous page
 const handlePrevious = () => {
  setCurrentPage(currentPage - 1)

  if((currentPage - 1) % pageNumberLimit == 0 ){
    setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
    setminPageNumberLimit(minPageNumberLimit - pageNumberLimit ) 
  }
 }

  return (
     <nav className='pagination__nav'>
      <ul className='pagination__list '>
        <button className='pagination__btn1' onClick={handlePrevious} disabled={ currentPage == pageNumbers[0] ? true : false }>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
          {pageNumbers.map(number => {
            if(number < maxPageNumberLimit + 1 && number > minPageNumberLimit){
              return(
               <li onClick={() => paginate(number)} className='pagination__item' key={number}>
                 <a className={ number == currentPage ? 'active' : '' }>
                   {number}
                 </a> 
               </li>
              )}else{
                return null
              }
          })}
        <button className='pagination__btn2' onClick={handleNext} disabled={ currentPage == pageNumbers.length ? true : false }>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </ul>
     </nav>
  )
}

export default Pagination