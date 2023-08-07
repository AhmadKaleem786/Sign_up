import { useSelector, useDispatch } from "react-redux";

const Tabss = () => {

    const { page1, page2, page3, page4 } = useSelector((store)=>store.page)
    let load = "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500";
    let unload = "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
    return (
      <div>
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
              <li class="mr-2">
                  <a href="#" class= {(page1)?load:unload}>Details</a>
              </li>
              <li class="mr-2">
                  <a href="#" class={(page2)?load:unload}>Your Company</a>
              </li>
              <li class="mr-2">
                  <a href="#" class={(page3)?load:unload}>Payment</a>
              </li>
              <li class="mr-2">
                  <a href="#" class={(page4)?load:unload}>Review</a>
              </li>
          </ul>
      </div>
    )
  }
  
  export default Tabss;