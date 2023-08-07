import { useSelector, useDispatch } from "react-redux"
import { page55 } from "../features/pagetoggle/pageSlice";

const Review = () => {
    const dispatch = useDispatch();
    const {FirstName, LastName, Mobile, Position, CompanyName, CompanyABN, Industry
    , Other, CompanyNumber, Address1, Address2, PostCode, City, State, Country} = useSelector((store)=>store.detail);
    const {barcode} = useSelector((store)=>store.yourcompany);
    const {pcard} = useSelector((store)=>store.payment);

    return(
        <div>
            <p class="text-2xl mt-4 text-black-800 font-medium">Details</p>
            <div class='space-x-4'>
                <p class="text-base block text-sm text-black-600" />
                <p class="text-base block text-sm text-black-600">{FirstName + ' ' + LastName}</p>
                <p class="text-base block text-sm text-black-600">{Mobile}</p>
                <p class="text-base block text-sm text-black-600">{Position}</p>
                <p class="text-base block text-sm text-black-600">{CompanyName}</p>
                <p class="text-base block text-sm text-black-600">{CompanyABN}</p>
                <p class="text-base block text-sm text-black-600">Industry: {Industry}</p>
                <p class="text-base block text-sm text-black-600">Company Phone Number: {CompanyNumber}</p>
                <p class="text-base block text-sm text-black-600">Company Address 1: {Address1}</p>
                <p class="text-base block text-sm text-black-600">Company Address 2: {Address2}</p>
                <p class="text-base block text-sm text-black-600">Postcode: {PostCode}</p>
                <p class="text-base block text-sm text-black-600">City: {City}</p>
                <p class="text-base block text-sm text-black-600">State: {State}</p>
                <p class="text-base block text-sm text-black-600">Country: {Country}</p><br />
            </div>

            <p class="text-2xl mt-4 text-black-800 font-medium">Your Company</p>
            <div class='space-x-4'>
                <p class="text-base block text-sm text-black-600" />
                <p class="text-base block text-sm text-black-600">{barcode}</p><br />
            </div>

            <p class="text-2xl mt-4 text-black-800 font-medium">Payment</p>
            <div class='space-x-4'>
                <p class="text-base block text-sm text-black-600" />
                <p class="text-base block text-sm text-black-600">Visa Card - {pcard}</p><br />
            </div>

            <div class="flex items-center mb-4">
                <input id="check_box" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="check_box" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I confirm I have read the above Terms and Conditions </label>
            </div>

            <div class="mt-4">
                <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="button" 
                onClick={()=>{
                    if (document.getElementById("check_box").checked){
                        dispatch(page55());
                    }
                }}
                >Submit</button>
            </div>



        </div>
    )
}

export default Review;