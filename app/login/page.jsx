import { CiUser, CiLock } from "react-icons/ci";
import Input from "../_components/Input";
import Select from "../_components/Select";
import PasswordInput from "../_components/PasswordInput";

export default function page() {
  return (
    <div className="h-[100vh] bg-gray-200 flex flex-col items-center justify-center">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-7xl font-serif uppercase font-bold text-blue-600">
          BIET
        </h1>
        <p className="text-6xl font-serif uppercase font-bold text-gray-900 mt-2">
          Hostel
        </p>
        <p className="mt-4 text-xl font-serif text-gray-700">
          Davangere campus
        </p>
      </div>
      <form className="mt-[2rem] flex flex-col gap-4">
        <div className="px-3 py-2 items-center gap-1 rounded-md flex flex-row bg-gray-100">
          <Select />
        </div>
        <div className="px-3 py-2 items-center gap-1 rounded-md flex flex-row bg-gray-100">
          <CiUser className="text-xl text-gray-800" />
          <Input type={"text"} placeholder={"Email"} />
        </div>
        <div className="px-3 py-2 items-center gap-1 rounded-md flex flex-row bg-gray-100">
          <CiLock className="text-xl text-gray-800" />
          <PasswordInput type={"password"} placeholder={"Password"} />
        </div>

        <div className="mt-2">
          <button
            className="bg-blue-600 font-bold hover:bg-blue-500  transition-all duration-300 text-gray-200 w-full py-2 rounded-md"
            type="submit"
          >
            Sign in
          </button>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <p className="text-xs">Forgot your password?</p>
          <p className="text-sm">
            Copyright ©2024 Bapuji Institute Of Engneering And Technology,
            Davangere
          </p>
        </div>
      </form>
    </div>
  );
}
