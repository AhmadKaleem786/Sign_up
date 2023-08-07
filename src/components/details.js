import { useDispatch, useSelector } from "react-redux";
import { handleSubmit } from "../features/detail/detailSlice";

const Details = () => {
    const dispatch = useDispatch();

    return(
        <>
        <form >
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        First name
                    </label>
                    <input type="text" 
                    id="first_name" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div>
                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Last name
                    </label>
                    <input type="text" 
                    id="last_name" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div>
                    <label for="mobile_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Mobile Number
                    </label>
                    <input type="text" 
                    id="mobile_number" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div>
                    <label for="position" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Position
                    </label>
                    <input type="text" 
                    id="position" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div>
                    <label for="account_type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Account Type
                    </label>
                    <select type="text" 
                    id="account_type" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="Supplier">Supplier</option>
                        <option value="Purchaser">Purchaser</option>
                        <option value="Buyer">Buyer</option>
                    </select>
                </div>

                <div>
                    <label for="company_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Company Name
                    </label>
                    <input type="text" 
                    id="company_name" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div>
                    <label for="company_abn" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Company ABN
                    </label>
                    <input type="text" 
                    id="company_abn" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div>
                    <label for="industry" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Industry
                    </label>
                    <select type="text" 
                    id="industry" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="Type A">Type A</option>
                        <option value="Type B">Type B</option>
                        <option value="Type C">Type C</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label for="other" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Other
                    </label>
                    <input type="text" 
                    id="other" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>

                <div>
                    <label for="company_phone_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Company Phone Number
                    </label>
                    <input type="text" 
                    id="company_phone_number" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div>
                    <label for="company_address_1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Company Address 1
                    </label>
                    <input type="text" 
                    id="company_address_1" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div>
                    <label for="company_address_2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Company Address 2
                    </label>
                    <input type="text" 
                    id="company_address_2" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div>
                    <label for="postcode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Postcode
                    </label>
                    <input type="text" 
                    id="postcode" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div>
                    <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        City
                    </label>
                    <input type="text" 
                    id="city" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div>
                    <label for="states" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        State
                    </label>
                    <select type="text" 
                    id="states" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="South Australia">South Australia</option>
                        <option value="North Australia">North Australia</option>
                        <option value="West Australia">West Australia</option>
                    </select>
                </div>

                <div>
                    <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Country
                    </label>
                    <select type="text" 
                    id="country" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="Australia">Australia</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="England">England</option>
                    </select>
                </div>
            </div>

            <button type="button" 
            onClick={()=>dispatch(handleSubmit())}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Submit
            </button>
        </form>
        </>
    )
}

export default Details;