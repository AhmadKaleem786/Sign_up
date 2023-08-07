import { useDispatch, useSelector } from "react-redux";
import { handlepmesaage, handlenext, handlepreset } from "../features/payment/paymentSlice";
import { page44 } from "../features/pagetoggle/pageSlice";

const Payment = () =>{
    const dispatch = useDispatch();
    const { pmessage } = useSelector((store)=>store.payment);
    return(
<div class="leading-loose">
  <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
    <p class="text-gray-800 font-medium">Contact info</p>
    <div class="mt-2">
      <input class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Email" />
    </div>

    <div class="mt-2">
        <p class="text-gray-800 font-medium">Shipping</p>
        <label class="block text-sm text-gray-600" for="cus_name">Name</label>
        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" />
    </div>

    <div class="mt-2">
        <label class="block text-sm text-gray-600" for="cus_country">Country or region</label>
        <select class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_country" name="cus_country" type="text" required="">
            <option value="United States">United States</option>
            <option value="Australia">Australia</option>
            <option value="England">England</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Pakistan">Pakistan</option>
        </select>
    </div>

    <div class="mt-2">
      <label class="block text-sm text-gray-600" for="cus_address1">Address line 1</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_address1" name="cus_address1" type="text" required="" placeholder="Enter the shipping Address" />
    </div>

    <p class="mt-4 text-gray-800 font-medium">Payment</p>
    <div class="">
        <label class="block text-sm text-gray-600" for="cus_card">Card Number</label>
        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_card" name="cus_card" type="text" required="" placeholder="1234 1234 1234 1234" />
    </div>

    <div class="inline-block mt-2 w-1/2 pr-1">
        <label class="block text-sm text-gray-600" for="cus_expiry">Expiry</label>
        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_expiry" name="cus_expiry" type="text" required="" placeholder="MM/YY" />
    </div>

    <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
        <label class="block text-sm text-gray-600" for="cus_cvc">CVC</label>
        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_cvc"  name="cus_cvc" type="text" required="" placeholder="CVC" />
    </div>

    <div class="flex  justify-between">
    <div class="mt-4">
      <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="button"
      onClick={()=>{
        if (document.getElementById("cus_email").value === '' || document.getElementById("cus_name").value === ''
        || document.getElementById("cus_country").value === '' || document.getElementById("cus_address1").value === ''
        || document.getElementById("cus_card").value === '' || document.getElementById("cus_expiry").value === ''
        || document.getElementById("cus_cvc").value === ''){
            dispatch(handlepmesaage());
        }
        else{
            dispatch(handlenext());
            dispatch(page44());
        }
      }}
      >Next</button>
    </div>

    <div class="mt-4">
      <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="button" onClick={()=>dispatch(handlepreset())}>Reset</button>
    </div>
    </div>
    <div class="block text-sm text-red-600">
        {pmessage}
    </div>
  </form>
</div>
    )
}

export default Payment;