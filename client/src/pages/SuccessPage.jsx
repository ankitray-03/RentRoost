import { useParams } from "react-router-dom";

const SuccessPage = () => {
  const params = useParams();
  return (
    <div className="mx-[40%] my-[10%]">
      <h1 className="mb-3 text-2xl text-green-500">Payment Successfull !</h1>
      <div className=" bg-slate-300 p-3 border rounded-lg">
        Order Id = {params.orderId}
        <br />
        Payment Id = {params.paymentId}
      </div>
      <p className="mt-4 font-light text-slate-500">
        Please keep it for future, sent to your email id already !
      </p>

      <button
        className="mt-4 ml-[30%] bg-blue-500 text-white px-2 py-1 rounded-lg"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        {" "}
        Back to home
      </button>
    </div>
  );
};

export default SuccessPage;
