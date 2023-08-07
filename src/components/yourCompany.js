import { useDispatch, useSelector } from "react-redux";
import { handlebarcheck, handlebarcode, handlecheck, handlereset } from "../features/yourCompany/yourCompanySlice";
import { page33 } from "../features/pagetoggle/pageSlice";

const YourCompany = () =>{
    const dispatch = useDispatch();
    const {barcode, message} = useSelector((store)=>store.yourcompany);
    return(
        <>
            <form >
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Enter the barcode from one of your products
                        </label>
                        <input type="text" 
                        id="barcode" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                </div>
                <button type="button" 
                onClick={()=>dispatch(handlebarcode())}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Search
                </button>
                <div class="text-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    <br />
                    {barcode}
                    <br />
                </div>
            </form>

            <div class="flex items-center mb-4">
                <input id="checkbox" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I confirm that I am associated with the company above and authorised to act upon behalf of the company.</label>
            </div>
            <button type="button" 
                onClick={()=>{
                    if(barcode !== ''){
                        if(document.getElementById("checkbox").checked){
                            dispatch(page33())
                        }
                        else{
                            dispatch(handlecheck());
                        }
                    }
                    else{
                        dispatch(handlebarcheck());
                    }
                }}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Next
            </button>
            {'  '}
            <button type="button" 
                onClick={()=>dispatch(handlereset())}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Reset
            </button>
            <br /><br />
            <div class="block mb-2 text-sm font-medium text-red-900 dark:text-white">
                {message}
            </div>
        </>
    )
}

export default YourCompany;